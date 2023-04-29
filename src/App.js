import React from 'react';

import {
  Container,
  Image,
  ContainerItens,
  H1,
  Label,
  Input,
  Button,
} from './styles.js';

export default function App() {
  return (
    <Container>
      <Image></Image>
      <ContainerItens>
        <H1>Olá!</H1>

        <Label>Nome</Label>
        <Input placeholder="Nome"></Input>

        <Label>Idade</Label>
        <Input placeholder="Idade"></Input>

        <Button>Cadastrar</Button>

      </ContainerItens>
    </Container>
  );
}
