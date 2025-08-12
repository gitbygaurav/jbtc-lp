"use client";

const EarningCalculator: React.FC = () => {
  return (
    <div className="bg-white rounded-shadow rounded-xl p-4 md:p-6">
      <h4 className="text-[#1C1C1C] text-[22px] md:text-[28px] font-elza-bold-condensed uppercase">
        Earnings Calculator
      </h4>
      <p className="text-[#596E7F] text-sm font-satoshi-bold mt-4">
        Enter Your JBTC Holding:
      </p>
      <div className="flex flex-col items-end border border-[#CFDCE5] mt-2 rounded-lg px-4 py-5">
        <p className="text-[#596E7F] text-sm font-satoshi-bold">0.000</p>
        <div className="flex gap-4 mt-4">
          <button className="bg-[#CCEAFF] border border-[#419AD9] text-[#002540] text-xs font-satoshi-medium p-2 rounded-full">
            1,000
          </button>
          <button className="bg-[#F2FAFF] text-[#002540] text-xs font-satoshi-medium p-2 rounded-full">
            5,000
          </button>
          <button className="bg-[#F2FAFF] text-[#002540] text-xs font-satoshi-medium p-2 rounded-full">
            10,000
          </button>
          <button className="bg-[#F2FAFF] text-[#002540] text-xs font-satoshi-medium p-2 rounded-full">
            25,000
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-[#FFF6E5] border border-[#CFDCE5] rounded-xl p-4">
          <p className="text-[#596E7F] text-xs font-satoshi-medium">
            Daily Claim (0.5%)
          </p>
          <p className="text-[#D99000] text-[28px] font-elza-bold-condensed mt-2">
            5.0 JBTC
          </p>
        </div>
        <div className="bg-[#E5FFEE] border border-[#CFDCE5] rounded-xl p-4">
          <p className="text-[#596E7F] text-xs font-satoshi-medium">30 Days</p>
          <p className="text-[#3CB43A] text-[28px] font-elza-bold-condensed mt-2">
            150 JBTC
          </p>
        </div>
        <div className="bg-[#E5EAFF] border border-[#CFDCE5] rounded-xl p-4">
          <p className="text-[#596E7F] text-xs font-satoshi-medium">
            1 Year (365 days)
          </p>
          <p className="text-[#0024D9] text-[28px] font-elza-bold-condensed mt-2">
            1825 JBTC
          </p>
        </div>
      </div>
      <button className="w-full bg-[#2D87F1] text-white text-base font-satoshi-bold py-4 px-4 rounded-lg mt-6 cursor-pointer hover:bg-[#1C5BBF] transition-colors">
        BUY JBTC
      </button>
    </div>
  );
};

export default EarningCalculator;
