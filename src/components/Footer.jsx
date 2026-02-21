import { Link } from 'react-router-dom';
// Importando os ícones para a seção de contato e horários
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-zinc-300 py-16 px-8 md:px-16 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Coluna 1: Logo e Sobre */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-6">
            <span className="text-2xl font-bold bg-white text-black px-2 py-1 rounded">FOX</span>
            <span className="text-2xl font-bold text-white">Art<span className="text-orange-500">Fox</span></span>
          </Link>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Soluções completas em comunicação visual, impressão offset e digital com qualidade e agilidade.
          </p>
        </div>

        {/* Coluna 2: Navegação */}
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Navegação</h4>
          <nav className="flex flex-col gap-3 text-sm">
            <Link to="/" className="hover:text-orange-500 transition-colors">Início</Link>
            <Link to="/sobre" className="hover:text-orange-500 transition-colors">Sobre</Link>
            <Link to="/servicos" className="hover:text-orange-500 transition-colors">Serviços</Link>
            <Link to="/portfolio" className="hover:text-orange-500 transition-colors">Portfólio</Link>
            <Link to="/contato" className="hover:text-orange-500 transition-colors">Contato</Link>
          </nav>
        </div>

        {/* Coluna 3: Contato */}
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Contato</h4>
          <ul className="flex flex-col gap-4 text-sm text-zinc-400">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-orange-500" />
              <span>(00) 0000-0000</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-orange-500" />
              <span>contato@artfox.com.br</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-orange-500 flex-shrink-0 mt-1" />
              <span>Rua Exemplo, 123 - Centro<br />Cidade - UF</span>
            </li>
          </ul>
        </div>

        {/* Coluna 4: Horário */}
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Horário</h4>
          <ul className="flex flex-col gap-4 text-sm text-zinc-400">
            <li className="flex items-center gap-3">
              <Clock size={18} className="text-orange-500" />
              <span>Seg a Sex: 08h - 18h</span>
            </li>
            <li className="pl-7">Sáb: 08h - 12h</li>
            <li className="pl-7">Dom: Fechado</li>
          </ul>
        </div>
      </div>

      {/* Barra inferior (Copyright) */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-zinc-800 text-center text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} ArtFox Comunicação Visual. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}