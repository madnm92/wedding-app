import React from "react";
import Map from "./components/map";
import MensageForm from "./components/mensageForm";

function App() {
  return (
    <div className="min-h-screen bg-background text-secondary">
      {/* Header */}
      <header className="bg-card shadow-md p-6 flex flex-col md:flex-row items-center justify-center text-center md:text-left rounded-lg mx-auto max-w-5xl mt-6">
        {/* Texto do Casamento */}
        <div className="md:mr-6">
          <h1 className="text-4xl font-bold text-primary">
            Casamento de Miguel & Marta
          </h1>
        </div>

        {/* Imagem do Save the Date */}
        <img
          src="/wedding-app/images/save_the_date.png"
          alt="Save the Date"
          className="w-56 h-auto md:w-72 rounded-lg shadow-lg border border-secondary"
        />
      </header>

      {/* Seção Sobre Nós */}
      <section className="py-12 bg-card text-secondary text-center md:text-left md:flex items-center max-w-4xl mx-auto px-6 rounded-lg shadow-lg mt-6">
        {/* Foto do Casal */}
        <img
          src="/wedding-app/images/miguel_marta.jpg"
          alt="Miguel & Marta"
          className="w-48 h-48 mx-auto md:mx-0 md:mr-6 rounded-full shadow-md object-cover border-4 border-white"
        />

        {/* Texto */}
        <div className="md:ml-8 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-primary mb-4">
            📖 A Nossa História
          </h2>
          <p className="leading-relaxed">
            Tudo começou no Porto, onde um de nós estava distraído com a vista
            do Douro, e o outro já estava a pensar onde comer a próxima
            francesinha. Entre passeios por ruelas, copos de vinho (dois... ou
            três) e muitas conversas, percebemos que tínhamos encontrado algo
            especial um no outro!
          </p>
          <p className="leading-relaxed mt-3">
            O tempo passou e, como bons aventureiros, decidimos trocar o Porto
            pelo sol (e pelo vento) de Zaragoza. Entre estas duas cidades, temos
            vindo a construir a nossa vida juntos: colecionando histórias,
            discutindo sobre a temperatura ideal do ar condicionado, sobre
            deixar a tampa da sanita para cima, mas acima de tudo, continuando a
            planear o futuro.
          </p>
          <p className="leading-relaxed mt-3 font-semibold">
            Agora, chegou o momento de dar o próximo passo: celebrar o nosso dia
            com todos vocês! 🎉
          </p>
        </div>
      </section>

      {/* 📍 Seção do Google Maps */}
      <Map />

      {/* Seção: Como Chegar */}
      <section className="py-12 bg-card text-secondary text-center md:text-left max-w-4xl mx-auto px-6 rounded-lg shadow-lg mt-6">
        <h2 className="text-3xl font-semibold text-primary mb-6">
          Como Chegar
        </h2>

        <p className="leading-relaxed text-lg mb-8">
          Existem várias opções para chegar ao local:
        </p>

        <ul className="space-y-6">
          {/* Opção: Carro */}
          <li className="flex flex-col md:flex-row md:items-start md:space-x-4">
            <div className="mb-2 md:mb-0">
              <span className="inline-block text-2xl">🚗</span>
            </div>
            <div>
              <strong className="font-semibold">De Carro:</strong>{" "}
              <span className="text-secondary">
                Há estacionamento disponível no local.
              </span>
            </div>
          </li>

          {/* Opção: Autocarro */}
          <li className="flex flex-col md:flex-row md:items-start md:space-x-4">
            <div className="mb-2 md:mb-0">
              <span className="inline-block text-2xl">🚌</span>
            </div>
            <div>
              <strong className="font-semibold">De Autocarro:</strong>{" "}
              <span className="text-secondary">
                Um autocarro estará disponível no centro de Zaragoza para levar
                os convidados até ao local. Os horários e o local de partida
                serão informados mais à frente.
              </span>
            </div>
          </li>

          {/* Opção: Vindo de Portugal */}
          <li className="flex flex-col md:flex-row md:items-start md:space-x-4">
            <div className="mb-2 md:mb-0">
              <span className="inline-block text-2xl">✈️</span>
            </div>
            <div>
              <strong className="font-semibold">
                Para quem vem de Portugal (sem carro):
              </strong>{" "}
              <span className="text-secondary">
                Pode voar para <strong>Madrid ou Barcelona</strong> e, depois,
                apanhar um AVE (comboio de alta velocidade) para Zaragoza. Ver
                com antecedência!
              </span>
              <div className="mt-2">
                <span className="font-semibold">Empresas de AVE:</span>
                <ul className="list-disc list-inside ml-4 mt-1 text-secondary space-y-2 text-left">
                  <li>
                    <a
                      href="https://www.renfe.com/es/es"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      RENFE
                    </a>{" "}
                    (operadora estatal)
                  </li>
                  <li>
                    <a
                      href="https://www.ouigo.com/es/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      OUIGO
                    </a>{" "}
                    (lowcost)
                  </li>
                  <li>
                    <a
                      href="https://iryo.eu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
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

      {/* Formulário de Mensagens */}
      <MensageForm />

      {/* Rodapé */}
      <footer className="bg-primary text-white py-6 text-center mt-6 rounded-lg max-w-5xl mx-auto">
        <p>Casamento de Marta & Miguel - 2025</p>
      </footer>
    </div>
  );
}

export default App;
