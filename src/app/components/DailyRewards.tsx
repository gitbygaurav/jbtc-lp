const DailyRewards: React.FC = () => {
    return (
        <div className="w-full max-w-[1440px] mx-auto">
            <h2 className="text-xl md:text-4xl text-center font-bold mb-4">How to Earn Daily Rewards</h2>
            <p className="text-[#333333] text-center">Simple steps to start earning passive income with JBTC</p>
            <div className="grid grid-cols-5 mt-8">
                <div className="w-full col-span-3 grid grid-cols-3">
                    <img className="w-full" loading="lazy" src="/daily-rewards/step1.svg" alt="step-1" />
                    <img className="w-full" loading="lazy" src="/daily-rewards/step2.svg" alt="step-2" />
                    <img className="w-full" loading="lazy" src="/daily-rewards/step3.svg" alt="step-3" />
                    <img className="w-full" loading="lazy" src="/daily-rewards/step4.svg" alt="step-4" />
                    <img className="w-full" loading="lazy" src="/daily-rewards/step5.svg" alt="step-5" />
                    <img className="w-full" loading="lazy" src="/daily-rewards/step6.svg" alt="step-6" />
                </div>
            </div>
        </div>
    )
}

export default DailyRewards;