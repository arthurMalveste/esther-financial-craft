import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre mim" },
];

const servicos = [
  { slug: "credito-estruturacao", label: "Crédito e Estruturação" },
  { slug: "mercado-financeiro", label: "Mercado Imobiliário" },
  { slug: "protecao-blindagem", label: "Proteção e Blindagem" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto grid min-h-20 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center justify-self-start" aria-label="Esther Monteiro – Consórcios e Financiamentos">
          <img src={logo} alt="Esther Monteiro – Consórcios e Financiamentos" className="h-14 w-auto sm:h-16 lg:h-20" />
        </Link>

        <nav className="hidden items-center justify-center gap-10 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-semibold text-neutral-800 transition-colors hover:text-brand-orange"
              activeProps={{ className: "text-brand-orange" }}
              activeOptions={{ exact: true }}
            >
              {item.label}
            </Link>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-semibold text-neutral-800 transition-colors hover:text-brand-orange">
              Serviços <ChevronDown className="h-4 w-4" />
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3">
                <div className="rounded-xl border border-black/5 bg-white p-2 shadow-xl">
                  {servicos.map((s) => (
                    <Link
                      key={s.slug}
                      to="/servicos/$slug"
                      params={{ slug: s.slug }}
                      className="block rounded-lg px-3 py-2 text-sm text-neutral-700 transition hover:bg-brand-peach/30 hover:text-brand-orange"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center justify-end gap-3">
          <a
            href="#contato"
            className="hidden rounded-lg bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 sm:inline-flex"
          >
            Entre em contato
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 text-neutral-800 lg:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white lg:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-100"
              >
                {item.label}
              </Link>
            ))}
            <div className="px-3 py-2 text-xs font-bold uppercase text-neutral-500">
              Serviços
            </div>
            {servicos.map((s) => (
              <Link
                key={s.slug}
                to="/servicos/$slug"
                params={{ slug: s.slug }}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-6 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
              >
                {s.label}
              </Link>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-lg bg-brand-orange px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Entre em contato
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
