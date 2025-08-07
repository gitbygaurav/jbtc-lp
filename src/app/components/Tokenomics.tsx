const Tokenomics: React.FC = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto py-6 md:py-16 px-2 md:px-8">
      <div className="w-full bg-[#1C1C1C] flex justify-between relative rounded-lg overflow-hidden shadow">
        <div className="flex flex-col justify-between px-10 py-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white uppercase mb-4">
            Tokenomics
          </h1>
          <div>
            <div>
              <p className="text-[#CFDCE5] text-sm">Name</p>
              <p className="text-white text-3xl font-bold">JBTC</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="mt-6">
                  <p className="text-[#CFDCE5] text-sm">Total Supply (Fixed)</p>
                  <span className="flex space-x-1 items-center">
                    <p className="text-white text-3xl font-bold">21,000,000</p>
                    <p className="text-[#CFDCE5] ">JBTC (Fixed)</p>
                  </span>
                </div>
                <div className="mt-6">
                  <p className="text-[#CFDCE5] text-sm">Circulating on Day 1</p>
                  <span className="flex space-x-1 items-center">
                    <p className="text-white text-3xl font-bold">1,000,000</p>
                    <p className="text-[#CFDCE5] ">JBTC</p>
                  </span>
                </div>
                <div className="mt-6">
                  <p className="text-[#CFDCE5] text-sm">
                    Distribution Timeline
                  </p>
                  <span className="flex space-x-1 items-center">
                    <p className="text-white text-3xl font-bold">45yrs</p>
                    <p className="text-[#CFDCE5] ">Daily Reward Pool</p>
                  </span>
                </div>
              </div>
              <div>
                <div className="mt-6">
                  <p className="text-[#CFDCE5] text-sm">Network</p>
                  <span className="flex space-x-1 items-center">
                    <p className="text-white text-3xl font-bold">BSC</p>
                    <p className="text-[#CFDCE5] ">(BEP-20)</p>
                  </span>
                </div>
                <div className="mt-6">
                  <p className="text-[#CFDCE5] text-sm">Locked in Contract</p>
                  <span className="flex space-x-1 items-center">
                    <p className="text-white text-3xl font-bold">20,000,000</p>
                    <p className="text-[#CFDCE5] ">JBTC</p>
                  </span>
                </div>
                <div className="mt-6">
                  <p className="text-[#CFDCE5] text-sm">Daily Reward Pool</p>
                  <span className="flex space-x-1 items-center">
                    <p className="text-white text-3xl font-bold">5,000 </p>
                    <p className="text-[#CFDCE5] ">JBTC/Day</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="mt-6"
          loading="lazy"
          src="/tokenomics/Coin.png"
          alt="Coin"
        />
      </div>
      
    </div>
  );
};

export default Tokenomics;
