import logo from './logo.svg';
import './App.css';
import Greet from '../src/components/Greet'
import Welcome from '../src/components/Welcome'
import Message from '../src/components/Message'

function App() {
  return (
    <div className="App">
     <Greet name="Bruce" heroname="batman"><p>
       This is a child props.</p></Greet>
     <Greet name="Clark" heroname="comman man"/>
     <Greet name="Diana" heroname="wonder woman" />
     <Welcome name="Bruce" heroname="batman" />
     <Message />
    </div>
  );
}

export default App;
