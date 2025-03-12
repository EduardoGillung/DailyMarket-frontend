import { Link } from "react-router-dom";

type Props = {
    total: number;
    city: string;
};

const SearchResultInfo = ({ total, city }: Props) => {
    return (
        <div className="text-xl text-PrimaryGrey font-redHat font-bold flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
        <span>
            <span className="text-dailyPrimary mx-1">{total} </span> Estabelecimentos encontrados em 
            <span className="text-dailyPrimary mx-1">{city}</span>
            
            <Link to="/" className="mx-5 text-sm font-redHat font-semibold cursor-pointer text-blue-500 hover:underline">
                Alterar localização
            </Link>
        </span>
    </div>
    )
}

export default SearchResultInfo;