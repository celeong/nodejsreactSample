// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './dashboard/Header';
import MainContent from './dashboard/MainContent';
import { Users } from './users/Users';
import { Dashboard } from './components/Dashboard';
import CreateUser from './users/CreateUser';
import { getAllUsers, createUser } from './services/userservice';
import ROUTES, { RenderRoutes } from "./routes/routes";


function App() {

  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [numberOfUsers, setNumberOfUsers] = useState(0);

  const userCreate = (e) => {
    createUser(user)
      .then(response => {
        console.log(response);
        setNumberOfUsers(numberOfUsers+1);
      });
  };

  const fetchAllUsers = () => {
    getAllUsers()
      .then(users => {
        console.log(users);
        setUsers(users);
        setNumberOfUsers(users.length);
      });
  };
  
  useEffect(() => {
    // getAllUsers()
    //   .then(users => {
    //     console.log(users);
    //     setUsers(users);
    //     setNumberOfUsers(users.length);
    //   });
  }, []);

  const onChangeForm = (e) => {
    if (e.target.name === 'firstname') {
        user.firstName = e.target.value;
    } else if (e.target.name === 'lastname') {
        user.lastName = e.target.value;
    } else if (e.target.name === 'email') {
        user.email = e.target.value;
    }
    setUser(user);
  };


  return (
    <div className="App">
      <Header />

      <MainContent>
        <RenderRoutes routes={ROUTES} />
      </MainContent>

      {/* <div className="container mrgnbtm">
        <div className="row">
          <div className="col-md-8">
              <CreateUser 
                user={user}
                onChangeForm={onChangeForm}
                createUser={userCreate}
                >
              </CreateUser>
          </div>
          <div className="col-md-4">
              <Dashboard
                numberOfUsers={numberOfUsers}
                getAllUsers={fetchAllUsers}
              >
              </Dashboard>
          </div>
        </div>
      </div>
      <div className="row mrgnbtm">
        <Users users={users}></Users>
      </div> */}
    </div>
  );

}

export default App;
