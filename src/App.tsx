import { useState } from "react";
import Garrafa from "./Garrafa";
import "./App.css";

export default function App() {

    const estadoInicial = [
        ["vermelho", "azul", "vermelho"],
        ["azul", "vermelho", "azul"],
        []
    ];

    const [garrafas, setGarrafas] = useState(estadoInicial);
    const [selecionada, setSelecionada] = useState(-1);

    function clicar(i: number) {

        if (selecionada === -1) {
            setSelecionada(i);
        }
        else {
            if (selecionada !== i) {
                const novas = garrafas.map(g => [...g]);

                const origem = novas[selecionada];
                const destino = novas[i];

                if (origem.length > 0) {
                    const bolinha = origem.pop();
                    destino.push(bolinha!);
                }
                setGarrafas(novas);
            }
            setSelecionada(-1);
        }
    }

    return (
        <div>
            <h1>Magic Sort</h1>

            <div className="garrafas">
                {garrafas.map((g, i) =>
                    <Garrafa
                        key={i}
                        garrafa={g}
                        selecionada={selecionada === i}
                        clicar={() => clicar(i)}
                    />
                )}
            </div>
        </div>
    );
}