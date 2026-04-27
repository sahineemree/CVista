import { CvAnalysisResult } from '@/features/cv-analysis/types/cvAnalysis.types';

export const MOCK_CV_ANALYSIS: CvAnalysisResult = {
  score: 78,
  strengths: [
    'Deneyim bölümü okunabilir ve kronolojik akış net.',
    'Teknik yetkinlikler pozisyonla uyumlu anahtar kelimeler içeriyor.',
    'Ölçülebilir etki içeren maddeler mevcut.',
  ],
  gaps: [
    'Özet bölümü daha kısa ve hedef odaklı yazılabilir.',
    'Projelerde kullanılan teknolojiler bazı satırlarda eksik.',
    'Eğitim ve sertifika bölümleri daha net ayrıştırılabilir.',
  ],
  recommendations: [
    'İlk 5 saniyede değer önerisini anlatan güçlü bir profil özeti ekle.',
    'Her deneyim maddesine mümkünse metrik ekle (ör. %, süre, maliyet).',
    'ATS uyumu için kritik anahtar kelimeleri başlıklarda tekrar kullan.',
  ],
  priorityActions: [
    'Profil özetini 3-4 satır olacak şekilde yeniden yaz.',
    'Son 2 iş deneyimi maddelerine ölçülebilir çıktı ekle.',
    'Teknoloji stack bölümünü standart formatta güncelle.',
  ],
};
