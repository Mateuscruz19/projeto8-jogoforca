import { useState } from "react";
import forca0 from "./images/assets/forca0.png"
import forca1 from "./images/assets/forca1.png"
import forca2 from "./images/assets/forca2.png"
import forca3 from "./images/assets/forca3.png"
import forca4 from "./images/assets/forca4.png"
import forca5 from "./images/assets/forca5.png"
import forca6 from "./images/assets/forca6.png"

import PalavrasArray from "./palavras"

const Forcas = [forca0,forca1,forca2,forca3,forca4,forca5,forca6]


export default function App(){

    const[Contador, setContador] = useState(1)
    const[Imagem, setImagem] = useState(Forcas[0])



    function ClicouLetra(letraSelecionada){
        setDesabilitado(false)
        const novaLista = [...letrasClicadas,letraSelecionada]
        setClicado(novaLista)
        console.log(letraSelecionada)

        if(Aleatorio.includes(letraSelecionada)){
            console.log("TEM")
            console.log(Contador)
        } else{
            console.log("NAO TEM")
            setContador(Contador + 1)
            setImagem(Forcas[Contador])
        }
    }
 
    
let numerosDeLetras;

    const [PalavraCerta, setPalavra] = useState("")
    const [Secreto, setSecreto] = useState("Bem vindo ao jogo da forca!")
    const [Aleatorio, setAletorio] = useState()
    

    function EscolherPalavra(){
        const palavraAleatoria = PalavrasArray[Math.floor(Math.random()*PalavrasArray.length)];
        setPalavra(palavraAleatoria)
        const ArrayLetras = palavraAleatoria.split("");
        setAletorio(ArrayLetras)
        console.log(ArrayLetras);
        setDesabilitado(false);
        setPrincipal(true);
        numerosDeLetras = ArrayLetras.length;
        Number(numerosDeLetras);
        const palavraAberta = [...ArrayLetras];
        const palavraEscondida = palavraAberta.fill(" _ ")
        setSecreto(palavraEscondida)

    }
    

    function ChutarResposta(){
         console.log(PalavraCerta)
         console.log(Chute)
         if(PalavraCerta=== Chute){
            setCor("ganhou")
            setSecreto(PalavraCerta)
         } else{
            setCor("perdeu")
            setSecreto(PalavraCerta)
         }
      }


    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const [letrasClicadas, setClicado] = useState([])
    const [Desabilitado, setDesabilitado] = useState(true)
    const [DesabilitadoBotaoPrincial, setPrincipal] = useState(false)
    const [Chute, setChute] = useState("")
    const [cor, setCor] = useState("")


    return(
        <>
        <div className="ConteinerJogo">
           <img src={Imagem} alt="inicialforca" className="forca"/>
           <div className="Lateral">
           <button onClick={EscolherPalavra} disabled={DesabilitadoBotaoPrincial}>Escolha Palavra</button>
            <p className={cor}>{Secreto}</p>
           </div>
        </div>
        <div className="Conteiner-Respostas">
            <ul className="Conteiner-letras">
                {alfabeto.map((l, index) => 
                <li>
                        <button  className="botaoLetra" key={index}  onClick={() => ClicouLetra(l)} disabled={letrasClicadas.includes(l) ? true : false}>{l}</button>
                    </li>
                    )}
            </ul>
                       
            <div className="Responder-Resposta">
                <p>Já Sei a pergunta!</p>
                <input  type="text" className="Chute"  onChange={(e) => setChute(e.target.value)}></input>
                <button disabled={Desabilitado} onClick={ChutarResposta}>Chutar</button>
            </div>
        </div>
        </>
    )
   
}