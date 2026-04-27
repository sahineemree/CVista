export interface LinkedInAnalysisInput {
  url?: string;
}

export interface LinkedInAnalysisResult {
  score: number;
  strengths: string[];
  gaps: string[];
  recommendations: string[];
  fallbackRequired: boolean;
  fallbackMessage?: string;
}
