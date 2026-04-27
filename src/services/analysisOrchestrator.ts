import { analyzeCvDocument } from '@/features/cv-analysis/services/cvAnalysisService';
import { CvAnalysisResult, CvDocumentSelection } from '@/features/cv-analysis/types/cvAnalysis.types';
import { analyzeLinkedInProfile } from '@/features/linkedin-analysis/services/linkedinAnalysisService';
import { LinkedInAnalysisResult } from '@/features/linkedin-analysis/types/linkedinAnalysis.types';

export interface AnalyzeProfileInput {
  cvDocument: CvDocumentSelection;
  linkedInUrl?: string;
}

export interface CombinedAnalysisResult {
  overallScore: number;
  cv: CvAnalysisResult;
  linkedin: LinkedInAnalysisResult;
  strengths: string[];
  gaps: string[];
  recommendations: string[];
  priorityActions: string[];
}

function getCombinedScore(cvScore: number, linkedInScore: number): number {
  return Math.round(cvScore * 0.7 + linkedInScore * 0.3);
}

function mergeUniqueItems(items: string[]): string[] {
  return Array.from(new Set(items));
}

export async function runCandidateAnalysis(input: AnalyzeProfileInput): Promise<CombinedAnalysisResult> {
  const [cvResponse, linkedInResponse] = await Promise.all([
    analyzeCvDocument(input.cvDocument),
    analyzeLinkedInProfile({ url: input.linkedInUrl }),
  ]);

  const overallScore = getCombinedScore(cvResponse.data.score, linkedInResponse.data.score);

  return {
    overallScore,
    cv: cvResponse.data,
    linkedin: linkedInResponse.data,
    strengths: mergeUniqueItems([...cvResponse.data.strengths, ...linkedInResponse.data.strengths]),
    gaps: mergeUniqueItems([...cvResponse.data.gaps, ...linkedInResponse.data.gaps]),
    recommendations: mergeUniqueItems([
      ...cvResponse.data.recommendations,
      ...linkedInResponse.data.recommendations,
    ]),
    priorityActions: cvResponse.data.priorityActions,
  };
}
