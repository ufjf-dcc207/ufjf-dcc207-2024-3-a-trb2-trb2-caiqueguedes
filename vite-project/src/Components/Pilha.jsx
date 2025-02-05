import React, { useState } from 'react';
import './Pilha.css';

function Pilha() {

    const [pilha, setPilha] = useState([]);
   
    const [valorInput, setValorInput] = useState('');

    
    const adicionarElemento = () => {
        if (valorInput.trim() !== '') {
            setPilha([...pilha, valorInput]); 
            setValorInput('');
        }
    };

   
    const removerElemento = () => {
        if (pilha.length > 0) {
            const novaPilha = [...pilha];
            novaPilha.pop(); 
            setPilha(novaPilha);
        }
    };

    return (
        <div className="Pilha">
            <h1>Pilha</h1>
            <div className="controles">
                <input
                    type="text"
                    value={valorInput}
                    onChange={(e) => setValorInput(e.target.value)}
                    placeholder="Digite um valor"
                />
                <button onClick={adicionarElemento}>Adicionar (Push)</button>
                <button onClick={removerElemento}>Remover (Pop)</button>
            </div>
            <div className="visualizacao-pilha">
                {pilha.map((elemento, indice) => (
                    <div key={indice} className="elemento-pilha">
                        {elemento}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pilha;