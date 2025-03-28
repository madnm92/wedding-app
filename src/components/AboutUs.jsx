import React from "react";

function AboutUs({ translations }) {
  return (
    <section
      className="py-12 bg-card bg-opacity-75 text-secondary text-center md:text-left md:flex items-center max-w-4xl mx-auto px-6 rounded-lg shadow-lg mt-6"
      data-testid="about-us"
    >
      <img
        src="/wedding-app/images/miguel_marta.jpg"
        alt="Miguel & Marta"
        className="w-48 h-48 mx-auto md:mx-0 md:mr-6 rounded-full shadow-md object-cover border-4 border-white mb-4 md:mb-0"
        data-testid="about-us-image"
      />
      <div className="md:ml-8 text-center md:text-left">
        <h2 className="text-3xl font-semibold text-primary mb-4">
          {translations.story.title}
        </h2>
        <p className="leading-relaxed">{translations.story.paragraph1}</p>
        <p className="leading-relaxed mt-3">{translations.story.paragraph2}</p>
        <p className="leading-relaxed mt-3 font-semibold">
          {translations.story.paragraph3}
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
