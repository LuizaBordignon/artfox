import { Phone, MessageSquare, Mail, Clock, MapPin } from 'lucide-react';

export default function Contato() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50 py-16 px-8 md:py-24 md:px-16">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* COLUNA ESQUERDA: Informações de Contato */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Informações de <span className="text-orange-500">Contato</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card Telefone */}
            <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-lg hover:border-orange-300 transition-all duration-300 cursor-pointer hover:-translate-y-1">
              <div className="bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                <Phone size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors duration-300">Telefone</h3>
              <p className="text-gray-500">(00) 0000-0000</p>
            </div>

            {/* Card WhatsApp */}
            <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-lg hover:border-orange-300 transition-all duration-300 cursor-pointer hover:-translate-y-1">
              <div className="bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                <MessageSquare size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors duration-300">WhatsApp</h3>
              <p className="text-orange-500 font-medium">(00) 0000-0000</p>
            </div>

            {/* Card E-mail */}
            <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-lg hover:border-orange-300 transition-all duration-300 cursor-pointer hover:-translate-y-1">
              <div className="bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                <Mail size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors duration-300">E-mail</h3>
              <p className="text-gray-500">contato@artfox.com.br</p>
            </div>

            {/* Card Horário */}
            <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-lg hover:border-orange-300 transition-all duration-300 cursor-pointer hover:-translate-y-1">
              <div className="bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                <Clock size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors duration-300">Horário</h3>
              <p className="text-gray-500 text-sm">Seg a Sex: 08h - 18h<br />Sáb: 08h - 12h</p>
            </div>

            {/* Card Endereço */}
            <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start md:col-span-2 hover:shadow-lg hover:border-orange-300 transition-all duration-300 cursor-pointer hover:-translate-y-1">
              <div className="bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                <MapPin size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors duration-300">Endereço</h3>
              <p className="text-gray-500">R. Pref. Américo Cadorin, 113 - Centro, Urussanga - SC, 88840-000</p>
            </div>

          </div>
        </div>

       {/* COLUNA DIREITA: Mapa */}
        <div className="flex flex-col">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Nossa <span className="text-orange-500">Localização</span>
          </h2>
          
          {/* Caixa do Mapa com bordas arredondadas */}
          <div className="flex-1 w-full rounded-2xl overflow-hidden border border-gray-200 shadow-sm min-h-[400px] bg-gray-100 relative">
            
            {/* O iframe do Google Maps */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.721114108897!2d-49.32088710000001!3d-28.5180373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9521744df2b664e3%3A0x87e3c67e71782496!2sR.%20Pref.%20Am%C3%A9rico%20Cadorin%2C%20113%20-%20Centro%2C%20Urussanga%20-%20SC%2C%2088840-000!5e0!3m2!1spt-BR!2sbr!4v1771695026866!5m2!1spt-BR!2sbr"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </main>
  );
}