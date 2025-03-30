'use client'
import {useParams} from "next/navigation";
import {useRef} from "react";
import {toast} from "react-toastify";

export default function SingleUpdate ()  {
    const params = useParams()
    const id = params.id
    const inputRef = useRef(null)
    function UpdateFunc(inputParam: string)  {
        console.log("Перевірка чи заходить в той компонент")
        fetch(`http://localhost:8002/api/v1/main/update/`,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id:id,newValue:inputParam})
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    console.log('___Статус',data.status)
                    toast.success('Дані було оновлено')
                    console.log('___Вивід відповіді',data.message)
                }
            })
            .catch(err => console.log(err));
    }
    return(
        <div>
            <h1>Тут ви повинні оновити свою сторінку</h1>
            <input type='text' id='newValue' name='newValue' ref={inputRef}/>
            <input type='button' onClick={
                () => {
                    if (inputRef.current)
                        UpdateFunc(inputRef.current.value)
                }
            } value='Відправити'/>
        </div>
    )
}