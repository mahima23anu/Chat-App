import React from 'react'
import Logo from './components/Logo';
import Form from './components/Form';
import "./index.css"

const App = () => {
  return (

        <div>
          {/* <Route path="/login">{user?<Redirect to="/" />:<Login />}</Route> */}
          <Logo />
          <Form />
        </div>
  );
}

export default App
