import landingPage from "../assets/landing.png";
import appDownload from "../assets/appDownload.png";

const HomePage = () => {
 return (
   <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-5xl font-bold tracking-tight text-dailySecondary font-slab">
                Procure o produto que deseja aqui
            </h1>
            <span className="font-semi-bold text-xl font-slab text-CustomGrey"> Tudo o que você precisa em um clique!</span> 
        </div>  
        <div className="grid md:grid-cols-2 gap-5">
            <img src={landingPage} />
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-3xl tracking-tighter text-dailyPrimary">
                    Faça seus pedidos de qualquer lugar!
                </span>
                <span className=" text-CustomGrey font-slab text-xl">
                    Instale o DailyMarket no seu celular e faça pedidos ainda mais rápido ainda!
                </span>
                <img src={appDownload} />
            </div>
        </div>
   </div>
 );
};

export default HomePage;