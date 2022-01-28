import "./App.css";
import { ContainerBody, Container, Form, Input, Button } from "./components/UI";
import { GlobalStyled } from "./components/GlobalStyled";
import TabelaNegociacoes from "./components/TabelaNegociacoes";
import NegociacoesProvider from "./components/Provider";

function App() {
  return (
    <ContainerBody>
      <GlobalStyled />
      <Container>
        <NegociacoesProvider>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Input type="number" placeholder="Data" />
            <Input type="number" placeholder="Preco" />
            <Input type="number" placeholder="Quantidade" />
            <Button>Adicionar negociacao</Button>
          </Form>
          <TabelaNegociacoes />
        </NegociacoesProvider>
      </Container>
    </ContainerBody>
  );
}

export default App;
