import React from 'react';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
function Options() {
  return (
    <div
      style={{
        display: 'flex',
        width: '250px',
        justifyContent: 'space-evenly',
        position: 'absolute',
        top: '20%',
        left: '20%',
      }}
    >
      <div>
        <p>Exportar PDF</p>
        <PictureAsPdfIcon />
      </div>
      <div>
        <p>Exportar Excel</p>
        <InsertDriveFileIcon />
      </div>
    </div>
  );
}

export default Options;
