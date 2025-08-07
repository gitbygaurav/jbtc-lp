const Hero: React.FC = () => {
  return (
    <div className="bg-cover bg-center">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center justify-center px-2 md:px-0">
        <div className="text-center mt-8">
          <h2 className="text-[28px] md:text-[100px] md:leading-28 tracking-tight font-elza-bold font-bold uppercase">
            You Missed on BTC,<br /> Don’t Miss on Junior BTC
          </h2>
          <p className="w-full mx-auto md:w-11/12 text-[#596E7F] text-base md:text-[22px] font-satoshi-medium mt-4">JBTC is a fully decentralized, permissionless smart contract-based protocol. No one can mint more.
No one can reverse claims. No central entity can freeze or alter your rewards.</p>
        </div>
        <img className="w-xl" loading="lazy" src="/hero/coin.png" alt="coin" />
      </div>
    </div>
  );
};

export default Hero;
