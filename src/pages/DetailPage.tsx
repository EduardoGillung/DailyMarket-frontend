import { useGetRestaurant } from "@/api/RestaurantApi";
import MenuItem from "@/components/MenuItem";
import OrderSummary from "@/components/OrderSummary";
import RestaurantInfo from "@/components/RestaurantInfo";
import { Card, CardFooter } from "@/components/ui/card";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { MenuItem as MenuItemType } from "@/types";
import CheckoutButton from "@/components/CheckoutButton";
import { UserFormData } from "@/forms/user-profile-form/UserProfileForm";
import { useCreateCheckoutSession } from "@/api/OrderApi";


export type CartItem = {
    _id: string;
    name: string;
    price: number;
    quantity: number;
};

const DetailPage = () => {
    const { restaurantId } = useParams();
    const { restaurant, isLoading } = useGetRestaurant(restaurantId);
    const { createCheckoutSession, isLoading: isCheckoutLoading } = useCreateCheckoutSession();

    //store cards in session 
    const [cartItems, setCartItems ] = useState<CartItem[]>(() => {
        const storedCartItems = sessionStorage.getItem(`cartItems-${restaurantId}`);
        return storedCartItems ? JSON.parse(storedCartItems) : [];
    });

    const addToCart = (menuItem: MenuItemType) => {
        setCartItems((prevCartItems) => {
            // 1.check if the item is already in the cart
            const existingCartItem = prevCartItems.find(
                (cartItem) => cartItem._id === menuItem._id
            );

            let updatedCartItems;

            // 2. if item is in cart, update the quantity
            if(existingCartItem){
                updatedCartItems = prevCartItems.map((cartItem) =>
                    cartItem._id === menuItem._id  
                    ? { ...cartItem, quantity: cartItem.quantity + 1}
                    : cartItem
                );
            } else {
                updatedCartItems = [
                    ...prevCartItems, 
                    {
                        _id: menuItem._id,
                        name: menuItem.name,
                        price: menuItem.price,
                        quantity: 1,
                    },
                ]
            }
            //store cartItems 
            sessionStorage.setItem(
                `cartItems-${restaurantId}`,
                JSON.stringify(updatedCartItems)
            );
            // 3. if item is not in cart, add it as a new item
            return updatedCartItems
        })
    };

    const removeFromCart = (cartItem: CartItem) => {
        setCartItems((prevCartItems) => {
            const updatedCartItems = prevCartItems.filter(
                (item) => cartItem._id !== item._id
            );

            sessionStorage.setItem(
                `cartItems-${restaurantId}`,
                JSON.stringify(updatedCartItems)
            );

            return updatedCartItems;
        });
    };

    const onCheckout = async (userFormData: UserFormData) => {
        if(!restaurant) {
            return;
        }

        const checkoutData = {
            cartItems: cartItems.map((cartItem) => ({
                menuItemId: cartItem._id,
                name: cartItem.name,
                quantity: cartItem.quantity.toString(),
            })),
            restaurantId: restaurant._id,
            deliveryDetails: {
                name: userFormData.name,
                addressLine1: userFormData.addressLine1,
                city: userFormData.city,
                country: userFormData.country,
                email: userFormData.name as string
            }
        };

        const data = await createCheckoutSession(checkoutData)
        window.location.href = data.url;
    };

    if(isLoading || !restaurant) {
        return "Loading...";
    }

    return (
        <div className="flex flex-col gap-5">
            
            <div className="grid md:grid-cols-[4fr_2fr] gap-5 md:px-32">
                <div className="flex flex-col gap-4">
                    <RestaurantInfo restaurant={restaurant} />
                    <span className="text-2xl font-bold tracking-tight px-2 text-PrimaryGrey font-redHat">Menu</span>
                    {restaurant.menuItems.map((menuItem) => (
                        <MenuItem 
                            menuItem={menuItem} addToCart={() => addToCart(menuItem)}/>
                    ))}
                </div>

                <div>
                    <Card>
                        <OrderSummary 
                            restaurant={restaurant} 
                            cartItems={cartItems}
                            removeFromCart={removeFromCart}
                            />
                    
                        <CardFooter>
                            <CheckoutButton 
                                disabled={cartItems.length === 0}
                                onCheckout={onCheckout}
                                isLoading={isCheckoutLoading}                            />
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )

}

export default DetailPage;