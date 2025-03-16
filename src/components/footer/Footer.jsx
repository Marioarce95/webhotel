import React from 'react';
import { 
  FacebookIcon, 
  TwitterIcon, 
  InstagramIcon, 
  LinkedInIcon 
} from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-zonaprop-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Ayuda</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Preguntas frecuentes</a></li>
              <li><a href="#" className="hover:text-gray-300">Centro de ayuda</a></li>
              <li><a href="#" className="hover:text-gray-300">Contacto</a></li>
              <li><a href="#" className="hover:text-gray-300">Mapa del sitio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Publicar propiedad</a></li>
              <li><a href="#" className="hover:text-gray-300">Tasaciones</a></li>
              <li><a href="#" className="hover:text-gray-300">Agentes inmobiliarios</a></li>
              <li><a href="#" className="hover:text-gray-300">Desarrollos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Términos y condiciones</a></li>
              <li><a href="#" className="hover:text-gray-300">Política de privacidad</a></li>
              <li><a href="#" className="hover:text-gray-300">Política de cookies</a></li>
              <li><a href="#" className="hover:text-gray-300">Aviso legal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <LinkedInIcon className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm">Suscríbete a nuestro newsletter</p>
              <div className="mt-2 flex">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="px-3 py-2 bg-white text-gray-900 rounded-l-lg flex-1"
                />
                <button className="px-4 py-2 bg-zonaprop-orange text-white rounded-r-lg hover:bg-orange-600 transition duration-300">
                  Suscribir
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Zonaprop. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;