import React, {useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';

function App() {
  const [list, setList] = useState([])

  const addUserHandler = (user) => { 
    setList((prev) => { 
      return [...prev, user]
    })
    console.log(list)
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
     <UserList userList={list}/>
    </div>
  );
}

export default App;
