import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useGetMyRestaurantOrders,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import OrderItemCard from "@/components/OrderItemCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";



const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateMyRestaurant();

  const { orders } = useGetMyRestaurantOrders();

  const isEditing = !!restaurant;

  return (
    <Tabs defaultValue="orders">
      <TabsList>
        <TabsTrigger value="orders" className="rounded-xl text-3xl text-PrimaryGrey font-redHat font-bold hover:text-white hover:bg-dailyPrimary data-[state=active]:bg-dailyPrimary data-[state=active]:text-white">Pedidos</TabsTrigger>
        <TabsTrigger value="manage-restaurant" className="rounded-xl text-PrimaryGrey text-2xl font-redHat font-bold  hover:text-white hover:bg-dailyPrimary data-[state=active]:bg-dailyPrimary data-[state=active]:text-white">Gerenciar Pizzaria</TabsTrigger>
      </TabsList>
      <TabsContent
        value="orders"
        className="space-y-5 p-10 rounded-xl font-redHat "
      >
        <h2 className="text-2xl font-bold text-PrimaryGrey font-redHat">{orders?.length} Pedidos ativos:</h2>
        {orders?.map((order) => (
          <OrderItemCard order={order} />
          
        ))}
      </TabsContent>
      <TabsContent value="manage-restaurant">
        <ManageRestaurantForm
          restaurant={restaurant}
          onSave={isEditing ? updateRestaurant : createRestaurant}
          isLoading={isCreateLoading || isUpdateLoading}
        />
      </TabsContent>
    </Tabs>
  );
};

export default ManageRestaurantPage;