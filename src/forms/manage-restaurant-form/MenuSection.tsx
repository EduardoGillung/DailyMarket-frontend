import { Button } from "@/components/ui/button";
import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { useFieldArray, useFormContext } from "react-hook-form"
import MenuItemInput from "./MenuItemInput";

const MenuSection = () => {
    const { control } = useFormContext();

    const { fields, append, remove } = useFieldArray({
        control,
        name: "menuItems",
    });

    return (
        <div className="space-y-2 text-PrimaryGrey">
            <div> 
              <h2 className="text-2xl font-bold "> Menu / Cardápio </h2>          
              <FormDescription>
                Crie seu cardápio com todos os itens que deseja vender e defina os seus preços!
              </FormDescription>
            </div>
              <FormField control={control} name="menuItems" render={()=> (
                <FormItem className="flex flex-col gap-2">
                    {fields.map((_, index) => (
                        <MenuItemInput 
                          index={index} 
                          removeMenuItem={()=> remove(index)}
                        />
                    ))}
                </FormItem>
              )}
            />
            <Button 
              type="button"
              className="rounded-xl gap-2 bg-dailyTertiary text-white hover:text-dailyTertiary"
              onClick={() => append({ name: "", price: "" })}>
                Adicionar item ao cardápio
            </Button>
        </div>
    );
};

export default MenuSection;