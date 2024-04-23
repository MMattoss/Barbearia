import { getServerSession } from "next-auth";
import AuthCheck from "@/components/AuthCheck";


export default function Home() {


	return (
		<AuthCheck>

			<main className="w-full h-full block mt-56">
				<h1>Home page aqui</h1>
			</main>
		</AuthCheck>
	);
}
