import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const DetailsSection = () => {
    const { control } = useFormContext();
    return (
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Restaurant details</h2>
          <FormDescription>
            Enter the details about your restaurant
          </FormDescription>          
        
        <FormField
            control={control}
            name="restaurantName"
            render= {({ field }) => ( 
            <FormItem>
                <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white rounded-xl gap-2" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4"></div>
            <FormField
                control={control}
                name="city"
                render= {({ field }) => ( 
                <FormItem className="flex-1">
                    <FormLabel>City</FormLabel>
                <FormControl>
                    <Input {...field} className="bg-white rounded-xl gap-2"/>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
                control={control}
                name="country"
                render= {({ field }) => ( 
                <FormItem className="flex-1">
                    <FormLabel>Country</FormLabel>
                <FormControl>
                    <Input {...field} className="bg-white rounded-xl gap-2"/>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
                control={control}
                name="deliveryPrice"
                render= {({ field }) => ( 
                <FormItem className="max-w-[25%]">
                    <FormLabel>Delivery price($)</FormLabel>
                <FormControl>
                    <Input {...field} className="bg-white rounded-xl gap-2" placeholder=""/>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
                control={control}
                name="estimatedDeliveryTime"
                render={({ field }) => (
                <FormItem className="max-w-[25%]">
                    <FormLabel>Estimated Delivery Time (minutes)</FormLabel>
                    <FormControl>
                    <Input {...field} className="bg-white rounded-xl gap-2" placeholder="" />
                    </FormControl>
                    <FormMessage />
                </FormItem>
        )}
      />
    </div>
    );
};

export default DetailsSection; 