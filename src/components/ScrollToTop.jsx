import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  // O useLocation nos diz em qual página o usuário está agora
  const { pathname } = useLocation();

  useEffect(() => {
    // Toda vez que o 'pathname' (o link da página) mudar, ele joga a tela pro topo (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]);

  // Este componente não renderiza nada na tela, ele só age nos bastidores
  return null;
}