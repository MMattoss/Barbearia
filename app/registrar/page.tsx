import SignUpForm from "@/components/SignUpForm";
import { FacebookSigninButton, GoogleSigninButton } from "@/components/buttons";

export default function FormRegistro() {
	return (
		<main className="w-full h-5/6 flex flex-col items-center justify-center">
			<div className="content w-1/4 h-auto border border-slate-600 rounded-lg p-6 flex flex-col">
				<h1 className=" text-3xl font-bold mb-8">Cadastre-se</h1>
				<SignUpForm />
                <div className="divider">OU</div>
                <GoogleSigninButton />
                <div className="mb-5"></div>
                <FacebookSigninButton />
			</div>
		</main>
	);
}
