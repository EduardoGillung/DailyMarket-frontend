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
            <DropdownMenuTrigger className="cursor-pointer font-redHat">
                <Button className="w-full  rounded-xl text-PrimaryGrey font-bold hover:bg-SecondaryGrey">
                    Ordenar por: <span className="text-PrimaryGrey font-bold px-1">{selectedSortLabel}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="shadow-md hover:shadow-lg transition-shadow duration-200 rounded-xl bg-backgroundColor ">
                {SORT_OPTIONS.map((option) => (
                    <DropdownMenuItem 
                      className=" text-PrimaryGrey cursor-pointer font-redHat px-5 h-10 rounded-xl text-center flex items-center justify-center hover:bg-dailyPrimary hover:text-white"
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