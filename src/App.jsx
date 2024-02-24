import React, { useState, useEffect } from 'react';
import './App.css';
import { Form, Button } from 'react-bootstrap';
import { postData } from './http/api';

function App() {
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const test = 'test';
  const [personList, setPersonList] = useState([{name: '', tel: ''}]);
  const [disable, setDisable] = useState(false);
  const regex = /^[\d]{1}\([\d]{3}\)[\d]{3}-[\d]{2}-[\d]{2}$/;

  const data = {
    stream_code: "iu244",
        client: {
            name: name,
            phone: tel    
        },
        sub1: test
  }

  const handleClick = () => {
    postData(data).then(() => {
      setPersonList(prev => [...prev, {name, tel}]);
      setName('');
      setTel('');
    })
  }

  useEffect(() => {
    for (let i = 0; i < personList.length; i++) {
      if (personList[i].name === name || personList[i].tel === tel || !regex.test(tel)) {
        setDisable(true);
        break;
      } else {
        setDisable(false)
      }
    }
  }, [name, tel])

  return (
    <div className='container'>
      <Form.Label htmlFor="name">Имя</Form.Label>
      <Form.Control
        type="text"
        id="name"
        required
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Form.Label htmlFor="phone">Номер телефона</Form.Label>
      <Form.Control
        type="tel"
        maxLength={15}
        id="phone"
        required={true}
        value={tel}
        onChange={e => setTel(e.target.value)}
      />
      <Form.Control
        type="hidden"
        id="test"
        value={test}
      />
      <Button 
        className='mt-2'
        onClick={handleClick}
        disabled={disable}
      >
        Отправить
      </Button>
    </div>
  );
}

export default App;
