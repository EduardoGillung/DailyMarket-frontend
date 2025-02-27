
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import { Link } from "react-router-dom";


const Header = () => {
    return(
        <div className="bg-backgroundColor py-7 rounded-b-lg ">
            <div className="container mx-auto flex justify-between items-center">
                
                 <Link
                  to="/"
                  className="text-5xl font-meow  text-dailyPrimary"
                 >
                Pizzario
            </Link>

                <div className="md:hidden text-redHat">
                    <MobileNav />
                </div>
                <div className="hidden md:block text-redHat">
                    <MainNav />
                </div>
            </div>
        </div>
    );
};

export default Header;