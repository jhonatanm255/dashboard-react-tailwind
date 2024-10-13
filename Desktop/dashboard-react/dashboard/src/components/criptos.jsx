import React from "react";
import btc from "../imagenes/btc.svg";
import ada from "../imagenes/ada.svg";
import eth from "../imagenes/eth.svg";
import ltc from "../imagenes/ltc.svg";
import usdt from "../imagenes/usdt.svg";
import xrp from "../imagenes/xrp.svg";

function Cripto({ icon, nombre, precio, vol }) {
  // Recibir props
  return (
    <div className="cripto-card">
      {/* Muestra la imagen de la criptomoneda */}
      <img src={icon} alt={`${nombre} logo`} className="cripto-icon" />
      {/* Muestra el nombre de la criptomoneda */}
      <h3 className="cripto-name">{nombre}</h3>
      {/* Muestra el precio de la criptomoneda */}
      <p className="cripto-price">Precio: {precio}</p>
      {/* Muestra el volumen de la criptomoneda */}
      <p className="cripto-volume">Volumen: {vol}</p>
    </div>
  );
}

export default Cripto;
