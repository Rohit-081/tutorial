import logo from './logo.svg';
import './App.css';
import Greet from '../src/components/Greet'
import Welcome from '../src/components/Welcome'
import Message from '../src/components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      <EventBind />
     {/*  <Greet name="Bruce" heroname="batman"><p>
       This is a child props.</p></Greet>
     <Greet name="Clark" heroname="comman man"/>
     <Greet name="Diana" heroname="wonder woman" />
     <Welcome name="Bruce" heroname="batman" />
     <Message /> 
     <Counter /> */}
    </div>
  );
}

export default App;
