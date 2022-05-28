import {Container, Left,Language,Search,Input , Center, Right,Span}  from './style'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react'
import { Badge } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LOGOUT } from '../../redux/userReducer';

export default function Bar() {
  const {currentUser} = useSelector(state=> state.user)
  const dispatch = useDispatch()
  const handlelogout = ()=>{
    dispatch(LOGOUT())
  }
  return (
    <Container>
        <Left>
          <Language><Span>EN</Span></Language>
          <Search>
              <Input/>
              <SearchIcon/>
          </Search>
        </Left>
        <Center>
        <Link style={{textDecoration:'none', color:'inherit'}} to='/'>
          <Span>
            E-COMMERCE
          </Span>
        </Link>
        </Center>
        <Right>

        {
            currentUser.isAdmin
            ?
            <>
            <Link style={{textDecoration:'none', color:'inherit'}} to='/cat'>
              <Span>
                Categories
              </Span>
            </Link>
            <Link style={{textDecoration:'none', color:'inherit'}} to='/products'>
              <Span>
                Produts
              </Span>
            </Link>
            </>
            :
            ''
          }
          {
            !currentUser
            ?
            <>
            <Link style={{textDecoration:'none', color:'inherit'}} to='/register'>
              <Span>
                Resgister
              </Span>
            </Link>
            <Link style={{textDecoration:'none', color:'inherit'}} to='/login'>
              <Span>
                Login
              </Span>
            </Link>
            </>
            :
            <Link onClick={handlelogout} style={{textDecoration:'none', color:'inherit'}} to='/'>
              <Span>
                Logout
              </Span>
            </Link>
          }
          
          <Badge badgeContent={15} color="primary">
              <ShoppingCartOutlinedIcon />
          </Badge>
        </Right>
    </Container>
  )
}
