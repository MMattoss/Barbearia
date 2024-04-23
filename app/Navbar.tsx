import Link from "next/link";
import GoogleSigninButton from "@/components/buttons"

export default function Navbar() {
    return (
        <nav className=" absolute top-0 left-0 w-full bg-amber-900 h-24 flex justify-between items-center px-6">
            <ul className=" list-none flex">
                <li  className=" mr-4 text-xl text-white">
                    <GoogleSigninButton />
                </li>
                <li>
                    <Link href="/entrar" className=" mr-4 text-xl text-white">Registrar</Link>
                </li>
            </ul>
        </nav>
    )
}