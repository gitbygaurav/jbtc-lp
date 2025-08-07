const InspiredBy: React.FC = () => {
  return (
    <div className="w-full bg-[#1C1C1C] text-white">
      <div className="w-full max-w-[1440px] mx-auto py-6 md:py-16 px-2 md:px-8">
        <h2 className="text-3xl md:text-[80px] font-elza-bold font-bold text-center uppercase tracking-tighter mt-6">
          Inspired by Bitcoin. <br />
          Powered by Proof of Holding
        </h2>
        <p className="text-lg text-[#FFFFFF] text-center font-satoshi-medium font-medium mt-3">
          Where the rewards go to holders, not miners.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="flex flex-col justify-between gap-4 md:gap-6">
            <div className="h-full bg-[#2D87F1] text-white px-6 py-10 rounded-xl">
              <p className="text-3xl md:text-5xl font-elza-bold font-bold uppercase md:leading-14 mb-6 md:mb-0">
                No mining, No staking, Just hold & earn
              </p>
            </div>
            <div className="bg-white text-[#1C1C1C] pt-10 rounded-xl">
              <p className="text-3xl md:text-[42px] font-elza-bold font-bold text-center md:text-start uppercase tracking-tight leading-14 pl-0 md:pl-6">
                Fixed 21M Supply, inspired by BTC
              </p>
              <img
                className="w-full"
                src="/inspired-by/21M.png"
                alt="fixed-21M"
              />
            </div>
          </div>
          <div className="bg-white text-[#1C1C1C] rounded-xl px-6 py-5">
            <h2 className="text-[#2D87F1] text-[120px] md:text-[200px] font-elza-bold font-bold text-center tracking-tight mx-auto">
              PoH
            </h2>
            <p className="text-[25px] md:text-[38px] text-center font-elza-bold font-bold uppercase tracking-tight md:leading-14 md:mt-14">
              Will get rewarded as you hold in wallet
            </p>
            <p className="text-[#596E7F] font-medium text-center mt-2">
              Auto compounding effect
            </p>
          </div>
          <div className="flex flex-col justify-between gap-4 md:gap-6">
            <div className="bg-white text-[#1C1C1C] pl-6 pr-5 pt-10 pb-16 rounded-xl">
              <h2 className="text-3xl md:text-[42px] font-elza-bold font-bold uppercase md:leading-14 mb-4">
                Strong potential for high returns
              </h2>
            </div>
            <div className="bg-white px-6 py-5 rounded-xl">
              <h2 className="text-black text-3xl md:text-[38px] font-elza-bold  font-bold uppercase tracking-tight md:leading-14">
                FULLY DEX Wallet Compatible
              </h2>
              <div className="w-full flex justify-between self-end items-center">
                <div></div>
                <div className="flex gap-4 mt-8">
                  <img
                    className=""
                    loading="lazy"
                    src="/inspired-by/blue-wallet.png"
                    alt="wallet-image"
                  />
                  <img
                    className=""
                    loading="lazy"
                    src="/inspired-by/crypto-wallet.png"
                    alt="wallet-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-4 md:mt-14">
          <button className="bg-blue-500 text-white font-satoshi-bold font-bold px-8 py-3 rounded-xl uppercase">
            Buy Jbtc Now
          </button>
          <button className="bg-white text-[#1C1C1C] font-satoshi-bold font-bold rounded-xl px-8 py-3">
            Open Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default InspiredBy;
