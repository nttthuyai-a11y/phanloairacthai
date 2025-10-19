import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { Prediction } from './types';
import { TM_MODEL_URL } from './constants';
import Report from './components/Report';
import Header from './components/Header';
import InputOptions from './components/InputOptions';
import ClassificationArea from './components/ClassificationArea';
import Settings from './components/Settings';

// Declare teachablemachine on the window object for TypeScript
declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        tmImage: any;
    }
}

const App: React.FC = () => {
    const [model, setModel] = useState<any>(null);
    const [predictions, setPredictions] = useState<Prediction[]>([]);
    const [confidenceThreshold, setConfidenceThreshold] = useState<number>(80);
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [isWebcamRunning, setIsWebcamRunning] = useState<boolean>(false);
    const [isLoadingModel, setIsLoadingModel] = useState<boolean>(true);
    const [statusMessage, setStatusMessage] = useState<string>('Đang tải mô hình AI, vui lòng chờ...');

    const webcamRef = useRef<any>(null);
    const webcamContainerRef = useRef<HTMLDivElement>(null);
    // FIX: The useRef hook requires an initial value. The error message "Expected 1 arguments, but got 0"
    // likely refers to this line (previously line 29), even though the report mentioned line 30.
    // Initializing with `null` for consistency with other refs in the component.
    const animationFrameId = useRef<number | null>(null);
    const imageRef = useRef<HTMLImageElement>(null);


    const loadModel = useCallback(async () => {
        setIsLoadingModel(true);
        setStatusMessage('Đang tải mô hình AI, vui lòng chờ...');
        try {
            const modelURL = TM_MODEL_URL + "model.json";
            const metadataURL = TM_MODEL_URL + "metadata.json";
            const loadedModel = await window.tmImage.load(modelURL, metadataURL);
            setModel(loadedModel);
            setStatusMessage('Mô hình đã sẵn sàng! Bật webcam hoặc tải ảnh lên.');
        } catch (error) {
            console.error("Error loading model:", error);
            setStatusMessage('Lỗi khi tải mô hình. Vui lòng làm mới trang.');
        } finally {
            setIsLoadingModel(false);
        }
    }, []);

    useEffect(() => {
        loadModel();
    }, [loadModel]);

    const stopWebcam = useCallback(() => {
        if (webcamRef.current) {
            webcamRef.current.stop();
        }
        if (animationFrameId.current) {
            cancelAnimationFrame(animationFrameId.current);
        }
        setIsWebcamRunning(false);
        // Clear the canvas/video element from the container
        if (webcamContainerRef.current) {
            webcamContainerRef.current.innerHTML = '';
        }
    }, []);

    const predict = useCallback(async (element: HTMLVideoElement | HTMLImageElement) => {
        if (model && element) {
            const newPredictions = await model.predict(element);
            setPredictions(newPredictions);
        }
    }, [model]);

    const loop = useCallback(async () => {
        if (webcamRef.current) {
            webcamRef.current.update();
            await predict(webcamRef.current.canvas);
            animationFrameId.current = requestAnimationFrame(loop);
        }
    }, [predict]);

    const startWebcam = useCallback(async () => {
        if (isWebcamRunning) {
            stopWebcam();
            return;
        }
        setImageSrc(null); // Clear image preview
        setPredictions([]);
        
        const flip = true;
        const webcam = new window.tmImage.Webcam(400, 400, flip);
        await webcam.setup();
        await webcam.play();
        webcamRef.current = webcam;
        
        if (webcamContainerRef.current) {
            webcamContainerRef.current.innerHTML = ''; // Clear previous content
            webcamContainerRef.current.appendChild(webcam.canvas);
             // Style the canvas
            const canvas = webcamContainerRef.current.querySelector('canvas');
            if(canvas) {
                canvas.classList.add('rounded-lg', 'shadow-lg');
            }
        }
        setIsWebcamRunning(true);
        animationFrameId.current = requestAnimationFrame(loop);
    }, [isWebcamRunning, loop, stopWebcam]);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            stopWebcam();
            setPredictions([]);
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target?.result) {
                    setImageSrc(e.target.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };
    
    useEffect(() => {
        if (imageSrc && imageRef.current) {
            predict(imageRef.current);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imageSrc]);

    return (
        <div className="container mx-auto max-w-5xl p-4 md:p-8">
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10">
                <Header />
                
                <Settings 
                    confidenceThreshold={confidenceThreshold} 
                    onConfidenceChange={setConfidenceThreshold}
                />

                <InputOptions
                    isLoading={isLoadingModel}
                    isWebcamRunning={isWebcamRunning}
                    onStartWebcam={startWebcam}
                    onImageUpload={handleImageUpload}
                    statusMessage={statusMessage}
                />

                <ClassificationArea
                    imageSrc={imageSrc}
                    imageRef={imageRef}
                    webcamContainerRef={webcamContainerRef}
                    predictions={predictions}
                />
                
                <Report predictions={predictions} confidenceThreshold={confidenceThreshold} />
            </div>
        </div>
    );
};

export default App;