import React, { useState } from "react";
import { getTranslations } from "../translations/translations";

const MessageForm = ({ currentLanguage }) => {
  const translations = getTranslations(currentLanguage);

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
    setIsLoading(true);
    console.log("Sending data to API:", formData);

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

      if (response.status === 0) {
        console.log("Redirected. Considering success response.");
        setMensagemEnviada(translations.form.success);
        setFormData({ nome: "", mensagem: "", autocarro: "" });
        return;
      }

      const result = await response.json();
      console.log("API Response:", result);

      if (!response.ok) {
        throw new Error(`Erro ${response.status}: ${response.statusText}`);
      }

      setMensagemEnviada(translations.form.success);
      setFormData({ nome: "", mensagem: "", autocarro: "" });
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setMensagemEnviada(`${translations.form.error}: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-12 text-center bg-card rounded-lg shadow-lg max-w-5xl mx-auto mt-6 p-6">
      <h2 className="text-3xl font-semibold text-primary">
        {translations.form.title}
      </h2>

      <form className="max-w-lg mx-auto mt-6" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder={translations.form.namePlaceholder}
          className="w-full p-3 border border-secondary rounded-md bg-white text-secondary mb-4"
          value={formData.nome}
          onChange={handleChange}
          required
        />

        <textarea
          name="mensagem"
          placeholder={translations.form.messagePlaceholder}
          className="w-full p-3 border border-secondary rounded-md bg-white text-secondary mb-4"
          value={formData.mensagem}
          onChange={handleChange}
          required
        ></textarea>

        {/* Bus question and options */}
        <div className="mb-6">
          <p className="mb-2 font-semibold text-lg">
            {translations.form.busQuestion}
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
              <span>{translations.form.yes}</span>
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
              <span>{translations.form.no}</span>
            </label>
          </div>
        </div>

        <button
          className="bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-80"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? translations.form.sending : translations.form.send}
        </button>
      </form>

      {mensagemEnviada && (
        <p
          className={`mt-4 ${
            mensagemEnviada.includes("Erro") ||
            mensagemEnviada.includes("Error")
              ? "text-red-600"
              : "text-green-600"
          }`}
        >
          {mensagemEnviada}
        </p>
      )}
    </section>
  );
};

export default MessageForm;
