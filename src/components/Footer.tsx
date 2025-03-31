import { Link } from "react-router-dom";

const Footer = () => {
    return(
    <div className="bg-dailyPrimary py-5 px-10 font-redHat text-backgroundColor">
   

            <div className="container mx-auto flex flex-col md:flex-row justify-end items-center pt-15">
              <span className="text-white font-bold tracking-tight flex gap-8 font-redHat">
                    <Link to={"/"}>Termos de uso</Link>
                    <Link to={"/"}>Politicas de privacidade</Link>
              </span>
            </div>
        </div>
    )
};

export default Footer;