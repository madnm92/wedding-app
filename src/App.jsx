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
          src="/images/save_the_date.png"
          alt="Save the Date"
          className="w-56 h-auto md:w-72 rounded-lg shadow-lg border border-secondary"
        />
      </header>

      {/* Seção Sobre Nós */}
      <section className="py-12 bg-card text-secondary text-center md:text-left md:flex items-center max-w-4xl mx-auto px-6 rounded-lg shadow-lg mt-6">
        {/* Foto do Casal */}
        <img
          src="/images/miguel_marta.jpg"
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
