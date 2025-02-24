'use client'
import React, {useEffect,useState} from 'react';
import DeleteFunc from "@/app/components/delete";
import UpdateFunc from "@/app/components/update";
import {useRouter} from "next/navigation";
export default () => {
    const router = useRouter()
    function fetchData(){
        fetch('http://localhost:8002/api/v1/main/all_items/')
            .then(response => response.json())
            .then(data => {
                console.log('Всередині fetch')
                setData(data)
                console.log('Після setData')
            })
            .catch(err => console.log(err));//Має бути хелпер в ідеалі
    }
    const [data,setData] = useState([]);
    useEffect(() => {
        console.log('Консоль з useEffect')
        fetchData()
    },[])
    return(
        <div className='wrapper'>
            <h1>Список всіх повідомлень</h1>
            <div id='allMessage'>
                <ul>
                    {data.map(item => (
                        <li className='forList' key={item.id}>{item.message}
                            <button id={`dbtn-${item.id}`} onClick={async () => 
                                await DeleteFunc(item.id,fetchData)}>Видалити</button>
                            <button id={`ubtn-${item.id}`} onClick={() => {
                                console.log('Перед push id =', item.id)
                                router.push('/update/' + item.id)
                                setTimeout(() => {
                                    console.log('Після push')
                                },1500)
                            }}>Оновити</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}