import React, { useState } from "react";

const MensagemForm = () => {
  const [formData, setFormData] = useState({ nome: "", mensagem: "" });
  const [mensagemEnviada, setMensagemEnviada] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Set loading to true while waiting for the response
    setIsLoading(true);

    console.log("Enviando dados para a API:", formData);

    try {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbx3xfTsUH5QTn_rdF8A7gpN20d5WE_RwmF8HpdZNIGIzz4sWN9ZnRzlevY8HzXRlUXX/exec", // Check other proxies
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      console.log("Resposta da API:", result);

      if (!response.ok) {
        throw new Error(`Erro ${response.status}: ${response.statusText}`);
      }

      setMensagemEnviada("Mensagem enviada com sucesso!");
      setFormData({ nome: "", mensagem: "" });
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setMensagemEnviada(`Erro ao enviar mensagem: ${error.message}`);
    } finally {
      // Reset loading state when the request finishes
      setIsLoading(false);
    }
  };

  return (
    <section className="py-12 text-center bg-card rounded-lg shadow-lg max-w-5xl mx-auto mt-6 p-6">
      <h2 className="text-3xl font-semibold text-primary">
        📨 A nossa caixa de mensagens está à tua espera. Não nos enchas de spam…
      </h2>
      <form className="max-w-lg mx-auto mt-6" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          className="w-full p-3 border border-secondary rounded-md bg-white text-secondary mb-4"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <textarea
          name="mensagem"
          placeholder="Mensagem"
          className="w-full p-3 border border-secondary rounded-md bg-white text-secondary mb-4"
          value={formData.mensagem}
          onChange={handleChange}
          required
        ></textarea>
        <button
          className="bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-80"
          type="submit"
          // Disable button while loading
          disabled={isLoading}
        >
          {isLoading ? "Enviando..." : "Enviar"}
        </button>
      </form>
      {mensagemEnviada && (
        <p
          className={`mt-4 ${
            mensagemEnviada.includes("Erro") ? "text-red-600" : "text-green-600"
          }`}
        >
          {mensagemEnviada}
        </p>
      )}
    </section>
  );
};

export default MensagemForm;
