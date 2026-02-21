import { Palette, Printer, Image as ImageIcon, FileText, PenTool, Layers, Megaphone, BookOpen } from 'lucide-react';

export default function Servicos() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      
      {/* 1. HERO SECTION */}
      <section className="bg-zinc-900 text-white px-8 md:px-16 min-h-[320px] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full text-left">
          <span className="text-orange-500 font-bold tracking-wider text-sm uppercase mb-4 block">
            O que fazemos
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nossos <span className="text-orange-500">Serviços</span>
          </h1>
          <p className="text-zinc-300 text-lg max-w-2xl">
            Oferecemos uma ampla gama de soluções em comunicação visual e impressão para atender às necessidades da sua empresa.
          </p>
        </div>
      </section>

      {/* 2. GRID DE SERVIÇOS */}
      <section className="py-24 px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          
          {/* Card 1 */}
          <div className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:border-orange-300 transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <div className="bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white p-4 rounded-xl inline-block mb-6 transition-colors duration-300">
              <Palette size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">Comunicação Visual</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Fachadas, letreiros, placas de sinalização, totens, painéis e adesivação. Tudo para destacar a identidade visual da sua empresa no ponto de venda e no ambiente corporativo.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:border-orange-300 transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <div className="bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white p-4 rounded-xl inline-block mb-6 transition-colors duration-300">
              <Printer size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">Impressão Offset</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Impressão em larga escala com qualidade superior. Ideal para grandes tiragens de cartazes, revistas, catálogos, embalagens e materiais promocionais.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:border-orange-300 transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <div className="bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white p-4 rounded-xl inline-block mb-6 transition-colors duration-300">
              <ImageIcon size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">Impressão Digital</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Impressões rápidas com alta resolução para tiragens menores. Banners, lonas, adesivos, fotos e materiais personalizados com entrega ágil.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:border-orange-300 transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <div className="bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white p-4 rounded-xl inline-block mb-6 transition-colors duration-300">
              <FileText size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">Pequenos Formatos</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Cartões de visita, flyers, folders, panfletos, convites, cardápios, etiquetas e adesivos. Materiais essenciais para o dia a dia da sua empresa.
            </p>
          </div>

          {/* Card 5 */}
          <div className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:border-orange-300 transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <div className="bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white p-4 rounded-xl inline-block mb-6 transition-colors duration-300">
              <PenTool size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">Design Gráfico</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Criação de logotipos, identidade visual, layouts para materiais impressos e digitais. Desenvolvemos o design que comunica a essência da sua marca.
            </p>
          </div>

          {/* Card 6 */}
          <div className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:border-orange-300 transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <div className="bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white p-4 rounded-xl inline-block mb-6 transition-colors duration-300">
              <Layers size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">Acabamentos Especiais</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Laminação, verniz localizado, hot stamping, corte especial e encadernação. Acabamentos que valorizam e diferenciam seus materiais.
            </p>
          </div>

          {/* Card 7 */}
          <div className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:border-orange-300 transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <div className="bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white p-4 rounded-xl inline-block mb-6 transition-colors duration-300">
              <Megaphone size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">Material Promocional</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Brindes personalizados, camisetas, canecas, pen drives e outros itens promocionais para eventos, campanhas e ações de marketing.
            </p>
          </div>

          {/* Card 8 */}
          <div className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:border-orange-300 transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <div className="bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white p-4 rounded-xl inline-block mb-6 transition-colors duration-300">
              <BookOpen size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">Papelaria Corporativa</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Blocos de notas, envelopes, papel timbrado, pastas e toda a papelaria necessária para manter a identidade visual da sua empresa consistente.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}