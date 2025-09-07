import { ui, defaultLang, showDefaultLang, routes, languages } from './ui';

export function getLangFromUrl(url: URL): keyof typeof languages {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof languages) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: keyof typeof languages) {
  return function translatePath(
    path: string,
    l: keyof typeof languages = lang
  ) {
    if (path.length === 0) {
      return showDefaultLang || l !== defaultLang ? `/${String(l)}/` : '/';
    }

    const pathName = path.replaceAll('/', '');
    const hasTranslation =
      defaultLang !== l &&
      routes[l] !== undefined &&
      (routes[l] as Record<string, string>)[pathName] !== undefined;
    const translatedPath = hasTranslation
      ? (routes[l] as Record<string, string>)[pathName]
      : path;

    return !showDefaultLang && l === defaultLang
      ? translatedPath
      : `/${String(l)}${translatedPath}`;
  };
}

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = new URL(url).pathname;
  const parts = pathname?.split('/');
  const path = parts.pop() || parts.pop();

  if (path === undefined) {
    return undefined;
  }

  const currentLang = getLangFromUrl(url);

  if (defaultLang === currentLang) {
    const route = routes[defaultLang] as Record<string, string>;
    return route[path] !== undefined ? route[path] : undefined;
  }

  const getKeyByValue = (
    obj: Record<string, string>,
    value: string
  ): string | undefined => {
    return Object.keys(obj).find(key => obj[key] === value);
  };

  const reversedKey = getKeyByValue(routes[currentLang], path);

  if (reversedKey !== undefined) {
    return reversedKey;
  }

  return undefined;
}
