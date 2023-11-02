
import Header from './components/Header';
import Inicio from './components/Inicio';
import Articulo from './components/Articulo';
import Tecnologia from './components/Tecnologia';
import React, { Suspense } from 'react';
import Feedback from './components/Feedback';
const Comentarios = React.lazy(() => import('./components/Comentarios'));
// Utiliza `React.lazy` para cargar dinámicamente el componente


function App() {
  return (
    <div>
      <Header/>
      <Inicio/>
      <Articulo/>
      <Feedback/>
      <Tecnologia/>
      
      {/* Utiliza `Suspense` para mostrar algún contenido de respaldo mientras se carga el componente */}
      <Suspense fallback={<div>Cargando...</div>}>
        <Comentarios />
      </Suspense>

      {/* Footer */}
    </div>
  );
}

export default App;