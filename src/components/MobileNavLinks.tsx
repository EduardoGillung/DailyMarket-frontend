import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
    const { logout } = useAuth0();
    return(
        <>
         <div className="flex flex-col font-redHat gap-6 =">
            <Link 
                to="/order-status" 
                className="font-bold hover:text-PrimaryGrey text-dailyPrimary"
            >
                Status do pedido
            </Link>

            <Link 
                to="/user-profile" 
                className="flex bg-white items-center font-bold text-dailySecondary hover:text-PrimaryGrey"
                >
                Perfil do Usuário
            </Link>

            <Link
                to="/manage-restaurant"
                className="flex bg-white items-center font-bold text-dailySecondary hover:text-PrimaryGrey">
                    Gerenciar restaurante
                </Link>
            
            <Button 
                onClick={() => logout()}
                className="flex items-center px-3 font-bold bg-dailyPrimary  rounded-xl h-10 text-white hover:text-dailyPrimary">
                Desconectar-se
            </Button>
        </div>
    </>
        
    )
}

export default MobileNavLinks;