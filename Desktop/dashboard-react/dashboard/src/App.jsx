import React, { useState } from "react";
import Navbar from "./components/navegacion";
import Titulo from "./components/titulo";
import Cards from "./components/cards";
import "./App.css";
import Order from "./components/order";
import Cripto from "./components/criptos";
import Criptos from "./components/logicacripto";
import Aside from "./components/aside";
import TradingViewWidget from "./components/widget";

function App() {
  const [isAsideVisible, setAsideVisible] = useState(false);

  const toggleAside = () => {
    setAsideVisible(!isAsideVisible);
  };

  return (
    <div className="bg-[#F4F4F4]">
      <Navbar toggleAside={toggleAside} isAsideVisible={isAsideVisible} />

      {/* GRID CON ASIDE A LA IZQUIERDA Y CONTENIDO */}
      <div className="grid grid-cols-1 lg:grid-cols-[24%_74.5%] gap-4">
        {/* ASIDE */}
        <Aside isVisible={isAsideVisible} />

        {/* Contenedor para Titulo y Cards */}
        <div>
          <Titulo />

          {/* CARDS */}
          <div className="mt-8 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
            <Cards
              icon={
                <div className="font-semibold text-3xl text-yellow-500 bg-yellow-100 p-6 rounded-xl">
                  UF
                </div>
              }
              text="Primera tarjeta con ícono de estrella"
            />

            <Cards
              icon={
                <div className="font-semibold text-3xl text-blue-500 bg-blue-100 p-6 rounded-xl">
                  UTM
                </div>
              }
              text="Segunda tarjeta con ícono de corazón"
            />

            <Cards
              icon={
                <div className="font-semibold text-3xl text-red-500 bg-red-100 p-6 rounded-xl">
                  IPC
                </div>
              }
              text="Tercera tarjeta con ícono de campana"
            />

            <Cards
              icon={
                <div className="font-semibold text-3xl text-orange-500 bg-orange-100 p-6 rounded-xl">
                  €
                </div>
              }
              text="Primera tarjeta con ícono de estrella"
            />

            <Cards
              icon={
                <div className="font-semibold text-3xl text-green-500 bg-green-100 p-6 rounded-xl">
                  $
                </div>
              }
              text="Segunda tarjeta con ícono de corazón"
            />

            <Cards
              icon={
                <div className="font-semibold text-3xl text-purple-500 bg-purple-100 p-6 rounded-xl">
                  IMC
                </div>
              }
              text="Tercera tarjeta con ícono de campana"
            />
          </div>
        </div>
      </div>

      {/* ORDER */}
      <div>
        <Order />
      </div>

      {/* CRIPTOS */}
      <div>
        <Criptos />
      </div>

      <div>
        <h1 className="text-3xl ml-4 mt-16 font-bold text-slate-600 mb-6">
          Company Shares
        </h1>
        <TradingViewWidget />
      </div>
    </div>
  );
}

export default App;
