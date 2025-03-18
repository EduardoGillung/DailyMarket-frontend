import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const DetailsSection = () => {
    const { control } = useFormContext();
    return (
        <div className="space-y-2 text-PrimaryGrey">
          <h2 className="text-3xl font-bold">Informações da Pizzaria</h2>
          <FormDescription>
            Preencha as informações e adicione o cardápio da sua pizzaria, é rapidinho!
          </FormDescription>          
        
        <FormField
            control={control}
            name="restaurantName"
            render= {({ field }) => ( 
            <FormItem>
                <FormLabel>Nome da Pizzaria</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white rounded-xl gap-2 border-SecondaryGrey" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4 "></div>
            <FormField
                control={control}
                name="city"
                render= {({ field }) => ( 
                <FormItem className="flex-1">
                    <FormLabel>Cidade</FormLabel>
                <FormControl>
                    <Input {...field} className="bg-white rounded-xl gap-2 border-SecondaryGrey"/>
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
                    <FormLabel>País</FormLabel>
                <FormControl>
                    <Input {...field} className="bg-white rounded-xl gap-2 border-SecondaryGrey"/>
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
                    <FormLabel>Valor da entrega($)</FormLabel>
                <FormControl>
                    <Input {...field} className="bg-white rounded-xl gap- border-SecondaryGrey" placeholder=""/>
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
                    <FormLabel>Tempo estimado da entrega: (minutos)</FormLabel>
                    <FormControl>
                    <Input {...field} className="bg-white rounded-xl gap-2 border-SecondaryGrey" placeholder="" />
                    </FormControl>
                    <FormMessage />
                </FormItem>
        )}
      />
    </div>
    );
};

export default DetailsSection; 