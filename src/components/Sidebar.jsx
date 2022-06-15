import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div
      style={{
        width: '20%',
        height: '90vh',
        borderRight: '1px solid grey',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      }}
    >
      <Link to='/'>
        <div
          style={{
            width: '80%',
            height: '40px',
            textAlign: 'center',
            border: '1px solid black',
            borderRadius: '5px',
            margin: '0 auto',
            cursor: 'pointer',
          }}
        >
          Home
        </div>
      </Link>
      <Link to='/bestsellers'>
        <div
          style={{
            width: '80%',
            height: '40px',
            textAlign: 'center',
            border: '1px solid black',
            borderRadius: '5px',
            margin: '0 auto',
            cursor: 'pointer',
          }}
        >
          Best Sellers
        </div>
      </Link>
      <Link to='/informeventas'>
        {' '}
        <div
          style={{
            width: '80%',
            height: '40px',
            textAlign: 'center',
            border: '1px solid black',
            borderRadius: '5px',
            margin: '0 auto',
            cursor: 'pointer',
          }}
        >
          Informe de ventas
        </div>
      </Link>
      <Link to='/informeproductos'>
        {' '}
        <div
          style={{
            width: '80%',
            height: '40px',
            textAlign: 'center',
            border: '1px solid black',
            borderRadius: '5px',
            margin: '0 auto',
            cursor: 'pointer',
          }}
        >
          Informe de productos
        </div>
      </Link>
      <Link to='/servicios'>
        <div
          style={{
            width: '80%',
            height: '40px',
            textAlign: 'center',
            border: '1px solid black',
            borderRadius: '5px',
            margin: '0 auto',
            cursor: 'pointer',
          }}
        >
          Servicios
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
