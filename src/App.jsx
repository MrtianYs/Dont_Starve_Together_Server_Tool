import './App.css';
import Layouts from './common/components/layout/layout'

function App(props) {
  return (
    <div className="App">
      <Layouts route={props.route} />
    </div>
  );
}

export default App;
