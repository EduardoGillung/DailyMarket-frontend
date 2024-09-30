import { Button } from "./ui/button"
import { useAuth0 } from "@auth0/auth0-react";
import UsernameMenu from "./UsernameMenu";

const MainNav = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return(
        <span className="flex space-x-2 items-center">
            {isAuthenticated ? (
              <UsernameMenu/>
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