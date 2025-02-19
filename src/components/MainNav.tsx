import { Button } from "./ui/button"
import { useAuth0 } from "@auth0/auth0-react";
import UsernameMenu from "./UsernameMenu";
import { Link } from "react-router-dom";

const MainNav = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return(
        <span className="flex space-x-2 items-center">
            {isAuthenticated ? (
            <>
                <Link to="/order-status" className="font-bold hover:text-dailySecondary">
                    Order Status
                </Link>    
                <UsernameMenu/>
            </>
            ) : (
                <Button 
                    variant="ghost" 
                    className="font-bold hover:text-dailyPrimary hover:bg-white text-dailySecondary"
                    onClick={async () => await loginWithRedirect()}
                >
                Conectar-se
                </Button>
        )}
    </span>   
    );
}
export default MainNav;