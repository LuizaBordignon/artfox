import { Target, Eye, Heart } from 'lucide-react';

export default function Sobre() {
  return (
    <main className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION (Banner Escuro com altura fixa e texto à esquerda) */}
      <section className="bg-zinc-900 text-white px-8 md:px-16 min-h-[320px] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full text-left">
          <span className="text-orange-500 font-bold tracking-wider text-sm uppercase mb-4 block">
            Sobre Nós
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Conheça a <span className="text-orange-500">ArtFox</span>
          </h1>
          <p className="text-zinc-300 text-lg max-w-2xl">
            Uma empresa dedicada a transformar ideias em comunicação visual de impacto.
          </p>
        </div>
      </section>

      {/* 2. NOSSA HISTÓRIA */}
      <section className="py-24 px-8 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Textos da História */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
              Nossa <span className="text-orange-500">História</span>
            </h2>
            <div className="text-gray-600 space-y-6 text-lg leading-relaxed">
              <p>
                A ArtFox nasceu da paixão por comunicação visual e pela vontade de oferecer serviços de qualidade com atendimento personalizado. Desde o início, nosso objetivo sempre foi ajudar empresas a se destacarem através de materiais impressos e visuais que realmente fazem a diferença.
              </p>
              <p>
                Com o passar dos anos, investimos em tecnologia e capacitação profissional, ampliando nosso portfólio de serviços para atender às diversas necessidades dos nossos clientes — desde pequenos formatos até grandes projetos de comunicação visual.
              </p>
              <p>
                Hoje, a ArtFox é reconhecida pela qualidade, agilidade e compromisso com cada projeto. Nossa equipa trabalha com dedicação para garantir que cada material entregue supere as expectativas.
              </p>
            </div>
          </div>

          {/* Imagem Placeholder */}
          <div className="bg-zinc-100 rounded-2xl aspect-[4/3] flex flex-col items-center justify-center text-gray-500 shadow-inner">
            <div className="bg-orange-100 text-orange-500 w-20 h-20 rounded-full flex items-center justify-center font-bold text-2xl mb-4">
              AF
            </div>
            <span className="font-medium text-gray-500">Imagem Institucional</span>
          </div>
          
        </div>
      </section>

      {/* 3. MISSÃO, VISÃO E VALORES (Com Efeito Hover!) */}
      <section className="py-24 px-8 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-16">
            Missão, Visão e <span className="text-orange-500">Valores</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card Missão */}
            <div className="group bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-lg hover:border-orange-300 transition-all duration-300 cursor-pointer hover:-translate-y-1">
              <div className="bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white p-5 rounded-full mb-6 transition-colors duration-300">
                <Target size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors duration-300">Missão</h3>
              <p className="text-gray-600 leading-relaxed">
                Oferecer soluções de comunicação visual e impressão de alta qualidade, ajudando empresas a fortalecer sua presença no mercado com agilidade e profissionalismo.
              </p>
            </div>

            {/* Card Visão */}
            <div className="group bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-lg hover:border-orange-300 transition-all duration-300 cursor-pointer hover:-translate-y-1">
              <div className="bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white p-5 rounded-full mb-6 transition-colors duration-300">
                <Eye size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors duration-300">Visão</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser referência regional em comunicação visual, reconhecida pela excelência na entrega e pela confiança dos nossos clientes.
              </p>
            </div>

            {/* Card Valores */}
            <div className="group bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-lg hover:border-orange-300 transition-all duration-300 cursor-pointer hover:-translate-y-1">
              <div className="bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white p-5 rounded-full mb-6 transition-colors duration-300">
                <Heart size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors duration-300">Valores</h3>
              <p className="text-gray-600 leading-relaxed">
                Qualidade, comprometimento, inovação, ética e atendimento personalizado em cada projeto que realizamos.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}