export default () => {
    return(
        <div className={'startPage'}>
            <h1>Авторизуйтеся</h1>
            <form method={'GET'}>
                <label htmlFor='login'>Введіть логін:</label>
                <input type='text' name='login' id='login'/>
                <br/>
                <label htmlFor='parol'>Введіть пароль:</label>
                <input type='text' name='parol' id='parol'/>
            </form>
        </div>
    )
}