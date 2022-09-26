import { useState } from "react";
import forca0 from "./images/assets/forca0.png"
import forca1 from "./images/assets/forca1.png"
import forca2 from "./images/assets/forca2.png"
import forca3 from "./images/assets/forca3.png"
import forca4 from "./images/assets/forca4.png"
import forca5 from "./images/assets/forca5.png"
import forca6 from "./images/assets/forca6.png"
import forca7 from "./images/assets/forca6.png"

import PalavrasArray from "./palavras"

const Forcas = [forca0,forca1,forca2,forca3,forca4,forca5,forca6,forca7]


export default function App(){


    let numerosDeLetras;
    const[Contador, setContador] = useState(1)
    const[Imagem, setImagem] = useState(Forcas[0])
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const [letrasClicadas, setClicado] = useState([])
    const [Desabilitado, setDesabilitado] = useState(true)
    const [Chute, setChute] = useState("")
    const [cor, setCor] = useState("Letras")
    const [PalavraCerta, setPalavra] = useState("")
    const [Secreto, setSecreto] = useState("Bem vindo ao jogo da forca!")
    const [Aleatorio, setAletorio] = useState()
    const [Semacento, setSemAceto] = useState([])
    const [comecouJogo, SetComecou] = useState(false)
    const [terminouJogo, setTerminou] = useState(false)




    function ClicouLetra(letraSelecionada){
        setDesabilitado(false)
        const novaLista = [...letrasClicadas,letraSelecionada]
        setClicado(novaLista)
        if(Semacento.includes(letraSelecionada)){
            console.log("TEM")
            const posicaoLetraAcertada = Semacento.indexOf(letraSelecionada)
            console.log(posicaoLetraAcertada+1)
            console.log(Secreto)
            console.log(letrasClicadas)
            if(Secreto.includes(" _ ") === false){
                setCor("ganhou")
                setSecreto(PalavraCerta)
                setTimeout(alert("VOCE GANHOU O JOGO :D"),2000)
                setDesabilitado(true)
                SetComecou(false)
                setTerminou(true)
            }

        } else{
            console.log("NAO TEM")
            setContador(Contador + 1)
            setImagem(Forcas[Contador])
        }

        if(Contador === 6){
            setCor("perdeu")
            setSecreto(PalavraCerta)
            setTimeout(alert("VOCE NAO COSEGUIU DESCOBRIR A PALAVRA :("),2000)
            setDesabilitado(true)
            SetComecou(false)
            setTerminou(true)
        }
    }
 

    function EscolherPalavra(){
        setPalavra("")
        setContador(1)
        setImagem(Forcas[0])
        setClicado([])
        setChute("")
        setCor("")
        setSecreto("")
        setAletorio("")
        setSemAceto([])
        SetComecou(false)
        let palavraAleatoria = "";
        palavraAleatoria = PalavrasArray[Math.floor(Math.random()*PalavrasArray.length)];
        setPalavra(palavraAleatoria)
        const ArrayLetras = palavraAleatoria.split("");
        setAletorio(ArrayLetras)
        setDesabilitado(false);
        numerosDeLetras = ArrayLetras.length;
        Number(numerosDeLetras);
        const palavraAberta = [...ArrayLetras];
        const palavraEscondida = palavraAberta.fill(" _ ")
        setSecreto(palavraEscondida)
        const SemAcentoPalavra = palavraAleatoria.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        setSemAceto(SemAcentoPalavra.split(""))
          console.log(SemAcentoPalavra)
          console.log(ArrayLetras)
          SetComecou(true)
    }
    
    
   



    function ChutarResposta(){
         console.log(PalavraCerta)
         console.log(Chute)
         if(PalavraCerta === Chute){
            setCor("ganhou")
            setSecreto(PalavraCerta)
            setTimeout(alert("VOCE GANHOU O JOGO :D"),2000)
            setDesabilitado(true)
            SetComecou(false)
            setTerminou(true)
         }else if(Chute === "" || Chute === undefined){
            alert("A palavra não é um nada certo?Tente mandar uma palavra pelomenos agora :D")
            return
         } else{
            setCor("perdeu")
            setSecreto(PalavraCerta)
            setTimeout(alert("VOCE NAO COSEGUIU DESCOBRIR A PALAVRA :("),2000)
            setDesabilitado(true)
            SetComecou(false)
            setTerminou(true)
         }
      }


    

    return(
        <>
        <div className="ConteinerJogo">
           <img src={Imagem} alt="inicialforca" className="forca"/>
           <div className="Lateral">
           <button onClick={EscolherPalavra} >Escolha Palavra</button>
           <div className="Letras">{comecouJogo && Semacento.map((l, index) => <p className={cor}>{letrasClicadas.includes(l) ? Aleatorio[index] : "_"}</p>)}</div>
           {terminouJogo && <p className={cor}>{PalavraCerta}</p>}
           </div>
        </div>
        <div className="Conteiner-Respostas">
            <ul className="Conteiner-letras">
                {alfabeto.map((l, index) => 
                <li>
                        <button  className="botaoLetra" key={index}  onClick={() => ClicouLetra(l)} disabled={letrasClicadas.includes(l) ? true : Desabilitado}>{l}</button>
                    </li>
                    )}
            </ul>
                       
            <div className="Responder-Resposta">
                <p>Já Sei a pergunta!</p>
                <input placeholder="Cuidado com os acentos" type="text" className="Chute"  onChange={(e) => setChute(e.target.value)}></input>
                <button disabled={Desabilitado} onClick={ChutarResposta}>Chutar</button>
            </div>
        </div>
        </>
    )
    // Secreto.fill(Aleatorio[posicaoLetraAcertada],posicaoLetraAcertada,posicaoLetraAcertada+1)
}