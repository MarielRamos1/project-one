import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/itemListContainer';

function App() {

  return (
    <div className='App'>
        <NavBar/>
        <ItemListContainer greeting="Welcome!"/>
    </div>
  );
}

export default App;
