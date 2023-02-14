import { useState } from 'react'
import { UserProps } from './types/user';
import * as C from './App.styles'
import { Infos } from './components/Infos';
import { Search } from './components/Search';

function App() {

    const [user, setUser] = useState<UserProps | null>(null);
  
    const loadUser = async(userName: string) => {
      const res = await fetch(`https://api.github.com/users/${userName}`)
  
      const data = await res.json()
  
      const {avatar_url, login, location, followers, following} = data

      const userData: UserProps = {
        avatar_url,
        login,
        location,
        followers,
        following
      }

      setUser(userData)
    }


  return (
    <C.Container>
      <C.Header>GitHub Finder </C.Header>
      <C.Area>
        <Search loadUser={loadUser}/>
        {user && <Infos {...user}/>}
      </C.Area>
    </C.Container>
  );
}

export default App;
