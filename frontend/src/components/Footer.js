// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 mt-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-4">
          <a className="mx-2" href="https://www.linkedin.com/in/guillermo-navarro-61a4a5263/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="mx-2" href="https://www.youtube.com/@Lapreguntafalopa" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <div className="flex flex-col md:flex-row justify-center mb-3">
          <details className="text-white mx-2">
            <summary>Privacidad</summary>
            <p className="text-left mt-2 text-gray-300">
              Este chat no requiere registro ni inicio de sesión. No se guardan datos personales ni se utiliza caché para almacenar información. Solo se persisten los mensajes enviados en el chat.
              <br/><br/>
              <strong>Información Recopilada:</strong> Los mensajes enviados son almacenados en una base de datos para permitir la visualización por otros usuarios.
              <br/><br/>
              <strong>Protección de la Información:</strong> Se implementan medidas de seguridad básicas para proteger la integridad de los mensajes almacenados.
              <br/><br/>
              <strong>Divulgación a Terceros:</strong> No se comparte ninguna información almacenada con terceros.
            </p>
          </details>
          <span className="px-3 hidden md:block">|</span>
          <details className="text-white mx-2">
            <summary>Términos</summary>
            <p className="text-left mt-2 text-gray-300">
              El uso de este chat implica la aceptación de que los mensajes enviados serán visibles para todos los usuarios.
              <br/><br/>
              <strong>Cookies:</strong> No se utilizan cookies para almacenar datos de los usuarios.
              <br/><br/>
              <strong>Licencia y Derechos de Autor:</strong> No se reclaman derechos de autor sobre los mensajes enviados por los usuarios. No se permite enlazar este chat a otros sitios sin autorización previa.
            </p>
          </details>
          <span className="px-3 hidden md:block">|</span>
          <details className="text-white mx-2">
            <summary>FAQs</summary>
            <p className="text-left mt-2 text-gray-300">
              <strong>¿Cómo puedo colaborar con el proyecto?</strong>
              <br/>
              Puedes colaborar visitando el repositorio en GitHub, haciendo un fork y enviando tus contribuciones a través de pull requests.
              <br/><br/>
              <strong>¿Qué variables de entorno son necesarias?</strong>
              <br/>
              Las variables de entorno necesarias pueden ser solicitadas al desarrollador principal del proyecto.
              <br/><br/>
              <strong>¿Dónde puedo enviar sugerencias o consultas?</strong>
              <br/>
              Puedes utilizar la mensajería de GitHub para cualquier sugerencia o consulta.
              <br/><br/>
              <a className="text-white underline" href="https://github.com/BasiliscX/Off-Topic-chat-app" target="_blank" rel="noopener noreferrer">Repositorio del proyecto en GitHub</a>
            </p>
          </details>
        </div>
        <p className="m-0">&copy; <a className="text-white font-weight-bold" href="https://guillermo-navarro.vercel.app/" target="_blank" rel="noopener noreferrer">Guillermo Navarro</a>. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
