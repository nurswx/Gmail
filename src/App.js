import { useState } from 'react';
import './App.css';
import Form from './components/Form.jsx';
import Okno from './components/Okno.jsx';
import ToDoList from './components/ToDoList.jsx';

function App() {

  const [form , setForm] = useState(false)

  const openForm = () => {
    setForm((prevState) => !prevState)
  }

  const closeForm = () => {
    setForm((prevState) => false)
  }

  return (
    <div className="App">
     <Okno openFormHendler={openForm}/>
     {form ? <Form closForm={closeForm}/> : null}
    <ToDoList/>
    </div>
  );
}

export default App;
