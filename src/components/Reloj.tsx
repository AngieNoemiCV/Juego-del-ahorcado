import React, { useState, useEffect } from 'react';

interface TiempoProps {
  intervalo?: number; 
}

const Tiempo: React.FC<TiempoProps> = ({ intervalo = 1000 }) => {
  const [segundosTotales, setSegundosTotales] = useState<number>(0); 

  useEffect(() => {
    const key = setInterval(() => {
      setSegundosTotales((prevSegundosTotales) => prevSegundosTotales + 1); 
    }, intervalo);

    return () => {
      clearInterval(key); 
    };
  }, [intervalo]); 
  
  const horas = Math.floor(segundosTotales / 3600);
  const minutos = Math.floor((segundosTotales % 3600) / 60);
  const segundos = segundosTotales % 60;

  return (
    <div>
      <p>
      Tiempo trasncurrido:  
      {horas < 10 ? ' 0' + horas : horas} : {minutos < 10 ? '0' + minutos : minutos} : {segundos < 10 ? '0' + segundos : segundos} 
      </p>
    </div>
  );
};

export default Tiempo;
