import React from 'react';

function Header() {
  return (
    <div
      style={{
        width: '100%',
        height: '10vh',
        borderBottom: '1px solid grey',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <h1>LOGO</h1>
      </div>
      <div>
        <input type='text' name='' id='' placeholder='Usuario' />
        <input type='text' name='' id='' placeholder='Contraseña' />
        <button>Acceder</button>
      </div>
    </div>
  );
}

export default Header;
