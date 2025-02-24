'use client'
import { ToastContainer, toast } from 'react-toastify';
export default () => {
    const stopSending = (fm: React.FormEvent) =>{
        fm.preventDefault();
        const form = fm.target as HTMLFormElement;
        const formData = new FormData(fm.target as HTMLFormElement);
        const message = formData.get('text') as string
        fetch('http://localhost:8002/api/v1/main/created/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'text':message})
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 201) {
                    toast.success("Нове повідомлення успішно додано");
                    form.reset()
                }
            })
            .catch(err => {
                toast.error('Помилка: ' + err.message);
            });//Хелпер зробити
    }
    return(
        <div>
            <h1>Сторінка CRUD операцій</h1>
            <h2>Тут ви можете створити нове повідомлення</h2>
            <form onSubmit={stopSending}>
                <input type='text' id='text' name='text'/>
                <input type='submit'/>
            </form>
        </div>
    )
}