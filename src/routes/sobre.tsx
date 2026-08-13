import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ContactSection } from "@/components/site/ContactSection";
import estherSobre from "@/assets/esther-sobre.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre mim — Esther Monteiro" },
      {
        name: "description",
        content:
          "Conheça a trajetória de Esther Monteiro, consultora e analista de crédito especialista em consórcios, financiamentos e proteção patrimonial.",
      },
      { property: "og:title", content: "Sobre mim — Esther Monteiro" },
      {
        property: "og:description",
        content: "Trajetória, técnica e compromisso com resultados reais.",
      },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-navy-deep">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: `url(${estherSobre})`, backgroundPosition: "center 30%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-deep/90 via-brand-navy-deep/60 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 md:py-36 lg:px-8">
          <div className="max-w-lg">
            <h1 className="text-5xl font-extrabold tracking-tight text-brand-orange sm:text-6xl">
              SOBRE MIM
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/90">
              Sou Esther Monteiro e trabalho ajudando pessoas, empresários e famílias a
              encontrarem caminhos mais seguros para seus projetos e para o patrimônio
              que construíram. Minha atuação reúne consórcios, financiamentos,
              levantamento de capital e blindagem patrimonial. Cada atendimento começa
              com uma conversa: primeiro eu procuro entender o momento, o objetivo e as
              possibilidades; depois, organizamos juntos uma estratégia clara e
              acompanhamos cada etapa com proximidade e responsabilidade.
            </p>
          </div>
        </div>
      </section>

      {/* TRAJETÓRIA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-orange sm:text-4xl">
            TRAJETÓRIA
          </h2>
          <div className="mt-8 space-y-6 text-left text-neutral-700 leading-relaxed sm:text-center">
            <p>
              Com mais de 15 anos de atuação no mercado financeiro, Esther Monteiro
              construiu sua trajetória como consultora e analista de crédito, dedicada a
              viabilizar consórcios e financiamentos com técnica e segurança jurídica.
            </p>
            <p>
              Seu escritório, com atuação em Barretos e Alphaville, atende pessoas
              físicas, empresários e clientes do agronegócio que buscam desde a
              aquisição de bens até a estruturação de operações mais complexas. Grande
              parte da sua carteira é formada por clientes de longa data, que retornam e
              indicam novos negócios — reflexo direto da confiança construída ao longo
              dos anos.
            </p>
            <p>
              Além do crédito, Esther também atua na corretagem de imóveis de alto
              padrão, unindo sua visão analítica à identificação de boas oportunidades
              para cada perfil de cliente. Em cada atendimento, o compromisso é o mesmo:
              entender o momento do cliente, construir uma estratégia clara e acompanhar
              de perto até a conclusão.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </SiteLayout>
  );
}
