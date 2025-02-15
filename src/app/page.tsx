'use client'
import Link from "next/link";
export default () => {
    return(
        <div>
            <h1>Вас вітають нотифікації</h1>
            <Link href={"/notification"}>
                Перейти на сторінку нотифікацій
            </Link>
            <br/>
            <Link href={"/crud"}>
                Сторінка CRUD операцій
            </Link>
        </div>
    )
}