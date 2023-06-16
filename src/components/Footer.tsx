import {
  cibFacebookF,
  cibInstagram,
  cibLinkedin,
  cibTwitter,
  cibYoutube,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import Logo from "./icons/Logo";

export default function Footer() {
  return (
    <footer className="max-w-6xl w-full mx-auto text-zinc-950 bottom-0 px-6 py-10">
      <section className="flex justify-between gap-4 flex-wrap">
        <div>
          <div className="flex items-center gap-2">
            <Logo color="black" />
            <p className="font-semibold text-lg">MoveStore</p>
          </div>
          <p className="mt-2 mb-5 text-sm text-zinc-500">
            Sua melhor opção de compra online.
            <br />© 2023 MoveStore Inc.
          </p>
          <div className="flex gap-3">
            <span className="footerIconBtn">
              <CIcon icon={cibFacebookF} size="sm" className="footerIcon" />
            </span>
            <span className="footerIconBtn">
              <CIcon icon={cibTwitter} size="sm" className="footerIcon" />
            </span>
            <span className="footerIconBtn">
              <CIcon icon={cibLinkedin} size="sm" className="footerIcon" />
            </span>
            <span className="footerIconBtn">
              <CIcon icon={cibInstagram} size="sm" className="footerIcon" />
            </span>
            <span className="footerIconBtn">
              <CIcon icon={cibYoutube} size="sm" className="footerIcon" />
            </span>
          </div>
        </div>
        <div className="text-zinc-500 text-sm flex gap-4 flex-wrap">
          <div>
            <h5 className="text-zinc-950 text-base font-semibold">
              Conheça-nos
            </h5>
            <p>Informações corporativas</p>
            <p>Carreiras</p>
            <p>Comunicados à imprensa</p>
            <p>Comunidade</p>
            <p>Acessibilidade</p>
          </div>
          <div>
            <h5 className="text-zinc-950 text-base font-semibold">Contato</h5>
            <p>contato@movestore.com</p>
            <p>tel.: (11) 5000-1234</p>
          </div>
        </div>
      </section>
      <p className="text-sm text-zinc-500 text-center mt-2">
        Feito por{" "}
        <a
          href="https://github.com/david-sfernandes"
          className="text-zinc-700 underline hover:text-blue-700"
        >
          David S.
        </a>{" "}
        🧡
      </p>
    </footer>
  );
}
