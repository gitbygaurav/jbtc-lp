const ReferralSystem: React.FC = () => {
  return (
    <div className="w-full bg-[#1C1C1C]">
      <div className="w-full max-w-[1440px] mx-auto text-white py-6 md:py-14 px-2 md:px-8">
        <h2 className="text-2xl md:text-[70px] text-center font-elza-bold font-bold tracking-tight md:leading-20 uppercase">
          Referral System
        </h2>
        <p className="text-[#CFDCE5] text-base md:text-xl text-center font-satoshi-medium mt-4">
          Earn up to 10% from your referrals' daily claims.
        </p>
        <p className="text-[#CFDCE5] text-base md:text-xl text-center font-satoshi-medium mt-2">
          Only if you hold 2× their JBTC amount.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 mt-10 md:mt-12">
          <div className="bg-white rounded-shadow p-4 md:p-6 rounded-xl">
            <h4 className="text-[#1C1C1C] text-[22px] md:text-[28px] font-elza-bold uppercase">
              How Referrals Work
            </h4>
            <div className="mt-4">
              <div className="flex items-center gap-2">
                <img
                  className="w-10 md:w-12 h-10 md:h-12"
                  loading="lazy"
                  src="/referral-system/check-circle.png"
                  alt="check-circle"
                />
                <div>
                  <h5 className="text-[#020817] text-[18px] md:text-[22px] font-elza-bold">
                    Qualifying Condition
                  </h5>
                  <p className="text-[#47566B] text-sm md:text-base font-satoshi-regular">
                    You must hold at least 2× what your referral holds to earn
                    10%
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-5">
                <img
                  className="w-10 md:w-12 h-10 md:h-12"
                  loading="lazy"
                  src="/referral-system/check-circle.png"
                  alt="check-circle"
                />
                <div>
                  <h5 className="text-[#020817] text-[18px] md:text-[22px] font-elza-bold">
                    Reward Source
                  </h5>
                  <p className="text-[#47566B] text-sm md:text-base font-satoshi-regular">
                    Rewards come from protocol pool, not from user funds
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-5">
                <img
                  className="w-10 md:w-12 h-10 md:h-12"
                  loading="lazy"
                  src="/referral-system/xcircle.png"
                  alt="check-circle"
                />
                <div>
                  <h5 className="text-[#020817] text-[18px] md:text-[22px] font-elza-bold">
                    Non-Qualifying
                  </h5>
                  <p className="text-[#47566B] text-sm md:text-base font-satoshi-regular">
                    If you don't qualify, rewards go back to the protocol pool
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-shadow p-4 md:p-6 rounded-xl mt-5 md:mt-0">
            <h4 className="text-[#1C1C1C] text-[28px] font-elza-bold uppercase">
              Earning Potential
            </h4>
            <div className="mt-4">
              <div className="flex items-center gap-2">
                <img
                  className="w-10 md:w-12 h-10 md:h-12"
                  loading="lazy"
                  src="/referral-system/check-circle.png"
                  alt="check-circle"
                />
                <div>
                  <h5 className="text-[#020817] text-[18px] md:text-[22px] font-elza-bold">
                    Full Qualification (10%)
                  </h5>
                  <p className="text-[#47566B] text-sm md:text-base font-satoshi-regular">
                    Hold 2× or more than your referral's amount
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-5">
                <img
                  className="w-10 md:w-12 h-10 md:h-12"
                  loading="lazy"
                  src="/referral-system/check-circle.png"
                  alt="check-circle"
                />
                <div>
                  <h5 className="text-[#020817] text-[18px] md:text-[22px] font-elza-bold">
                    Partial Qualification (1%)
                  </h5>
                  <p className="text-[#47566B] text-sm md:text-base font-satoshi-regular">
                    Hold less than 2× your referral's amount
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-5">
                <img
                  className="w-10 md:w-12 h-10 md:h-12"
                  loading="lazy"
                  src="/referral-system/xcircle.png"
                  alt="check-circle"
                />
                <div>
                  <h5 className="text-[#020817] text-[18px] md:text-[22px] font-elza-bold">
                    No Qualification (0%)
                  </h5>
                  <p className="text-[#47566B] text-sm md:text-base font-satoshi-regular">
                    Hold less than your referral's amount
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* desktop-table */}
        <div className="hidden md:block bg-white rounded-shadow rounded-xl mt-8">
            <div className="bg-[#2D87F1] grid grid-cols-4 rounded-t-xl ">
                <div className="px-6 py-4 border-r border-[#CFDCE5] rounded-tl-xl">
                    <p className="text-white font-satoshi-bold uppercase">Your Holding</p>
                </div>
                <div className="px-6 py-4 border-r border-[#CFDCE5]">
                    <p className="text-white font-satoshi-bold uppercase">Referral Holding</p>
                </div>
                <div className="px-6 py-4 border-r border-[#CFDCE5]">
                    <p className="text-white font-satoshi-bold uppercase">They Claim</p>
                </div>
                <div className="px-6 py-4 rounded-tr-xl">
                    <p className="text-white font-satoshi-bold uppercase">You Earn</p>
                </div>
            </div>
            <div className="grid grid-cols-4">
                <div className="px-6 py-4 border-r border-[#CFDCE5]">
                    <p className="text-[#596E7F] font-satoshi-medium uppercase">2,000 JBTC</p>
                </div>
                <div className="px-6 py-4 border-r border-[#CFDCE5]">
                    <p className="text-[#596E7F] font-satoshi-medium uppercase">1,000 JBTC</p>
                </div>
                <div className="px-6 py-4 border-r border-[#CFDCE5]">
                    <p className="text-[#596E7F] font-satoshi-medium uppercase">10 JBTC</p>
                </div>
                <div className="px-6 py-4 flex items-center gap-3">
                    <img loading="lazy" src="/referral-system/small-checkcircle.png" alt="Check Circle" />
                    <p className="text-[#000000] font-satoshi-bold uppercase">1.0 JBTC (10%)</p>
                </div>
            </div>
            <div className="grid grid-cols-4 border-t border-[#CFDCE5]">
                <div className="px-6 py-4 border-r border-[#CFDCE5]">
                    <p className="text-[#596E7F] font-satoshi-medium uppercase">2,000 JBTC</p>
                </div>
                <div className="px-6 py-4 border-r border-[#CFDCE5]">
                    <p className="text-[#596E7F] font-satoshi-medium uppercase">1,000 JBTC</p>
                </div>
                <div className="px-6 py-4 border-r border-[#CFDCE5]">
                    <p className="text-[#596E7F] font-satoshi-medium uppercase">10 JBTC</p>
                </div>
                <div className="px-6 py-4 flex items-center gap-3">
                    <img loading="lazy" src="/referral-system/small-xcircle.png" alt="XCircle" />
                    <p className="text-[#000000] font-satoshi-bold uppercase">0.1 JBTC  (1%)</p>
                </div>
            </div>
            <div className="grid grid-cols-4 border-t border-[#CFDCE5]">
                <div className="px-6 py-4 border-r border-[#CFDCE5]">
                    <p className="text-[#596E7F] font-satoshi-medium uppercase">2,000 JBTC</p>
                </div>
                <div className="px-6 py-4 border-r border-[#CFDCE5]">
                    <p className="text-[#596E7F] font-satoshi-medium uppercase">1,000 JBTC</p>
                </div>
                <div className="px-6 py-4 border-r border-[#CFDCE5]">
                    <p className="text-[#596E7F] font-satoshi-medium uppercase">10 JBTC</p>
                </div>
                <div className="px-6 py-4 flex items-center gap-3">
                    <img loading="lazy" src="/referral-system/small-checkcircle.png" alt="Check Circle" />
                    <p className="text-[#000000] font-satoshi-bold uppercase">1.0 JBTC (10%)</p>
                </div>
            </div>
        </div>

        {/* mobile-table */}
        <div className="block md:hidden bg-white rounded-shadow rounded-xl mt-8">
            <div className="rounded-t-xl p-4 border-b border-[#CFDCE5]">
                <div className="flex flex-col">
                    <p className="text-[#596E7F] text-sm font-satoshi-bold">Your Holdings</p>
                    <p className="text-[#1C1C1C] text-[28px] font-elza-bold">2,000 JBTC</p>
                </div>
                <div className="flex justify-between mt-4">
                    <div className="flex flex-col">
                        <p className="text-[#000000] text-[12px] font-satoshi-bold">Referral Holding</p>
                        <p className="text-[#596E7F] text-[14px] font-satoshi-medium">1,000 JBTC</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[#000000] text-[12px] font-satoshi-bold">They Claim</p>
                        <p className="text-[#596E7F] text-[14px] font-satoshi-medium">10 JBTC</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[#000000] text-[12px] font-satoshi-bold">You Earn</p>
                        <p className="text-[#2D87F1] text-[14px] font-satoshi-medium">1.0 JBTC (10%)</p>
                    </div>
                </div>
            </div>
            <div className="rounded-t-xl p-4 border-b border-[#CFDCE5]">
                <div className="flex flex-col">
                    <p className="text-[#596E7F] text-sm font-satoshi-bold">Your Holdings</p>
                    <p className="text-[#1C1C1C] text-[28px] font-elza-bold">2,000 JBTC</p>
                </div>
                <div className="flex justify-between mt-4">
                    <div className="flex flex-col">
                        <p className="text-[#000000] text-[12px] font-satoshi-bold">Referral Holding</p>
                        <p className="text-[#596E7F] text-[14px] font-satoshi-medium">1,500 JBTC</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[#000000] text-[12px] font-satoshi-bold">They Claim</p>
                        <p className="text-[#596E7F] text-[14px] font-satoshi-medium">10 JBTC</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[#000000] text-[12px] font-satoshi-bold">You Earn</p>
                        <p className="text-[#596E7F] text-[14px] font-satoshi-medium">0.1 JBTC (01%)</p>
                    </div>
                </div>
            </div>
            <div className="rounded-t-xl p-4">
                <div className="flex flex-col">
                    <p className="text-[#596E7F] text-sm font-satoshi-bold">Your Holdings</p>
                    <p className="text-[#1C1C1C] text-[28px] font-elza-bold">5,000 JBTC</p>
                </div>
                <div className="flex justify-between mt-4">
                    <div className="flex flex-col">
                        <p className="text-[#000000] text-[12px] font-satoshi-bold">Referral Holding</p>
                        <p className="text-[#596E7F] text-[14px] font-satoshi-medium">2,000 JBTC</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[#000000] text-[12px] font-satoshi-bold">They Claim</p>
                        <p className="text-[#596E7F] text-[14px] font-satoshi-medium">20 JBTC</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[#000000] text-[12px] font-satoshi-bold">You Earn</p>
                        <p className="text-[#2D87F1] text-[14px] font-satoshi-medium">1.0 JBTC (10%)</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralSystem;
