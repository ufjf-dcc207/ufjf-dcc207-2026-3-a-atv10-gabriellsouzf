import { useState } from "react";
import Garrafa from "./Garrafa";
import "./App.css";

export default function App() {

    const [garrafas, setGarrafas] = useState<string[][]>([
        ["vermelho", "azul", "vermelho"],
        ["azul", "vermelho", "azul"],
        []
    ]);

    const [selecionada, setSelecionada] = useState(-1);

    function clicar(i: number) {
        if (selecionada === -1) {
            setSelecionada(i);
        }
        else if (selecionada === i) {
            setSelecionada(-1);
        }
        else {
            const novas = garrafas.map(g => [...g]);

            if (novas[selecionada].length > 0) {
                const bola = novas[selecionada].pop();
                novas[i].push(bola!);
            }

            setGarrafas(novas);
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


