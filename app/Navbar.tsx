import Link from "next/link";
import { GoogleSigninButton, FacebookSigninButton } from "@/components/buttons";
import AuthCheck from "@/components/AuthCheck";

export default function Navbar() {
	return (
		<div className="navbar bg-base-100">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl">Barbearia</a>
			</div>
			<div className="flex-none gap-2">
				<div className="dropdown dropdown-hover dropdown-end">
					<div tabIndex={0} role="button" className="btn m-1">
						Entrar
					</div>
					<ul
						tabIndex={0}
						className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-64"
					>
						<li>
							<GoogleSigninButton />
						</li>
						<li>
							<FacebookSigninButton />
						</li>
					</ul>
				</div>
				<AuthCheck>
					<div className="dropdown dropdown-end">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost btn-circle avatar"
						>
							<div className="w-10 rounded-full">
								<img
									alt="Tailwind CSS Navbar component"
									src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
								/>
							</div>
						</div>
						<ul
							tabIndex={0}
							className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
						>
							<li>
								<a className="justify-between">
									Profile
									<span className="badge">New</span>
								</a>
							</li>
							<li>
								<a>Settings</a>
							</li>
							<li>
								<a>Logout</a>
							</li>
						</ul>
					</div>
				</AuthCheck>
			</div>
		</div>
	);
}
