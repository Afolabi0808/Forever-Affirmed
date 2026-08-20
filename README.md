# Forever Affirmed

**Speak good into every day.**

Forever Affirmed is a privacy-first, offline-capable Expo/React Native app for reading and scheduling multilingual declarations. Australian English is the primary locale. Samoan, Tongan and Gilbertese are present as explicitly unapproved placeholder content until authorised reviewers supply translations and recordings.

## Run locally

Requirements: Node.js 22.13 or newer, npm, Android Studio/SDK for native builds.

```bash
npm install
npm run dev
npm run check
```

For a local Android release APK:

```bash
npx expo prebuild --platform android
cd android
./gradlew assembleRelease
```

The output is `android/app/build/outputs/apk/release/app-release.apk`. A locally generated release uses the generated Android signing configuration; create a protected production keystore before store distribution.

## Implemented vertical slice

- Expo Router navigation for Today, Declarations, Listen, Schedule, Library and Settings.
- Versioned, Zod-validated declaration content outside UI code.
- SQLite schema for migrations, favourites, schedules and session history.
- Zustand state with local persistence.
- IANA-timezone scheduling for device, declaration and manual timezone modes.
- Optional quiet local notifications; reminders never autoplay audio.
- Provider-independent speech and audio source interfaces with deterministic verification-aware fallback.
- Accessible light/dark design system and branded launcher icon.
- Tests for UTC+13/UTC+14, DST, validation, persistence, fallback, notifications and playback state.

## Deliberate limitations

- No speech provider is configured. The mock provider never fabricates output.
- No audio is labelled verified and no unapproved voice is silently substituted.
- Pacific-language text is placeholder copy, not invented translation.
- Custom reminder creation and download management are modelled but disabled in this first UI slice.
- No analytics, account system or cloud sync is included.

Read [Architecture](docs/ARCHITECTURE.md), [audio verification](docs/AUDIO-VERIFICATION.md) and [adding a language](docs/ADDING-A-LANGUAGE.md) before extending content or providers.
