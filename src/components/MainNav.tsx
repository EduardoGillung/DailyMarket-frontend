import { Button } from "./ui/button"
import { useAuth0 } from "@auth0/auth0-react";
import UsernameMenu from "./UsernameMenu";
import { Link } from "react-router-dom";

const MainNav = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return(
        <span className="flex space-x-5 items-center">
            {isAuthenticated ? (
            <>
                <Link 
                to="/order-status" 
                className="font-redHat font-bold hover:bg-dailyPrimary text-dailyPrimary hover:text-white rounded-xl "
                >
                    Acompanhar pedidos
                </Link>    
                <UsernameMenu/>
            </>
            ) : (
                <Button 
                    variant="ghost" 
                    className="font-redHat font-bold hover:bg-dailyPrimary text-dailyPrimary hover:text-white rounded-xl"
                    onClick={async () => await loginWithRedirect()}
                >
                Conectar conta
                </Button>
        )}
    </span>   
    );
}
export default MainNav;