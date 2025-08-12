const Roadmap: React.FC = () => {
  return (
    <div className="w-full bg-[#1C1C1C]">
      <div className="w-full max-w-[1440px] mx-auto text-white py-6 md:py-14 px-2 md:px-8">
        <h2 className="text-2xl md:text-[70px] leading-[24px] md:leading-[70px] text-center font-elza-bold-condensed font-bold tracking-[-2.2%] font-stretch-condensed uppercase">
          Roadmap
        </h2>
        {/* desktop */}
        <div className="mt-8 hidden md:flex flex-col items-center justify-center">
            <img className="min-w-full" loading="lazy" src="/roadmap/steps.png" alt="steps" />
            <div className="min-w-full hidden md:grid grid-cols-4 gap-7 mt-6">
                <div className="bg-white rounded-xl p-4 md:p-6">
                    <p className="text-[#000000] text-[28px] font-elza-bold-condensed">Foundation Launch</p>
                    <ul className="text-[#596E7F] text-sm font-satoshi-regular list-disc list-inside">
                        <li>Token Launch</li>
                        <li>Referral System Live</li>
                        <li>Claim System Online</li>
                        <li>Smart Contract Audited</li>
                    </ul>
                </div>
                <div className="bg-white rounded-xl p-4 md:p-6">
                    <p className="text-[#000000] text-[28px] font-elza-bold-condensed">Platform Expansion</p>
                    <ul className="text-[#596E7F] text-sm font-satoshi-regular list-disc list-inside">
                        <li>CEX Listings</li>
                        <li>Advanced Analytics</li>
                        <li>DEX Launch</li>
                        <li>Community Dashboard</li>
                    </ul>
                </div>
                <div className="bg-white rounded-xl p-4 md:p-6">
                    <p className="text-[#000000] text-[28px] font-elza-bold-condensed">Ecosystem Growth</p>
                    <ul className="text-[#596E7F] text-sm font-satoshi-regular list-disc list-inside">
                        <li>Mobile App Launch</li>
                        <li>JBTC-Backed Utilities</li>
                        <li>Partnership Program</li>
                        <li>GameFi Utility Integration</li>
                    </ul>
                </div>
                <div className="bg-white rounded-xl p-4 md:p-6">
                    <p className="text-[#000000] text-[28px] font-elza-bold-condensed">Global Adoption</p>
                    <ul className="text-[#596E7F] text-sm font-satoshi-regular list-disc list-inside">
                        <li>Institutional Partnerships</li>
                        <li>Multi-chain Bridge</li>
                        <li>Treasury DAO</li>
                        <li>Global Expansion</li>
                    </ul>
                </div>
            </div>
        </div>
        {/* mobile */}
        <div className="w-full block md:hidden mt-8">
          <img loading="lazy" src="/roadmap/mobile-roadmap.png" alt="roadmap" />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
