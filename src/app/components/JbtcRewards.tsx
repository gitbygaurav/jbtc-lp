const JbtcRewards: React.FC = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto py-6 md:py-8 px-2 md:px-8">
      <h2 className="text-[#1C1C1C] text-2xl md:text-[70px] text-center font-elza-bold-condensed font-bold tracking-tight md:leading-20 uppercase">
        Bitcoin Rewards Miners, <br /> JBTC Rewards You.
      </h2>
      <p className="text-[#333333] text-base md:text-xl text-center font-satoshi-medium mt-4">
        Bitcoin’s flaw? It only rewards miners the ones with expensive hardware
        and energy.
        <br />
        The rest of the world the believers, holders, and adopters get nothing.
      </p>

      <div className="bg-white rounded-shadow border border-[#CFDCE5] rounded-xl mt-8">
        <div className="bg-[#2D87F1] grid grid-cols-3 rounded-t-xl ">
          <div className="px-6 py-4 border-r border-[#CFDCE5] rounded-tl-xl">
            <p className="text-white font-satoshi-bold uppercase">Features</p>
          </div>
          <div className="px-6 py-4 border-r border-[#CFDCE5]">
            <p className="text-white font-satoshi-bold uppercase">
              Bitcoin (BTC)
            </p>
          </div>
          <div className="px-6 py-4 border-r border-[#CFDCE5]">
            <p className="text-white font-satoshi-bold uppercase">
              Junior BTC (JBTC)
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="px-6 py-4 border-r border-[#CFDCE5]">
            <p className="text-[#596E7F] font-satoshi-medium">
              Who Earns?
            </p>
          </div>
          <div className="px-6 py-4 border-r border-[#CFDCE5]">
            <p className="text-[#596E7F] font-satoshi-medium">
              Miners Only
            </p>
          </div>
          <div className="px-6 py-4 border-r border-[#CFDCE5]">
            <p className="text-[#1C1C1C] font-satoshi-bold font-bold">
              10 JBTC
            </p>
          </div>
        </div> 
        <div className="grid grid-cols-3 border-t border-[#CFDCE5]">
          <div className="px-6 py-4 border-r border-[#CFDCE5]">
            <p className="text-[#596E7F] font-satoshi-medium">
              Reward System
            </p>
          </div>
          <div className="px-6 py-4 border-r border-[#CFDCE5]">
            <p className="text-[#596E7F] font-satoshi-medium">
              Proof of Work
            </p>
          </div>
          <div className="px-6 py-4 border-r border-[#CFDCE5]">
            <p className="text-[#1C1C1C] font-satoshi-bold font-bold">
              Proof of Holding
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 border-t border-[#CFDCE5]">
          <div className="px-6 py-4 border-r border-[#CFDCE5]">
            <p className="text-[#596E7F] font-satoshi-medium">
              Daily Reward
            </p>
          </div>
          <div className="px-6 py-4 border-r border-[#CFDCE5]">
            <p className="text-[#596E7F] font-satoshi-medium">
              6.25 BTC / 10 Mins to Miners Only
            </p>
          </div>
          <div className="px-6 py-4 border-r border-[#CFDCE5]">
            <p className="text-[#1C1C1C] font-satoshi-bold font-bold">
              Up to 0.5% of your Holdings / Day
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 border-t border-[#CFDCE5]">
          <div className="px-6 py-4 border-r border-[#CFDCE5]">
            <p className="text-[#596E7F] font-satoshi-medium">
              Access
            </p>
          </div>
          <div className="px-6 py-4 border-r border-[#CFDCE5]">
            <p className="text-[#596E7F] font-satoshi-medium">
              Technical, Expensive
            </p>
          </div>
          <div className="px-6 py-4 border-r border-[#CFDCE5]">
            <p className="text-[#1C1C1C] font-satoshi-bold font-bold">
              Simple - Hold in Wallet
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 border-t border-[#CFDCE5]">
          <div className="px-6 py-4 border-r border-[#CFDCE5]">
            <p className="text-[#596E7F] font-satoshi-medium">
              Custody
            </p>
          </div>
          <div className="px-6 py-4 border-r border-[#CFDCE5]">
            <p className="text-[#596E7F] font-satoshi-medium">
              Often Custodial (Exchanges)
            </p>
          </div>
          <div className="px-6 py-4 border-r border-[#CFDCE5]">
            <p className="text-[#1C1C1C] font-satoshi-bold font-bold">
              Self-Custody (DeFi only)
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 border-t border-[#CFDCE5]">
          <div className="px-6 py-4 border-r border-[#CFDCE5]">
            <p className="text-[#596E7F] font-satoshi-medium">
              Energy Cost
            </p>
          </div>
          <div className="px-6 py-4 border-r border-[#CFDCE5]">
            <p className="text-[#596E7F] font-satoshi-medium">
              High
            </p>
          </div>
          <div className="px-6 py-4 border-r border-[#CFDCE5]">
            <p className="text-[#1C1C1C] font-satoshi-bold font-bold">
              None
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JbtcRewards;
