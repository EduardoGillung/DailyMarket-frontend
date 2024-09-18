const Footer = () => {
    return(
    <div className="bg-dailyPrimary py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <span className="text-3xl text-white font-bold tracking-tight font-slab">
                DailyMarket.com
            </span>
            <span className="text-white font-bold tracking-tight flex gap-4 font-slab">
                <span>Politicas de privacidade</span>
                <span>Termos de uso</span>
            </span>
        </div>
    </div>
    )
};

export default Footer;