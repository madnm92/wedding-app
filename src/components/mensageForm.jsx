import React, { useState } from "react";

const MensagemForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    mensagem: "",
    autocarro: "",
  });
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
      const proxyUrl =
        "https://cloudflare-cors-anywhere.madnm92.workers.dev/?uri=https://script.google.com/macros/s/AKfycbzTcJFUgDmUF8-wq8pSwb_GSmR7pEP1HHNoDbjtJq4ib1X-FRoL1c0yYwFoazI8bDi9/exec";

      const response = await fetch(proxyUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        mode: "no-cors",
      });

      console.log("Response status:" + response.status);

      // If the response status is 0, it indicates a redirect response due to the fetch request's redirect handling.
      // In this case, we treat the redirection as a success and manually set the success message to the user
      // since the data was successfully saved, even though the redirection happened.
      // This is because the response status 0 is not an error, but the result of following the redirect.
      if (response.status === 0) {
        console.log("Redirected. Considerando a resposta sucesso.");
        setMensagemEnviada("Mensagem enviada com sucesso!");
        setFormData({ nome: "", mensagem: "" });
        return;
      }

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

        {/* Radio button option for Autocarro */}
        <div className="mb-6">
          <p className="mb-2 font-semibold text-lg">
            Precisas de autocarro do centro de Zaragoza para o local (ida e
            volta)?
          </p>
          <div className="flex justify-center items-center gap-8">
            <label className="flex items-center gap-2 cursor-pointer text-lg">
              <input
                type="radio"
                name="autocarro"
                value="sim"
                checked={formData.autocarro === "sim"}
                onChange={handleChange}
                className="w-5 h-5"
              />
              <span>Sim</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-lg">
              <input
                type="radio"
                name="autocarro"
                value="nao"
                checked={formData.autocarro === "nao"}
                onChange={handleChange}
                className="w-5 h-5"
              />
              <span>Não</span>
            </label>
          </div>
        </div>

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
