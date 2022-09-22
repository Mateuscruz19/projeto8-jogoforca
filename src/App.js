import forcaInicial from "./images/assets/forca0.png"


export default function App(){

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
   
    return(
        <>
        <div className="ConteinerJogo">
           <img src={forcaInicial} alt="inicialforca" className="forca"/>
           <div className="Lateral">
           <button>Escolha Palavra</button>
            <p>Palavra</p>
           </div>
        </div>
        <div className="Conteiner-Respostas">
            <ul className="Conteiner-letras">
                {alfabeto.map((l, index) => 
                <li>
                        <button key={index}>{l}</button>
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

