const DailyRewards: React.FC = () => {
    return (
        <div className="w-full max-w-[1440px] mx-auto px-2 md:px-8">
            <h2 className="text-2xl md:text-[70px] text-center font-elza-bold font-bold tracking-tight md:leading-20 uppercase">How to Earn Daily Rewards</h2>
            <p className="text-[#333333] text-base md:text-xl text-center font-satoshi-medium ">Simple steps to start earning passive income with JBTC</p>
            <div className="w-full grid grid-cols-1 md:grid-cols-5 md:gap-5 my-8">
                <div className="w-full col-span-3 grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="rounded-shadow p-4 md:p-6 bg-white relative rounded-xl">
                        <h4 className="text-[#1C1C1C] text-[22px] font-elza-bold">Buy JBTC</h4>
                        <p className="relative text-[#596E7F] text-base font-satoshi-medium mb-4 z-20">Purchase during presale or on DEX</p>
                        <img className="absolute bottom-0 right-5" src="/daily-rewards/step-1.png" alt="step-1" />
                    </div>
                    <div className="rounded-shadow p-4 md:p-6 bg-white relative rounded-xl">
                        <h4 className="text-[#1C1C1C] text-[22px] font-elza-bold">Hold in DeFi Wallet</h4>
                        <p className="relative text-[#596E7F] text-base font-satoshi-medium mb-4 z-20">Store in MetaMask, TrustWallet, etc.</p>
                        <img className="absolute bottom-0 right-5" src="/daily-rewards/step-2.png" alt="step-2" />
                    </div>
                    <div className="rounded-shadow p-4 md:p-6 bg-white relative rounded-xl">
                        <h4 className="text-[#1C1C1C] text-[22px] font-elza-bold">Buy JBTC</h4>
                        <p className="relative text-[#596E7F] text-base font-satoshi-medium mb-4 z-20">Purchase during presale or on DEX</p>
                        <img className="absolute bottom-0 right-5" src="/daily-rewards/step-3.png" alt="step-3" />
                    </div>
                    <div className="rounded-shadow p-4 md:p-6 bg-white relative rounded-xl">
                        <h4 className="text-[#1C1C1C] text-[22px] font-elza-bold">Buy JBTC</h4>
                        <p className="relative text-[#596E7F] text-base font-satoshi-medium mb-4 z-20">Purchase during presale or on DEX</p>
                        <img className="absolute bottom-0 right-5" src="/daily-rewards/step-4.png" alt="step-4" />
                    </div>
                    <div className="rounded-shadow p-4 md:p-6 bg-white relative rounded-xl">
                        <h4 className="text-[#1C1C1C] text-[22px] font-elza-bold">Buy JBTC</h4>
                        <p className="relative text-[#596E7F] text-base font-satoshi-medium mb-4 z-20">Purchase during presale or on DEX</p>
                        <img className="absolute bottom-0 right-5" src="/daily-rewards/step-5.png" alt="step-5" />
                    </div>
                    <div className="rounded-shadow p-4 md:p-6 bg-white relative rounded-xl">
                        <h4 className="text-[#1C1C1C] text-[22px] font-elza-bold">Buy JBTC</h4>
                        <p className="relative text-[#596E7F] text-base font-satoshi-medium mb-4 z-20">Purchase during presale or on DEX</p>
                        <img className="absolute bottom-0 right-5" src="/daily-rewards/step-6.png" alt="step-6" />
                    </div>
                </div>
                <div className="w-full md:col-span-2 bg-white rounded-shadow p-4 md:p-6 rounded-xl mt-5 md:mt-0">
                    <h3 className="text-[#1C1C1C] font-elza-bold text-[22px]">Important Notes</h3>
                    <div className="mt-4">
                        <div className="flex items-start gap-2">
                            <img className="mt-0.5 md:mt-0" loading="lazy" src="/daily-rewards/check-circle.png" alt="check-circle" />
                            <p className="text-[#1C1C1C] text-base font-satoshi-bold">Miss a day = miss that day's reward (no rollover)</p>
                        </div>
                        <div className="flex items-start gap-2 mt-3">
                            <img className="mt-0.5 md:mt-0" loading="lazy" src="/daily-rewards/check-circle.png" alt="check-circle" />
                            <p className="text-[#1C1C1C] text-base font-satoshi-bold">No automatic claiming - you must claim manually</p>
                        </div>
                        <div className="flex items-start gap-2 mt-3">
                            <img className="mt-0.5 md:mt-0" loading="lazy" src="/daily-rewards/check-circle.png" alt="check-circle" />
                            <p className="text-[#1C1C1C] text-base font-satoshi-bold">Maximum 0.5% of your holdings can be claimed per day</p>
                        </div>
                        <div className="flex items-start gap-2 mt-3">
                            <img className="mt-0.5 md:mt-0" loading="lazy" src="/daily-rewards/check-circle.png" alt="check-circle" />
                            <p className="text-[#1C1C1C] text-base font-satoshi-bold">Referral rewards require 2× their JBTC holdings</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DailyRewards;