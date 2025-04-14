import PokemonDetails from "@/components/PokemonDetails";

export default async function PokemonDetailPage({ params }) {

    const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${params.name}`);
    const pokemon = await response.json()

    return(<PokemonDetails pokemon={pokemon}></PokemonDetails>)
}