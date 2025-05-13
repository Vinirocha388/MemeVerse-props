"use client";

import { useState } from "react";
import { sendEmail } from "@/actions/email";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: "Por favor, preencha todos os campos.",
      });
      return;
    }

    // Inicia o envio
    setStatus({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      message: "Enviando mensagem...",
    });

    try {
      const result = await sendEmail(formData);

      if (result.success) {
        // Sucesso
        setStatus({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
          message: result.message,
        });

        // Limpa o formulário
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        // Erro do servidor
        throw new Error(result.message);
      }
    } catch (error) {
      setStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: error.message || "Ocorreu um erro ao enviar sua mensagem.",
      });
    }
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Entre em Contato</h2>

      {status.isSuccess && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          {status.message}
        </div>
      )}

      {status.isError && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-medium">
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Seu nome"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="seu@email.com"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 font-medium">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Sua mensagem aqui..."
          />
        </div>

        <button
          type="submit"
          disabled={status.isSubmitting}
          className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status.isSubmitting ? "Enviando..." : "Enviar Mensagem"}
        </button>
      </form>
    </div>
  );
}
