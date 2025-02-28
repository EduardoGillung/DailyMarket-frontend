import landingPage from "../assets/landing.png";
import appDownload from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const handleSearchSubmit = (searchFormValues: SearchForm) => {
        navigate({
            pathname: `/search/${searchFormValues.searchQuery}`,
        });
    }
 return (
   <div className="flex flex-col gap-12">
        <div className=" md:px-32 bg-backgroundColor rounded-lg  py-10 flex flex-col gap-5 text-center -mt-14">
            <h1 className="text-3xl font-bold tracking-tight text-PrimaryGrey font-redHat">
            Busque o nome da sua cidade e encontre os restaurantes próximos!
            </h1>
            
            <SearchBar
            
              placeHolder="Pesquisar nome da cidade para encontrar restaurantes próximos" 
              onSubmit={handleSearchSubmit}
            

              
            /> 
        </div>  
        <div className="grid md:grid-cols-2">
            <img src={landingPage} />
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                
                <img src={appDownload} />
            </div>
        </div>
   </div>
 );
};

export default HomePage;