
function PlatoCard({ nombre, categoria, precio, stock, disponible }) {

    return (
        <ul style={{ color: disponible ? 'black' : 'gray', opacity: disponible ? 1 : 0.5 }}>
            <li>Nombre:{nombre}</li>
            <li>Categoria:{categoria}</li>
            <li>Precio:{precio}</li>
            <li>Stock:{stock}</li>
            <li>Disponible: {disponible ? "✅ si" : "❌ no"}</li>
        </ul>
    )
}