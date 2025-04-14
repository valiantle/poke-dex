import Link from "next/link"
export default function PokemonList ({pokemon}) {
    const capitalizeFirstLetter = (string) => {
        if(!string) return'';
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return(
        <div className="flex flex-wrap justify-center mt-4">
            {pokemon.map((pokemon) => (
                    <Link key={pokemon.name} href={`/pokemon/${pokemon.name}`} className="max-w-6xl"> {/* data-name={pokemon.name}*/}
                        <div className="flex justify-center border-5 border-white hover:cursor-pointer hover:brightness-110 font-semibold w-90 h-50 bg-blue-200 m-2 rounded-[10px]"> {/*onClick={() => onSelect(pokemon.name)}*/}
                            <img src={pokemon.sprites?.front_default} alt={pokemon.name}></img>
                            <h1 className="m-5 text-[20px] font-sans text-gray-700">{capitalizeFirstLetter(pokemon.name)}</h1>
                        </div>
                    </Link>
                ))}
        </div>
    )
}