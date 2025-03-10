import { Button } from "./ui/button"
import { useAuth0 } from "@auth0/auth0-react";
import UsernameMenu from "./UsernameMenu";
import { Link } from "react-router-dom";
import { CircleUserRound } from "lucide-react";


const MainNav = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return(
        <span className="flex space-x-2 items-center font-redHat font-bold">
            {isAuthenticated ? (
            <>
                <Link
                to="/order-status" 
                className="flex items-center justify-center w-full h-10 font-bold px-10 hover:bg-dailyPrimary text-dailyPrimary hover:text-white rounded-xl"

                >
                    
                    Acompanhar pedidos
                </Link>    
                <UsernameMenu/>
            </>
            ) : (
                <Button 
                    variant="ghost" 
                    className="flex-auto px-5 font-redHat font-bold hover:bg-dailyPrimary text-dailyPrimary hover:text-white rounded-xl "
                    onClick={async () => await loginWithRedirect()}
                    
                >
                <CircleUserRound className="text-dailySecondary mr-2 " /> 
                Conectar conta
                </Button>
                
        )}
    </span>   
    );
}
export default MainNav;