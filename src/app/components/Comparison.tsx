const Comparison: React.FC= () => {
    return(
        <div className="w-full max-w-[1440px] mx-auto py-6 md:py-10 px-2 md:px-8">
            <h2 className="text-2xl md:text-4xl font-bold text-center mt-6">
                JBTC  vs  BTC Comparison
            </h2>
            <p className="text-[#333333] text-xl text-center mt-3">See why Junior Bitcoin is the evolution of holding</p>
            <div className="w-full flex justify-center items-center mt-10">
                <img className="w-full" loading="lazy" src="/comparison/comparison-table.png" alt="comparison-table" />
            </div>
        </div>
    )
}

export default Comparison;