import {Container, Left,Language,Search,Input , Center, Right,Span}  from './style'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react'
import { Badge } from '@mui/material';

export default function Bar() {
  return (
    <Container>
        <Left>
          <Language>EN</Language>
          <Search>
              <Input/>
              <SearchIcon/>
          </Search>
        </Left>
        <Center>E-COMMERCE</Center>
        <Right>
          <Span>
            Resgister
          </Span>
          <Span>
          SING IN
          </Span>
          <Badge badgeContent={15} color="primary">
              <ShoppingCartOutlinedIcon/>
          </Badge>
        </Right>
    </Container>
  )
}
