export default ({func,func2}:{func:(str:string)=>void,func2:(str:string)=>void}) => {
    return(
        <div>
            <select name='fields' onChange={(e)=>{func2(e.target.value);console.log('Чи взагалі відбувається подія')}}>
                <option value='message'>По тексту</option>
                <option value="created_at">По даті створення</option>
                <option value="updated_at">По даті оновлення</option>
            </select>
            <br/>
            <select name='direction' onChange={(e)=>{func(e.target.value)}}>
                <option value='asc'>За зростанням</option>
                <option value='desc'>За спаданням</option>
            </select>
        </div>
    )
}