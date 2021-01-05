import { useContext, useState } from 'react'
import MyContext from './MyContext'
import AClassComponent from './AClassComponent';
import './App.css';

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
          <AnotherParagraph />
          <AClassComponent />
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

function AnotherParagraph() {
  const { font, color } = useContext(MyContext);

  return (
    <p style={{ font, color }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ut a ipsum nec magna maximus dapibus in sit amet velit.
      Curabitur sed enim pharetra, dictum velit dictum, aliquam massa. Quisque tempor urna vitae scelerisque lacinia.
      Sed sed rhoncus neque, vel tempus enim. Sed a metus placerat, euismod massa vitae, cursus felis.
    </p>
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
