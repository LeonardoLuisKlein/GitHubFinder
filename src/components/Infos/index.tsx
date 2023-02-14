import * as C from './styles'
import React from 'react'
import { UserProps } from '../../types/user'

export const Infos = ({login, avatar_url, location, following, followers}: UserProps) => {
  return (
    <C.Container>
      <C.Title>{login}</C.Title>
      <img src={avatar_url} alt={login}/>
      <div id="Place">
        <C.Text>Localização:</C.Text>
        <C.Text>{location}</C.Text>
      </div>
      <div id="Folow">
        <div className='card'>
          <C.SubText>Seguindo</C.SubText>
          <C.SubText>{following}</C.SubText>
        </div>
        <div className='card'>
          <C.SubText>Seguidores</C.SubText>
          <C.SubText>{followers}</C.SubText>
        </div>
      </div>
      <a>Ir para o repositório</a>
    </C.Container>
  )
}
