const NoiseOverlay = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 opacity-20">
      <div 
        className="absolute inset-[-200%] w-[400%] h-[400%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"
        style={{ 
            filter: 'contrast(150%) brightness(150%)',
            animation: 'noise 0.2s infinite',
        }}
      ></div>
      <style>{`
        @keyframes noise {
          0% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -5%); }
          20% { transform: translate(-10%, 5%); }
          30% { transform: translate(5%, -10%); }
          40% { transform: translate(-5%, 15%); }
          50% { transform: translate(-10%, 5%); }
          60% { transform: translate(15%, 0); }
          70% { transform: translate(0, 10%); }
          80% { transform: translate(-15%, 0); }
          90% { transform: translate(10%, 5%); }
          100% { transform: translate(5%, 0); }
        }
      `}</style>
    </div>
  );
};

export default NoiseOverlay;
