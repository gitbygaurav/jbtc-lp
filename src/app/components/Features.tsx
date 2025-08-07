const Features:React.FC = () => {
    return (
        <div className="w-full bg-[#1C1C1C]">
            <div className="w-full max-w-[1440px] mx-auto text-white flex flex-col items-center justify-center py-6 md:py-14 px-2 md:px-8">
                <h1 className="text-2xl md:text-[70px] text-center font-bold tracking-tight leading-20 uppercase">Fully Decentralized. No Control. No Compromise.</h1>
                    <div className="bg-white text-[#00070D] border border-[#CFDCE5] px-10 rounded-xl py-6 mt-8">
                        <p className="text-base md:text-xl text-center font-bold uppercase">Fixed supply: 21M JBTC — forever</p>
                    </div>
                    <div className="bg-white text-[#00070D] border border-[#CFDCE5] px-10 rounded-xl py-6 mt-6">
                        <p className="text-base md:text-xl text-center font-bold uppercase">All rewards distributed directly on-chain</p>
                    </div>
                    <div className="bg-white text-[#00070D] border border-[#CFDCE5] px-10 rounded-xl py-6 mt-6">
                        <p className="text-base md:text-xl text-center font-bold uppercase">Claim once per day - or lose that day’s reward</p>
                    </div>
                    <div className="bg-white text-[#00070D] border border-[#CFDCE5] px-10 rounded-xl py-6 mt-6">
                        <p className="text-base md:text-xl text-center font-bold uppercase">No staking. No lock-in. No platform dependency.</p>
                    </div>
                    <div className="bg-white text-[#00070D] border border-[#CFDCE5] px-10 rounded-xl py-6 mt-6">
                        <p className="text-base md:text-xl text-center font-bold uppercase">Only your DeFi wallet (like MetaMask, TrustWallet) qualifies</p>
                    </div>
            </div>
        </div>
    )
}

export default Features;