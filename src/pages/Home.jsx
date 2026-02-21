import { Link } from 'react-router-dom';
import { Palette, Printer, Image as ImageIcon, FileText, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      
      {/* 1. SEÇÃO HERO (Topo Escuro) */}
      <section className="bg-zinc-900 text-white py-24 px-8 md:py-32 md:px-16 flex flex-col justify-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Sua marca com a <br />
            <span className="text-orange-500">qualidade</span> que ela <br />
            merece
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl">
            Comunicação visual, impressão offset e digital. Soluções completas para dar vida à identidade da sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/servicos" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold text-center transition-colors">
              Conheça nossos serviços
            </Link>
            <Link to="/contato" className="bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-md font-semibold text-center transition-colors">
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO DE SERVIÇOS (Com efeito Hover atualizado!) */}
      <section className="py-24 px-8 md:px-16 bg-white text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Nossos <span className="text-orange-500">Serviços</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          Oferecemos soluções completas em comunicação visual e impressão para empresas de todos os tamanhos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto text-center">
          
          <div className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:border-orange-300 transition-all duration-300 cursor-pointer hover:-translate-y-1 flex flex-col items-center">
            <div className="bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white p-4 rounded-full mb-6 transition-colors duration-300">
              <Palette size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">Comunicação Visual</h3>
            <p className="text-gray-500 text-sm">Fachadas, letreiros, placas e sinalização para destacar sua marca.</p>
          </div>

          <div className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:border-orange-300 transition-all duration-300 cursor-pointer hover:-translate-y-1 flex flex-col items-center">
            <div className="bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white p-4 rounded-full mb-6 transition-colors duration-300">
              <Printer size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">Impressão Offset</h3>
            <p className="text-gray-500 text-sm">Materiais impressos em larga escala com alta qualidade e acabamento.</p>
          </div>

          <div className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:border-orange-300 transition-all duration-300 cursor-pointer hover:-translate-y-1 flex flex-col items-center">
            <div className="bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white p-4 rounded-full mb-6 transition-colors duration-300">
              <ImageIcon size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">Impressão Digital</h3>
            <p className="text-gray-500 text-sm">Impressões rápidas em pequenas tiragens com resolução excepcional.</p>
          </div>

          <div className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:border-orange-300 transition-all duration-300 cursor-pointer hover:-translate-y-1 flex flex-col items-center">
            <div className="bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white p-4 rounded-full mb-6 transition-colors duration-300">
              <FileText size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">Pequenos Formatos</h3>
            <p className="text-gray-500 text-sm">Cartões de visita, flyers, folders, adesivos e muito mais.</p>
          </div>

        </div>

        <div className="mt-12">
          <Link to="/servicos" className="inline-flex items-center gap-2 border border-gray-300 hover:border-orange-500 hover:text-orange-500 text-gray-700 px-6 py-3 rounded-md font-medium transition-colors">
            Ver todos os serviços
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* 3. SEÇÃO DE PORTFÓLIO */}
      <section className="py-24 px-8 md:px-16 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Trabalhos <span className="text-orange-500">Realizados</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          Conheça alguns dos projetos que desenvolvemos para nossos clientes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* O portfólio já tem o hover da imagem escurecendo, então deixamos como está */}
          <div className="group relative bg-zinc-800 rounded-xl overflow-hidden aspect-[4/5] flex flex-col justify-end text-left hover:shadow-xl transition-shadow cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center text-zinc-600 group-hover:scale-110 transition-transform duration-500">
               <ImageIcon size={64} strokeWidth={1} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="relative z-10 p-6">
              <span className="text-orange-500 text-xs font-bold tracking-wider uppercase mb-1 block">Comunicação Visual</span>
              <h3 className="text-white text-xl font-semibold">Fachada Comercial</h3>
            </div>
          </div>
          <div className="group relative bg-zinc-800 rounded-xl overflow-hidden aspect-[4/5] flex flex-col justify-end text-left hover:shadow-xl transition-shadow cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center text-zinc-600 group-hover:scale-110 transition-transform duration-500">
               <ImageIcon size={64} strokeWidth={1} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="relative z-10 p-6">
              <span className="text-orange-500 text-xs font-bold tracking-wider uppercase mb-1 block">Impressão Offset</span>
              <h3 className="text-white text-xl font-semibold">Material Corporativo</h3>
            </div>
          </div>
          <div className="group relative bg-zinc-800 rounded-xl overflow-hidden aspect-[4/5] flex flex-col justify-end text-left hover:shadow-xl transition-shadow cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center text-zinc-600 group-hover:scale-110 transition-transform duration-500">
               <ImageIcon size={64} strokeWidth={1} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="relative z-10 p-6">
              <span className="text-orange-500 text-xs font-bold tracking-wider uppercase mb-1 block">Impressão Digital</span>
              <h3 className="text-white text-xl font-semibold">Banner Promocional</h3>
            </div>
          </div>
          <div className="group relative bg-zinc-800 rounded-xl overflow-hidden aspect-[4/5] flex flex-col justify-end text-left hover:shadow-xl transition-shadow cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center text-zinc-600 group-hover:scale-110 transition-transform duration-500">
               <ImageIcon size={64} strokeWidth={1} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="relative z-10 p-6">
              <span className="text-orange-500 text-xs font-bold tracking-wider uppercase mb-1 block">Pequenos Formatos</span>
              <h3 className="text-white text-xl font-semibold">Cartão de Visita Premium</h3>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Link to="/portfolio" className="inline-flex items-center gap-2 border border-gray-300 hover:border-orange-500 hover:text-orange-500 text-gray-700 px-6 py-3 rounded-md font-medium transition-colors bg-white">
            Ver portfólio completo
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* 4. SEÇÃO CTA */}
      <section className="bg-orange-500 text-white py-24 px-8 text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Pronto para transformar sua comunicação visual?
        </h2>
        <p className="text-orange-100 text-lg md:text-xl mb-10 max-w-2xl">
          Entre em contato conosco e solicite um orçamento sem compromisso. Estamos prontos para atender você.
        </p>
        <Link to="/contato" className="bg-zinc-900 hover:bg-black text-white px-10 py-4 rounded-md font-semibold text-lg transition-colors">
          Entre em contato
        </Link>
      </section>

    </main>
  );
}