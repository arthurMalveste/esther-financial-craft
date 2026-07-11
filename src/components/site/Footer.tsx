import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-navy-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h3 className="mb-4 text-sm font-bold tracking-wider text-white">MAPA DO SITE</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <Link to="/" className="transition hover:text-brand-orange">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/servicos/$slug"
                params={{ slug: "credito-estruturacao" }}
                className="transition hover:text-brand-orange"
              >
                Crédito e Estruturação
              </Link>
            </li>
            <li>
              <Link
                to="/servicos/$slug"
                params={{ slug: "mercado-financeiro" }}
                className="transition hover:text-brand-orange"
              >
                Mercado Financeiro
              </Link>
            </li>
            <li>
              <Link
                to="/servicos/$slug"
                params={{ slug: "protecao-blindagem" }}
                className="transition hover:text-brand-orange"
              >
                Proteção e Blindagem
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="transition hover:text-brand-orange">
                Sobre mim
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold tracking-wider text-white">
            CANAIS DE COMUNICAÇÃO
          </h3>
          <a
            href="mailto:contato@esthermonteiro.com.br"
            className="text-sm text-white/70 transition hover:text-brand-orange"
          >
            contato@esthermonteiro.com.br
          </a>
          <div className="mt-4 flex gap-3">
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 transition hover:bg-brand-orange"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 transition hover:bg-brand-orange"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold tracking-wider text-white">
            RAZÃO SOCIAL · CNPJ
          </h3>
          <p className="text-sm text-white/70">
            Esther Monteiro Consultoria e Financiamentos LTDA
          </p>
          <p className="mt-2 text-sm text-white/70">© 2026 Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
