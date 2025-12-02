import { Instagram, Linkedin, Globe, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-blue-500 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-300 text-sm md:text-base">
              © {currentYear}. IEEE Student Branch
            </p>
            <p className="text-gray-400 text-sm">
              Graphic Era Hill University, Bhimtal
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/ieee.sb.gehubtl/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition-colors transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/ieee-sb-gehubtl/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://studentbranches.ieee.org/in-gehub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors transform hover:scale-110"
                aria-label="Website"
              >
                <Globe className="w-6 h-6" />
              </a>
            </div>
            <a
              href="mailto:ieee.sb.gehu@gmail.com"
              className="flex items-center gap-2 text-gray-400 hover:text-blue-300 transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              ieee.sb.gehu@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
