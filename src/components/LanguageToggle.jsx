import React from "react";

const LanguageToggle = ({ currentLanguage, toggleLanguage }) => {
  return (
    <div className="flex justify-end max-w-5xl mx-auto mt-4 px-6">
      <button
        onClick={toggleLanguage}
        className="text-sm text-primary hover:text-opacity-80 flex items-center gap-2"
        data-testid="language-toggle-button"
      >
        {currentLanguage === "pt" ? (
          <>
            🇪🇸 <span className="underline">Cambiar a Español</span>
          </>
        ) : (
          <>
            🇵🇹 <span className="underline">Mudar para Português</span>
          </>
        )}
      </button>
    </div>
  );
};

export default LanguageToggle;
