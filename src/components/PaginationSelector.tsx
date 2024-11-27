import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious } from "./ui/pagination";

type Props = {
    page: number;
    pages: number;
    onPageChange: ( page: number ) => void;
};

const PaginationSelector = ({ page, pages, onPageChange }: Props) => {
    const pageNumbers = [];
    // pages = 3
    // pageNumbers = [1, 2, 3]
    for (let i = 1; i <= pages; i++) {
        pageNumbers.push(i);
    }

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href='#' onClick={() => onPageChange(page - 1)} />
                </PaginationItem>
                {pageNumbers.map((number)=> (
                    <PaginationItem>
                        <PaginationLink>{number}</PaginationLink>
                    </PaginationItem>
                ))}
            </PaginationContent>
        </Pagination>
    );
};

export default PaginationSelector;