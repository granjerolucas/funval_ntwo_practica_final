"use client";
import React, { useEffect, useState } from "react";

const CurrentTime = () => {
  const [horaActual, setHoraActual] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHoraActual(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const formatoHora = horaActual.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    // second: "numeric",
    hour12: true, // Formato de 12 horas con AM/PM
  });
  return <span>{formatoHora}</span>;
};

export default CurrentTime;
