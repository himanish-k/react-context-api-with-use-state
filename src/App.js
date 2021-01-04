import { createContext, useState } from 'react'
import './App.css';

const MyContext = createContext(null);

function App() {
  const [color, changeColor] = useState('red');

  return (
    <div className="App">
      <MyContext.Provider value={{
        font: 'serif',
        color,
        changeColor
      }}>
        <>
          <Paragraph />
          <ChangeColorButton />
        </>
      </MyContext.Provider>
    </div>
  );
}

function Paragraph() {
  return (
    <MyContext.Consumer>
      {({ font, color }) => <p style={{ font, color }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu tellus, fermentum vel nibh eget.</p>}
    </MyContext.Consumer>
  )
}

function ChangeColorButton() {
  return (
    <MyContext.Consumer>
      {({color, changeColor}) => <button onClick={() => changeColor(color == 'red' ? 'blue' : 'red')}>Change Color</button>}
    </MyContext.Consumer>  
  )
}
export default App;
