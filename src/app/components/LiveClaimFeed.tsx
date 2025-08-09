const LiveClaimFeed: React.FC = () => {
    const claimData = [
        {
            claimed: false,
            address: '0xb064...48',
            time: '10:36:29 AM',
            icon: '/live-claim-feed/circle-cross.png',
            message: 'Missed today\'s claim',
        },
        {
            claimed: true,
            address: '0xd73f...28',
            time: '10:36:22 AM',
            icon: '/live-claim-feed/green-tick.png',
            message: 'Claimed 4.7 JBTC',
        },
        {
            claimed: true,
            address: '0xd73f...28',
            time: '10:36:22 AM',
            icon: '/live-claim-feed/green-tick.png',
            message: 'Claimed 7.8 JBTC',
        },
        {
            claimed: false,
            address: '0xb064...48',
            time: '10:36:29 AM',
            icon: '/live-claim-feed/circle-cross.png',
            message: 'Missed today\'s claim',
        },
        {
            claimed: false,
            address: '0xb064...48',
            time: '10:36:40 AM',
            icon: '/live-claim-feed/circle-cross.png',
            message: 'Missed today\'s claim',
        },
        {
            claimed: true,
            address: '0xb064...48',
            time: '10:36:41 AM',
            icon: '/live-claim-feed/green-tick.png',
            message: 'Claimed 5.8 JBTC',
        },
    ]
  return (
    <div className="w-full max-w-[1440px] mx-auto py-6 md:py-14 px-2 md:px-8">
      <h2 className="text-[#1C1C1C] text-2xl md:text-[70px] text-center font-elza-bold-condensed font-bold tracking-tight md:leading-20 uppercase">
        Live Claim Feed
      </h2>
      <p className="text-[#333333] text-base md:text-xl text-center font-satoshi-medium mt-4">
        Thousands claiming daily, Don't miss out
      </p>
      {/* top tags */}
      <div className="flex gap-4 md:gap-12 justify-start md:justify-center mt-8 overflow-x-auto hide-scrollbar px-2 md:px-0">
        <div className="bg-[#2D87F1] flex gap-1 items-center text-white rounded-full py-3 px-4 md:px-6 whitespace-nowrap flex-shrink-0">
          <span className="bg-white rounded-full h-2 w-2"></span>
          <p className="text-[12px] md:text-[14px] font-satoshi-medium">
            5,000 JBTC Daily Pool
          </p>
        </div>
        <div className="bg-[#2D87F1] flex gap-1 items-center text-white rounded-full py-3 px-4 md:px-6 whitespace-nowrap flex-shrink-0">
          <span className="bg-white rounded-full h-2 w-2"></span>
          <p className="text-[12px] md:text-[14px] font-satoshi-medium">
            3,920+ JBTC Total Claim
          </p>
        </div>
        <div className="bg-[#2D87F1] flex gap-1 items-center text-white rounded-full py-3 px-4 md:px-6 whitespace-nowrap flex-shrink-0">
          <span className="bg-white rounded-full h-2 w-2"></span>
          <p className="text-[12px] md:text-[14px] font-satoshi-medium">
            8,221+ Active Wallets
          </p>
        </div>
        <div className="bg-[#2D87F1] flex gap-1 items-center text-white rounded-full py-3 px-4 md:px-6 whitespace-nowrap flex-shrink-0">
          <span className="bg-white rounded-full h-2 w-2"></span>
          <p className="text-[12px] md:text-[14px] font-satoshi-medium">
            612,000+ JBTC Rewards Distributed
          </p>
        </div>
      </div>

      {/* Live Claim Feed */}
      <div className="bg-white rounded-shadow py-4 md:py-6 rounded-xl border border-[#CFDCE5] mt-12">
        <div className="flex gap-1 items-center px-4 md:px-6">
          <h5 className="text-[#020817] text-[22px] md:text-[28px] font-elza-bold-condensed">
            Real-Time Activity
          </h5>
          <img
            loading="lazy"
            src="/live-claim-feed/live-green-light.png"
            alt="live indicator"
          />
        </div>
        <div className="w-full h-[400px] flex flex-col gap-3 overflow-y-auto px-4 md:px-6 mt-6">
            {
                claimData.map((claim, index) => (
                    <div key={index} className="flex justify-between items-center border border-[#CFDCE5] rounded-xl p-4">
                        <div className="flex items-center gap-3">
                            <img loading="lazy" src={claim.icon} alt="claim icon" />
                            <div>
                                <p className="text-[#1C1C1C] text-sm md:text-base font-satoshi-medium">{claim.address}</p>
                                <p className="text-[#47566B] text-xs font-satoshi-medium">{claim.time}</p>
                            </div>
                        </div>
                        <p className={`${claim.claimed ? 'text-[#3CB43A]' : 'text-[#1C1C1C]'} text-sm md:text-base font-satoshi-bold`}>{claim.message}</p>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default LiveClaimFeed;
