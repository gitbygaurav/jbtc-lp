const Comparison: React.FC= () => {
    return(
        <div className="w-full max-w-[1440px] mx-auto py-6 md:py-10 px-2 md:px-8">
            <h2 className="text-[50px] md:text-[86px] leading-[64px] md:leading-[86px] font-elza-bold-condensed font-bold text-center tracking-[-2.2%] mt-4 md:mt-6">
                JBTC vs BTC COMPARISON
            </h2>
            <p className="text-[#333333] text-base md:text-xl text-center font-satoshi-medium mt-2">See why Junior Bitcoin is the evolution of holding</p>
            <div className="w-full text-[#000000] text-lg border border-[#E6E6E6] rounded-xl mt-10 mb-10">
                <div className="grid grid-cols-3">
                    <div className="bg-[#2D87F1] text-white px-2 md:px-6 py-4 rounded-tl-xl border-r md:border-0 border-[#E6E6E6]">
                        <h3 className="text-sm md:text-lg font-satoshi-bold font-bold uppercase">Attribute</h3>
                    </div>
                    <div className="bg-[#2D87F1] text-white px-2 md:px-6 py-4 border-r md:border-0 border-[#E6E6E6]">
                        <h3 className="text-sm md:text-lg font-satoshi-bold font-bold uppercase">Bitcoin (BTC)</h3>
                    </div>
                    <div className="bg-[#2D87F1] text-white rounded-tr-xl px-2 md:px-6 py-4">
                        <h3 className="text-sm md:text-lg font-satoshi-bold font-bold uppercase">Junior BTC (JBTC)</h3>
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-satoshi-bold font-bold">Supply</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-satoshi-regular">21 Million</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-satoshi-regular">21 Million</p>
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-satoshi-bold font-bold">Distribution</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-satoshi-regular">Mining Rewards (6.25 BTC/10min)</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-satoshi-regular">Daily Holding Rewards (0.5%)</p>
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-satoshi-bold font-bold">Who Earns?</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-satoshi-regular">Miners Only</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg">Holders Only</p>
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-satoshi-bold font-bold">Access</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-satoshi-regular">Requires Expensive Hardware</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-satoshi-regular">Hold in Wallet. Simple</p>
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-satoshi-bold font-bold">Custody</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-satoshi-regular">Often on centralized exchanges</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-satoshi-regular">100% DeFi wallet only</p>
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-satoshi-bold font-bold">Energy Cost</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-satoshi-regular">Very High</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-satoshi-regular">Zero</p>
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-satoshi-bold font-bold">Halving</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-satoshi-regular">Every 4 Years</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-satoshi-regular">Pool Reduction Every Year</p>
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-satoshi-bold font-bold">Inflation</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-satoshi-regular">None</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-satoshi-regular">None. Smart Contract Locked</p>
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-satoshi-bold font-bold">Control</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-satoshi-regular">Protocol + Miners</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-satoshi-regular">100% Smart Contract (No Admin)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comparison;