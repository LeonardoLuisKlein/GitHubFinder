import * as C from './App.styles'
import { Infos } from './components/Infos';
import { Search } from './components/Search';

function App() {
  return (
    <C.Container>
      <C.Header>GitHub Finder </C.Header>
      <C.Area>
        <Search />
        <Infos />
      </C.Area>
    </C.Container>
  );
}

export default App;
