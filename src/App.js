import './App.css';
import MyButton from './components/MyButton/MyButton';
import PeopleComponent from './components/PeopleComponent/PeopleComponent';

function App() {
  return (
    <div className='App'>
      <MyButton>
        <h1>halikaa</h1>
        <p>sziustok</p>
      </MyButton>
      <PeopleComponent />
    </div>
  );
}

export default App;
