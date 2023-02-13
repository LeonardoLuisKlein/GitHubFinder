import React from 'react'
import * as C from './styles'
import { BsSearch } from "react-icons/bs"

export const Search = () => {
  return (
    <C.Container>
      <C.Title>Busque por um usuário</C.Title>
      <C.Subtitle>Conheça seu perfil e seu repositório no GitHub</C.Subtitle>
      <C.SearchArea>
        <C.SearchBar type="text" placeholder='Digite o nome do usuário' />
        <C.SearchButton><BsSearch /></C.SearchButton>
      </C.SearchArea>
    </C.Container>
  )
}
