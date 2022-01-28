export class Negociacao {
  private readonly _data: Date;
  private readonly _preco: number;
  private _quantidade: number;
  private readonly _observacao: string;
  private _total: number;

  constructor(
    data: Date,
    preco: number,
    quantidade: number,
    observacao: string
  ) {
    this._data = data;
    this._preco = preco;
    this._quantidade = quantidade;
    this._observacao = observacao;
    this._total = preco * quantidade;
  }

  public get data() {
    return this._data.toLocaleString("pt-BR");
  }

  public get preco() {
    return this._preco;
  }

  public get quantidade() {
    return this._quantidade;
  }

  public set quantidade(valor: number) {
    this._quantidade = valor > 0 ? valor : this._quantidade;
  }

  public get observacao() {
    return this._observacao;
  }

  public get total() {
    return this._total;
  }

  public set total(valor: number) {
    this._total = valor > 0 ? valor : this._total;
  }
}
