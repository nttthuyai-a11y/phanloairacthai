
import React from 'react';

interface SettingsProps {
    confidenceThreshold: number;
    onConfidenceChange: (value: number) => void;
}

const Settings: React.FC<SettingsProps> = ({ confidenceThreshold, onConfidenceChange }) => (
    <div className="bg-green-50 p-4 rounded-xl mb-8 border border-green-200">
        <div className="confidence-setting text-center">
            <label htmlFor="confidence-threshold" className="block font-bold text-gray-700 mb-2 font-poppins">
                🔍 Ngưỡng Tin Cậy (Mặc định: 80%)
            </label>
            <div className="flex items-center justify-center gap-4">
                <input
                    type="range"
                    id="confidence-threshold"
                    min="50"
                    max="99"
                    value={confidenceThreshold}
                    onChange={(e) => onConfidenceChange(Number(e.target.value))}
                    className="w-full max-w-xs h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                />
                <span className="font-bold text-green-700 text-lg w-12 text-center">{confidenceThreshold}%</span>
            </div>
            <p className="text-sm text-red-600 mt-2">
                *Nếu độ tin cậy thấp hơn ngưỡng này, AI sẽ chưa tạo báo cáo chi tiết.
            </p>
        </div>
    </div>
);

export default Settings;
