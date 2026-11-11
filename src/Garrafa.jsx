export default function Garrafa({ garrafa, selecionada, clicar }) {
    return (
        <div
            className={selecionada ? "garrafa selecionada" : "garrafa"}
            onClick={clicar}
        >
            {garrafa.map((c, i) =>
                <div key={i} className={c}></div>
            )}
        </div>
    );
}