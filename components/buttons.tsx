'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";
import Link from "next/link";

export default function GoogleSigninButton() {
    const { data: session, status } = useSession();

    if (status === 'loading') {
        <>...</>
    }
    if (status === 'authenticated') {
        return (
            <>
                <SignOutButton />
            </>
        )
    }

    return <button onClick={()=> signIn('google')}>Sign in</button>
}

export function SignOutButton() {
    return <button onClick={()=> signOut()}>Sign out</button>
}