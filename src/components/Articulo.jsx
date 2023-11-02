import React, { useState, useEffect } from 'react';

function Articulo() {
  const [articulos, setArticulos] = useState([
    { 
      id: 1, 
      contenido: 'Una fractura de menisco es una lesión común en el deporte. El menisco es un pedazo de cartílago en la rodilla que amortigua y estabiliza la articulación. La intervención médica puede incluir fisioterapia, medicamentos para el dolor y, en algunos casos, cirugía. La rehabilitación es crucial después de la intervención médica para recuperar la fuerza y la movilidad en la rodilla.' 
    } // Artículo inicial
  ]);

  // Simula la carga de un nuevo artículo cada 7 días
  useEffect(() => {
    const interval = setInterval(() => {
      setArticulos((prevArticulos) => [...prevArticulos, { id: prevArticulos.length + 1, contenido: 'El músculo esquelético es un tipo de músculo estriado que está unido al esqueleto...' }]);
    }, 7 * 24 * 60 * 60 * 1000); // Cada 7 días

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: 'center', fontSize:'20px' }}> {/* Añade estilo para centrar el texto */}
      {articulos.map((articulo) => (
        <div key={articulo.id}>
          <h2>Artículo {articulo.id}</h2>
          <p>{articulo.contenido}</p>
        </div>
      ))}
    </div>
  );
}

export default Articulo;
