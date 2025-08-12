"use client";

import { useState } from "react";

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto py-6 md:py-8 px-2 md:px-8">
      <h2 className="text-[#1C1C1C] text-2xl md:text-[70px] leading-[24px] md:leading-[70px] text-center font-elza-bold-condensed font-bold tracking-[-2.2%] uppercase">
        Frequently Asked Questions
      </h2>
      <p className="text-[#333333] text-base md:text-xl text-center font-satoshi-medium mt-4">
        Everything you need to know about Junior Bitcoin
      </p>

      <div className="mt-8 space-y-4">
        {/* Question 1 */}
        <div className="w-full md:w-[70%] mx-auto bg-white border border-[#CFDCE5] rounded-xl overflow-hidden transition-all duration-300 ease-in-out">
          <button
            onClick={() => toggleAccordion(0)}
            className={`w-full flex justify-between items-center px-4 md:px-8 py-5 text-left transition-colors duration-200 ${
              openIndex === 0 ? "bg-[#F8FAFB]" : "hover:bg-gray-50"
            }`}
          >
            <p className="text-black text-base md:text-lg font-satoshi-bold">
              How does JBTC work?
            </p>
            <img
              loading="lazy"
              src="/faq/CaretDown.png"
              alt="toggle"
              className={`transition-transform duration-300 ${
                openIndex === 0 ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === 0 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 md:px-8 pb-5">
              <p className="text-[#596E7F] text-sm md:text-base font-satoshi-regular leading-relaxed">
                JBTC is a decentralized crypto token inspired by Bitcoin.
                Instead of mining, you hold JBTC in your DEX wallet and claim
                daily rewards from a fixed distribution pool. No contracts, no
                staking, no lock-in.
              </p>
            </div>
          </div>
        </div>

        {/* Question 2 */}
        <div className="w-full md:w-[70%] mx-auto bg-white border border-[#CFDCE5] rounded-xl overflow-hidden transition-all duration-300 ease-in-out">
          <button
            onClick={() => toggleAccordion(1)}
            className={`w-full flex justify-between items-center px-4 md:px-8 py-5 text-left transition-colors duration-200 ${
              openIndex === 1 ? "bg-[#F8FAFB]" : "hover:bg-gray-50"
            }`}
          >
            <p className="text-black text-base md:text-lg font-satoshi-bold">
              What is the daily Reward system?
            </p>
            <img
              loading="lazy"
              src="/faq/CaretDown.png"
              alt="toggle"
              className={`transition-transform duration-300 ${
                openIndex === 1 ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === 1 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 md:px-8 pb-5">
              <div className="text-[#596E7F] text-sm md:text-base font-satoshi-regular leading-relaxed">
                <p className="mb-2">
                  You can claim daily rewards based on the amount of JBTC you
                  hold.
                </p>
                <p className="mb-2">
                  Your rewards come from a fixed daily token pool — shared among
                  all eligible holders.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    🧮 Max you can claim per day: 0.5% of your JBTC holdings
                  </li>
                  <li>
                    Example: If you hold 1,000 JBTC, you can claim up to 5 JBTC
                    per day (if the pool and holders allow)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Question 3 */}
        <div className="w-full md:w-[70%] mx-auto bg-white border border-[#CFDCE5] rounded-xl overflow-hidden transition-all duration-300 ease-in-out">
          <button
            onClick={() => toggleAccordion(2)}
            className={`w-full flex justify-between items-center px-4 md:px-8 py-5 text-left transition-colors duration-200 ${
              openIndex === 2 ? "bg-[#F8FAFB]" : "hover:bg-gray-50"
            }`}
          >
            <p className="text-black text-base md:text-lg font-satoshi-bold">
              What is halving?
            </p>
            <img
              loading="lazy"
              src="/faq/CaretDown.png"
              alt="toggle"
              className={`transition-transform duration-300 ${
                openIndex === 2 ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === 2 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="text-[#596E7F] text-sm md:text-base font-satoshi-regular leading-relaxed px-4 md:px-8 pb-5">
              <p className="text-[#596E7F] text-sm md:text-base font-satoshi-regular leading-relaxed">
                JBTC doesn't reduce individual reward %. Instead, daily pool
                amount changes over time:
              </p>
              <p className="text-[#596E7F] text-sm md:text-base font-satoshi-regular leading-relaxed">
                Year Daily Pool
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Year 1 5,000 JBTC/day</li>
                <li>Year 2 4,000 JBTC/day</li>
                <li>Year 3 3,000 JBTC/day</li>
                <li>Year 4 2,000 JBTC/day</li>
                <li>
                  Year 5+ 1,000 JBTC/day (fixed until 20M tokens released)
                </li>
              </ul>
              <p className="text-[#596E7F] text-sm md:text-base font-satoshi-regular leading-relaxed">
                This ensures scarcity increases as more tokens are distributed.
              </p>
            </div>
          </div>
        </div>

        {/* Question 4 */}
        <div className="w-full md:w-[70%] mx-auto bg-white border border-[#CFDCE5] rounded-xl overflow-hidden transition-all duration-300 ease-in-out">
          <button
            onClick={() => toggleAccordion(3)}
            className={`w-full flex justify-between items-center px-4 md:px-8 py-5 text-left transition-colors duration-200 ${
              openIndex === 3 ? "bg-[#F8FAFB]" : "hover:bg-gray-50"
            }`}
          >
            <p className="text-black text-base md:text-lg font-satoshi-bold">
              What if I miss a claim one day?
            </p>
            <img
              loading="lazy"
              src="/faq/CaretDown.png"
              alt="toggle"
              className={`transition-transform duration-300 ${
                openIndex === 3 ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === 3 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 md:px-8 pb-5">
              <p className="text-[#596E7F] text-sm md:text-base font-satoshi-regular leading-relaxed">
                If you miss a day, you miss that day's reward. There's no
                auto-claim or carry forward for you — but the unclaimed tokens
                remain in the pool and are added to future pool distribution.
              </p>
            </div>
          </div>
        </div>

        {/* Question 5 */}
        <div className="w-full md:w-[70%] mx-auto bg-white border border-[#CFDCE5] rounded-xl overflow-hidden transition-all duration-300 ease-in-out">
          <button
            onClick={() => toggleAccordion(5)}
            className={`w-full flex justify-between items-center px-4 md:px-8 py-5 text-left transition-colors duration-200 ${
              openIndex === 5 ? "bg-[#F8FAFB]" : "hover:bg-gray-50"
            }`}
          >
            <p className="text-black text-base md:text-lg font-satoshi-bold">
              What is the maximum daily claim rate?
            </p>
            <img
              loading="lazy"
              src="/faq/CaretDown.png"
              alt="toggle"
              className={`transition-transform duration-300 ${
                openIndex === 5 ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === 5 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 md:px-8 pb-5">
              <ul className="text-[#596E7F] text-sm md:text-base font-satoshi-regular leading-relaxed list-disc list-inside">
                <li>Maximum: 0.5% of your JBTC holdings</li>
                <li>However, actual % may reduce depending on:</li>
              </ul>
              <ul className="text-[#596E7F] text-sm md:text-base font-satoshi-regular leading-relaxed list-decimal list-inside">
                <li>Number of active claimers that day</li>
                <li>Total circulating JBTC supply</li>
                <li>Size of the daily pool</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Question 6 */}
        <div className="w-full md:w-[70%] mx-auto bg-white border border-[#CFDCE5] rounded-xl overflow-hidden transition-all duration-300 ease-in-out">
          <button
            onClick={() => toggleAccordion(6)}
            className={`w-full flex justify-between items-center px-4 md:px-8 py-5 text-left transition-colors duration-200 ${
              openIndex === 6 ? "bg-[#F8FAFB]" : "hover:bg-gray-50"
            }`}
          >
            <p className="text-black text-base md:text-lg font-satoshi-bold">
              Which wallets are supported for holding JBTC?
            </p>
            <img
              loading="lazy"
              src="/faq/CaretDown.png"
              alt="toggle"
              className={`transition-transform duration-300 ${
                openIndex === 6 ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === 6 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 md:px-8 pb-5">
              <p className="text-[#596E7F] text-sm md:text-base font-satoshi-regular leading-relaxed">
                Any DEX wallet that supports Binance Smart Chain (BEP-20), such
                as:
              </p>
              <ul className="text-[#596E7F] text-sm md:text-base font-satoshi-regular leading-relaxed list-disc list-inside">
                <li>✅ MetaMask</li>
                <li>✅ Trust Wallet</li>
                <li>✅ SafePal</li>
                <li>✅ TokenPocket</li>
              </ul>
              <p className="text-[#596E7F] text-sm md:text-base font-satoshi-regular leading-relaxed">
                Just make sure your wallet is non-custodial and supports BSC.
              </p>
            </div>
          </div>
        </div>
        {/* Question 7 */}
        <div className="w-full md:w-[70%] mx-auto bg-white border border-[#CFDCE5] rounded-xl overflow-hidden transition-all duration-300 ease-in-out">
          <button
            onClick={() => toggleAccordion(7)}
            className={`w-full flex justify-between items-center px-4 md:px-8 py-5 text-left transition-colors duration-200 ${
              openIndex === 7 ? "bg-[#F8FAFB]" : "hover:bg-gray-50"
            }`}
          >
            <p className="text-black text-base md:text-lg font-satoshi-bold">
              Can I refer others?
            </p>
            <img
              loading="lazy"
              src="/faq/CaretDown.png"
              alt="toggle"
              className={`transition-transform duration-300 ${
                openIndex === 7 ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === 7 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 md:px-8 pb-5">
              <p className="text-[#596E7F] text-sm md:text-base font-satoshi-regular leading-relaxed">
                Yes! JBTC has a 1-level referral program that rewards you
                whenever your referrals claim tokens.
              </p>
            </div>
          </div>
        </div>
        {/* Question 8 */}
        <div className="w-full md:w-[70%] mx-auto bg-white border border-[#CFDCE5] rounded-xl overflow-hidden transition-all duration-300 ease-in-out">
          <button
            onClick={() => toggleAccordion(8)}
            className={`w-full flex justify-between items-center px-4 md:px-8 py-5 text-left transition-colors duration-200 ${
              openIndex === 8 ? "bg-[#F8FAFB]" : "hover:bg-gray-50"
            }`}
          >
            <p className="text-black text-base md:text-lg font-satoshi-bold">
              What are the referral benefits?
            </p>
            <img
              loading="lazy"
              src="/faq/CaretDown.png"
              alt="toggle"
              className={`transition-transform duration-300 ${
                openIndex === 8 ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === 8 ? " opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="text-[#596E7F] text-sm md:text-base font-satoshi-regular leading-relaxed mt-1 px-4 md:px-8 pb-5">
              <p>If you refer someone, you earn from their daily claim.</p>
              <p className="text-[#596E7F] text-sm md:text-base font-satoshi-regular leading-relaxed">
                Qualified Referral Payouts:
              </p>
              <ul className="text-[#596E7F] text-sm md:text-base font-satoshi-regular leading-relaxed list-disc list-inside">
                <li>Level 1: 10%</li>
              </ul>
              <p className="text-[#596E7F] text-sm md:text-base font-satoshi-regular leading-relaxed">
                Unqualified Referral (Fallback):
              </p>
              <ul className="text-[#596E7F] text-sm md:text-base font-satoshi-regular leading-relaxed list-disc list-inside">
                <li>⁠Level 1: 1.0 %</li>
              </ul>
              <p className="text-[#596E7F] text-sm md:text-base font-satoshi-regular leading-relaxed">
                Proposed Referral Qualification Logic
              </p>
              <ul className="text-[#596E7F] text-sm md:text-base font-satoshi-regular leading-relaxed list-disc list-inside">
                <li>Level Required Holding by Referrer Payout If Qualified</li>
                <li>
                  Level 1 At least 2× of user’s claimed amount 10% of claim
                  amount
                </li>
              </ul>
              <p className="text-[#596E7F] text-sm md:text-base font-satoshi-regular leading-relaxed mt-2">
                Fallback:
              </p>
              <p className="text-[#596E7F] text-sm md:text-base font-satoshi-regular leading-relaxed">
                If criteria not met:
              </p>
              <ul className="text-[#596E7F] text-sm md:text-base font-satoshi-regular leading-relaxed list-disc list-inside">
                <li>⁠Level 1 → 1%</li>
              </ul>
              <p className="text-[#596E7F] text-sm md:text-base font-satoshi-regular leading-relaxed">
                Remaining (i.e., 9% )→ goes back to next day’s pool
              </p>
              <p>📌 Example Scenario</p>
              <p>User A refers B,</p>
              <ul className="text-[#596E7F] text-sm md:text-base font-satoshi-regular leading-relaxed list-disc list-inside">
                <li>B Hold 1000 JBTC claims 10 JBTC</li>
                <li>A must hold 2000 JBTC to get 1 JBTC</li>
              </ul>
              <p>If A only holds less then 2000 JBTC:</p>
              <ul className="text-[#596E7F] text-sm md:text-base font-satoshi-regular leading-relaxed list-disc list-inside">
                <li>A gets fallback = 0.1 JBTC</li>
                <li>0.9 JBTC from level 1 goes back to pool</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Question 9 */}
        <div className="w-full md:w-[70%] mx-auto bg-white border border-[#CFDCE5] rounded-xl overflow-hidden transition-all duration-300 ease-in-out">
          <button
            onClick={() => toggleAccordion(9)}
            className={`w-full flex justify-between items-center px-4 md:px-8 py-5 text-left transition-colors duration-200 ${
              openIndex === 8 ? "bg-[#F8FAFB]" : "hover:bg-gray-50"
            }`}
          >
            <p className="text-black text-base md:text-lg font-satoshi-bold">
              What do I need to earn referral income?
            </p>
            <img
              loading="lazy"
              src="/faq/CaretDown.png"
              alt="toggle"
              className={`transition-transform duration-300 ${
                openIndex === 9 ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === 9 ? " opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="text-[#596E7F] text-sm md:text-base font-satoshi-regular leading-relaxed mt-1 px-4 md:px-8 pb-5">
              <p>To qualify for full referral income:</p>
              <ul className="text-[#596E7F] text-sm md:text-base font-satoshi-regular leading-relaxed list-disc list-inside">
                <li>
                  You must hold the double or more JBTC than your referral is
                  claiming.
                </li>
                <li>If you don’t, fallback rewards apply (1%,).</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Question 10 */}
        <div className="w-full md:w-[70%] mx-auto bg-white border border-[#CFDCE5] rounded-xl overflow-hidden transition-all duration-300 ease-in-out">
          <button
            onClick={() => toggleAccordion(10)}
            className={`w-full flex justify-between items-center px-4 md:px-8 py-5 text-left transition-colors duration-200 ${
              openIndex === 10 ? "bg-[#F8FAFB]" : "hover:bg-gray-50"
            }`}
          >
            <p className="text-black text-base md:text-lg font-satoshi-bold">
              What happens to unclaimed or unused rewards?
            </p>
            <img
              loading="lazy"
              src="/faq/CaretDown.png"
              alt="toggle"
              className={`transition-transform duration-300 ${
                openIndex === 10 ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === 10 ? " opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="text-[#596E7F] text-sm md:text-base font-satoshi-regular leading-relaxed mt-1 px-4 md:px-8 pb-5">
              <ul className="text-[#596E7F] text-sm md:text-base font-satoshi-regular leading-relaxed list-disc list-inside">
                <li>
                  If a user misses a claim, that portion is carried forward to
                  the next day’s pool.
                </li>
                <li>
                  ⁠If referral reward is unqualified or unused, it also goes
                  back to the daily pool for fair redistribution.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Question 11 */}
        <div className="w-full md:w-[70%] mx-auto bg-white border border-[#CFDCE5] rounded-xl overflow-hidden transition-all duration-300 ease-in-out">
          <button
            onClick={() => toggleAccordion(11)}
            className={`w-full flex justify-between items-center px-4 md:px-8 py-5 text-left transition-colors duration-200 ${
              openIndex === 11 ? "bg-[#F8FAFB]" : "hover:bg-gray-50"
            }`}
          >
            <p className="text-black text-base md:text-lg font-satoshi-bold">
              How does the daily pool work?
            </p>
            <img
              loading="lazy"
              src="/faq/CaretDown.png"
              alt="toggle"
              className={`transition-transform duration-300 ${
                openIndex === 11 ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === 11 ? " opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="text-[#596E7F] text-sm md:text-base font-satoshi-regular leading-relaxed mt-1 px-4 md:px-8 pb-5">
              <p>
                A fixed number of JBTC tokens are released each day based on the
                current year’s plan. <br /> That pool is then split
                proportionally among all claimers based on their JBTC holdings
                (max 0.5%). <br />
                If the total claim requests exceed the pool, everyone gets
                proportionally less.
              </p>
            </div>
          </div>
        </div>
        {/* Question 12 */}
        <div className="w-full md:w-[70%] mx-auto bg-white border border-[#CFDCE5] rounded-xl overflow-hidden transition-all duration-300 ease-in-out">
          <button
            onClick={() => toggleAccordion(12)}
            className={`w-full flex justify-between items-center px-4 md:px-8 py-5 text-left transition-colors duration-200 ${
              openIndex === 12 ? "bg-[#F8FAFB]" : "hover:bg-gray-50"
            }`}
          >
            <p className="text-black text-base md:text-lg font-satoshi-bold">
              How long will this claim program last?
            </p>
            <img
              loading="lazy"
              src="/faq/CaretDown.png"
              alt="toggle"
              className={`transition-transform duration-300 ${
                openIndex === 12 ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === 12 ? " opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="text-[#596E7F] text-sm md:text-base font-satoshi-regular leading-relaxed mt-1 px-4 md:px-8 pb-5">
              <p>
                The total distribution period is ~45 years, until 20,000,000
                JBTC are fully claimed. <br />
                Once all tokens are distributed, no further rewards will be
                available, and JBTC will enter full market circulation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
