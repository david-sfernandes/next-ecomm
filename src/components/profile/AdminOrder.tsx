import { useState } from "react";

export default function AdminOrder() {
  const [disable, setDisable] = useState(true);

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
          <td>
            <select name="status" onInput={() => setDisable(false)}>
              <option value="CONFIRMED">COMFIRMADO</option>
              <option value="SHIPPING">EM TRANSITO</option>
              <option value="DELIVERED">EMTREGUE</option>
              <option value="CANCELED">CANCELADO</option>
            </select>
          </td>
        </tr>
        <tr>
        </tr>
        </tbody>
      </table>
      <button className="submitBtn my-auto" disabled={disable} >Salvar</button>
    </div>
  )
}