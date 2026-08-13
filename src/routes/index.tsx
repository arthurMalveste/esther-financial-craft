import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ContactSection } from "@/components/site/ContactSection";
import estherHero from "@/assets/esther-hero.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import officeImg from "@/assets/office.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const stats = [
  { value: "+15", label: "em anos de experiência" },
  { value: "+500", label: "em operações estruturadas" },
  { value: "+R$1B", label: "em crédito viabilizado" },
  { value: "+120", label: "em clientes atendidos" },
];

const servicos = [
  {
    slug: "credito-estruturacao",
    title: "Crédito e Estruturação Financeira",
    desc: "Consórcios, financiamentos e levantamento de capital para aquisição de imóveis, veículos, máquinas e expansão de negócios, sempre alinhados ao perfil e aos objetivos de cada cliente.",
  },
  {
    slug: "mercado-financeiro",
    title: "Mercado Imobiliário",
    desc: "Corretagem de imóveis de alto padrão, unindo a análise de crédito da Esther à identificação de boas oportunidades para pessoas físicas, empresários e clientes do agronegócio.",
  },
  {
    slug: "protecao-blindagem",
    title: "Proteção e Blindagem",
    desc: "Estratégias de organização, proteção e sucessão do patrimônio, com apoio jurídico e contábil especializado quando necessário.",
  },
];

const beneficios = [
  "Otimização de capital",
  "Visão estratégica de longo prazo",
  "Segurança jurídica",
  "Análise comparativa entre múltiplas instituições",
  "Gestão integral até a liberação dos recursos",
];

const metodologia = [
  {
    title: "Diagnóstico Profundo",
    desc: "Escuta atenta do momento do cliente, seguida de um diagnóstico completo da situação financeira e patrimonial.",
  },
  {
    title: "Planejamento Personalizado",
    desc: "Construção da estratégia mais adequada ao perfil, aos objetivos e ao momento de cada cliente.",
  },
  {
    title: "Execução Técnica",
    desc: "Comparação entre possibilidades, instituições e produtos, com organização documental completa do processo.",
  },
  {
    title: "Acompanhamento Contínuo",
    desc: "Acompanhamento próximo até a conclusão, com orientação sobre os próximos passos.",
  },
];

const diferenciais = [
  "Atendimento próximo e personalizado, em um mercado cada vez mais automatizado por bancos e plataformas digitais.",
  "Mais de 15 anos de experiência como consultora e analista de crédito, com domínio de toda a estrutura de uma venda.",
  "Uma carteira construída por clientes que voltam a fazer negócio e indicam novos clientes.",
  "Acompanhamento em cada etapa, da análise inicial até a conclusão do processo.",
];

const depoimentos = [
  {
    quote:
      "Uma família que deseja planejar a compra de um imóvel sem assumir uma decisão apressada — e por isso busca entender antes todas as possibilidades de consórcio.",
    name: "Exemplo simulado",
    role: "Planejamento de consórcio",
  },
  {
    quote:
      "Uma empresa que precisa adquirir uma máquina e quer comparar prazo, parcela, garantia e impacto no caixa antes de fechar o financiamento.",
    name: "Exemplo simulado",
    role: "Estruturação de financiamento",
  },
  {
    quote:
      "Uma família empresária que deseja organizar bens, sociedade e sucessão com planejamento e apoio jurídico especializado.",
    name: "Exemplo simulado",
    role: "Blindagem patrimonial",
  },
];

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-navy-deep">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-deep via-brand-navy-deep/85 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-orange">
              Início
            </p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Soluções financeiras pensadas para cada momento da sua vida e do seu negócio.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80">
              Consórcios, financiamentos, levantamento de capital e blindagem patrimonial
              com atendimento próximo, estratégia e acompanhamento em cada etapa.
            </p>
            <div className="mt-7">
              <Link
                to="/sobre"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:opacity-90"
              >
                Saiba mais <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-2xl shadow-black/40">
              <img
                src={estherHero}
                alt="Esther Monteiro"
                className="h-[340px] w-[280px] object-cover sm:h-[420px] sm:w-[340px]"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="relative border-t border-white/10 bg-brand-navy-deep/90">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-white/10 px-4 sm:px-6 md:grid-cols-4 md:divide-x lg:px-8">
            {stats.map((s, i) => (
              <div key={i} className="py-8 text-center">
                <div className="text-3xl font-extrabold text-white sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/60">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-brand-orange sm:text-4xl">
            SERVIÇOS
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-600">
            Consórcios, financiamentos e proteção patrimonial com técnica, segurança
            jurídica e acompanhamento em cada etapa.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {servicos.map((s) => (
              <div
                key={s.slug}
                className="flex flex-col rounded-2xl bg-brand-peach/50 p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-center text-lg font-bold text-brand-orange">
                  {s.title}
                </h3>
                <p className="mt-4 flex-1 text-center text-sm leading-relaxed text-neutral-700">
                  {s.desc}
                </p>
                <Link
                  to="/servicos/$slug"
                  params={{ slug: s.slug }}
                  className="mt-6 text-center text-xs font-bold uppercase tracking-wider text-brand-orange transition hover:opacity-70"
                >
                  + Saiba mais
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIS DO QUE CRÉDITO */}
      <section className="border-t border-neutral-100 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-xl font-extrabold text-neutral-900 sm:text-2xl">
            MAIS DO QUE CRÉDITO, ESTHER ESTRUTURA DECISÕES FINANCEIRAS
          </h2>
          <p className="mt-2 text-center text-sm text-neutral-600">
            Cada operação é conduzida com:
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {beneficios.map((b) => (
              <div key={b} className="flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-brand-orange" strokeWidth={3} />
                <span className="text-sm font-medium text-neutral-800">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METODOLOGIA */}
      <section className="bg-brand-navy-deep py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            METODOLOGIA ESTRATÉGICA
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {metodologia.map((m) => (
              <div key={m.title} className="rounded-2xl bg-brand-slate p-6 text-white">
                <h3 className="text-center text-lg font-bold">{m.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <img
            src={officeImg}
            alt="Escritório"
            className="w-full rounded-2xl object-cover shadow-md"
            loading="lazy"
          />
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-orange sm:text-4xl">
              DIFERENCIAIS
            </h2>
            <ul className="mt-6 space-y-4">
              {diferenciais.map((d, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" strokeWidth={3} />
                  <span className="text-sm text-neutral-700">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-3xl text-center text-lg font-bold text-neutral-900 sm:text-xl">
            Veja como cada situação pode ser conduzida — exemplos ilustrativos, sem
            compromisso com resultado
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {depoimentos.map((d, i) => (
              <div
                key={i}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm leading-relaxed text-neutral-700">"{d.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-orange to-brand-peach text-sm font-bold text-white">
                    {d.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-neutral-900">{d.name}</div>
                    <div className="text-xs text-neutral-500">{d.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </SiteLayout>
  );
}
