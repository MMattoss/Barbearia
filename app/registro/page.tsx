export default async function Registro() {
    return (
        <main>
            <div className="p-8 w-96 min-h-72 border border-black flex flex-col justify-center items-center">
                <h1 className=" block text-3xl font-bold mb-10">Cadastro:</h1>
                <form method="post">
                        <input className="border border-r-slate-600 p-1 mb-3 focus:ring focus:ring-slate-500 focus:outline-none" type="text" id="Nome" placeholder="Nome"/>
                        <input className="border border-r-slate-600 p-1 mb-3 focus:ring focus:ring-slate-500 focus:outline-none" type="text" id="sobrenome" placeholder="Sobrenome"/>
                        <input className="border border-r-slate-600 p-1 mb-3 focus:ring focus:ring-slate-500 focus:outline-none" type="email" id="email" required placeholder="Email"/>
                        <input className="border border-r-slate-600 p-1 mb-3 focus:ring focus:ring-slate-500 focus:outline-none" type="text" id="telefone" placeholder="Telefone"/>
                        <button type="submit">Cadastrar-se</button>
                </form>
            </div>
        </main>
    )
} 