import React from 'react';
import caricatura from '../assets/dr.jpg'; // Asegúrate de reemplazar 'dr.jpg' con el nombre real de tu archivo
import adn from '../assets/adn2.jpg';

function Header() {
  return (
    <header style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'left', background:'blue', padding: '40px'}}>
      <img src={adn} alt="ADN" style={{width: '100px', height: '100px', borderRadius: '50px', position: 'relative', top: '40px', left: '40px'}} />
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
        <img src={caricatura} alt="Doctor" style={{width: '240px', height: '240px'}} />
      </div>
    </header>
  )
}

export default Header;

