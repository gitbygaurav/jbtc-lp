const Faq: React.FC = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto py-6 md:py-8 px-2 md:px-8">
      <h2 className="text-[#1C1C1C] text-2xl md:text-[70px] text-center font-elza-bold-condensed font-bold tracking-tight md:leading-20 uppercase">
        Frequently Asked Questions
      </h2>
      <p className="text-[#333333] text-base md:text-xl text-center font-satoshi-medium mt-4">
        Everything you need to know about Junior Bitcoin
      </p>
      <div className="mt-8">
        <div className="w-full md:w-[70%] mx-auto bg-white flex justify-between items-center border border-[#CFDCE5] px-4 md:px-8 py-5 rounded-xl">
            <p className="text-black text-base md:text-lg font-satoshi-bold">Do I need to stake to earn?</p>
            <img loading="lazy" src="/faq/CaretDown.png" alt="caretdown" />
        </div>
        <div className="w-full md:w-[70%] mx-auto bg-white flex justify-between items-center border border-[#CFDCE5] px-4 md:px-8 py-5 rounded-xl mt-4">
            <p className="text-black text-base md:text-lg font-satoshi-bold">What if I miss a day?</p>
            <img loading="lazy" src="/faq/CaretDown.png" alt="caretdown" />
        </div>
        <div className="w-full md:w-[70%] mx-auto bg-white flex justify-between items-center border border-[#CFDCE5] px-4 md:px-8 py-5 rounded-xl mt-4">
            <p className="text-black text-base md:text-lg font-satoshi-bold">Who qualifies for referral income?</p>
            <img loading="lazy" src="/faq/CaretDown.png" alt="caretdown" />
        </div>
        <div className="w-full md:w-[70%] mx-auto bg-white flex justify-between items-center border border-[#CFDCE5] px-4 md:px-8 py-5 rounded-xl mt-4">
            <p className="text-black text-base md:text-lg font-satoshi-bold">Can I sell anytime?</p>
            <img loading="lazy" src="/faq/CaretDown.png" alt="caretdown" />
        </div>
        <div className="w-full md:w-[70%] mx-auto bg-white flex justify-between items-center border border-[#CFDCE5] px-4 md:px-8 py-5 rounded-xl mt-4">
            <p className="text-black text-base md:text-lg font-satoshi-bold">What if many claim at once?</p>
            <img loading="lazy" src="/faq/CaretDown.png" alt="caretdown" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
