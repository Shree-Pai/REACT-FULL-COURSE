import {BrowserRouter, Route, Routes,Link,Navigate ,NavLink} from 'react-router-dom'
// import Profile from './component/Profile';
import Home from './component/Home';
import NavBar from './component/NavBar';
import Error from './component/Error';
import User from './profile/User';
import './App.css';
import Dashboard from './nested/Dashboard';
import Setting from './nested/Settings';
import Profile from './nested/Profile';
import Product from './nested/Product';


function App() {

  return (

      <BrowserRouter>
      {/* <nav style={{margin:'20px'}}></nav> */}
        {/* <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile/>} />
        </Routes> */}
        {/* <Link to="/home">Home</Link><br />
        <Link to="/profile">Profile</Link> */}
        {/* <NavBar/> */}
        {/* <NavLink to="/" style={({isActive})=>{return {marginRight:'15px', color:isActive ? 'green' : 'blue',fontWeight:isActive?'bold':'normal'}}}>Home</NavLink><br />
        <NavLink to="/profile" style={({isActive})=>{return {marginRight:'15px', color:isActive ? 'green' : 'blue',fontWeight:isActive?'bold':'normal'}}}>Profile</NavLink> */}
        {/* <NavLink to="/" className={({isActive})=>isActive?"active-link link":"link"}>Home</NavLink>
        <NavLink to="/profile" className={({isActive})=>isActive?"active-link link":"link"}>Profile</NavLink> */}
        {/* <NavBar/> */}
        
        <Routes>
          {/* <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/*" element={<Error/>}/>
          <Route path="/home" element={<Navigate to="/"/>}/>
          <Route path="/user/:userName" element={<User/>}/> */}

          {/* Nested Routes */}
          <Route path="/" element={<Home/>}/>
            <Route path="/product" element={<Product/>}/>

          <Route path="/dashboard" element={<Dashboard/>}>
            <Route path="profile" element={<Profile/>}/>
            <Route path="setting" element={<Setting/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
  )
}

export default App;
