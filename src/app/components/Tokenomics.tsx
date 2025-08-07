const Tokenomics: React.FC = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto py-6 md:py-16 px-2 md:px-8">
      <div className="w-full tokenomics-gradient flex justify-between relative rounded-lg overflow-hidden shadow">
        <div className="flex flex-col justify-between px-5 md:px-10 py-8 md:py-12">
          <h1 className="text-3xl md:text-5xl font-elza-bold font-bold text-white uppercase mb-4">
            Tokenomics
          </h1>
          <div>
            <div>
              <p className="text-[#CFDCE5] text-sm font-satoshi-regular">Name</p>
              <p className="text-white text-xl md:text-3xl font-elza-bold font-bold">JBTC</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="mt-6">
                  <p className="text-[#CFDCE5] text-sm font-satoshi-regular">Total Supply (Fixed)</p>
                  <span className="flex space-x-1 items-center">
                    <p className="text-white text-xl md:text-3xl font-elza-bold font-bold">21,000,000</p>
                    <p className="text-[#CFDCE5] font-satoshi-regular">JBTC (Fixed)</p>
                  </span>
                </div>
                <div className="mt-6">
                  <p className="text-[#CFDCE5] text-sm font-satoshi-regular">Circulating on Day 1</p>
                  <span className="flex space-x-1 items-center">
                    <p className="text-white text-xl md:text-3xl font-elza-bold font-bold">1,000,000</p>
                    <p className="text-[#CFDCE5] font-satoshi-regular">JBTC</p>
                  </span>
                </div>
                <div className="mt-6">
                  <p className="text-[#CFDCE5] text-sm font-satoshi-regular">
                    Distribution Timeline
                  </p>
                  <span className="flex space-x-1 items-center">
                    <p className="text-white text-xl md:text-3xl font-elza-bold font-bold">45yrs</p>
                    <p className="text-[#CFDCE5] font-satoshi-regular">Daily Reward Pool</p>
                  </span>
                </div>
              </div>
              <div>
                <div className="md:mt-6">
                  <p className="text-[#CFDCE5] text-sm font-satoshi-regular">Network</p>
                  <span className="flex space-x-1 items-center">
                    <p className="text-white text-xl md:text-3xl font-elza-bold font-bold">BSC</p>
                    <p className="text-[#CFDCE5] font-satoshi-regular">(BEP-20)</p>
                  </span>
                </div>
                <div className="mt-6">
                  <p className="text-[#CFDCE5] text-sm font-satoshi-regular">Locked in Contract</p>
                  <span className="flex space-x-1 items-center">
                    <p className="text-white text-xl md:text-3xl font-elza-bold font-bold">20,000,000</p>
                    <p className="text-[#CFDCE5] font-satoshi-regular">JBTC</p>
                  </span>
                </div>
                <div className="mt-6">
                  <p className="text-[#CFDCE5] text-sm font-satoshi-regular">Daily Reward Pool</p>
                  <span className="flex space-x-1 items-center">
                    <p className="text-white text-xl md:text-3xl font-elza-bold font-bold">5,000 </p>
                    <p className="text-[#CFDCE5] font-satoshi-regular">JBTC/Day</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="hidden md:block mt-6"
          loading="lazy"
          src="/tokenomics/Coin.png"
          alt="Coin"
        />
        <img
          className="w-42 h-42 block md:hidden absolute bottom-0 right-0 object-cover"
          loading="lazy"
          src="/tokenomics/Coin.png"
          alt="Tokenomics Background"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-6">
        <div className="bg-white rounded-xl p-6 rounded-shadow border border-[#CFDCE5]">
          <h3 className="text-[#1C1C1C] text-3xl md:text-[42px] font-elza-bold font-bold text-center md:text-start uppercase">Supply Distribution</h3>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 my-4">
            <img loading="lazy" src="/tokenomics/doughnut.png" alt="Supply Distribution Chart" />
            <div>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-[#2D87F1]"></span>
                <p className="text-[#596E7F] text-sm font-satoshi-regular">Locked Rewards (20M)</p>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-[#002540]"></span>
                <p className="text-[#596E7F] text-sm font-satoshi-regular">Circulating (1M)</p>
              </div>
            </div>
          </div>
          
        </div>
        <div className="bg-white rounded-xl p-6 rounded-shadow border border-[#CFDCE5]">
            <h3 className="text-[#1C1C1C] text-3xl md:text-[42px] font-elza-bold font-bold text-center md:text-start uppercase">Daily Pool Reduction</h3>
            <div className="my-4">

            <img loading="lazy" src="/tokenomics/chart.png" alt="chart" />
            <p className="text-[#596E7F] text-sm text-center font-satoshi-regular mt-1">Daily reward pool decreases yearly to ensure sustainability</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Tokenomics;
