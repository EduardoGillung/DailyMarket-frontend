import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { DropdownMenu } from "./ui/dropdown-menu";
import { CircleUserRound } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const UsernameMenu = () => {
    const { user, logout } = useAuth0();
    
    return(
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-6 w-full h-10 font-bold hover:bg-white text-dailySecondary rounded-xl gap-3" >
                <CircleUserRound className="text-dailySecondary" />
                {user?.email}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white shadow-lg rounded-xl p-8 space-y-2">
            <DropdownMenuItem>
                    <Link
                        to="/manage-restaurant"
                        className="font-redHat hover:text-dailySecondary">
                        Gerenciar restaurante
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link
                        to="/user-profile"
                        className="font-redHat hover:text-dailySecondary">
                        Perfil do usuário
                    </Link>
                </DropdownMenuItem>
                <Separator />
                <DropdownMenuItem>
                    <Button
                        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                        className="flex flex-1 font-redHat bg-dailyPrimary rounded-xl"
                        >
                        Desconectar-se
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UsernameMenu;