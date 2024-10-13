import React, { useEffect, useRef } from 'react';

const TradingViewWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const loadLightModeWidget = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';

      const widgetOptions = {
        "symbols": [
          ["Apple", "AAPL|1D"],
          ["Google", "GOOGL|1D"],
          ["Microsoft", "MSFT|1D"],
          ["Tesla", "TSLA|1D"],
          ["Meta", "META|1D"],
          ["Amazon", "AMZN|1D"],
          ["Netflix", "NFLX|1D"],
          ["Nvidia", "NVDA|1D"],
          ["Amd", "AMD|1D"],
          ["Alibaba", "BABA|1D"],
          ["Paypal", "PYPL|1D"],
          ["Uber", "UBER|1D"],
          ["Intel", "INTC|1D"],
          ["Airbnb", "ABNB|1D"],
          ["Mercado Libre", "MELI|1D"],
          ["Sony", "SONY|1D"],
          ["Shopify", "SHOP|1D"],
          ["Dell", "DELL|1D"],
        ],
        "colorTheme": "light",
        "width": "auto",
        "height": 400,
      };

      script.innerHTML = JSON.stringify(widgetOptions);
      container.innerHTML = '';
      container.appendChild(script);
    };

    loadLightModeWidget();
  }, []); // El array vacío asegura que solo se ejecute una vez cuando el componente se monta

  return (
    <div
      id="tradingview-widget-container"
      ref={containerRef} // Asignamos el contenedor al ref
      style={{
        width: '100%', 
        height: '400px',
        borderRadius: '15px',
        overflow: 'hidden',
      }} 
    >
    </div>
  );
};

export default TradingViewWidget;
