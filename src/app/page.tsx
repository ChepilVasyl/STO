import Link from "next/link";
export default () => {
    return(
        <div className='startPage'>
            <h1>Вас вітають нотифікації</h1>
            <Link href={"/notification"}>Перейти на сторінку нотифікацій</Link>
            <br/>
            <Link href={"/crud"}>Сторінка CRUD операцій</Link>
            <br/>
            <Link href={"/for_admin"}>Вхід для адміна</Link>
        </div>
    )
}