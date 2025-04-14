import PokedexApp from "@/components/PokedexApp";
import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <div style={{ backgroundImage: 'url("/images/pokeball.png")' }} className="border-2 w-200 h-200 mt-25 flex flex-col items-center bg-cover bg-no-repeat mx-auto">
      <img src="/images/pokemon.png" className="h-90 mt-[-25px]"></img>
      <Link href="/pokemon" className="border-6 w-35 h-35 ml-4 mt-[-6px]  flex justify-center items-center rounded-full hover:brightness-120 font-semibold text-blue-500 bg-yellow-300 text-[24px]">ENTER</Link>
      <p className=" font-bold text-[35px] my-auto font-sans tracking-[10px] text-blue-900">data base</p>
    </div>
  );
}
