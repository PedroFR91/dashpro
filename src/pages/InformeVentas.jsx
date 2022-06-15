import React from 'react';
import ImageList from '../components/ImageList';
import Options from '../components/Options';
function InformeVentas() {
  return (
    <>
      <div
        style={{ width: '70%', position: 'absolute', left: '40%', top: '15%' }}
      >
        <ImageList />
      </div>
      <Options />
    </>
  );
}

export default InformeVentas;
