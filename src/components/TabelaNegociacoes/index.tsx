import moment from "moment";
import { useContext } from "react";
import { Negociacao } from "../../models/negociacao";
import { negociacoesContext } from "../Provider";
import { Table, TDthead, THead, TRbody, TRfoot, TDtotais } from "../UI";

const TRtable = ({ negociacao }) => {
  const obj = JSON.parse(negociacao);

  return (
    <TRbody>
      <td>{moment(obj.data).format("DD/MM/yyyy")}</td>
      <td>{obj._preco}</td>
      <td>{obj._quantidade}</td>
      <td>R$ {obj._quantidade * obj._preco}</td>
      <td>{obj._observacao}</td>
    </TRbody>
  );
};

const CorpoTabela = () => {
  const { negociacoesState } = useContext(negociacoesContext);

  return (
    <tbody>
      {negociacoesState.map((n: Negociacao, index: number) => (
        <TRtable negociacao={JSON.stringify(n)} key={index} />
      ))}
    </tbody>
  );
};

const CabecalhoTabela = () => (
  <THead>
    <tr>
      <TDthead>Data</TDthead>
      <TDthead>Preco</TDthead>
      <TDthead>Quantidade</TDthead>
      <TDthead>Total</TDthead>
      <TDthead>Observação</TDthead>
    </tr>
  </THead>
);

const RodapeTabela = () => {
  const { negociacoesState } = useContext(negociacoesContext);
  const negociacaoTotalizar: Negociacao = new Negociacao(new Date(), 0, 0, "");

  const calcularTotaisNegociacoes = (): Negociacao => {
    const negociacaoTotalizada = negociacoesState.reduce(
      (acc: Negociacao, next: Negociacao) => {
        acc.quantidade += next.quantidade;
        acc.total += next.total;

        return acc;
      },
      negociacaoTotalizar
    );
    return negociacaoTotalizada;
  };

  const { quantidade, total } = calcularTotaisNegociacoes();

  return (
    <tfoot>
      <TRfoot>
        <TDtotais>Totais :</TDtotais>
        <td></td>
        <td>{quantidade}</td>
        <td> R$ {total}</td>
      </TRfoot>
    </tfoot>
  );
};

const TabelaNegociacoes = () => {
  return (
    <Table>
      <CabecalhoTabela />
      <CorpoTabela />
      <RodapeTabela />
    </Table>
  );
};

export default TabelaNegociacoes;
