import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";

type Props = {
    onChange: (value: string) => void;
    sortOptions: string;
};

const SORT_OPTIONS = [
    {
        label: "Best match",
        value: "bestMatch"
    },
    {
        label: "Delivery price",
        value: "deliveryPrice"
    },
    {
        label: "Estimated delivery time",
        value: "estimatedDeliveryTime",
    },
]
const SortOptionsDropdown = ({ onChange, sortOptions }: Props) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
                <Button variant="outline" className="w-full">
                    Sort by: {sortOptions}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {SORT_OPTIONS.map((option) => (
                    <DropdownMenuItem 
                      className="cursor-pointer" 
                      onClick={() => onChange(option.value)}
                    >
                      {option.label}
                    </DropdownMenuItem>
                ))}  
            </DropdownMenuContent>
        </DropdownMenu>
    )
};

export default SortOptionsDropdown;