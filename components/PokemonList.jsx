import Link from "next/link"
export default function PokemonList ({pokemon}) {
    return(
        <div>
            {pokemon.map((pokemon) => (
                    <Link key={pokemon.name} href={`/pokemon/${pokemon.name}`}> {/* data-name={pokemon.name}*/}
                        <div className="flex justify-center border-1 hover:cursor-pointer hover:bg-gray-200 font-semibold w-67"> {/*onClick={() => onSelect(pokemon.name)}*/}
                            <h1 className="m-5">{pokemon.name}</h1>
                        </div>
                    </Link>
                ))}
        </div>
    )
}