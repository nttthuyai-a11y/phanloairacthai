
import React from 'react';

interface InputOptionsProps {
    isLoading: boolean;
    isWebcamRunning: boolean;
    onStartWebcam: () => void;
    onImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
    statusMessage: string;
}

const Button: React.FC<{ onClick?: () => void; children: React.ReactNode; className?: string; disabled?: boolean; }> = ({ onClick, children, className, disabled }) => (
    <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={`w-full md:w-auto font-bold py-3 px-6 rounded-full shadow-md transition-all duration-300 ease-in-out flex items-center justify-center gap-2 ${className} ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'hover:scale-105 hover:shadow-lg'}`}
    >
        {children}
    </button>
);


const InputOptions: React.FC<InputOptionsProps> = ({ isLoading, isWebcamRunning, onStartWebcam, onImageUpload, statusMessage }) => (
    <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Button
                onClick={onStartWebcam}
                disabled={isLoading}
                className={isWebcamRunning ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'}
            >
                {isWebcamRunning ? (
                    <>📸 Tắt Webcam</>
                ) : (
                    <>📸 Bật Webcam</>
                )}
            </Button>
            
            <label className={`w-full md:w-auto font-bold py-3 px-6 rounded-full shadow-md transition-all duration-300 ease-in-out flex items-center justify-center gap-2 cursor-pointer ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 text-white hover:scale-105 hover:shadow-lg'}`}>
                🖼️ Tải ảnh lên
                <input type="file" id="file-input" accept="image/*" onChange={onImageUpload} className="hidden" disabled={isLoading}/>
            </label>
        </div>
        <p className="text-center text-gray-600 mt-4 h-6">{statusMessage}</p>
    </div>
);

export default InputOptions;
