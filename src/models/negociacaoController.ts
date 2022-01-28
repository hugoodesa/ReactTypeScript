import { Negociacao } from "./negociacao";

export class NegociacaoController {
  public readonly _negociacoes: Negociacao[];

  constructor(negociacoes: Negociacao[]) {
    this._negociacoes = negociacoes;
  }

  private isDataValida = (data: Date): boolean => {
    let isValida = false;

    if (new Date().getMilliseconds() <= data.getMilliseconds()) {
      isValida = false;
    }

    return isValida;
  };

  private isNegociacaoValidaNegociacao(
    data: Date,
    preco: number,
    quantidade: number
  ): boolean {
    const isNegociacaoValida = true;

    return isNegociacaoValida;
  }

  public criarNegociacao(
    data: Date,
    preco: number,
    quantidade: number,
    descricao: string
  ): Negociacao {
    return new Negociacao(data, preco, quantidade, descricao);
  }

  public adicionarNegociacao(negociacao: Negociacao) {
    this._negociacoes.push(negociacao);
  }
}
