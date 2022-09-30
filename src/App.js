import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.min.css';
// import router from './core/router';
import Router from './core/router';

function App() {
  return (
    <div style={{padding: '10px'}}className="App rem-pad-width">
      <Router />
    </div>
  );
}

export default App;
