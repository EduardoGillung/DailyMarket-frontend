import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
    const { logout } = useAuth0();
    return(
        <>

        <Link 
            to="/order-status" 
            className="font-bold hover:text-dailySecondary"
        >
            Status do pedido
        </Link>

        <Link 
            to="/user-profile" 
            className="flex bg-white items-center font-bold text-dailySecondary"
            >
            Perfil do Usuário
        </Link>

        <Link
            to="/manage-restaurant"
            className="flex bg-white items-center font-bold text-dailySecondary">
                Gerenciar restaurante
            </Link>
        
        <Button 
            onClick={() => logout()}
            className="flex items-center px-3 font-bold bg-dailyPrimary">
            Desconectar-se
        </Button>
        </>
    )
}

export default MobileNavLinks;