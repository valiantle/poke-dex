import PokemonList from "/components/PokemonList.jsx"
import Link from "next/link"

export default async function PokemonListPage({ searchParams }) {
    console.log("searchP::", searchParams)
    const page = Number(searchParams?.page) || 1;

    const limit = 10
    const offset = (page - 1) * limit;

    const response = await fetch (`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data = await response.json()


    const detailedPokemon = await Promise.all( //thats from chatgpt not 100% sure how promise works
        data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return await res.json();
        })
    );

    return(
        <div className="">
            <PokemonList pokemon={detailedPokemon}/>
            <div className="flex items-center justify-center">
                <Link href={`/pokemon?page=${page - 1}`}>
                    <button className="bg-blue-400 w-30 h-12 m-2 text-white text-[20px] text-sans rounded-[5px] hover:cursor-pointer hover:brightness-110">prev</button>
                </Link>
                <p className="m-2 underline font-bold">{page}</p>
                <Link href={`/pokemon?page=${page + 1}`}>
                    <button className="bg-blue-400 w-30 h-12 m-2 text-white text-[20px] text-sans rounded-[5px] hover:cursor-pointer hover:brightness-110">next</button>
                </Link>
            </div>
        </div>
    )
}