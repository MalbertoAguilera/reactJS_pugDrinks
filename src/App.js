import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar"; 


function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting = "Hola coders"/>
    </div>
  );
}

export default App;
