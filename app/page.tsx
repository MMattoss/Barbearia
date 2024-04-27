import { getServerSession } from "next-auth";
import AuthCheck from "@/components/AuthCheck";
import { redirect } from "next/navigation";


export default async function Home() {
	const session = await getServerSession();

	if (session) {
		redirect('/dashboard');
	}

	return (
			<main className="w-full h-full block p-20">
				<h1>Home page aqui</h1>
			</main>
	);
}
