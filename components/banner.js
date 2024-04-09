import React from 'react';

export default function Banner() {
  return (
    <div style={{ position: 'relative' }}> {/* Relative positioning for text */}
      <img
        src="guider.png"
        alt="Guide Image"
        style={{
          width: '1100px',
          height: '270px',
          display: 'block',
          margin: '0 auto',
          marginTop: '130px',
          marginBottom: '100px',
        }}
      />
     <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold text-center">
  TELL ME HOW YOU FEEL...
</div>

    </div>
  );
}
