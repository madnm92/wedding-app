import pt from "./pt";
import es from "./es";

const availableLanguages = {
  pt,
  es,
};

// Returns texts in the desired language
export const getTranslations = (languageCode = "pt") => {
  return availableLanguages[languageCode] || availableLanguages.pt;
};
