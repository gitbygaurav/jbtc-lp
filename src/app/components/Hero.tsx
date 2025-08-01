const Hero: React.FC = () => {
  return (
    <div className="bg-[url('/hero/hero-bg.png')] bg-cover bg-center">
      <div className="w-full max-w-[1920px] mx-auto flex flex-col items-center justify-center">
        <img className="mt-8" loading="lazy" src="/hero/coin.png" alt="coin" />
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-6xl font-semibold mt-2">
            You Missed BTC, Don’t Miss on
          </h2>
          <p className="text-[50px] md:text-[100px] font-bold mb-12">Junior BTC</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
