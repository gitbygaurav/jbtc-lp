const Comparison: React.FC= () => {
    return(
        <div className="w-full max-w-[1440px] mx-auto py-6 md:py-10 px-2 md:px-8">
            <h2 className="text-4xl md:text-[86px] font-bold text-center tracking-tight mt-4 md:mt-6">
                JBTC vs BTC COMPARISON
            </h2>
            <p className="text-[#333333] text-base md:text-xl text-center mt-2">See why Junior Bitcoin is the evolution of holding</p>
            <div className="w-full text-[#000000] text-lg border border-[#E6E6E6] rounded-xl mt-10 mb-10">
                <div className="grid grid-cols-3">
                    <div className="bg-[#2D87F1] text-white px-2 md:px-6 py-4 rounded-tl-xl border-r md:border-0 border-[#E6E6E6]">
                        <h3 className="text-sm md:text-lg font-bold uppercase">Attribute</h3>
                    </div>
                    <div className="bg-[#2D87F1] text-white px-2 md:px-6 py-4 border-r md:border-0 border-[#E6E6E6]">
                        <h3 className="text-sm md:text-lg font-bold uppercase">Bitcoin (BTC)</h3>
                    </div>
                    <div className="bg-[#2D87F1] text-white rounded-tr-xl px-2 md:px-6 py-4">
                        <h3 className="text-sm md:text-lg font-bold uppercase">Junior BTC (JBTC)</h3>
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-bold">Supply</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg">21 Million</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg">21 Million</p>
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-bold">Distribution</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg">Mining Rewards (6.25 BTC/10min)</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg">Daily Holding Rewards (0.5%)</p>
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-bold">Who Earns?</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg">Miners Only</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg">Holders Only</p>
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-bold">Access</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg">Requires Expensive Hardware</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg">Hold in Wallet. Simple</p>
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-bold">Custody</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg">Often on centralized exchanges</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg">100% DeFi wallet only</p>
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-bold">Energy Cost</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg">Very High</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg">Zero</p>
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-bold">Halving</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg">Every 4 Years</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg">Pool Reduction Every Year</p>
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-bold">Inflation</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg">None</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg">None. Smart Contract Locked</p>
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg font-bold">Control</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg">Protocol + Miners</p>
                    </div>
                    <div className="px-2 md:px-6 py-4 border-t border-r border-[#E6E6E6]">
                        <p className="text-sm md:text-lg">100% Smart Contract (No Admin)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comparison;