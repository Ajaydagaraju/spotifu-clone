import './App.css';
import { LeftMenu } from './Component/LeftMenu';
import { MainContainer } from './Component/MainContainer';
import { RightMenu } from './Component/RightMenu';

function App() {
  return (
    <div className="App">
      <LeftMenu />
      <MainContainer/>
      <RightMenu/>

      <div className="background"></div>

    </div>
  );
}

export default App;
