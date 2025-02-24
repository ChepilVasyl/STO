'use client'
import {useParams} from "next/navigation";

export default async function SingleUpdate ()  {
    const params = useParams()
    const id = params.id
    console.log("Перевірка чи заходить в той компонент")
    await fetch(`http://localhost:8002/api/v1/main/update/`,{
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id:id})
    })
        .then(res => res.json())
        .then(data => {
            if (data.success === 204) {
                console.log('___Вивід відповіді',data.message)
            }
        })
        .catch(err => console.log(err));
    return(
        <div>
            <h1>Тут ви повинні оновити свою сторінку</h1>
        </div>
    )
}