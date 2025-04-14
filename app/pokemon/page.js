import PokemonList from "/components/PokemonList.jsx"
import Link from "next/link"

export default async function PokemonListPage({ searchParams }) {

    const page = Number(searchParams.page) || 1;

    const limit = 10
    const offset = (page - 1) * limit;

    const response = await fetch (`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const pokemon = await response.json()
    return(
        <div>
            <PokemonList pokemon={pokemon.results}/>
            <Link href={`/pokemon?page=${page - 1}`}>
                <button className="bg-blue-500">back</button>
            </Link>
            <p>{page}</p>
            <Link href={`/pokemon?page=${page + 1}`}>
                <button className="bg-blue-500">forward</button>
            </Link>
        </div>
    )
}