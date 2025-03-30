type Props = {
    data: {
        totalPage: number;
        totalItem: number;
        currentPage: number;
        sizePage: number;
        hasNext: boolean;
        hasPrev: boolean;
    };
    changePage:(pageNumber: number) => void
};
export default function PaginateComponent({data, changePage}:Props){
    console.log('Чи вс коде оновлюється без перезапуску',data)
    return(
        <footer className='forFooter'>
            <ul className='forUlPagination'>
                {Array.from({length:data.totalPage},(_, index) => <li key={index}>
                    <button onClick={() => changePage(index+1)}>{index+1}</button>
                </li>)}
            </ul>
        </footer>
    )
}