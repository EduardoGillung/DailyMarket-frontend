import { CircleUserRound, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
    const { isAuthenticated, loginWithRedirect, user } = useAuth0();
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-dailyPrimary" />
            </SheetTrigger>
            <SheetContent className="space-y-3 bg-backgroundColor rounded-xl">
                <SheetTitle>
                    {isAuthenticated ? (
                        <span className="flex items-center font-bold gap-2">
                            <CircleUserRound className="text-dailyPrimary rounded-xl" />
                            {user?.email}
                        </span>
                    ) : (
                        <span className="text-dailyPrimary font-redHat font-bold text-2xl hover:text-dailyPrimary hover:bg-white"> Bem vindo ao Pizzario! </span>
    
                    )}
                    
                </SheetTitle>
                <Separator />
                <SheetDescription className="flex">
                    {isAuthenticated ? (
                        <MobileNavLinks/>
                    ) : (
                      <Button 
                        onClick={() => loginWithRedirect()}
                        className="flex-1 font-bold bg-dailyPrimary rounded-xl text-white font-redHat"
                      >
                        Conectar-se
                      </Button>                       
                    )}
                </SheetDescription>
            </SheetContent>
        </Sheet>
      );
    };


export default MobileNav;