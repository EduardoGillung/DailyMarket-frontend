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
            <DropdownMenuTrigger className="flex items-center justify-center p-5 w-full h-10 font-bold font-redHat hover:bg-dailyPrimary text-dailyPrimary hover:text-white rounded-xl ">
                <CircleUserRound className="text-dailySecondary mr-2" />
                    <span>{user?.email}</span>
        </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white shadow-lg rounded-xl p-8 space-y-2 ">
            <DropdownMenuItem>
                    <Link
                        to="/manage-restaurant"
                        className="font-redHat hover:text-dailySecondary font-semibold">
                        Gerenciar restaurante
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link
                        to="/user-profile"
                        className="font-redHat hover:text-dailySecondary font-semibold">
                        Perfil do usuário
                    </Link>
                </DropdownMenuItem>
                <Separator />
                <DropdownMenuItem>
                    <Button
                        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                        className="flex flex-auto font-redHat bg-dailyPrimary rounded-xl text-white font-semibold hover:text-PrimaryGrey"
                        >
                        Desconectar-se
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UsernameMenu;