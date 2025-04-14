"use client";
import PokemonList from "./PokemonList";
import PokemonDetails from "./PokemonDetails";
import { useEffect, useState } from "react";

export default function PokedexApp(props) {

    

    const [data, setData] = useState({ results: [] });
    const [page, setPage] = useState(1)
    const [details, setDetails] = useState({});
    const limit = 10;
    
    useEffect(() => {
        async function loadData(offset, limit) {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
            const data = await response.json();
            setData(data);
        }
        loadData((page -1) * limit, limit);
        
    }, [page]);

    const handleClickPrevious = () => {
        if(page > 1) {
            setPage(page - 1)
        }
    }
    const handleClickNext = () => {
        setPage(page + 1);
    }

    async function loadPokemonDetails(pokemonName) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        const data = await response.json();
        setDetails(data)
    }

    return(
        <div className="">
            <div>
                <button onClick={handleClickMinus}>-</button>
                <p>{number}</p>
                <button onClick={handleClickPlus}>+</button>
            </div>
            <div className="flex flex-col items-center m-3 border-1 w-100 ml-auto">
                <div className="flex justify-center items-center border-1">
                    <button onClick={handleClickPrevious} className="m-5 w-15 h-15 hover:bg-gray-200 hover:cursor-pointer">⬅️</button>
                    <p className="flex">page n : </p><p className="underline font-semibold text-blue-500">{page}</p>
                    <button onClick={handleClickNext} className="m-5 w-15 h-15 hover:bg-gray-200 hover:cursor-pointer">➡️</button>
                </div>
                <PokemonList onSelect={loadPokemonDetails} pokemon={data.results}></PokemonList>
            </div>
        <PokemonDetails pokemon={details}></PokemonDetails>
        </div>
    );
}