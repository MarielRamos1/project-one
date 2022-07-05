import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailCointainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/itemListContainer';

function App() {

  return (
    <div className='App'>
        <NavBar/>
        {/*<ItemListContainer greeting="Welcome!"/>*/}
        <ItemDetailCointainer/>
    </div>
  );
}

export default App;
