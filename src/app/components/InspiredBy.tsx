const InspiredBy:React.FC = () => {
    return (
        <div className="w-full max-w-[1440px] mx-auto py-6 md:py-16 px-2 md:px-8">
            <div className="hidden md:flex flex-wrap items-center justify-center space-x-10">
                <div className="flex items-center justify-center space-x-1">
                    <img loading="lazy" src="/inspired-by/poh.png" alt="proof-of-holding-logo" />
                    <p className="text-[#2D87F1] text-base text-center font-semibold">Proof of Holding</p>
                </div>
                <div className="flex items-center justify-center space-x-1">
                    <img loading="lazy" src="/inspired-by/no-mining.png" alt="no-mining-logo" />
                    <p className="text-[#2D87F1] text-base text-center font-semibold">No Mining</p>
                </div>
                <div className="flex items-center justify-center space-x-1">
                    <img loading="lazy" src="/inspired-by/no-contract.png" alt="no-contract-logo" />
                    <p className="text-[#2D87F1] text-base text-center font-semibold">No Contracts</p>
                </div>
                <div className="flex items-center justify-center space-x-1">
                    <img loading="lazy" src="/inspired-by/just-hold.png" alt="just-hold-logo" />
                    <p className="text-[#2D87F1] text-base text-center font-semibold">Just Hold & Earn</p>
                </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-center mt-6">
                Inspired by Bitcoin. Backed by code. <br />Powered by Proof of Holding
            </h2>
            <p className="text-2xl text-[#596E7F] text-center mt-3">
                Where the rewards go to holders, not miners.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="flex flex-col justify-between gap-4 md:gap-0">
                    <img className="w-full" loading="lazy" src="/inspired-by/no-min-no-cont.png" alt="no-min-no-cont" />
                    <img className="w-full" loading="lazy" src="/inspired-by/fixed-21M.png" alt="fixed-21M" />
                </div>
                <div>
                    <img className="w-full" loading="lazy" src="/inspired-by/get-rewarded.png" alt="get-rewarded" />
                </div>
                <div className="flex flex-col justify-between gap-4 md:gap-0">
                    <img className="w-full" loading="lazy" src="/inspired-by/refer-benefit.png" alt="refer-benefits" />
                    <img className="w-full" loading="lazy" src="/inspired-by/dex-wallet.png" alt="dex-wallet" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-4 md:mt-14">
                <button className="bg-blue-500 text-white px-8 py-3 rounded-xl">Join Presale Now</button>
                <button className="border border-[#CFDCE5] rounded-xl px-8 py-3">Join Presale Now</button>
                <button className="border border-[#CFDCE5] rounded-xl px-8 py-3">Join Presale Now</button>
            </div>
            <p className="text-[#596E7F] text-center mt-3">“Your Wallet is the Mine. JBTC is the New Bitcoin.”</p>
        </div>
    )
}

export default InspiredBy;