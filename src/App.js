import { useState } from "react";
import forcaInicial from "./images/assets/forca0.png"
import PalavrasArray from "./palavras"


export default function App(){

    function ClicouLetra(letraSelecionada){
        setDesabilitado(false)
        const novaLista = [...letrasClicadas,letraSelecionada]
        setClicado(novaLista)
        console.log(letraSelecionada)
    }
 
    
let numerosDeLetras;
    const [Secreto, setSecreto] = useState("Bem vindo ao jogo da forca!")

    function EscolherPalavra(){
        const palavraAleatoria = PalavrasArray[Math.floor(Math.random()*PalavrasArray.length)];
        const ArrayLetras = palavraAleatoria.split("");
        console.log(ArrayLetras);
        setDesabilitado(false);
        setPrincipal(true);
        numerosDeLetras = ArrayLetras.length;
        Number(numerosDeLetras);
        teste();

        function teste(){
            const palavraAberta = [...ArrayLetras];
            const palavraEscondida = palavraAberta.fill("_")
            setSecreto(palavraEscondida)
        }



    }
    
        


    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const [letrasClicadas, setClicado] = useState([])
    const [Desabilitado, setDesabilitado] = useState(true)
    const [DesabilitadoBotaoPrincial, setPrincipal] = useState(false)



    return(
        <>
        <div className="ConteinerJogo">
           <img src={forcaInicial} alt="inicialforca" className="forca"/>
           <div className="Lateral">
           <button onClick={EscolherPalavra} disabled={DesabilitadoBotaoPrincial}>Escolha Palavra</button>
            <p>{Secreto}</p>
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
                <input type="text" className="Chute"></input>
                <button>Chutar</button>
            </div>
        </div>
        </>
    )
   
}