import React from "react";

function WhatToDo({ translations }) {
  return (
    <section
      className="py-12 bg-card bg-opacity-75 text-secondary max-w-5xl mx-auto px-6 rounded-lg shadow-lg mt-6"
      data-testid="what-to-do"
    >
      <h2 className="text-3xl font-semibold text-primary mb-4 text-center">
        {translations.whatToDoInZaragoza.title}
      </h2>

      <p className="text-lg mb-8 text-center">
        {translations.whatToDoInZaragoza.intro}
      </p>

      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 items-center justify-center">
        {/* Scrollable map container */}
        <div className="w-full md:w-1/2 h-[500px] overflow-x-auto rounded-lg shadow-lg">
          <img
            data-testid="map"
            src="/wedding-app/images/map.png"
            alt="Zaragoza Map"
            className="min-w-[800px] h-full object-cover"
          />
        </div>

        {/* Static right image */}
        <img
          data-testid="what-to-do"
          src="/wedding-app/images/what_to_do.png"
          alt="What to do in Zaragoza"
          className="w-full md:w-1/2 h-[500px] object-contain rounded-lg shadow-lg"
        />
      </div>
      {/* Swipe instruction BELOW map */}
      <p className="text-base text-left text-secondary italic mt-2">
        {translations.whatToDoInZaragoza.swipeImage}
      </p>

      {/* Highlights block */}
      <div className="mt-8 text-left text-secondary text-lg leading-relaxed space-y-4">
        <p>{translations.whatToDoInZaragoza.highlightsTitle}</p>
        <ul className="space-y-2">
          {translations.whatToDoInZaragoza.highlights.map((item, index) => {
            if (typeof item === "string") {
              return <li key={index}>→ {item}</li>;
            }

            return (
              <li key={index}>
                <div className="mt-6">
                  🍔 {item.text}
                  <ul className="mt-2 ml-4 space-y-1">
                    {item.links.map((link, i) => (
                      <li key={i}>
                        →{" "}
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline hover:text-blue-700"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default WhatToDo;
