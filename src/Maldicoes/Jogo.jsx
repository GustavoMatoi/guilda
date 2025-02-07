import React from 'react'

export default function Maldicao(props) {
  return (
    <div>
      <p>Nome: {props.nome}</p>
      <p>Nível: {props.nivel}</p>
      <p>Temática: {props.tematica}</p>
    </div>
  )
}



