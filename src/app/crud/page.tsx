export default () => {
    return(
        <div>
            <h1>Сторінка CRUD операцій</h1>
            <h2>Тут ви можете створити нове повідомлення</h2>
            <form action='http://localhost:8000/api/v1/main' method='POST'>
                <input type='text' name='text'/>
                <input type='submit'/>
            </form>
        </div>
    )
}