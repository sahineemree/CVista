export interface CvDocumentSelection {
  name: string;
  uri: string;
  size?: number;
  mimeType?: string;
  extension: 'pdf' | 'docx';
}

export interface CvAnalysisResult {
  score: number;
  strengths: string[];
  gaps: string[];
  recommendations: string[];
  priorityActions: string[];
}
