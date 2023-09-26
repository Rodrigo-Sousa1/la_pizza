import { useState } from "react"

export default function Main(){
    const [imagemPizza, setimagemPizza] = useState()
    const[sabor, setSabor] = useState()

    const pizza1 = () => {setimagemPizza ('https://encurtador.com.br/afnvZ');
    setSabor('La Cuma')}
    
    const pizza2 =() =>{ setimagemPizza('https://encurtador.com.br/lrzL8'); setSabor ('La Menta')}

    const pizza3 =() => { setimagemPizza ('https://encurtador.com.br/fhwU3'); setSabor ('La Bana')}

return(
<>
    <main>
        <h2>Escolha seu sabor</h2>
        <section className="container1">
            <div className="d-c1"> 
                <img src={imagemPizza} alt="" />
                <p>{sabor}</p>
            </div>  
        </section>

        <section className="container2">
            <figure>
                <img src="https://encurtador.com.br/afnvZ" alt="" />
                <figcaption>La Cuma </figcaption>
                <button onClick={pizza1}>Comprar Agora</button>
            </figure>

            <figure>
                <img src=" https://encurtador.com.br/lrzL8" alt="" />
                <figcaption> La Menta</figcaption>
                <button onClick={pizza2}>Comprar Agora</button>
            </figure>

            <figure>
                <img src="https://encurtador.com.br/fhwU3" alt="" />
                <figcaption>La Bana</figcaption>
                <button onClick={pizza3}>Comprar Agora </button>
            </figure>

    
        </section>
    </main>

    

</>

)
}