const Footer = () => {
    return(
    <div className="bg-dailyPrimary py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <span className="text-5xl text-white font-meow tracking-tight">
                Pizzario
            </span>
            <span className="text-white font-bold tracking-tight flex gap-4 font-redHat">
                <span>Politicas de privacidade</span>
                <span>Termos de uso</span>
            </span>
        </div>
    </div>
    )
};

export default Footer;