import { Button } from "./ui/button"


const MainNav = () => {
    return(
        <Button 
            variant="ghost" 
            className="font-bold hover:text-dailyPrimary hover:bg-white text-CustomGrey"
        >
          Log In
        </Button>
    );
};

export default MainNav;