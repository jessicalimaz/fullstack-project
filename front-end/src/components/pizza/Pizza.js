import { Card } from "./style";

export default function Pizza(props) {

    return (
        <>
            <Card>
            <img src={props.image} alt={props.name} />
            <div>
                <h2>{props.name}</h2>
                <p className="price">R$ {props.price}</p>
                <p className="ingredients">{props.ingredients}</p>
            </div>
            <button>Adicionar ao carrinho</button>
        </Card>
        </>
    )
}