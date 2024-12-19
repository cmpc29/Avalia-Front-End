import React from "react";
import HeaderDeslogado from "../components/HeaderDeslogado";
import HeaderLogado from "../components/HeaderLogado";
import voltar from "/public/voltar.svg"
import Image from "next/image";
import Link from 'next/link';

const PagePerfil = () =>{
    return(<><div><header><HeaderDeslogado/></header></div>
        <div className="flex h-[calc(100vh-50px)] relative">
        
        <div className="w-[31%] bg-gray-100 relative">
        <button className="w-8 h-7 absolute top-1 -right-px">
            <Link href={"/feed-logado"}><Image src={voltar} alt="icone"></Image></Link>
        </button> </div>
    
        <div className="w-[38%] bg-white flex items-center justify-center">
        <div className="bg-[#3EEE9A] flex h-[151px] absolute top-0 w-[38%]">
        <div className=" h-px w-[100%] bg-[#7E7E7E] absolute top-1/2 transform translate-y-64"></div>
        </div>
          
          
        </div>
        <div className="w-[31%] bg-gray-100"></div> {/* Parte Direita */}
      </div>
      </>
    )
} 
export default PagePerfil