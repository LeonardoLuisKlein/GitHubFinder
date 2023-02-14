import * as C from './styles'
import React from 'react'

export const Infos = () => {
  return (
    <C.Container>
      <C.Title>Nome</C.Title>
      <C.imageCard />
      <div id="Place">
        <C.Text>Localização:</C.Text>
        <C.Text>Local</C.Text>
      </div>
      <div id="Folow">
        <div className='card'>
          <C.SubText>Seguindo</C.SubText>
          <C.SubText>25</C.SubText>
        </div>
        <div className='card'>
          <C.SubText>Seguidores</C.SubText>
          <C.SubText>25</C.SubText>
        </div>
      </div>
      <C.repButton>Ir para o repositório</C.repButton>
    </C.Container>
  )
}
