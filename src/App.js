import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const members = ["Azgor","Rafi Khan","Ajmir","Krim"];
  const products = [
    {name:'Photoshop', price:'$90.22'},
    {name:'Illustrator', price:'$50.22'},
    {name:'Adobe XD', price:'$20.55'}
  ];
  const friends=[
    {noun:'Roton dor', id:122},
    {noun:'Limon roy', id:133},
    {noun:'Halima l', id:144},
    {noun:'Akash k', id:155},
    {noun:'Asan ulla', id:166},
    {noun:'Abul Khan', id:177}
  ]
  var person2 = {
    name:"kamal",
    last:"Basar"
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>First Website</h1>
        <Counter></Counter>
        <Users></Users>
        <p style={{color:'white', backgroundColor:"grey"}}>Singer: {person2.name +" "+person2.last}</p>  
        <ul>
          {friends.map(friend=><li>{friend.noun}</li>)}
        </ul>
        
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
       <Person name1={members[0]} job="Robi"></Person>
       <Person name1={members[1]} job="Airtel"></Person>
       {
          friends.map(fData=><Friend friend={fData}></Friend>)
        }
      </header>
    </div>
  );
}

function Friend(props) {
  const {noun, id} = props.friend;
  return (
    <div style={{ border:'3px dotted white', height:'150px', width:'300px', margin:'10px'}}>
      <h3>Name: {noun}</h3>
      <p>ID: {id}</p>
    </div>
  );
}

function Product(props){
  const productStyle = {
    height:'250px',
    width:'220px',
    margin:'5px',
    backgroundColor:'lightblue',
    borderRadius:'10px',
    float:'left'
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h4>{price}</h4>
      <button>Bye Now</button>
    </div>
  )
}

function Person(props){
  return (
    <div style={{border:"2px solid red", width:"400px", margin:"10px"}}>
      <h2>Name: {props.name1}</h2>
      <p>Company: {props.job}</p>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(6);
  const handleIncrease = ()=> setCount(count-1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Decrease</button>
      <button onPointerLeave={()=> setCount(count+1)}>Increase</button>
    </div>
  )
}
function Users(){
  const [users, setUser ]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(userData=> setUser(userData));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
        users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
export default App;
