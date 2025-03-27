import React, { useState } from "react";
import Map from "./components/Map";
import MessageForm from "./components/MessageForm";
import { getTranslations } from "./translations/translations";
import LanguageToggle from "./components/LanguageToggle";

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
    <div className="min-h-screen bg-background text-secondary">
      {/* Language switch button */}
      <LanguageToggle
        currentLanguage={currentLanguage}
        toggleLanguage={toggleLanguage}
      />

      {/* Header */}
      <header className="bg-card shadow-md p-6 flex flex-col md:flex-row items-center justify-center text-center md:text-left rounded-lg mx-auto max-w-5xl mt-6">
        <div className="md:mr-6">
          <h1 className="text-5xl text-primary font-dancing text-center my-4">
            {translations.header.title}
          </h1>
        </div>

        <img
          src="/wedding-app/images/save_the_date.png"
          alt="Save the Date"
          className="w-full md:w-[320px] h-[220px] object-cover rounded-xl shadow-lg border border-secondary"
        />
      </header>

      {/* About Us section */}
      <section className="py-12 bg-card text-secondary text-center md:text-left md:flex items-center max-w-4xl mx-auto px-6 rounded-lg shadow-lg mt-6">
        <img
          src="/wedding-app/images/miguel_marta.jpg"
          alt="Miguel & Marta"
          className="w-48 h-48 mx-auto md:mx-0 md:mr-6 rounded-full shadow-md object-cover border-4 border-white"
        />

        <div className="md:ml-8 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-primary mb-4">
            {translations.story.title}
          </h2>
          <p className="leading-relaxed">{translations.story.paragraph1}</p>
          <p className="leading-relaxed mt-3">
            {translations.story.paragraph2}
          </p>
          <p className="leading-relaxed mt-3 font-semibold">
            {translations.story.paragraph3}
          </p>
        </div>
      </section>

      {/* Map component */}
      <Map currentLanguage={currentLanguage} />

      {/* How to get there */}
      <section className="py-12 bg-card text-secondary text-center md:text-left max-w-4xl mx-auto px-6 rounded-lg shadow-lg mt-6">
        <h2 className="text-3xl font-semibold text-primary mb-6">
          {translations.howToArrive.title}
        </h2>

        <p className="leading-relaxed text-lg mb-8">
          {translations.howToArrive.intro}
        </p>

        <ul className="space-y-6">
          {/* By car */}
          <li className="flex flex-col md:flex-row md:items-start md:space-x-4">
            <div className="mb-2 md:mb-0">
              <span className="inline-block text-2xl">🚘</span>
            </div>
            <div>
              <strong className="font-semibold">
                {translations.howToArrive.byCarTitle}
              </strong>{" "}
              <span className="text-secondary">
                {translations.howToArrive.byCarDescription}
              </span>
            </div>
          </li>

          {/* By bus */}
          <li className="flex flex-col md:flex-row md:items-start md:space-x-4">
            <div className="mb-2 md:mb-0">
              <span className="inline-block text-2xl">🚌</span>
            </div>
            <div>
              <strong className="font-semibold">
                {translations.howToArrive.byBusTitle}
              </strong>{" "}
              <span className="text-secondary">
                {translations.howToArrive.byBusDescription}
              </span>
            </div>
          </li>

          {/* From Portugal */}
          <li className="flex flex-col md:flex-row md:items-start md:space-x-4">
            <div className="mb-2 md:mb-0">
              <span className="inline-block text-2xl">✈️</span>
            </div>
            <div>
              <strong className="font-semibold">
                {translations.howToArrive.fromPortugalTitle}
              </strong>{" "}
              <span className="text-secondary">
                {translations.howToArrive.fromPortugalDescription}
              </span>
              <div className="mt-2">
                <span className="font-semibold">
                  {translations.howToArrive.aveCompanies}
                </span>
                <ul className="list-disc list-inside ml-4 mt-1 text-secondary space-y-2 text-left">
                  <li>
                    <a
                      href="https://www.renfe.com/es/es"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      {translations.howToArrive.renfe}{" "}
                    </a>
                    <span className="text-secondary">(operadora estatal)</span>
                  </li>
                  <li>
                    <a
                      href="https://www.ouigo.com/es/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      {translations.howToArrive.ouigo}
                    </a>
                    <span className="text-secondary"> (lowcost)</span>
                  </li>
                  <li>
                    <a
                      href="https://iryo.eu/es/home"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      {translations.howToArrive.iryo}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </section>

      {/* Message form */}
      <MessageForm currentLanguage={currentLanguage} />

      {/* Footer */}
      <footer className="bg-primary text-white py-6 text-center mt-6 rounded-lg max-w-5xl mx-auto">
        <p>{translations.footer.text}</p>
      </footer>
    </div>
  );
}

export default App;
