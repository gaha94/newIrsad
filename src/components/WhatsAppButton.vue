<template>
    <a
      :href="whatsappLink"
      target="_blank"
      class="whatsapp-btn"
      aria-label="Contactar por WhatsApp"
    >
      <i class="bi bi-whatsapp"></i>
    </a>
  </template>
  
  <script setup>
  const whatsappNumber = '51999333666' // Cambia esto por tu número (sin espacios)
  const message = 'Hola, me gustaría obtener más información sobre sus productos.'
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
  </script>
  
  <style scoped>
  .whatsapp-btn {
    position: fixed;
    bottom: 25px;
    right: 25px;
    z-index: 1050;
    background-color: #25d366;
    color: white;
    font-size: 28px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s ease;
  }
  .whatsapp-btn:hover {
    transform: scale(1.1);
  }
  </style>
  