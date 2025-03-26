import React from "react";
import { getTranslations } from "../translations/translations";

function Map({ currentLanguage }) {
  const translations = getTranslations(currentLanguage);

  return (
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold">{translations.location.title}</h2>

      <p className="text-gray-700 mt-2">
        Restaurante 8.0.1 Gastro & Wine | Tierra de Cubas
      </p>

      <div className="mt-6 flex justify-center">
        <iframe
          className="w-full md:w-2/3 h-64 md:h-96 rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.2382099378374!2d-1.1782742803365385!3d41.3334107514969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5955b50e58ca69%3A0x5e485fca179cbc18!2sRestaurante%208.0.1%20Gastro%20%26%20Wine%20%7C%20Tierra%20de%20Cubas!5e0!3m2!1ses!2ses!4v1740916762036!5m2!1ses!2ses"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Map;
