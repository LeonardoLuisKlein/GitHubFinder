import { useState } from 'react'
import { UserProps } from './types/user';
import * as C from './App.styles'
import { Infos } from './components/Infos';
import { Search } from './components/Search';
import { Error } from './components/Error';
import { Loader } from './components/Loader';

function App() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false)
  const [loader, setLoader] = useState(false)

  const loadUser = async (userName: string) => {
    setError(false)
    setUser(null)
    setLoader(true)
    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data = await res.json()
    if (res.status === 404) {
      setError(true)
      setLoader(false)
      return
    }

    const { avatar_url, login, location, followers, following } = data

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following
    }

    setLoader(false)
    setUser(userData)
  }


  return (
    <C.Container>
      <C.Header>GitHub Finder </C.Header>
      <C.Area>
        <Search loadUser={loadUser} />
        {user && <Infos {...user} />}
        {error && <Error />}
        {loader && <Loader />}
      </C.Area>
    </C.Container>
  );
}

export default App;
