export const getLanguage = async (lang: string | undefined) =>
    await import(`../locales/${lang}/translation.json`)