export default function Order() {
  return (
    <div className="roundedCard">
      <table className="w-full">
        <tbody>
        <tr>
          <td>PEDIDO REALIZADO</td>
          <td>TOTAL</td>
          <td>PEDIDO nº01</td>
        </tr>
        <tr>
          <td>19 de abril de 2023</td>
          <td>R$10.000,00</td>
          <td className="text-sm">Status: CONFIRMADO</td>
        </tr>
        <tr>
        </tr>
        </tbody>
      </table>
      <button className="outlineRedBtn my-auto">Cancelar</button>
    </div>
  )
}