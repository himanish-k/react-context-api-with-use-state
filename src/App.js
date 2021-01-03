import { createContext } from 'react'
import './App.css';

const MyContext = createContext(null);

function App() {
  return (
    <div className="App">
      <MyContext.Provider value={{ font: 'serif', color: 'red' }}>
          <Paragraph />
      </MyContext.Provider>
    </div>
  );
}

function Paragraph() {
  return (
    <MyContext.Consumer>
      {(context) => <p style={context}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu tellus, fermentum vel nibh eget.</p>}
    </MyContext.Consumer>
  )
}

export default App;
