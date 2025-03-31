import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LoadingButton from "@/components/LoadingButton";
import { User } from "@/types";
import { useEffect } from "react";

const formSchema = z.object({
    email: z.string().optional(),
    name: z.string().min(1, "name is required"),
    addressLine1: z.string().min(1, "Address Line 1 is required"),
    city: z.string().min(1, "City is required"),
    country: z.string().min(1, "Country is required"),
});

export type UserFormData = z.infer<typeof formSchema>;

type Props = {
    currentUser: User;
    onSave: (userProfileData: UserFormData) => void;
    isLoading: boolean;
    title?: string;
    buttonText?: string;
};

const UserProfileForm = ({ 
    onSave, 
    isLoading, 
    currentUser, 
    title = "Perfil do Usúario",
    buttonText = "Salvar",
   }: Props) => {
    const form = useForm<UserFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: currentUser,
    });
    
    useEffect(() => {
      form.reset(currentUser);
    }, [currentUser, form])
    
    return(
        <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(onSave)} 
              className="space-y-4 md:p-10 font-redHat text-PrimaryGrey rounded-xl"
            >
                <div>
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <FormDescription>
                      Preencha seu perfil e salve o endereço que será utilizado para receber o pedido
                    </FormDescription>
                </div>
                  <FormField 
                    control={form.control} 
                    name="email" 
                    render={({ field })=> (
                      <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                            <Input {...field} disabled className="bg-white rounded-xl border-SecondaryGrey"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                />
                <FormField 
                    control={form.control} 
                    name="name" 
                    render={({ field })=> (
                      <FormItem className="flex-1">
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                            <Input {...field} className="bg-white  rounded-xl border-border-SecondaryGrey" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                />

                <div className="flex flex-col md:flex-row gap-4">
                <FormField 
                    control={form.control} 
                    name="addressLine1" 
                    render={({ field })=> (
                      <FormItem className="flex-1">
                        <FormLabel>Endereço</FormLabel>
                        <FormControl>
                            <Input {...field} className="bg-white  rounded-xl border-border-SecondaryGrey" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                    />

                <FormField 
                    control={form.control} 
                    name="city" 
                    render={({ field })=> (
                      <FormItem className="flex-1">
                        <FormLabel>Cidade</FormLabel>
                        <FormControl>
                            <Input {...field} className="bg-white rounded-xl border-border-SecondaryGrey" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                    />
                <FormField 
                    control={form.control} 
                    name="country" 
                    render={({ field})=> (
                      <FormItem className="flex-1">
                        <FormLabel>País</FormLabel>
                        <FormControl>
                            <Input {...field} className="bg-white  rounded-xl border-border-SecondaryGrey" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                    />  
                </div>
                    {isLoading ? (<LoadingButton />
                ) : (
                    <Button type="submit" className="bg-dailyTertiary rounded-xl text-white h-10 hover:text-dailyTertiary">
                        {buttonText}
                    </Button>
                )}
            </form>
        </Form>
    );
};

export default UserProfileForm;