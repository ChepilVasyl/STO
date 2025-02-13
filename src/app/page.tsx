import Image from "next/image";
import Link from "next/link";
export default () => {
    return(
        <div>
            <h1>Вас вітають нотифікації</h1>
            <Link href="/notification">
                Перейти на сторінку нотифікацій
            </Link>
        </div>
    )
}