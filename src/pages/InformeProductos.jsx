import React from 'react';
import Card from '../components/Card';
import Options from '../components/Options';
function InformeProductos() {
  return (
    <>
      <div
        style={{ width: '70%', position: 'absolute', left: '50%', top: '30%' }}
      >
        <Card />
      </div>
      <Options />
    </>
  );
}

export default InformeProductos;
