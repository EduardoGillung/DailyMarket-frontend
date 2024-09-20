import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-dailyPrimary" />
            </SheetTrigger>
            <SheetContent>
                <SheetTitle>
                    <span> Bem vindo ao DailyMarket.com! </span>
                </SheetTitle>
                <Separator />
                <SheetDescription className="flex">
                    <Button className="flex-1 font-bold bg-dailyPrimary">Conectar conta</Button>
                </SheetDescription>
            </SheetContent>
        </Sheet>
      );
    };


export default MobileNav;