
export interface Prediction {
  className: string;
  probability: number;
}

export type WasteCategory = 'taiche' | 'huuco' | 'voco' | 'honhop' | 'nothing';

export interface ReportData {
  summary: string;
  thu_gom: string;
  tac_hai: string;
  tai_su_dung: string;
}

export type ReportDataMap = {
  [key in Exclude<WasteCategory, 'nothing'>]: ReportData;
};
