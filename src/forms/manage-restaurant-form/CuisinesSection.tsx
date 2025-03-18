import { FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { cuisineList } from "@/config/restaurant-options-config";
import { useFormContext } from "react-hook-form"
import CuisineCheckBox from "./CuisineCheckbox";

const CuisinesSection = () => {
   const { control } = useFormContext();

   return (
    <div className="space-y-5 rounded-xl text-PrimaryGrey">
      <div>
        <h2 className="text-3xl font-bold">Entregas e Pagamento</h2>
        <FormDescription className="text-2x1">
            Selecione os formatos de entrega e pagamento que seu estabelecimento disponinibiliza para o cliente:
        </FormDescription>
    </div>
    <FormField 
        control={control} 
        name="cuisines" 
        render={({field})=> (
          <FormItem>
            <div className="grid md:grid-cols-5 gap-1 ">
              {cuisineList.map((cuisineItem) => (
                <CuisineCheckBox cuisine={cuisineItem} field={field} />
            ))}
          </div>
          <FormMessage />        
          </FormItem>
      )}
    />
    </div>
 );
};

export default CuisinesSection;