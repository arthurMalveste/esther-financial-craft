import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ContactSection } from "@/components/site/ContactSection";
import servicoBg from "@/assets/servico-bg.jpg";

const servicos: Record<string, { title: string; body: string[] }> = {
  "credito-estruturacao": {
    title: "CRÉDITO E ESTRUTURAÇÃO",
    body: [
      "Consórcios pensados para a aquisição de imóveis, veículos, máquinas e formação de patrimônio, sempre de acordo com o perfil e os objetivos de cada cliente.",
      "Busca e estruturação de alternativas de financiamento para aquisição, expansão e realização de projetos pessoais ou empresariais, incluindo a análise de possibilidades para capital de giro, investimentos e utilização estratégica de ativos e garantias.",
      "As soluções são construídas de forma personalizada. Aprovação de crédito, taxas, prazos, garantias e contemplação dependem das regras, análises e condições de cada instituição ou grupo — por isso, cada atendimento é avaliado individualmente.",
    ],
  },
  "mercado-financeiro": {
    title: "MERCADO IMOBILIÁRIO",
    body: [
      "Além da estruturação de crédito, Esther Monteiro atua na corretagem de imóveis de alto padrão, reunindo sua experiência como consultora e analista de crédito à identificação de boas oportunidades para cada cliente.",
      "O atendimento abrange pessoas físicas, empresários e clientes do agronegócio interessados em aquisição, investimento ou diversificação patrimonial por meio de imóveis.",
      "Por entender a estrutura completa de uma venda — do crédito à documentação —, Esther acompanha o cliente com uma visão que vai além da simples intermediação imobiliária.",
    ],
  },
  "protecao-blindagem": {
    title: "PROTEÇÃO E BLINDAGEM",
    body: [
      "Estratégias de organização, proteção e sucessão do patrimônio, com apoio jurídico e contábil especializado quando necessário.",
      "A blindagem patrimonial envolve diagnóstico, organização societária, planejamento patrimonial e sucessório — sempre com suporte jurídico e contábil nas etapas em que for necessário.",
      "O objetivo é dar mais segurança e previsibilidade para pessoas físicas e empresários que desejam organizar e proteger o patrimônio construído ao longo dos anos.",
    ],
  },
};

export const Route = createFileRoute("/servicos/$slug")({
  loader: ({ params }) => {
    const s = servicos[params.slug];
    if (!s) throw notFound();
    return s;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Serviço"} — Esther Monteiro` },
      {
        name: "description",
        content: loaderData?.body[0]?.slice(0, 155) ?? "Serviços de consultoria financeira.",
      },
    ],
  }),
  component: ServicoPage,
});

function ServicoPage() {
  const data = Route.useLoaderData();

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${servicoBg})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto flex min-h-[380px] max-w-7xl items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-center text-3xl font-extrabold tracking-tight text-brand-orange sm:text-4xl md:text-5xl lg:text-6xl">
            {data.title}
          </h1>
        </div>
      </section>

      {/* CORPO */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl space-y-6 px-4 text-neutral-700 leading-relaxed sm:px-6 lg:px-8">
          {data.body.map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <ContactSection />
    </SiteLayout>
  );
}
