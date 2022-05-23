import './App.scss';
import { Container } from './components/container/Container';
import Chart from '../src/components/chart/Chart';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      {/* <Container /> */}
      <Routes>
        <Route  path='/' element={<Container />}/>
        <Route  path='/chart' element={<Chart />}/>
      </Routes>
    </div>
  );
}

export default App;
