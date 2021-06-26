import logo from './logo.svg';
import './App.css';
import Header from "./myComp/header";
import {Footer} from "./myComp/Footer";
import {Todoslist} from "./myComp/Todos";
function App() {
  let todo=[
    {
      sno:1,
      title:"Sweetilicious",
      desc:"sweets for all lovely people "
    },
    {
      sno:1,
      title:"Bakery",
      desc :"cake and bakery section for your beautiful smile"
    },
    {
      sno:1,
      title:"Crispy n crunchy",
      desc:"Add some crisp in your life and make it crunchyyy "
    },
]
  return (
    <>
    <Header title="Geo_LOC" searchBar={true}/>
   
    <Footer/>


    </>
    
  );
}

export default App;
