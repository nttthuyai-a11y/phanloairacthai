
import React from 'react';
import type { Prediction } from '../types';

interface ClassificationAreaProps {
    imageSrc: string | null;
    imageRef: React.RefObject<HTMLImageElement>;
    webcamContainerRef: React.RefObject<HTMLDivElement>;
    predictions: Prediction[];
}

const ProgressBar: React.FC<{ prediction: Prediction }> = ({ prediction }) => {
    const percentage = (prediction.probability * 100).toFixed(0);
    const barColor = prediction.probability > 0.8 ? 'bg-green-500' : prediction.probability > 0.5 ? 'bg-yellow-500' : 'bg-red-500';

    return (
        <div className="result-item mb-3">
            <span className="class-name font-poppins font-semibold text-gray-800 capitalize">{prediction.className}</span>
            <div className="progress-bar w-full bg-gray-200 rounded-full h-6 mt-1 overflow-hidden">
                <div
                    className={`bar h-6 rounded-full text-white text-right pr-2 flex items-center justify-end transition-all duration-500 ease-out ${barColor}`}
                    style={{ width: `${percentage}%` }}
                >
                   <span className="font-bold">{percentage}%</span>
                </div>
            </div>
        </div>
    );
};

const ClassificationArea: React.FC<ClassificationAreaProps> = ({ imageSrc, imageRef, webcamContainerRef, predictions }) => {
    const hasContent = imageSrc || webcamContainerRef.current?.hasChildNodes();

    return (
        <div className="classification-area flex flex-col md:flex-row justify-center items-start gap-8 mt-6 py-6 border-t-2 border-dashed border-gray-200">
            <div className="w-full md:w-1/2 flex justify-center items-center min-h-[400px] bg-gray-100 rounded-lg shadow-inner p-4">
                {imageSrc ? (
                    <img ref={imageRef} src={imageSrc} alt="Preview" className="max-w-full max-h-[400px] h-auto object-contain rounded-lg shadow-lg" />
                ) : (
                    <div ref={webcamContainerRef} id="webcam-container">
                        {!hasContent && (
                             <div className="text-center text-gray-500">
                                <p className="text-6xl mb-4">🖼️</p>
                                <p className="font-semibold">Webcam hoặc ảnh của bạn sẽ hiện ở đây</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
            
            <div className="w-full md:w-1/2 min-h-[400px]">
                <h3 className="font-poppins text-2xl font-bold text-gray-700 mb-4 text-center md:text-left">Kết quả Phân tích</h3>
                 {predictions.length > 0 ? (
                    <div id="label-container">
                        {predictions.map((p, i) => (
                            <ProgressBar key={i} prediction={p} />
                        ))}
                    </div>
                ) : (
                     <div className="flex justify-center items-center h-full text-gray-500 bg-gray-50 rounded-lg p-4">
                        <p>Đang chờ tín hiệu...</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ClassificationArea;
