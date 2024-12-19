import React from 'react'
import Image from "next/image";
import unb from "/public/unb.svg"
import Link from 'next/link';


const HeaderDeslogado = () => {
  return (
    <header>
        <div className="w-full h-24 bg-[#A4FED3] flex place-items-center">
        <Image src={unb} alt={unb} className="w-24 h-12 ml-9"/>
        <button className="bg-[#00ABED] w-40 h-12 ml-auto mr-14 border border-white rounded-2xl shadow-md text-white text-center text-3xl font-Questrial">
            <Link href={"/login"}>Login</Link> {/* Link pra tela de login */}
        </button>
        </div>
    </header>
  )
}

export default HeaderDeslogado
