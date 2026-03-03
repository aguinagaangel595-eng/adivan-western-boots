import { Link } from "react-router-dom";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="font-serif text-3xl font-bold tracking-tight">
                ADIVAN
              </span>
            </Link>
            <p className="text-sm text-accent-foreground/80 max-w-sm">
              Artículos de cuero hechos a mano que combinan tradición occidental con artesanía moderna. 
              Cada pieza cuenta una historia de autenticidad y calidad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-sm hover:text-secondary transition-colors">
                  Tienda
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-secondary transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/craftsmanship" className="text-sm hover:text-secondary transition-colors">
                  Artesanía
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-secondary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Conecta</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-accent-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-accent-foreground/80">
            <p>&copy; {currentYear} ADIVAN. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-secondary transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/terms" className="hover:text-secondary transition-colors">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
