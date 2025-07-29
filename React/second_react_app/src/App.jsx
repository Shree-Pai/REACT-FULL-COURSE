// import First from './first'
// import Second from './Second'
// import Third from './Third'
// import Fourth from './Fourth'
import Card from "./Card";
import Store from "./Store";
import Counter from "./Counter";
import NewComp from "./NewComp";
// import FirstComp from "./FirstComp";
import FirstEvent from "./FirstEvent";
import FirstList from "./component/FirstList";
import SecondList from "./component/SecondList";
import EmployeeList from "./component/EmployeeList";
import CourseList from "./component/CourseList";
import TableList from "./component/TableList";
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from "./component/BootstrapTable";
import LifeCycleFirst from "./life_cycle_component/LifeCycleFirst";
import LifeCycleSecond from "./life_cycle_component/LifeCycleSecond";
import LifeCycleThird from "./life_cycle_component/LifeCycleThird";
import FirstComp from "./hooks/FirstComp";
import SecondComp from "./hooks/SecondComp";
import ThirdComp from "./hooks/ThirdComp";
import FourthComp from "./hooks/FourthCom";
import FifthComp from "./hooks/FifthCOmp";
import SixthComp from "./hooks/SixthComp";
import Parent from "./hooks/Parent";
import FirstCounter from "./CustomHook/FirstCounter";
import SecondCounter from "./CustomHook/SecondCounter";
import ThirdCounter from "./CustomHook/ThirdCounter";
import React, { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    // Load from sessionStorage on reload (tab-specific)
    const savedName = sessionStorage.getItem("userName");
    if (savedName) setName(savedName);

    const savedEmail = sessionStorage.getItem("email");
    if (savedEmail) setEmail(savedEmail);

    const savedGender = sessionStorage.getItem("gender");
    if (savedGender) setGender(savedGender);

    const savedCountry = sessionStorage.getItem("country");
    if (savedCountry) setCountry(savedCountry);
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
    sessionStorage.setItem("userName", event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    sessionStorage.setItem("email", event.target.value);
  };

  const handleGenderChange = (event) => {
    const value = event.target.value;
    if (gender === value) {
      setGender("");
      sessionStorage.setItem("gender", "");
    } else {
      setGender(value);
      sessionStorage.setItem("gender", value);
    }
  };

  const handlecountryChange = (event) => {
    setCountry(event.target.value);
    sessionStorage.setItem("country", event.target.value);
  };

  return (
    
    <div>
      {/* <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
    // function handleClick(){
    //   alert("Function from parent component:");
    // }
    // return (
    <div>
      {/* <h1> React app with vite</h1>
      <h2>Vite is fatser</h2>
      <Card label="Click me" onClick={handleClick}/> */}
      {/* <First/>
      <Third/>
      <Fourth/> */}
      {/* <Card name="Shree" city="Bantwal"/>
      <Card name="Krithika" city="Mangalore"/>
      <Card name="Krishna" city="Mura"/>
      <Card name="Sudeep" city="Belthangady"/> */}
      {/* <Store/> */}
      {/* <Counter/> */}
      {/* <NewComp/> */}
      {/* <Rendercomp/> */}
      {/* <FirstEvent/> */}
      {/* <FirstList/> */}
      {/* <SecList/> */}
      {/* <EmployeeList/> */}
      {/* <CourseList/> */}
      {/* <TableList/> */}
      {/* <BootstrapTable/> */}
      {/* <LifeCycleFirst/> */}
      {/* <LifeCycleSecond/> */}
      {/* <LifeCycleThird/> */}
      {/* <FirstComp/> */}
      {/* <SecondComp/> */}
      {/* <ThirdComp/> */}
      {/* <FourthComp/> */}
      {/* <FifthComp/> */}
      {/* <Sixth/> */}
      {/* <Parent/> */}
      {/* <FirstCounter/><br></br>
      <SecCounter/><br></br>
      <ThirdCounter/> */}
      {/* <FirstContext username={username}/> */}
      {/* <UserContext.Provider value={username}>
        <div>
          <FirstContext/>
        </div>
      </UserContext.Provider> */}
      {/* <ThemeProvider>
        <h1>theme toggle app</h1>
        <ThemeToggleComponent/>
      </ThemeProvider> */}
      <form action="/OnSubmit" method="get">
        <label htmlFor="Name">Name: </label>
        <input
          type="text"
          value={name}
          placeholder="Enter your Name"
          onChange={handleNameChange}
        />
        <br /><br />
        <label htmlFor="Email">Email: </label>
        <input
          type="email"
          value={email}
          placeholder="Enter your Email"
          onChange={handleEmailChange}
        />
        <br /><br />
        <label>Gender: </label>
        <input
          type="checkbox"
          value="Male"
          checked={gender === "Male"}
          onChange={handleGenderChange}
        /> Male
        <input
          type="checkbox"
          value="Female"
          checked={gender === "Female"}
          onChange={handleGenderChange}
        /> Female
        <br /><br />
        <label htmlFor="country">Country: </label>
        <select value={country} onChange={handlecountryChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="Japan">Japan</option>
        </select>
      </form>
    </div>
  );
}

export default App;