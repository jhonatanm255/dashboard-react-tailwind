import React, { useEffect, useState, useRef } from "react";

// Componente que gestiona las conexiones WebSocket y muestra los datos en tiempo real
const CryptoDashboard = () => {
  // Definir los símbolos de las criptomonedas
  const cryptoSymbols = [
    "btcusdt",
    "ethusdt",
    "adausdt",
    "dotusdt",
    "bnbusdt",
    "solusdt",
    "ltcusdt",
    "avaxusdt",
  ];

  // Estados para almacenar el precio y el volumen de cada criptomoneda
  const [cryptoData, setCryptoData] = useState({});
  const wsRef = useRef({}); // Referencia para almacenar las conexiones WebSocket
  const isDarkMode = true; // Variable para el modo oscuro (puedes cambiarla dinámicamente)

  // Función para inicializar las conexiones WebSocket
  const initializeWebSocket = (symbol) => {
    const tradeSocket = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@trade`
    );
    const tickerSocket = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@ticker`
    );

    // Almacenar las conexiones en la referencia
    wsRef.current[symbol] = { tradeSocket, tickerSocket };

    // Manejar el mensaje recibido para el precio
    tradeSocket.onmessage = (event) => {
      const stockObject = JSON.parse(event.data);
      const price = parseFloat(stockObject.p).toFixed(2);

      // Actualizar el estado del precio
      setCryptoData((prevData) => ({
        ...prevData,
        [symbol]: {
          ...prevData[symbol],
          price: price,
        },
      }));
    };

    // Manejar el mensaje recibido para el volumen
    tickerSocket.onmessage = (event) => {
      const tickerData = JSON.parse(event.data);
      const volumeChange = parseFloat(tickerData.P);

      // Actualizar el estado del volumen
      setCryptoData((prevData) => ({
        ...prevData,
        [symbol]: {
          ...prevData[symbol],
          volume: volumeChange,
        },
      }));
    };

    // Cerrar los sockets al desmontar
    tradeSocket.onclose = () =>
      console.log(`WebSocket ${symbol} (Trade) cerrado.`);
    tickerSocket.onclose = () =>
      console.log(`WebSocket ${symbol} (Ticker) cerrado.`);
    tradeSocket.onerror = (error) =>
      console.error(`WebSocket ${symbol} (Trade) error:`, error);
    tickerSocket.onerror = (error) =>
      console.error(`WebSocket ${symbol} (Ticker) error:`, error);
  };

  // Inicializar todos los WebSocket al cargar el componente
  useEffect(() => {
    cryptoSymbols.forEach((symbol) => initializeWebSocket(symbol));

    // Cerrar todas las conexiones al desmontar el componente
    return () => {
      cryptoSymbols.forEach((symbol) => {
        if (wsRef.current[symbol]) {
          wsRef.current[symbol].tradeSocket.close();
          wsRef.current[symbol].tickerSocket.close();
        }
      });
    };
  }, []);


  return (
    <div className="mt-1 rounded-2xl text-white bg-green-100 py-12">
      <h1 className="text-3xl font-bold m-1 text-slate-600">
        Crypto Dashboard
      </h1>
      <div className="grid m-auto py-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cryptoSymbols.map((symbol) => (
          <div key={symbol} className="p-4 bg-white rounded-xl shadow-lg">
              <h2 className="text-lg text-slate-800 font-semibold mb-2 uppercase">
                {symbol}
              </h2>

            <p className="text-slate-800 text-2xl">
              <span className="text-[20px] text-slate-600">Price:</span>{" "}
              {cryptoData[symbol]?.price
                ? `${cryptoData[symbol].price} $`
                : "Loading..."}
            </p>
            <p
              className={`text-xl mt-2 ${
                cryptoData[symbol]?.volume >= 0
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              <span className="text-[18px] text-slate-600">Vol 24h:</span>{" "}
              {cryptoData[symbol]?.volume
                ? `${cryptoData[symbol].volume} %`
                : "Loading..."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoDashboard;
