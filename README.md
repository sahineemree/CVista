# CVista

<<<<<<< HEAD
CVista, kullanıcıların CV'lerini analiz ederek belirli bir iş ilanına ne kadar uygun olduklarını değerlendiren bir uygulamadır.

## Proje Amacı

Birçok aday başvurduğu iş ilanına CV'sinin ne kadar uygun olduğunu objektif şekilde değerlendirememektedir.  
CVista, CV ile iş ilanını karşılaştırarak kullanıcıya analiz ve geliştirme önerileri sunmayı amaçlar.

## Temel Özellikler

- CV yükleme
- İş ilanı metni veya link girişi
- CV analizi
- İş ilanı analizi
- Uygunluk puanı hesaplama
- CV geliştirme önerileri

## Hedef Platformlar

- Mobil (iOS / Android)
- Web

## Kullanılacak Teknolojiler

- Expo
- React Native
- React Native Web
- Git & GitHub

## İlk Sürüm Kapsamı

İlk sürümde aşağıdaki özellikler hedeflenmektedir:

- CV yükleme
- İş ilanı girişi
- CV ve iş ilanı analizi
- Uygunluk puanı
- Geliştirme önerileri

## Gelecek Geliştirmeler

- LinkedIn profil analizi
- Daha gelişmiş CV öneri sistemi
- Yapay zeka destekli analiz
=======
CVista, adayların CV ve LinkedIn sinyallerini bir araya getirip gelişim alanlarını gösteren React Native (Expo) tabanlı bir ürün temelidir.

## Sprint 1 Kapsamı
- Expo + TypeScript + Expo Router kurulumu
- Feature-based + layered mimari iskeleti
- Ana ekran: CV yükleme + LinkedIn URL girişi + analiz başlatma
- PDF/DOCX dosya seçimi akışı (parse edilmeden)
- LinkedIn URL validasyonu (`linkedin.com/in/...`)
- Mock servis katmanları ile analiz orkestrasyonu
- Sonuç ekranı: genel skor, güçlü yönler, eksikler, öneriler, öncelikli aksiyonlar

## Mimari Kararlar
- `src/app`: Sadece route/screen kompozisyonu içerir.
- `src/features`: Domain bazlı feature modülleri (`cv-analysis`, `linkedin-analysis`).
- `src/shared`: Proje genelinde tekrar kullanılabilir UI, sabitler, tipler ve yardımcı fonksiyonlar.
- `src/services`: Birden fazla feature sonucunu birleştiren orchestrator ve geçici state yönetimi.
- `src/config`: Uygulama ayarları, desteklenen dosya tipleri ve feature flag'ler.

### Neden Bu Yapı?
- UI ve business logic ayrımı korunur.
- Mock veriyle başlanıp backend/API entegrasyonuna sorunsuz geçiş yapılır.
- Her dosya tek sorumluluk ilkesini takip eder.
- Ölçeklenebilir bir ürün mimarisine erken yatırım yapılır.

## Klasör Yapısı
```txt
src/
  app/
    _layout.tsx
    index.tsx
    analysis-result.tsx

  features/
    cv-analysis/
      components/
      services/
      types/
      constants/
      utils/

    linkedin-analysis/
      components/
      services/
      types/
      utils/

  shared/
    components/
    constants/
    utils/
    types/

  services/
  config/
```

## Kurulum
```bash
npm install
```

## Çalıştırma
```bash
npm run start
npm run ios
npm run android
npm run web
```

## Bilinçli Olarak Eklenmeyenler (Sprint 1)
- OpenAI API entegrasyonu
- Gerçek backend ve veritabanı
- Kimlik doğrulama ve ödeme altyapısı
- Gerçek LinkedIn scraping
- CV içerik parse ve semantic extraction

## Sprint 2 Teknik Öneriler
1. API contract katmanı (`/shared/api` veya `/services/apiClient`) eklenmeli.
2. Result state için kalıcı store (ör. Zustand) ve cache stratejisi kurulmalı.
3. CV parse pipeline (PDF/DOCX parser + normalize edici) ayrı modül olarak eklenmeli.
4. Form yönetimi ve doğrulama için typed form katmanı güçlendirilmeli.
5. Test altyapısı (unit + integration + component) eklenmeli.
6. Feature flag ve ortam bazlı config yönetimi (`dev/stage/prod`) genişletilmeli.
>>>>>>> 88a285a (feat: initial CVista sprint-1 foundation)
