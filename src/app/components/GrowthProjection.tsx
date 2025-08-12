import EarningCalculator from "../ui/EarningCalculator"

const GrowthProjection: React.FC = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto py-6 md:py-8 px-2 md:px-8">
      <h2 className="text-[#1C1C1C] text-[50px] md:text-[70px] leading-[64px] md:leading-[70px] text-center font-elza-bold-condensed font-bold tracking-[-2%] uppercase">
        Growth Projection
      </h2>
      <p className="text-[#333333] text-base md:text-xl text-center font-satoshi-medium mt-4">
        Hold More. Earn More. Multiply Over Time.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <EarningCalculator />
        <div className="bg-white rounded-shadow rounded-xl p-4 md:p-6">
          <h4 className="text-[#1C1C1C] text-[22px] md:text-[28px] font-elza-bold-condensed uppercase">
            Why Early Adoption Matters
          </h4>
          <div className="mt-4">
            <div>
              <h6 className="text-[#1C1C1C] text-[24px] font-elza-bold-condensed uppercase">
                Scarcity Increases
              </h6>
              <p className="text-[#596E7F] font-satoshi-medium mt-1">
                Pool reduces yearly, making each token more valuable
              </p>
            </div>
            <div className="mt-4">
              <h6 className="text-[#1C1C1C] text-[24px] font-elza-bold-condensed uppercase">
                Early Advantage
              </h6>
              <p className="text-[#596E7F] font-satoshi-medium mt-1">
                Higher daily pools in the first years
              </p>
            </div>
            <div className="mt-4">
              <h6 className="text-[#1C1C1C] text-[24px] font-elza-bold-condensed uppercase">
                Compound Growth
              </h6>
              <p className="text-[#596E7F] font-satoshi-medium mt-1">
                Reinvest claims to increase future earnings
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h6 className="text-[#3C83F6] font-satoshi-bold uppercase">
              Pro Tip
            </h6>
            <p className="text-[#596E7F]  font-satoshi-medium mt-2">
              Reinvest your daily claims to increase your holdings and future
              earning potential. The compound effect over months and years can
              be substantial.
            </p>
          </div>
        </div>
      </div>
      {/* projection desktop table */}
      <div className="hidden md:block bg-white rounded-shadow rounded-xl pt-4 md:pt-6 mt-6">
        <h4 className="text-[#1C1C1C] text-[22px] md:text-[28px] text-center font-elza-bold-condensed uppercase">
          ESTIMATED Projections
        </h4>
        <div className="mt-4">
          <div className="bg-[#2D87F1] grid grid-cols-4">
            <div className="border-r border-[#CFDCE5] px-4 py-3">
              <p className="text-white text-[18px] font-satoshi-bold uppercase">
                Your Holding
              </p>
            </div>
            <div className="border-r border-[#CFDCE5] px-4 py-3">
              <p className="text-white text-[18px] font-satoshi-bold uppercase">
                Daily Claim
              </p>
            </div>
            <div className="border-r border-[#CFDCE5] px-4 py-3">
              <p className="text-white text-[18px] font-satoshi-bold uppercase">
                30 Days
              </p>
            </div>
            <div className="border-r border-[#CFDCE5] px-4 py-3">
              <p className="text-white text-[18px] font-satoshi-bold uppercase">
                1 Year (365D)
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="border-r border-[#CFDCE5] px-4 py-3">
              <p className="text-[#596E7F] text-[18px] font-satoshi-bold uppercase">
                1,000 JBTC
              </p>
            </div>
            <div className="border-r border-[#CFDCE5] px-4 py-3">
              <p className="text-[#596E7F] text-[18px] font-satoshi-medium uppercase">
                5 JBTC
              </p>
            </div>
            <div className="border-r border-[#CFDCE5] px-4 py-3">
              <p className="text-[#596E7F] text-[18px] font-satoshi-medium uppercase">
                150 JBTC
              </p>
            </div>
            <div className="border-r border-[#CFDCE5] px-4 py-3">
              <p className="text-[#596E7F] text-[18px] font-satoshi-medium uppercase">
                1,825 JBTC
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="border-r border-t border-[#CFDCE5] px-4 py-3">
              <p className="text-[#596E7F] text-[18px] font-satoshi-bold uppercase">
                1,500 JBTC
              </p>
            </div>
            <div className="border-r border-t border-[#CFDCE5] px-4 py-3">
              <p className="text-[#596E7F] text-[18px] font-satoshi-medium uppercase">
                25 JBTC
              </p>
            </div>
            <div className="border-r border-t border-[#CFDCE5] px-4 py-3">
              <p className="text-[#596E7F] text-[18px] font-satoshi-medium uppercase">
                750 JBTC
              </p>
            </div>
            <div className="border-r border-t border-[#CFDCE5] px-4 py-3">
              <p className="text-[#596E7F] text-[18px] font-satoshi-medium uppercase">
                9,125 JBTC
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="border-r border-t border-[#CFDCE5] px-4 py-3">
              <p className="text-[#596E7F] text-[18px] font-satoshi-bold uppercase">
                5,000 JBTC
              </p>
            </div>
            <div className="border-r border-t border-[#CFDCE5] px-4 py-3">
              <p className="text-[#596E7F] text-[18px] font-satoshi-medium uppercase">
                50 JBTC
              </p>
            </div>
            <div className="border-r border-t border-[#CFDCE5] px-4 py-3">
              <p className="text-[#596E7F] text-[18px] font-satoshi-medium uppercase">
                1,500 JBTC
              </p>
            </div>
            <div className="border-r border-t border-[#CFDCE5] px-4 py-3">
              <p className="text-[#596E7F] text-[18px] font-satoshi-medium uppercase">
                18,250 JBTC
              </p>
            </div>
          </div>

          <div className="grid grid-cols-4">
            <div className="border-r border-t border-[#CFDCE5] px-4 py-3">
              <p className="text-[#596E7F] text-[18px] font-satoshi-bold uppercase">
                5,000 JBTC
              </p>
            </div>
            <div className="border-r border-t border-[#CFDCE5] px-4 py-3">
              <p className="text-[#596E7F] text-[18px] font-satoshi-medium uppercase">
                125 JBTC
              </p>
            </div>
            <div className="border-r border-t border-[#CFDCE5] px-4 py-3">
              <p className="text-[#596E7F] text-[18px] font-satoshi-medium uppercase">
                3,750 JBTC
              </p>
            </div>
            <div className="border-r border-t border-[#CFDCE5] px-4 py-3">
              <p className="text-[#596E7F] text-[18px] font-satoshi-medium uppercase">
                45,625 JBTC
              </p>
            </div>
          </div>
        </div>
      </div>
        {/* projection mobile table */}
        <h4 className="block md:hidden text-[#1C1C1C] text-[22px] md:text-[28px] text-center font-elza-bold-condensed uppercase mt-8">
          ESTIMATED Projections
        </h4>
        <div className="block md:hidden bg-white rounded-shadow rounded-xl mt-4">
            <div className="rounded-t-xl p-4 border-b border-[#CFDCE5]">
                <div className="flex flex-col">
                    <p className="text-[#596E7F] text-sm font-satoshi-bold">Your Holdings</p>
                    <p className="text-[#1C1C1C] text-[28px] font-elza-bold-condensed">1,000 JBTC</p>
                </div>
                <div className="flex justify-between mt-4">
                    <div className="flex flex-col">
                        <p className="text-[#000000] text-[12px] font-satoshi-bold">Daily Claim</p>
                        <p className="text-[#596E7F] text-[14px] font-satoshi-medium">5 JBTC</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[#000000] text-[12px] font-satoshi-bold">30 Days</p>
                        <p className="text-[#596E7F] text-[14px] font-satoshi-medium">10 JBTC</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[#000000] text-[12px] font-satoshi-bold">1 Year (365D)</p>
                        <p className="text-[#2D87F1] text-[14px] font-satoshi-medium">1,825 JBTC</p>
                    </div>
                </div>
            </div>
            <div className="rounded-t-xl p-4 border-b border-[#CFDCE5]">
                <div className="flex flex-col">
                    <p className="text-[#596E7F] text-sm font-satoshi-bold">Your Holdings</p>
                    <p className="text-[#1C1C1C] text-[28px] font-elza-bold-condensed">1,500 JBTC</p>
                </div>
                <div className="flex justify-between mt-4">
                    <div className="flex flex-col">
                        <p className="text-[#000000] text-[12px] font-satoshi-bold">Daily Claim</p>
                        <p className="text-[#596E7F] text-[14px] font-satoshi-medium">25 JBTC</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[#000000] text-[12px] font-satoshi-bold">30 Days</p>
                        <p className="text-[#596E7F] text-[14px] font-satoshi-medium">750 JBTC</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[#000000] text-[12px] font-satoshi-bold">1 Year (365D)</p>
                        <p className="text-[#596E7F] text-[14px] font-satoshi-medium">9,125 JBTC</p>
                    </div>
                </div>
            </div>
            <div className="rounded-t-xl border-b border-[#CFDCE5] p-4">
                <div className="flex flex-col">
                    <p className="text-[#596E7F] text-sm font-satoshi-bold">Your Holdings</p>
                    <p className="text-[#1C1C1C] text-[28px] font-elza-bold-condensed">5,000 JBTC</p>
                </div>
                <div className="flex justify-between mt-4">
                    <div className="flex flex-col">
                        <p className="text-[#000000] text-[12px] font-satoshi-bold">Daily Claim</p>
                        <p className="text-[#596E7F] text-[14px] font-satoshi-medium">50 JBTC</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[#000000] text-[12px] font-satoshi-bold">30 Days</p>
                        <p className="text-[#596E7F] text-[14px] font-satoshi-medium">1,500 JBTC</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[#000000] text-[12px] font-satoshi-bold">1 Year (365D)</p>
                        <p className="text-[#2D87F1] text-[14px] font-satoshi-medium">18,250 JBTC</p>
                    </div>
                </div>
            </div>
            <div className="rounded-t-xl p-4">
                <div className="flex flex-col">
                    <p className="text-[#596E7F] text-sm font-satoshi-bold">Your Holdings</p>
                    <p className="text-[#1C1C1C] text-[28px] font-elza-bold-condensed">5,000 JBTC</p>
                </div>
                <div className="flex justify-between mt-4">
                    <div className="flex flex-col">
                        <p className="text-[#000000] text-[12px] font-satoshi-bold">Daily Claim</p>
                        <p className="text-[#596E7F] text-[14px] font-satoshi-medium">125 JBTC</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[#000000] text-[12px] font-satoshi-bold">30 Days</p>
                        <p className="text-[#596E7F] text-[14px] font-satoshi-medium">3,750 JBTC</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[#000000] text-[12px] font-satoshi-bold">1 Year (365D)</p>
                        <p className="text-[#2D87F1] text-[14px] font-satoshi-medium">45,625 JBTC</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default GrowthProjection;
