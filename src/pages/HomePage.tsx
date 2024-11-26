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
        <div className=" md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-5xl font-bold tracking-tight text-dailySecondary font-slab">
                Fazer suas compras ficou ainda mais fácil
            </h1>
            <span className="font-semi-bold text-xl font-slab text-CustomGrey"> Tudo o que você precisa em um clique!</span>
            <SearchBar 
              placeHolder="Search by city or town" 
              onSubmit={handleSearchSubmit}
            /> 
        </div>  
        <div className="grid md:grid-cols-2 gap-5">
            <img src={landingPage} />
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-3xl tracking-tighter text-dailyPrimary">
                    Faça seus pedidos de qualquer lugar!
                </span>
                <span className=" text-CustomGrey font-slab text-xl">
                    Instale o DailyMarket no seu celular e faça pedidos ainda mais rápido!
                </span>
                <img src={appDownload} />
            </div>
        </div>
   </div>
 );
};

export default HomePage;