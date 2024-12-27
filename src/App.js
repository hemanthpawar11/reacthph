import logo from './logo.svg';
import './App.css';
import Navbar from './navba';

function App() {
  const mydata={"name":"sahil","age":23,"gender":"male"}
  return (
    <div className="App">
      <header className="App-header">
       
        <Navbar/>
        
      </header>
    <ul> name: {mydata.name}</ul>
     <l1>age:{mydata.age}</l1>
     <p>gender:{mydata.gender}</p>
    </div>
  );
}

export default App;
