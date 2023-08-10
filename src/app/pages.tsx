// pages/examplePage.tsx
import React from 'react';
import Button from '../componentes/botao/Button'

export default function ExamplePage() {
  const handleClick = () => {
    alert('Botão clicado!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Button onClick={handleClick}>Clique em mim</Button>
    </div>
  );
}