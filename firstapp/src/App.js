import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Promo from "./components/Promo";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Intro3 from "./components/Intro3";
import Footer from "./components/Footer";
import profile from "./profile.jpg";
import Btn from "./Btn";
import PromoHeading from './components/PromoHeading';
import Child from './Child';
import { useState } from 'react';
function Logo(props){
  const userPic = <img src={profile} />;
  return userPic;
}
function Apples(props){
  return (
    <div className="promo-section">
      <div>
        <h2>These apples are: {props.color}</h2>
        <h3>There are {props.number} apples.</h3>
      </div>
    </div>
  );
}
function Pears(props){
  return (
    <h2>I don't like pears, but my friends, {props.friend}, does</h2>
  );
}
function Bag(props){
  const bag = {
    padding: "20px",
    border: "1px solid gray",
    background: "#fff",
    margin: "20px 0"
  }
  return (
    <div style={bag}>
      {props.children}
    </div>
  );
}
const style = {
  color: "red",
  fontSize: "20px"
}

let name = 'Bob';
name == 'Bob' ? console.log('Hello, Bob') : console.log('Hello, Friend');
const bool = false;
const str1 = "just";
function Example(props){
  return (
    <div>
      <h2>
            The value of the toggleBoolean prop is:{props.toggleBoolean.toString()}
            </h2>
            <p>The value of the math prop is: <em>{props.math}</em></p>
            <p>The value of the str prop is: <em>{props.str}</em></p>
    </div>
  );
}
function Button(){
  return (
    <button onClick={function(){
      console.log("Hello World!");
    }}>An incline anonymous ES5 function event handler</button>
  );
}
const data = {
  heading: "99% off all items!",
  callToAction: "Everything must go!"
}
function App(props) {
const date = new Date();
  return (
    <div>
      <Child message={date.toLocaleTimeString()}/>
      <PromoHeading heading={data.heading} callToAction={data.callToAction}/>
      <Btn/>
      <Button/>
      <h1>{props.title}</h1>
      <Logo/>
      <Nav/>
      <div style={style}>
      <Promo name="Ben" color="red"/>
      </div>
      <Intro1/>
      <Intro2/>
      <Intro3/>
      <Bag children={<Apples color="yellow" number="5" />} />
      <Bag children={<Pears friend="Peter" />} />
      <Bag>
      <Apples color="yellow" number="5" />
      </Bag>
      <Bag>
      <Pears friend="Peter" />
      </Bag>
      <Footer/>
    </div>
  );
}
export default App;

