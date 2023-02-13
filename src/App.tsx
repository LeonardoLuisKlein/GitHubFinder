import * as C from './App.styles'
import { Search } from './components/Search';

function App() {
  return (
    <C.Container>
      <C.Header>GitHub Finder </C.Header>
      <C.Area>
        <Search />
      </C.Area>
    </C.Container>
  );
}

export default App;
