"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export function GoogleSigninButton() {
	const { data: session, status } = useSession();

	if (status === "loading") {
		<>...</>;
	}
	if (status === "authenticated") {
		return (
			<>
				<SignOutButton />
			</>
		);
	}

	return <button className="btn btn-neutral" onClick={() => signIn("google")}>
        <Image src="google-logo.svg" width={30} height={30} alt="Google logo"></Image>
        Entrar com o Google
    </button>;
}

export function FacebookSigninButton() {
    const { data: session, status } = useSession();

    if (status === "loading") {
		<>...</>;
	}
	if (status === "authenticated") {
		return (
			<>
				<SignOutButton />
			</>
		);
	}

	return <button className="btn btn-neutral text-left" onClick={() => signIn("facebook")}>
        <Image src="facebook-novo.svg" width={35} height={35} alt="Facebook logo"/>
        Entrar com o Facebook
        </button>;
}

export function SignOutButton() {
	return <button onClick={() => signOut()}>Sign out</button>;
}

