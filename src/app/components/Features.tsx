const Features:React.FC = () => {
    return (
        <div className="w-full bg-[#00070D]">
            <div className="w-full max-w-[1440px] mx-auto text-white flex flex-col items-center justify-center py-6 md:py-14 px-2 md:px-8">
                <h1 className="text-2xl md:text-4xl text-center font-bold">Fully Decentralized. No Control. No Compromise.</h1>
                <p className="w-full md:w-5xl text-[#E6E6E6] text-base md:text-lg text-center mt-3">JBTC is a fully decentralized, permissionless smart contract-based protocol. No one can mint more.
No one can reverse claims. No central entity can freeze or alter your rewards.</p>
                    <div className="bg-white text-[#00070D] border border-[#CFDCE5] px-10 rounded-xl py-4 mt-8">
                        <p className="text-base md:text-xl text-center font-bold">Fixed supply: 21M JBTC — forever</p>
                    </div>
                    <div className="bg-white text-[#00070D] border border-[#CFDCE5] px-10 rounded-xl py-4 mt-6">
                        <p className="text-base md:text-xl text-center font-bold">All rewards distributed directly on-chain</p>
                    </div>
                    <div className="bg-white text-[#00070D] border border-[#CFDCE5] px-10 rounded-xl py-4 mt-6">
                        <p className="text-base md:text-xl text-center font-bold">Claim once per day - or lose that day’s reward</p>
                    </div>
                    <div className="bg-white text-[#00070D] border border-[#CFDCE5] px-10 rounded-xl py-4 mt-6">
                        <p className="text-base md:text-xl text-center font-bold">No staking. No lock-in. No platform dependency.</p>
                    </div>
                    <div className="bg-white text-[#00070D] border border-[#CFDCE5] px-10 rounded-xl py-4 mt-6">
                        <p className="text-base md:text-xl text-center font-bold">Only your DeFi wallet (like MetaMask, TrustWallet) qualifies</p>
                    </div>
            </div>
        </div>
    )
}

export default Features;