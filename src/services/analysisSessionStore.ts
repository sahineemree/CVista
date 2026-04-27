import { CombinedAnalysisResult } from '@/services/analysisOrchestrator';

let latestAnalysisResult: CombinedAnalysisResult | null = null;

export function setLatestAnalysisResult(result: CombinedAnalysisResult): void {
  latestAnalysisResult = result;
}

export function getLatestAnalysisResult(): CombinedAnalysisResult | null {
  return latestAnalysisResult;
}

export function clearLatestAnalysisResult(): void {
  latestAnalysisResult = null;
}
