import React, { useState } from "react";

const MessageForm = ({ translations }) => {
  const [formData, setFormData] = useState({
    nome: "",
    mensagem: "",
    autocarro: "",
  });

  const [mensagemEnviada, setMensagemEnviada] = useState("");
  const [showMensagem, setShowMensagem] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Helper to show message with auto-hide
  const showTemporaryMessage = (message) => {
    setMensagemEnviada(message);
    setShowMensagem(true);
    setTimeout(() => setShowMensagem(false), 5000);
  };

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

      // If the response status is 0, it indicates a redirect response due to the fetch request's redirect handling.
      // In this case, we treat the redirection as a success and manually set the success message to the user
      // since the data was successfully saved, even though the redirection happened.
      // This is because the response status 0 is not an error, but the result of following the redirect.
      if (response.status === 0) {
        console.log("Redirected. Considering success response.");
        showTemporaryMessage(translations.form.success);
        setFormData({ nome: "", mensagem: "", autocarro: "" });
        return;
      }

      const result = await response.json();
      console.log("API Response:", result);

      if (!response.ok) {
        throw new Error(`Erro ${response.status}: ${response.statusText}`);
      }

      showTemporaryMessage(translations.form.success);
      setFormData({ nome: "", mensagem: "", autocarro: "" });
    } catch (error) {
      console.error("Erro ao enviar:", error);
      showTemporaryMessage(`${translations.form.error}: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      className="py-12 bg-opacity-75 text-center bg-card rounded-lg shadow-lg max-w-5xl mx-auto mt-6 p-6"
      data-testid="message-form"
    >
      <h2 className="text-3xl font-semibold text-primary">
        {translations.form.title}
      </h2>

      <form className="max-w-lg mx-auto mt-6" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder={translations.form.namePlaceholder}
          className="w-full p-3 border border-secondary rounded-md bg-white text-secondary mb-4"
          data-testid="message-form-name"
          value={formData.nome}
          onChange={handleChange}
          required
        />

        <textarea
          name="mensagem"
          placeholder={translations.form.messagePlaceholder}
          className="w-full p-3 border border-secondary rounded-md bg-white text-secondary mb-4"
          data-testid="message-form-message"
          value={formData.mensagem}
          onChange={handleChange}
          required
        ></textarea>

        {/* Bus question */}
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
                data-testid="message-form-radio-yes"
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
                data-testid="message-form-radio-no"
              />
              <span>{translations.form.no}</span>
            </label>
          </div>
        </div>

        <button
          className="bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-80"
          type="submit"
          disabled={isLoading}
          data-testid="message-form-submit"
        >
          {isLoading ? translations.form.sending : translations.form.send}
        </button>
      </form>

      {/* Feedback message */}
      {showMensagem && (
        <p
          className={`mt-4 px-4 py-2 rounded-md transition-all duration-500 ease-in-out transform
            ${
              mensagemEnviada.includes("Erro") ||
              mensagemEnviada.includes("Error")
                ? "text-red-700 bg-red-100"
                : "text-green-700 bg-green-100"
            }`}
          data-testid="message-form-response"
        >
          {mensagemEnviada}
        </p>
      )}
    </section>
  );
};

export default MessageForm;
