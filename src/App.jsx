import React, { useState } from "react";
import Map from "./components/Map";
import MessageForm from "./components/MessageForm";
import AboutUs from "./components/AboutUs";
import HowToGetThere from "./components/HowToGetThere";
import { getTranslations } from "./translations/translations";
import LanguageToggle from "./components/LanguageToggle";
import CountdownTimer from "./components/Countdown";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  // Language state
  const getInitialLanguage = () => {
    const browserLanguage = navigator.language || navigator.userLanguage; // ex: "pt-PT", "es-ES"
    console.log("Detected language:", navigator.language);
    if (browserLanguage.startsWith("es")) return "es";
    if (browserLanguage.startsWith("pt")) return "pt";
    return "pt";
  };

  const [currentLanguage, setCurrentLanguage] = useState(getInitialLanguage);
  // Load translated texts based on current language
  const translations = getTranslations(currentLanguage);

  // Toggle between Portuguese and Spanish
  const toggleLanguage = () => {
    setCurrentLanguage((prev) => (prev === "pt" ? "es" : "pt"));
  };

  return (
    <div className="min-h-screen bg-decorative bg-cover bg-fixed bg-center text-secondary">
      <LanguageToggle
        currentLanguage={currentLanguage}
        toggleLanguage={toggleLanguage}
      />
      <header
        className="bg-card bg-opacity-75 relative overflow-hidden rounded-lg shadow-md mx-auto max-w-5xl mt-6 p-10 text-center"
        data-testid="header"
      >
        <h1 className="text-3xl text-primary font-semibold">
          {translations.header.title}
        </h1>
        <h2 className="text-5xl font-dancing text-primary mt-1">
          {translations.header.names}
        </h2>
      </header>
      <ErrorBoundary fallback={translations.errors.countdown}>
        <CountdownTimer
          date="2025-09-27T12:00:00"
          translations={translations}
        />
      </ErrorBoundary>{" "}
      <AboutUs translations={translations} />
      <ErrorBoundary fallback={translations.errors.map}>
        <Map translations={translations} />
      </ErrorBoundary>{" "}
      <HowToGetThere translations={translations} />
      <MessageForm translations={translations} />
      <footer className="bg-primary bg-opacity-75 text-white py-6 text-center mt-6 rounded-lg max-w-5xl mx-auto">
        <p>{translations.footer.text}</p>
      </footer>
    </div>
  );
}

export default App;
