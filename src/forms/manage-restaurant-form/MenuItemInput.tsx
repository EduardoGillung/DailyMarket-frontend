import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

type Props = {
    index: number;
    removeMenuItem: () => void;
};

const MenuItemInput = ({ index, removeMenuItem }: Props) => {
    const { control } = useFormContext();

    return (
        <div className="flex flex-row items-end gap-2">
            <FormField 
              control={control} 
              name={`menuItems.${index}.name`} 
              render={({ field }) => ( 
                <FormItem>
                  <FormLabel className="flex items-center gap-1  font-redHat text-PrimaryGrey">
                    Nome <FormMessage />
                  </FormLabel>
                  <FormControl>
                    <Input 
                      {...field}
                      placeholder=""
                      className="bg-white rounded-xl gap-2 border-SecondaryGrey"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField 
              control={control} 
              name={`menuItems.${index}.price`} 
              render={({ field }) => ( 
                <FormItem>
                  <FormLabel className="flex items-center gap-1 ">
                    Valor ($) <FormMessage />
                  </FormLabel>
                  <FormControl>
                    <Input 
                      {...field}
                      placeholder=""
                      className="bg-white rounded-xl gap-2 border-SecondaryGrey"
                    />
                  </FormControl>
                </FormItem>
              )}
              />
            <Button 
              type="button" 
              onClick={removeMenuItem} 
              className="bg-dailyPrimary max-h-fit rounded-xl gap-2 text-white hover:text-dailyPrimary"
              >
                Excluir
            </Button>
        </div>
    );
};

export default MenuItemInput;