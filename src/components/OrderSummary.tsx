
import { Restaurant } from "@/types"
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { CartItem } from "@/pages/DetailPage";
import { Badge } from "./ui/badge";
import { Separator } from "@radix-ui/react-separator";
import { Trash } from "lucide-react";


type Props = {
    restaurant: Restaurant;
    cartItems: CartItem[];
    removeFromCart: (cartItem: CartItem) => void
}

const OrderSummary = ({ restaurant, cartItems, removeFromCart }: Props) => {
    const getTotalCost = () => {
        const totalInPence = cartItems.reduce(
            (total, cartItem) => total + cartItem.price * cartItem.quantity, 
        0
      );

      const totalWithDelivery = totalInPence + restaurant.deliveryPrice;

      return (totalWithDelivery / 100).toFixed(2);
    };
    
    return (
        <>
            <CardHeader>
                <CardTitle className="text-2xl font-bold tracking-tight flex justify-between font-redHat text-PrimaryGrey">
                    <span>Seu pedido</span>
                    <span>$ {getTotalCost()}</span>
                </CardTitle>     
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
                {cartItems.map((item) => (
                    <div className="flex justify-between font-redHat text-PrimaryGrey">
                        <span>
                            <Badge variant="outline" className="mr-2">
                                {item.quantity}
                            </Badge>          
                            {item.name}
                        </span>
                        <span className="flex items-center gap-1 font-redHat text-PrimaryGrey">
                            <Trash 
                                className="cursor-pointer" 
                                color="red" 
                                size={20} 
                                onClick={()=> removeFromCart(item)}
                            />
                            $ {((item.price * item.quantity) / 100).toFixed(2)}
                        </span>
                    </div>
                ))}
                <Separator/>
                <div className="flex justify-between font-redHat text-PrimaryGrey">
                    <span>Valor da entrega:</span>
                    <span>${(restaurant.deliveryPrice / 100).toFixed(2)}</span>  
                </div>
                <Separator/>
            </CardContent>
        </>
    )
}

export default OrderSummary;