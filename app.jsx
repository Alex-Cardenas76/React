import { PlatoCard } from "./components/PlatoCard.jsx";

export function App({ platos }) {
    return (
        <>
            <h2>Carta de platos Mocks</h2>
            {platos.map(plato => (
                <div key={plato.id}>
                    <PlatoCard 
                        nombre={plato.nombre} 
                        categoria={plato.categoria} 
                        precio={plato.precio} 
                        stock={plato.stock} 
                        disponible={plato.disponible} 
                    />
                </div>
            ))}
        </>
    );
}