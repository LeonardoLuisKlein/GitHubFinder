import { useState, KeyboardEvent } from 'react'
import * as C from './styles'
import { BsSearch } from "react-icons/bs"

type SearchProps = {
  loadUser: (userName: string) => Promise<void>
}

export const Search = ({loadUser}: SearchProps) => {

const [userName, setUserName] = useState("")

const handleKeyDown = (e: KeyboardEvent) => {
  if(e.key === "Enter"){
    loadUser(userName)
  }
}

  return (
    <C.Container>
      <C.Title>Busque por um usuário</C.Title>
      <C.Subtitle>Conheça seu perfil e seu repositório no GitHub</C.Subtitle>
      <C.SearchArea>
        <input 
        type="text" 
        placeholder='Digite o nome do usuário' 
        onChange={(e) => setUserName(e.target.value)} 
        onKeyDown={handleKeyDown}/>
        <button onClick={() => loadUser(userName) }><BsSearch /></button>
      </C.SearchArea>
    </C.Container>
  )
}
