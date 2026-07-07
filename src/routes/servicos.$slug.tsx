import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ContactSection } from "@/components/site/ContactSection";
import servicoBg from "@/assets/servico-bg.jpg";

const servicos: Record<string, { title: string; body: string[] }> = {
  "credito-estruturacao": {
    title: "CRÉDITO E ESTRUTURAÇÃO",
    body: [
      "Aliquam auctor malesuada morbi quis. Nisi feugiat nulla ultricies maecenas cursus. Eleifend pellentesque egestas eget ut morbi nec nunc pretium tortor. Elementum risus nam pretium fames ultrices. Arcu non nisi leo tempor. Habitasse volutpat nulla arcu elementum ac feugiat turpis. Quis non a sapien euismod velit porttitor enim. Ac amet velit facilisi magna adipiscing sed blandit.",
      "Pulvinar placerat maecenas cursus velit nam non sollicitudin sit. Ut felis eget suspendisse platea tellus dui. Fermentum sed elementum dictum dictum pellentesque. Dui ridiculus amet eget gravida dui tempus varius pellentesque. Sollicitudin quam sit mattis a iaculis aliquet pharetra in. Adipiscing rhoncus cursus nulla in nec. Quis iaculis scelerisque quis amet et interdum eget tortor nunc.",
      "Ut augue imperdiet vel nisi diam nibh sapien. Ultrices eu neque posuere aliquam sodales etiam morbi. Egestas sit ac ut aliquam nec.",
    ],
  },
  "mercado-financeiro": {
    title: "MERCADO FINANCEIRO",
    body: [
      "Assessoria completa em investimentos e alocação estratégica de capital. Nisi feugiat nulla ultricies maecenas cursus. Eleifend pellentesque egestas eget ut morbi nec nunc pretium tortor. Elementum risus nam pretium fames ultrices.",
      "Análise técnica e fundamentalista aliada à visão de longo prazo. Pulvinar placerat maecenas cursus velit nam non sollicitudin sit. Ut felis eget suspendisse platea tellus dui.",
      "Acompanhamento contínuo da carteira e revisão periódica das estratégias conforme os cenários econômicos.",
    ],
  },
  "protecao-blindagem": {
    title: "PROTEÇÃO E BLINDAGEM",
    body: [
      "Estruturação de proteção patrimonial e blindagem jurídica. Nisi feugiat nulla ultricies maecenas cursus. Eleifend pellentesque egestas eget ut morbi nec nunc pretium tortor.",
      "Planejamento sucessório e organização societária com segurança jurídica. Pulvinar placerat maecenas cursus velit nam non sollicitudin sit.",
      "Consultoria integrada com equipe jurídica e contábil para viabilizar estruturas sólidas e duradouras.",
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
          <h1 className="text-center text-5xl font-extrabold tracking-tight text-brand-orange sm:text-6xl">
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
