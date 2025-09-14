import { BusMap } from "./Maps";

function HowToGetThere({ translations }) {
  return (
    <section
      className="py-12 bg-card bg-opacity-75 text-secondary text-center md:text-left max-w-4xl mx-auto px-6 rounded-lg shadow-lg mt-6"
      data-testid="how-to-get-there"
    >
      <h2 className="text-3xl font-semibold text-primary mb-6 text-center">
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
            {/* Reuse BusMap component */}
            <BusMap />
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
                    className="text-blue-600 hover:text-blue-600 underline font-semibold"
                    data-testid="renfe-link"
                  >
                    RENFE
                  </a>{" "}
                  <span className="text-secondary">(operadora estatal)</span>
                </li>
                <li>
                  <a
                    href="https://www.ouigo.com/es/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-600 underline font-semibold"
                    data-testid="ouigo-link"
                  >
                    OUIGO
                  </a>{" "}
                  <span className="text-secondary">(low-cost)</span>
                </li>
                <li>
                  <a
                    href="https://iryo.eu/es/home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-600 underline font-semibold"
                    data-testid="iryo-link"
                  >
                    IRYO
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default HowToGetThere;
