import Product from './Components/Product';
import './App.css';

function App() {
  return (
    <div className="App">
            <Product products={[{no:"1",name:"iPhone", price:"100000", img:"phone.jpg"},{no:"2",name:"Car", price:"1500000", img:"kia.jpg"}]}/>
    </div>
  );
}

export default App;
