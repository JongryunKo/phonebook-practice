import React, { useState } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

const SearchBox = () => {
  let [searchword, setSearchword]= useState('');
  let dispatch = useDispatch();
  let {contact} = useSelector((state) => state);
  const searchName = () =>{
    dispatch({type:"SEARCH_USERNAME", payload: {searchword : searchword}})
    console.log(searchword)
  }

  const inputChagne = (event) =>{
    setSearchword(event.target.value);
  }
  return (
      <Row>
        <Col lg={10}>
        <Form.Control type="text" placeholder="이름을 입력해주세요" value={searchword} onChange={inputChagne} />
        </Col>
        <Col lg={2}>
          <Button type='button' onClick={searchName}>찾기</Button>
        </Col>
      </Row>
  )
}

export default SearchBox