const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-[#1C1C1C] text-white">
            <div className="max-w-[1440px] mx-auto flex items-center justify-between px-2 md:px-8 py-6 relative">
                <img loading="lazy" src="/footer/logo.png" alt="Logo" />
                <div className="hidden md:flex items-center space-x-4">
                    <p className="text-sm font-satoshi-medium uppercase">Terms and Conditions</p>
                    <p className="text-sm font-satoshi-medium uppercase">Privacy Policy</p>
                    <p className="text-sm font-satoshi-medium uppercase">Faq</p>
                </div>
                <div className="flex items-center space-x-4">
                    <img loading="lazy" src="/footer/telegram-logo.png" alt="telegram-logo" />
                    <img loading="lazy" src="/footer/x-logo.png" alt="x-logo" />
                </div>
            </div>
            <div className="flex md:hidden items-center justify-between px-2">
                    <p className="text-sm font-satoshi-medium uppercase">Terms and Conditions</p>
                    <p className="text-sm font-satoshi-medium uppercase">Privacy Policy</p>
                    <p className="text-sm font-satoshi-medium uppercase">Faq</p>
                </div>
        </footer>
    )
}

export default Footer;