import { Restaurant } from "@/types"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Dot } from "lucide-react";
import { AspectRatio } from "./ui/aspect-ratio";

type Props = {
    restaurant: Restaurant
}

const RestaurantInfo = ({ restaurant }: Props) => {
    return (
        <Card className="font-redHat text-PrimaryGrey ">
            <CardHeader className="gap-4 grid lg:grid-cols-[4fr_6fr] group">
                <AspectRatio ratio={8 / 4}>
                    <img
                        src={restaurant.imageUrl}
                        className="h-full w-full rounded-xl"
                    />
                </AspectRatio>
                <div className="flex flex-col justify-start">
                    <CardTitle className="text-3xl font-redHat font-bold text-PrimaryGrey">
                        {restaurant.restaurantName}
                    </CardTitle>
                    <CardDescription className="font-redHat text-PrimaryGrey">
                        {restaurant.city}, {restaurant.country}
                    </CardDescription>
                    {/* Aqui a lista de culinárias deve vir abaixo */}
                    <div className="flex flex-wrap gap-2 mt-2">
                        {restaurant.cuisines.map((item, index) => (
                            <span className="flex" key={index}>
                                <span>{item}</span>
                                {index < restaurant.cuisines.length - 1 && <Dot />}
                            </span>
                        ))}
                    </div>
                </div>
            </CardHeader>
        </Card>
    );
};



export default RestaurantInfo;