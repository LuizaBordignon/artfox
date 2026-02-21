import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

export default function Portfolio() {
  // 1. O "Estado" que guarda qual filtro está selecionado (começa com 'Todos')
  const [filtroAtivo, setFiltroAtivo] = useState('Todos');

  // 2. Nossa lista de categorias para os botões
  const categorias = ['Todos', 'Comunicação Visual', 'Impressão Offset', 'Impressão Digital', 'Pequenos Formatos'];

  // 3. Nossa lista (banco de dados falso) de trabalhos realizados
  const trabalhos = [
    { id: 1, categoria: 'Comunicação Visual', titulo: 'Fachada Comercial' },
    { id: 2, categoria: 'Impressão Offset', titulo: 'Material Corporativo' },
    { id: 3, categoria: 'Impressão Digital', titulo: 'Banner Promocional' },
    { id: 4, categoria: 'Pequenos Formatos', titulo: 'Cartão de Visita Premium' },
    { id: 5, categoria: 'Impressão Digital', titulo: 'Adesivo de Vitrine' },
    { id: 6, categoria: 'Comunicação Visual', titulo: 'Letreiro Iluminado' },
  ];

  // 4. A lógica que filtra a lista: Se for 'Todos', mostra tudo. Se não, filtra pela categoria.
  const trabalhosFiltrados = filtroAtivo === 'Todos' 
    ? trabalhos 
    : trabalhos.filter(trabalho => trabalho.categoria === filtroAtivo);

  return (
    <main className="flex flex-col min-h-screen bg-white">
      
      {/* HERO SECTION (Topo Escuro) */}
      <section className="bg-zinc-900 text-white px-8 md:px-16 min-h-[320px] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full text-left">
          <span className="text-orange-500 font-bold tracking-wider text-sm uppercase mb-4 block">
            Nossos Trabalhos
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Portfólio
          </h1>
          <p className="text-zinc-300 text-lg max-w-2xl">
            Confira alguns dos trabalhos que realizamos para nossos clientes. Cada projeto é único e feito com dedicação.
          </p>
        </div>
      </section>

      {/* SEÇÃO DA GALERIA E FILTROS */}
      <section className="py-16 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Menu de Filtros (Botões) */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setFiltroAtivo(categoria)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  filtroAtivo === categoria
                    ? 'bg-orange-500 text-white' // Cor quando está ativo
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200' // Cor quando está inativo
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>

          {/* Grid de Imagens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trabalhosFiltrados.map((trabalho) => (
              // A classe 'group' diz ao Tailwind que este elemento tem um efeito de hover que afeta os filhos
              <div 
                key={trabalho.id} 
                className="group relative bg-gray-50 rounded-xl overflow-hidden aspect-[4/3] flex flex-col items-center justify-center cursor-pointer border border-gray-100"
              >
                {/* Ícone de placeholder */}
                <ImageIcon size={64} className="text-gray-300" strokeWidth={1} />
                
                {/* O overlay escuro que aparece no hover (opacity-0 por padrão, opacity-100 no hover do group) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                  <span className="text-orange-500 text-xs font-bold tracking-wider uppercase mb-1 block">
                    {trabalho.categoria}
                  </span>
                  <h3 className="text-white text-xl font-semibold">
                    {trabalho.titulo}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Mensagem se não houver trabalhos na categoria (opcional, mas boa prática) */}
          {trabalhosFiltrados.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              Nenhum projeto encontrado nesta categoria ainda.
            </div>
          )}

        </div>
      </section>

    </main>
  );
}