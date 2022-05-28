import Category from "../../components/category/Category"
import Bar from "../../components/bar/Bar"
import { Btn, Container } from "./style"
export default function Categories() {
  return (
    <>
        <Bar/>
        <Container>
            <Btn>Create a new Category</Btn>
        </Container>
        <Category/>
    </>
  )
}
