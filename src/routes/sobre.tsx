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
          "Conheça a trajetória de Esther Monteiro, consultora financeira especialista em crédito, estruturação e proteção patrimonial.",
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
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${estherSobre})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-deep/90 via-brand-navy-deep/60 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 md:py-36 lg:px-8">
          <div className="max-w-lg">
            <h1 className="text-5xl font-extrabold tracking-tight text-brand-orange sm:text-6xl">
              SOBRE MIM
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/90">
              Tempor semper faucibus convallis magna nunc lacus. Magna ipsum massa arcu
              pulvinar. Consectetur odio nulla dui at lectus amet tortor pretium odio. Et
              convallis quam nunc venenatis. Consectetur quis viverra gravida euismod.
              Posuere habitasse urna suspendisse placerat sed sed. Tortor suspendisse
              aliquet elementum nec. Id risus enim dictum eu pellentesque dignissim in ut
              vitae.
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
              In ac sollicitudin senectus enim malesuada vestibulum. Leo adipiscing eget
              duis amet vel facilisis. Eu non ipsum purus tristique. Massa dolor
              consectetur ipsum nam amet consequat tincidunt consectetur. Feugiat nulla
              blandit id semper dolor consectetur cum a lectus malesuada cursus commodo
              odio donec. Maecenas senectus et velit tortor placerat elit.
            </p>
            <p>
              Vel id pulvinar in blandit hendrerit egestas. Enim ac vel scelerisque
              egestas amet sed nunc quis mollis. Purus mauris sit ante eget eget id.
              Ligula convallis pulvinar diam blandit tincidunt scelerisque. Vulputate
              adipiscing morbi neque sed lacus purus.
            </p>
            <p>
              Cras vestibulum lacinia dictum praesent. Aliquet urna tellus arcu semper
              volutpat vulputate. Vitae leo lorem magna neque neque vulputate ipsum
              tellus. Fringilla tortor turpis id in ipsum morbi mauris ac.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </SiteLayout>
  );
}
