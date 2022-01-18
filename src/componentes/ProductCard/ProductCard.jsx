import "./stylecard.css";

function ProductCard({articulo, material, tamaño}) {
    return(
        <div className="productCard">
            <p>Producto={articulo}</p>
            <p>Tamaño={tamaño}</p>
            <p>Material={material}</p>
        </div>
    );
}
export default ProductCard;