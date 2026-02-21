import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Importando os ícones do menu

export default function Header() {
  // Estado para controlar se o menu do celular está aberto ou fechado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Estilo dos links (adicionamos 'block py-2' para eles ficarem bonitos no celular também)
  const navLinkClass = ({ isActive }) => 
    isActive 
      ? "text-orange-500 font-semibold transition-colors block py-2 md:py-0" 
      : "hover:text-orange-500 transition-colors block py-2 md:py-0 text-zinc-300 md:text-white";

  // Função para rolar para o topo E fechar o menu do celular ao clicar
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false); // Fecha o menu do celular automaticamente
  };

  return (
    <header className="sticky top-0 z-50 bg-black text-white border-b border-gray-800">
      {/* Barra principal fixa */}
      <div className="py-4 px-8 flex justify-between items-center max-w-7xl mx-auto w-full">
        
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={handleClick}>
          <img 
            src="/logo.png" 
            alt="Logo ArtFox" 
            className="h-10 w-auto object-contain" 
          />
        </Link>

        {/* Menu de Navegação (DESKTOP) - Fica oculto no celular (hidden) e aparece a partir do tablet (md:flex) */}
        <nav className="hidden md:flex gap-8 font-medium items-center">
          <NavLink to="/" className={navLinkClass} onClick={handleClick}>Início</NavLink>
          <NavLink to="/sobre" className={navLinkClass} onClick={handleClick}>Sobre</NavLink>
          <NavLink to="/servicos" className={navLinkClass} onClick={handleClick}>Serviços</NavLink>
          <NavLink to="/portfolio" className={navLinkClass} onClick={handleClick}>Portfólio</NavLink>
          <NavLink to="/contato" className={navLinkClass} onClick={handleClick}>Contato</NavLink>
          
          <Link 
            to="/contato" 
            onClick={handleClick} 
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold transition-colors ml-4"
          >
            Solicitar Orçamento
          </Link>
        </nav>

        {/* Botão do Menu Hambúrguer (MOBILE) - Aparece no celular e some no desktop (md:hidden) */}
        <button 
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Se estiver aberto mostra o X, se estiver fechado mostra os 3 traços */}
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Dropdown do Menu (MOBILE) - Só aparece se isMenuOpen for true */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800 px-8 py-6 flex flex-col gap-4 absolute w-full shadow-2xl">
          <NavLink to="/" className={navLinkClass} onClick={handleClick}>Início</NavLink>
          <NavLink to="/sobre" className={navLinkClass} onClick={handleClick}>Sobre</NavLink>
          <NavLink to="/servicos" className={navLinkClass} onClick={handleClick}>Serviços</NavLink>
          <NavLink to="/portfolio" className={navLinkClass} onClick={handleClick}>Portfólio</NavLink>
          <NavLink to="/contato" className={navLinkClass} onClick={handleClick}>Contato</NavLink>
          
          <Link 
            to="/contato" 
            onClick={handleClick} 
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-semibold text-center mt-4 transition-colors"
          >
            Solicitar Orçamento
          </Link>
        </div>
      )}
    </header>
  );
}