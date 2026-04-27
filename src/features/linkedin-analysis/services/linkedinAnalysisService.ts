import { LinkedInAnalysisInput, LinkedInAnalysisResult } from '@/features/linkedin-analysis/types/linkedinAnalysis.types';
import { ServiceResult } from '@/shared/types/common.types';

const EMPTY_LINKEDIN_RESULT: LinkedInAnalysisResult = {
  score: 55,
  strengths: ['LinkedIn girişi sağlanmadı, sadece CV sinyalleri değerlendirildi.'],
  gaps: ['LinkedIn profil verisi olmadığı için tutarlılık kontrolü sınırlı kaldı.'],
  recommendations: ['Daha sağlıklı analiz için LinkedIn profil URL, metin veya PDF çıktısı ekleyin.'],
  fallbackRequired: true,
  fallbackMessage: 'LinkedIn metni veya profil PDF çıktısı paylaşılması önerilir.',
};

function delay(milliseconds: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

export async function analyzeLinkedInProfile(
  input: LinkedInAnalysisInput,
): Promise<ServiceResult<LinkedInAnalysisResult>> {
  await delay(500);

  if (!input.url) {
    return {
      data: EMPTY_LINKEDIN_RESULT,
      message: 'LinkedIn URL sağlanmadı, fallback sonucu döndürüldü.',
    };
  }

  return {
    data: {
      score: 72,
      strengths: [
        'Profil başlığı hedef role uyumlu ve anahtar kelimeler içeriyor.',
        'Deneyim bölümü role göre yeterli detay sunuyor.',
      ],
      gaps: ['Hakkında bölümü etkileyici ancak daha ölçülebilir metriklerle güçlendirilebilir.'],
      recommendations: [
        'Son deneyim maddelerine ölçülebilir etki cümleleri ekleyin.',
        'Öne çıkan projeler için kısa başarı hikayeleri ekleyin.',
      ],
      fallbackRequired: true,
      fallbackMessage:
        'Scraping kısıtları nedeniyle bazı kontroller sınırlı olabilir. Gerekirse profil metni veya PDF paylaşın.',
    },
    message: 'LinkedIn analizi mock servisinden döndü.',
  };
}
