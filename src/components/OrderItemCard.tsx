import { Order, OrderStatus } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ORDER_STATUS } from "@/config/order-status-config";
import { useUpdateMyRestaurantOrder } from "@/api/MyRestaurantApi";
import { useEffect, useState } from "react";

type Props = {
  order: Order;
};

const OrderItemCard = ({ order }: Props) => {
  const { updateRestaurantStatus, isLoading } = useUpdateMyRestaurantOrder();
  const [status, setStatus] = useState<OrderStatus>(order.status);

  useEffect(() => {
    setStatus(order.status);
  }, [order.status]);

  const handleStatusChange = async (newStatus: OrderStatus) => {
    await updateRestaurantStatus({
      orderId: order._id as string,
      status: newStatus,
    });
    setStatus(newStatus);
  };

  const getTime = () => {
    const orderDateTime = new Date(order.createdAt);

    const hours = orderDateTime.getHours();
    const minutes = orderDateTime.getMinutes();

    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${paddedMinutes}`;
  };

  return (
    <Card className="rounded-xl bg-white">
      <CardHeader>
        <CardTitle className="grid md:grid-cols-4 gap-4 justify-between mb-3 text-PrimaryGrey ">
          <div className="font-bold"> 
            Nome do cliente:
            <span className="ml-2 font-normal">
              {order.deliveryDetails.name}
            </span>
          </div>
          <div className="font-bold">
            Endereço:
            <span className="ml-2 font-normal">
              {order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}
            </span>
          </div>
          <div className="font-bold">
            Tempo estimado:
            <span className="ml-2 font-normal">{getTime()}</span>
          </div>
          <div className="font-bold">
            Valor total:
            <span className="ml-2 font-normal">
              ${(order.totalAmount / 100).toFixed(2)}
            </span>
          </div>
        </CardTitle>
        <Separator />
      </CardHeader>
      <CardContent className="flex flex-col gap-6 rounded-xl text-PrimaryGrey">
        <div className="flex flex-col gap-2 font-bold">
          {order.cartItems.map((cartItem) => (
            <span>
              <Badge variant="outline" className="mr-2">
                {cartItem.quantity}
              </Badge>
              {cartItem.name}
            </span>
          ))}
        </div>
        <div className="flex flex-col space-y-4 px-10 rounded-xl">
          <Label htmlFor="status" className="font-bold text-xl">Qual é o status do seu pedido?</Label>
          <Select
            value={status}
            disabled={isLoading}
            onValueChange={(value) => handleStatusChange(value as OrderStatus)}
          >
            <SelectTrigger id="status" className="rounded-xl border-SecondaryGrey font-bold text-dailyPrimary bg-white hover:text-dailyPrimary" >
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent
              position="popper"
              className="bg-white border-SecondaryGrey shadow-lg z-10 rounded-xl text-PrimaryGrey font-redHat"
            >
              {ORDER_STATUS.map((status) => (
                <SelectItem value={status.value} className="hover:bg-green-500 ">
                  {status.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderItemCard;