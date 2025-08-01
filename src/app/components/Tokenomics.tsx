const Tokenomics: React.FC = () => {
    return (
        <div className="w-full max-w-[1440px] mx-auto py-6 md:py-16 px-2 md:px-8">
            <img className="w-full" loading="lazy" src="/tokenomics/tokenomics.png" alt="Tokenomics" />
            <div className="w-full grid grid-cols-1 md:grid-cols-2">
                <img className="w-full" loading="lazy" src="/tokenomics/supply-distribution.png" alt="supply distribution" />
                <img className="w-full" loading="lazy" src="/tokenomics/daily-pool.png" alt="daily pool" />
            </div>
        </div>
    )
}

export default Tokenomics;