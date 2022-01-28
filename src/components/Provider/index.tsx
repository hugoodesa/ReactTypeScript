import * as React from "react";
import { Negociacao } from "../../models/negociacao";
import { NegociacaoController } from "../../models/negociacaoController";

const negociacoes: Negociacao[] = [
  new Negociacao(new Date(), 1, 100, "teste 1"),
  new Negociacao(new Date(), 2, 200, "teste 2"),
  new Negociacao(new Date(), 3, 300, "teste 3"),
  new Negociacao(new Date(), 4, 400, "teste 4"),
];

const negociacaoController = new NegociacaoController(negociacoes);

export const negociacoesContext: any = React.createContext({});

const NegociacoesProvider = ({ children }) => {
  const [negociacoesState, setNegociacoesState] = React.useState(
    negociacaoController._negociacoes
  );

  const handleNegociacoesState = (negociacao: Negociacao): void => {
    const novoEstado = [...negociacoesState];
    novoEstado.push(negociacao);

    negociacaoController.adicionarNegociacao(negociacao);
    setNegociacoesState(novoEstado);
  };

  return (
    <negociacoesContext.Provider
      value={{ negociacoesState, handleNegociacoesState }}
    >
      {children}
    </negociacoesContext.Provider>
  );
};

export default NegociacoesProvider;
