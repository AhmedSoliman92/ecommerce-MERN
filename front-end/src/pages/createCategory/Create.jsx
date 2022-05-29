import React, { useRef, useState } from 'react'
import Bar from '../../components/bar/Bar'
import {normalRequest} from '../../apiCalls'
import { Container,Img,Input,Submit,Title,Wrapper, Add, Error } from './style'

export default function Create() {
  const [file, setFile]=useState([]);
  const [warning,setWarning]=useState(false);
  const [error, setError]=useState('')
  const title = useRef();

  const createCategory = async()=>{
    setWarning(false);
    
    if(file.length>0){

      const form = new FormData();
      const name = (Date.now()+ file[0].name).replace(/\s/g,'');
      form.append('name',name);
      form.append('file', file[0])
      const newCat = {
        'category':title.current.value,
        'img':`images/${name}`
      }
      try {
        await normalRequest.post('/upload',form);
        await normalRequest.post('/cat/create', newCat)
      } catch (err) {
        console.log(err.response)
        setError(err.response.data.message)
        setWarning(true)
      }
    }else{
      setError("You missed to add Image/Category name")
        setWarning(true)
    }

   

  }
  return (
      <>
    <Bar/>
    <Container>
        <Wrapper>
          {warning?<Error>{error}</Error>:''}
            {file.length >0 && <Img  src={URL.createObjectURL(file[0])}/>}
            <Input  >
                  <label htmlFor="file">
                  <Add />
                  </label>

                <Title placeholder='Category Name' ref={title}/>
            </Input>
            <Submit onClick={createCategory}> Create Category</Submit>
            <Title id="file" type="file" style={{display:'none'}} onChange={(e)=>setFile(e.target.files)} accepted='.jpg, .jpeg, .png'/>
        </Wrapper>

    </Container>
      </>
  )
}
