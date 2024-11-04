import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

type Props = {
    cuisine: string;
    field: ControllerRenderProps<FieldValues, "cuisines">;
};

const CuisineCheckBox = ({ cuisine, field }: Props) => { 
    //field value includes cuisine
    //field.value = ["pasta", "pizza"]
    // cuisine = "pizza"
    return(
        //update the array of cuisine if is checked or not
        <FormItem className="flex flex-row items-center space-x-1 space-y-0 mt-2">
            <FormControl>
                <Checkbox
                  className="bg-white"
                  checked={field.value.includes(cuisine)} 
                  onCheckedChange={(checked) => {
                    if(checked) {
                        field.onChange([...field.value, cuisine]);
                    } else {
                        field.onChange(
                          field.value.filter((value: string) => value !== cuisine)
                      );
                    }
                  }}
                />    
            </FormControl>
            <FormLabel className="text-sm font-normal">{cuisine}</FormLabel>
        </FormItem>
    );
};

export default CuisineCheckBox;