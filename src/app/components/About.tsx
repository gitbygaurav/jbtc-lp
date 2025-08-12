const About: React.FC = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto py-6 md:py-8 px-2 md:px-8">
      <h2 className="text-[#1C1C1C] text-2xl md:text-[70px] leading-[24px] md:leading-[70px] text-center font-elza-bold-condensed font-bold tracking-[-2.2%] uppercase">
        This Is Not a Meme Coin. <br />
        It's the Next Era of Holding.
      </h2>
      <p className="text-[#333333] text-base md:text-xl text-center font-satoshi-medium mt-4">
        You missed on BTC, Don't miss on Junior BTC.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8  mt-8">
        <div className="bg-white flex flex-col items-center justify-center rounded-shadow border border-[#DDDDDD80] py-6 rounded-xl">
            <p className="text-[#1C1C1C] text-[22px] md:text-[40px] font-elza-bold-condensed uppercase">Proof of Holding</p>
            <p className="text-[#596E7F] text-lg font-satoshi-regular mt-2">Your wallet mines for you</p>
        </div>
        <div className="bg-white flex flex-col items-center justify-center rounded-shadow border border-[#DDDDDD80] py-6 rounded-xl">
            <p className="text-[#1C1C1C] text-[22px] md:text-[40px] font-elza-bold-condensed uppercase">Daily Income</p>
            <p className="text-[#596E7F] text-lg font-satoshi-regular mt-2">Up to 0.5% daily rewards</p>
        </div>
        <div className="bg-white flex flex-col items-center justify-center rounded-shadow border border-[#DDDDDD80] py-6 rounded-xl">
            <p className="text-[#1C1C1C] text-[22px] md:text-[40px] font-elza-bold-condensed uppercase">Real-World Vision</p>
            <p className="text-[#596E7F] text-lg font-satoshi-regular mt-2">Sustainable cryptocurrency future</p>
        </div>
      </div>
      <div className="bg-white flex flex-col justify-center items-center border border-[#DDDDDD80] rounded-shadow mt-6 px-4 py-6 rounded-xl">
        <p className="text-[#2D87F1] text-[22px] md:text-[28px] text-center font-elza-bold-condensed uppercase">The future belongs to those who hold, not those who mine.</p>
        <p className="text-[#47566B] text-lg text-center font-satoshi-regular mt-4">Join thousands of holders already earning daily rewards with Junior Bitcoin. The earlier you start, the more you'll earn over the 45-year distribution period.</p>
      </div>
      <div className="w-full h-[550px] md:h-auto tokenomics-gradient md:flex justify-between rounded-xl pt-8 md:pt-0 mt-8 relative">
        <div className="md:flex flex-col items-start justify-center md:pl-8">
            <h4 className="text-white text-[28px] md:text-[54px] text-center md:text-start font-elza-bold-condensed uppercase">Still have questions?</h4>
            <p className="text-[#CCEAFF] text-lg text-center md:text-start font-satoshi-regular">Join our community for real-time support and updates</p>
            <div className="flex justify-center md:justify-start gap-4 mt-4">
                <button className="bg-[#2D87F1] text-white font-satoshi-bold py-2 px-4 md:px-8 rounded-lg uppercase">Community</button>
                <button className="bg-white text-[#002540] font-satoshi-bold py-2 px-6 md:px-12 rounded-lg uppercase">Support</button>
            </div>
        </div>
        <img className="hidden md:block rounded-r-xl" loading="lazy" src="/about/coin.png" alt="coin" />
        <img className="absolute bottom-0 right-0 md:hidden" loading="lazy" src="/about/mobile-coin.png" alt="coin" />
      </div>
    </div>
  );
};

export default About;
