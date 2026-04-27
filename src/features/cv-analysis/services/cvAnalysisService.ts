import { MOCK_CV_ANALYSIS } from '@/features/cv-analysis/constants/mockCvAnalysis';
import { CvAnalysisResult, CvDocumentSelection } from '@/features/cv-analysis/types/cvAnalysis.types';
import { ServiceResult } from '@/shared/types/common.types';

function delay(milliseconds: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

export async function analyzeCvDocument(
  document: CvDocumentSelection,
): Promise<ServiceResult<CvAnalysisResult>> {
  await delay(600);

  const fileNameBonus = document.name.toLowerCase().includes('cv') ? 2 : 0;

  return {
    data: {
      ...MOCK_CV_ANALYSIS,
      score: Math.min(100, MOCK_CV_ANALYSIS.score + fileNameBonus),
    },
    message: 'CV analizi mock servisinden döndü.',
  };
}
