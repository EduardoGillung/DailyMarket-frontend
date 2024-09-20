import { Button } from "./ui/button"
import { useAuth0 } from "@auth0/auth0-react";

const MainNav = () => {
    const { loginWithRedirect } = useAuth0();
    return(
        <Button 
            variant="ghost" 
            className="font-bold hover:text-dailyPrimary hover:bg-white text-CustomGrey"
            onClick={async () => await loginWithRedirect()}
        >
          Conectar conta
        </Button>
    );
};

export default MainNav;