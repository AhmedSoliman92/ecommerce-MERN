import Category from "../../components/category/Category"
import Bar from "../../components/bar/Bar"
import { Btn, Container } from "./style"
import { Link } from "react-router-dom"
export default function Categories() {
  return (
    <>
        <Bar/>
        <Container>
            <Link style={{textDecoration:'none',color:'inherit'}} to='/cat/create'>
            <Btn>Create a new Category</Btn>
            </Link>
        </Container>
        <Category/>
    </>
  )
}
