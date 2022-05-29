
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { normalRequest } from '../../apiCalls'
import { Container,Categories, CategoryCont, Image, CatTitle, ShopBtn } from './style'

export default function Category() {
    const {currentUser}= useSelector(state=>state.user)
    const [categories, setCategories]= useState();
    const location=useLocation()
    const navigate = useNavigate()


    const handleDelete = async(id)=>{
        await normalRequest.delete(`cat/${id}`)
        setCategories(categories.filter(category=>category._id !== id))
        navigate(location.pathname)
    }

    useEffect(()=>{
        const getCategory = async()=>{
            const res = await normalRequest.get('cat');
            setCategories(res.data);
            
        };
        getCategory();
    },[])
  return (
    <Container>
        <Categories>
            {categories && categories.map(category=>(

            <CategoryCont key={category._id}>

                <Image src={`http://localhost:3500/${category.img}`} alt=""/>
                <CatTitle>
                    {category.category}
                </CatTitle>
                <Link to='/'>
                <ShopBtn>{currentUser.isAdmin? 'display as client': 'shop now'}
                </ShopBtn>
                </Link>
                <Link  to={`/cat/${category._id}`}>
                <ShopBtn check='edit'>{currentUser.isAdmin? 'edit': ''}
                </ShopBtn>
                </Link>
                <Link to='/'>
                <ShopBtn onClick={()=>handleDelete(category._id)} check='delete'>{currentUser.isAdmin? 'delete': ''}
                </ShopBtn>
                </Link>
            </CategoryCont>
            ))}
            
        </Categories>
    </Container>
  )
}
