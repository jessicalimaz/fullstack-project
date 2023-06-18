import Pizza from "../../components/pizza/Pizza"
import { BASE_URL } from "../../constsnts/URL"
import UseRequestData from "../../hooks/UseRequestData"
import { Container, DivCard } from "./style"

export default function Home() {
    const [ data ] = UseRequestData(`${BASE_URL}/api/pizzas`)

    return (
        <Container>
            <DivCard>
                {data && data.pizzas && data.pizzas.map((p)=>{
                    return(
                    <Pizza key={p.id}
                        id={p.id}
                        image={p.image}
                        name={p.name}
                        price={p.price}
                        ingredients={p.ingredients}

                    />
                    )
                })}

            </DivCard>
        </Container>
    )
}

