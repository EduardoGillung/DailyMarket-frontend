import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";

type Props = {
    onChange: (value: string) => void;
    sortOption: string;
};

const SORT_OPTIONS = [
    {
        label: "Melhor resultado",
        value: "bestMatch"
    },
    {
        label: "Valor do pedido",
        value: "deliveryPrice"
    },
    {
        label: "Tempo de entrega estimado",
        value: "estimatedDeliveryTime",
    },
]
const SortOptionDropdown = ({ onChange, sortOption }: Props) => {

    const selectedSortLabel = 
        SORT_OPTIONS.find((option) => option.value === sortOption)?.label ||
        SORT_OPTIONS[0].label;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
                <Button className="w-full">
                    Ordenar por: {selectedSortLabel}
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

export default SortOptionDropdown;