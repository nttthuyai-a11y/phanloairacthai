import React, { useState, useMemo } from 'react';
import type { Prediction, WasteCategory } from '../types';
import { REPORT_DATA } from '../constants';

interface ReportProps {
    predictions: Prediction[];
    confidenceThreshold: number;
}

const TabButton: React.FC<{ active: boolean; onClick: () => void; children: React.ReactNode }> = ({ active, onClick, children }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 font-poppins font-semibold text-sm md:text-base rounded-t-lg transition-colors duration-300 focus:outline-none ${active ? 'bg-amber-500 text-white border-b-2 border-amber-600' : 'bg-amber-100 text-amber-800 hover:bg-amber-200'}`}
    >
        {children}
    </button>
);

const TabPane: React.FC<{ active: boolean; content: string }> = ({ active, content }) => (
    <div
        className={`p-4 bg-white border border-amber-300 rounded-b-lg rounded-tr-lg ${active ? 'block' : 'hidden'}`}
        dangerouslySetInnerHTML={{ __html: content }}
    />
);


const Report: React.FC<ReportProps> = ({ predictions, confidenceThreshold }) => {
    const [activeTab, setActiveTab] = useState<'thu_gom' | 'tac_hai' | 'tai_su_dung'>('thu_gom');

    const topPrediction = useMemo(() => {
        if (predictions.length === 0) return null;
        return predictions.reduce((prev, current) => (prev.probability > current.probability) ? prev : current);
    }, [predictions]);

    const shouldShowReport = topPrediction && (topPrediction.probability * 100) >= confidenceThreshold && topPrediction.className !== 'nothing';
    
    const reportKey = topPrediction?.className as Exclude<WasteCategory, 'nothing'>;
    const reportData = (topPrediction && topPrediction.className !== 'nothing') ? REPORT_DATA[reportKey] : null;

    const getHelperContent = () => {
        if (!topPrediction || predictions.length === 0) {
            return "Hãy đưa rác vào camera hoặc tải ảnh lên để AI phân tích.";
        }
        if (topPrediction.className === 'nothing') {
            return "AI không nhận diện được vật thể nào. Hãy thử lại với góc chụp rõ hơn.";
        }
        if ((topPrediction.probability * 100) < confidenceThreshold) {
            return <span className="text-red-600 font-bold">Độ tin cậy thấp ({ (topPrediction.probability * 100).toFixed(0) }%)! AI chưa chắc chắn, không thể tạo báo cáo.</span>;
        }
        return null;
    }
    
    const helperContent = getHelperContent();

    // Do not render the component if there's nothing to show yet.
    if (!shouldShowReport && !helperContent) {
        return null;
    }

    return (
        <div className="mt-10 grid">
            {/* Helper Text Area */}
            <div
                className={`col-start-1 row-start-1 transition-opacity duration-300 ease-in-out ${
                    shouldShowReport ? 'opacity-0' : 'opacity-100'
                }`}
            >
                {helperContent && (
                    <div className="p-6 bg-yellow-50 border-2 border-dashed border-yellow-300 rounded-xl text-center">
                        <p className="text-yellow-800 font-semibold">{helperContent}</p>
                    </div>
                )}
            </div>
            
            {/* Report Area */}
            <div
                className={`col-start-1 row-start-1 transition-opacity duration-300 ease-in-out ${
                    shouldShowReport ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            >
                {reportData && topPrediction && (
                    <div id="report-container" className="p-4 md:p-6 bg-amber-50 border-2 border-amber-400 rounded-2xl shadow-lg">
                        <div className="summary-header mb-6 pb-4 border-b-2 border-amber-300">
                            <h2 className="font-poppins text-2xl md:text-3xl font-bold text-red-700">Báo cáo Chi tiết từ AI</h2>
                            <div className="mt-2 text-lg">
                                <p><strong className="text-green-700">[Phân loại]</strong> <span className="font-semibold capitalize">{topPrediction.className}</span></p>
                                <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: `<strong class='text-amber-700'>[Đánh giá]</strong> ${reportData.summary}` }} />
                            </div>
                        </div>

                        <div className="tab-menu flex gap-1">
                            <TabButton active={activeTab === 'thu_gom'} onClick={() => setActiveTab('thu_gom')}>
                                1. Thu Gom & Xử lý
                            </TabButton>
                            <TabButton active={activeTab === 'tac_hai'} onClick={() => setActiveTab('tac_hai')}>
                                2. Tác hại & Lợi ích
                            </TabButton>
                            <TabButton active={activeTab === 'tai_su_dung'} onClick={() => setActiveTab('tai_su_dung')}>
                                3. Tái sử dụng
                            </TabButton>
                        </div>

                        <div>
                            <TabPane active={activeTab === 'thu_gom'} content={reportData.thu_gom} />
                            <TabPane active={activeTab === 'tac_hai'} content={reportData.tac_hai} />
                            <TabPane active={activeTab === 'tai_su_dung'} content={reportData.tai_su_dung} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Report;