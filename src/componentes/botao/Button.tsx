import React from "react";

interface BotaoProps {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
  }
  
  function Botao({ children, onClick, className }: BotaoProps) {
    return (
      <button
        onClick={onClick}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
      >
        {children}
      </button>
    );
  }

  export default Botao;