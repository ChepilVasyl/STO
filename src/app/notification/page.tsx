    'use client'
    import React, {useEffect,useState} from 'react';
    import DeleteFunc from "@/app/components/delete";
    import {useRouter} from "next/navigation";
    import Link from "next/link";
    import PaginateComponent from "@/app/components/paginate"
    import Sorting from "../components/sorting";
    export default function MainComponent ()  {
        const router = useRouter()
        async function fetchData(pageNumber: number,direction :string = sortChoice,field:string = sortChoiceField){ 
        await fetch(`http://localhost:8002/api/v1/main/all_items/?page=${pageNumber}&size=${4}&sortD=${direction}&sortF=${field}`)
                .then(response => response.json())
                .then(data => {
                    console.log('Всередині fetch')
                    console.log("В FETCH field =",field)
                    console.log('data = ',data)
                    setData(data.data)
                    setPaginateData({
                        totalPage: data.totalPage,
                        totalItem: data.totalItem,
                        currentPage: pageNumber,
                        sizePage: data.sizePage,
                        hasNext: data.hasNext,
                        hasPrev: data.hasPrev
                    })
                    console.log('Після setData')
                })
                .catch(err => console.log(err));//Має бути хелпер в ідеалі
        }
        const [data,setData] = useState([]);
        type Struct ={
            totalPage:number,
            totalItem:number,
            currentPage:number,
            sizePage:number,
            hasNext: boolean,
            hasPrev: boolean
        }
        const [paginateData,setPaginateData] = useState<Struct>()
        const [sortChoice,setSortChoice] = useState('asc')
        const [sortChoiceField,setSortChoiceField] = useState('message')
        useEffect(() => {
            console.log('USE EFFECT')
            fetchData(1,sortChoice,sortChoiceField)
            console.log('Direction =',sortChoice)
            console.log('Field =',sortChoiceField)
        }, [sortChoice,sortChoiceField]);
        

        return(
            <div className='wrapper'>
                <div style={{marginLeft: "auto",border: 'solid'}}>
                    <Sorting func={setSortChoice} func2={setSortChoiceField}></Sorting>
                </div>
                <h1>Список всіх повідомлень</h1>
                <div id='allMessage'>
                    <ul>
                        {data.map((item : any) => (
                            <li className='forList' key={item.id}>{item.message}
                                <button id={`dbtn-${item.id}`} onClick={async () => 
                                    await DeleteFunc(item.id,() => fetchData(1))}>Видалити</button>
                                <Link id={`ubtn-${item.id}`} href={('/update/' + item.id)}>Оновити</Link>
                            </li>
                        ))}
                    </ul>
                    {paginateData ? <PaginateComponent data={paginateData} changePage={(pageNumber) => fetchData(pageNumber)}/> : <p>Завантаження...</p>}
                </div>
            </div>
        )
    }