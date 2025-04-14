export default function PokemonDetails({pokemon}) {

    const capitalizeFirstLetter = (string) => {
        if(!string) return'';
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const typeBgs = {
        bug: {bgelement: "/images/bug.png", bgcolor: " bg-yellow-200 "},
        dark: {bgelement: "/images/dark.png", bgcolor: " bg-gray-800 "},
        dragon: {bgelement: "/images/dragon.png", bgcolor: " bg-amber-500 "},
        electric: {bgelement: "/images/electric.png", bgcolor: " bg-yellow-500 "},
        fairy: {bgelement: "/images/fairy.png", bgcolor: " bg-pink-200 "},
        fighting: {bgelement: "/images/fighting.png", bgcolor: "bg-orange-200 "},
        fire: {bgelement: "/images/fire.png", bgcolor: " bg-red-400 "},
        flying: {bgelement: "/images/flying.png", bgcolor: " bg-green-100 "},
        ghost: {bgelement: "/images/ghost.png", bgcolor: " bg-[#4B0082] "},
        ice: {bgelement: "/images/ice.png", bgcolor: " bg-[#87CEEB] "},
        grass: {bgelement: "/images/grass.png", bgcolor: "bg-green-400"},
        ground: {bgelement: "/images/ground.png", bgcolor: " bg-[#FFA07A] "},
        normal: {bgelement: "/images/normal.png", bgcolor: " bg-gray-100 "},
        poison: {bgelement: "/images/poison.png", bgcolor: " bg-[#800080] "},
        psychic: {bgelement: "/images/psychic.png", bgcolor: "bg-[#FF00FF]"},
        rock: {bgelement: "/images/rock2.png", bgcolor: " bg-[#A0522D] "},
        steel: {bgelement: "/images/steel.png", bgcolor: " bg-[#C0C0C0] "},
        water: {bgelement: "/images/water.png", bgcolor: " bg-blue-400 "}
    }
    const types = pokemon.types.map((type) => type.type.name);

    let leftBox
    let rightBox

    if (types.length>1) {
        const firstType = types[0]
        const secondType = types[1]
        leftBox = typeBgs[firstType] || { bgcolor: "bg-gray-200", bgelement: "" };
        rightBox = typeBgs[secondType] || { bgcolor: "bg-gray-200", bgelement: "" };
    } else {
        const firstType = types[0]
        leftBox = typeBgs[firstType] || { bgcolor: "bg-gray-200", bgelement: "" };
    }
    // console.log(leftBox.bgcolor)
    // console.log(leftBox.bgelement)
    // console.log(rightBox.bgcolor)
    // console.log(rightBox.bgelement)
    return(
        <div>
            {types.length>1  && (
                <div  className="relative w-full h-full"> {/*2 elements*/}
                    <div className={`${leftBox.bgcolor} absolute z-0 h-[100vh] w-[50vw] flex items-center justify-center  border-[13px] border-l-[22px] border-white `}>{/*{left bgcolor}*/}
                        <div style={{backgroundImage: `url(${leftBox.bgelement})`}} className="z-1 h-77 w-77 bg-cover mr-50">{/*{left type element picture} */}

                        </div>
                    </div>

                    <div className="relative z-3 flex flex-col items-center">{/*{midle section} */}
                        <div style={{backgroundImage: `url("/images/pokemon.png")`}} className=" relative mx-auto z-2 w-120 h-58 bg-cover bg-no-repeat ">{/*{logo} */}

                        </div>
                        
                        <div  className="bg-cover bg-no-repeat w-120 h-120 relative z-3">{/*{sprite} */}
                            {pokemon.sprites && <img className="w-120 h-120 relative z-3 bg-transparent" src={pokemon.sprites.front_default} alt={pokemon.name}/>}
                        </div>
                        <div style={{backgroundImage: `url("/images/pokeball2.png")`}} className=" brightness-90 h-75 w-75 bg-transparent flex items-end  justify-center bg-cover bg-no-repeat w-45 h-45 absolute z-3 top-[70vh] font-semibold text-[18px] text-gray-800 ">{/*{details} */}
                            <div className="flex flex-col items-center font-sans relative">
                                <p className="rainbow-text text-[30px] mb-19">{capitalizeFirstLetter(pokemon.name)}</p>
                                <p className="text-[20px] ">{pokemon.height} feet</p>
                                <p className="text-[20px]">{pokemon.weight} kg</p>
                                <p className="text-[20px] mb-6">{types.toString()}</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${rightBox.bgcolor} absolute z-0 h-[100vh] w-[50vw] flex items-center justify-center left-[50vw] top-0 border-[13px] border-white border-r-[22px] `}>{/*{right bgcolor} */}
                        <div style={{backgroundImage: `url(${rightBox.bgelement})`}} className="z-10 h-77 w-77 bg-cover ml-50">{/*{right type element picture} */}

                        </div>
                    </div>
                </div> 
            )}
        
            {types.length === 1 &&(
                <div> {/*1 element*/}
                    <div className={`${leftBox.bgcolor} absolute z-0 w-[50vw] h-[100vh] border-[15px] border-white`}> {/*left side BG*/}
                        <div className="flex flex-col items-center"> 
                            <div style={{backgroundImage: `url("/images/pokemon.png")`}} className=" mx-auto z-2 w-120 h-58 bg-cover bg-no-repeat ">{/*{logo} */}

                            </div>
                            <div className="mb-30">{/*pokemon SPRITE*/}
                                {pokemon.sprites && <img className="w-120 h-120" src={pokemon.sprites.front_default} alt={pokemon.name}/>}
                            </div>
                            <div style={{backgroundImage: `url("/images/pokeball2.png")`}} className=" brightness-90 h-75 w-75 bg-transparent flex flex-end mb-2 justify-center bg-cover bg-no-repeat w-45 h-45 absolute z-1 top-[65vh] font-semibold text-[18px] text-gray-800 pt-10 ">{/*{details} */}
                                <div className="flex flex-col items-center font-sans mb-3">
                                    <p className=" rainbow-text text-[30px] text-bold  mb-auto mt-4">{capitalizeFirstLetter(pokemon.name)}</p>
                                    <p className="text-[20px]">{pokemon.height} feet</p>
                                    <p className="text-[20px]">{pokemon.weight} kg</p>
                                    <p className=" text-[20px] mb-2">{types.toString()}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{backgroundImage: `url("/images/pokemon.png")`}} className="w-150 h-40">{/*mid LOGO*/}
                    </div>
                    <div  className={`${leftBox.bgcolor} absolute z-0 w-[50vw] h-[100vh] top-0 left-[50vw] flex justify-center items-center  border-[15px] border-white`}>{/*right side BG*/}
                        <div style={{backgroundImage: `url(${leftBox.bgelement})`}} className="ml-65 z-1 h-77 w-77 bg-cover mr-50">{/*{right type element picture} */}

                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}