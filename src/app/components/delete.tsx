import {toast, ToastContainer} from "react-toastify";
import {useEffect} from "react";

export default async function DeleteFunc(deleteId: number,func: () => void) {
    await fetch('http://localhost:8002/api/v1/main/delete/',{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id:deleteId})//Завжди треба передавати словник
    })
        .then(res => res.json())
        .then(data => {
            console.log('data in delete =',data)
            if (data.success === 204) {
                toast.success('Видалено успішно')
                console.log('чи доходить до виклику тої ф-ї')
                func()
            }
        })
        .catch(err => {
            toast.error('Не вдалося видалити: ' + err.message);
        })
}