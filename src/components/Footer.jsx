import React from 'react';

export default function Footer({handleReset}) {
  return (
    <div>
      <button onClick={handleReset}>RESET</button>
    </div>
  )
}
