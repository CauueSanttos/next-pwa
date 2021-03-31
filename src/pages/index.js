import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function HomePage() {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);

    const [imc, setImc] = useState(0);

    const handleIMC = () => {
        let calc = weight / (height * height);

        setImc(calc.toFixed(2));
    }

    return (
        <div className={styles.container}>
            <div>
                <h1>Calculadora IMC</h1>
                <input onChange={(e) => { setWeight(e.target.value) }} type="text" placeholder="Peso" />
                <input onChange={(e) => { setHeight(e.target.value) }} type="text" placeholder="Altura" />
                <button onClick={handleIMC}>Calcular</button>

                {imc > 0 && (
                    <span>Seu IMC é: {imc}</span>
                )}
            </div>
        </div>
    )
}