import {
  CheckBadgeIcon,
  CreditCardIcon,
  PresentationChartLineIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function Guarantees() {
  return (
    <section className="my-20">
      <h2 className="sectionTitle text-center">Por que nos escolher?</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-20 flex-wrap justify-evenly text-zinc-900 mx-auto">
        <div className="w-2/3 mx-auto">
          <div className="GuaranteeIconBox">
            <PresentationChartLineIcon className="GuaranteeIcon" />
          </div>
          <h3 className="GuaranteeTitle">Entrega grátis</h3>
          <p className="GuaranteeText">
            Entrega grátis para todos os produtos para todo o Brasil
          </p>
        </div>
        <div className="w-2/3 mx-auto">
          <div className="GuaranteeIconBox bg-yellow-200">
            <CreditCardIcon className="GuaranteeIcon text-orange-400" />
          </div>
          <h3 className="GuaranteeTitle">Flexibilidade</h3>
          <p className="GuaranteeText">
            Pagamento flexivel, com parcelas em até 12x sem juros
          </p>
        </div>
        <div className="w-2/3 mx-auto">
          <div className="GuaranteeIconBox">
            <ShieldCheckIcon className="GuaranteeIcon" />
          </div>
          <h3 className="GuaranteeTitle">Segurança garantida</h3>
          <p className="GuaranteeText">
            Sistema de pagamento seguro e garantia do seu dinheiro de volta
          </p>
        </div>
        <div className="w-2/3 mx-auto">
          <div className="GuaranteeIconBox">
            <CheckBadgeIcon className="GuaranteeIcon" />
          </div>
          <h3 className="GuaranteeTitle">Alta qualidade</h3>
          <p className="GuaranteeText">
            Anos de experiência em confecção de movéis de alta qualidade
          </p>
        </div>
      </div>
    </section>
  );
}
