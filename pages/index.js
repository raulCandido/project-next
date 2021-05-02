import React, { useState } from 'react';

export default function Home(){
    return(
        <div>
            <div>Ola</div>
            <Contador/>
        </div>
    )



    function Contador() {
        const [contador, setContador] = useState(1)

        return(
            <div>
                <div>{contador}</div>
                <button onClick={incrementandoContador}>Adicionar</button>
            </div>

        ) 

        function incrementandoContador() {
            setContador(contador + 1)
        }

    }

}