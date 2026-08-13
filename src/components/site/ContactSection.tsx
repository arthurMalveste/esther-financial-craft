import { Instagram, MessageCircle } from "lucide-react";
import { useState } from "react";
import { buildWhatsAppUrl, EMAIL, INSTAGRAM_URL } from "@/lib/contact";

const inputClass =
  "w-full rounded-lg border border-transparent bg-white px-3 py-2.5 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-black/20";

const servicoOptions = ["Consórcio", "Financiamento", "Imóveis", "Proteção Patrimonial"];

const motivoOptions = [
  { value: "consorcio", label: "Consórcio" },
  { value: "financiamento", label: "Financiamento" },
  { value: "imoveis", label: "Imóveis" },
  { value: "protecao", label: "Proteção Patrimonial" },
  { value: "outro", label: "Outro" },
];

export function ContactSection() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    motivo: "",
    servicos: [] as string[],
  });

  const toggleServico = (s: string) => {
    setForm((f) => ({
      ...f,
      servicos: f.servicos.includes(s)
        ? f.servicos.filter((x) => x !== s)
        : [...f.servicos, s],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      "Olá! Vim pelo site e gostaria de mais informações.",
      "",
      `Nome: ${form.nome}`,
      `Telefone: ${form.telefone}`,
      `E-mail: ${form.email}`,
    ];
    if (form.motivo) {
      const label = motivoOptions.find((m) => m.value === form.motivo)?.label ?? form.motivo;
      lines.push(`Motivo de interesse: ${label}`);
    }
    if (form.servicos.length > 0) lines.push(`Serviço(s) desejado(s): ${form.servicos.join(", ")}`);

    window.open(buildWhatsAppUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contato" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900">
            ENTRE EM CONTATO
          </h2>
          <p className="mt-4 max-w-md text-neutral-600">
            Conte pra Esther qual é o seu objetivo — aquisição de um bem, expansão do
            negócio ou proteção do patrimônio — e receba uma orientação personalizada
            sobre o melhor caminho.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-6 text-sm font-medium text-neutral-800 transition hover:text-brand-orange"
          >
            {EMAIL}
          </a>
          <div className="mt-4 flex gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-300 text-neutral-700 transition hover:border-brand-orange hover:text-brand-orange"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-300 text-neutral-700 transition hover:border-brand-orange hover:text-brand-orange"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-brand-orange p-6 shadow-xl sm:p-8"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Nome completo:">
              <input
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                placeholder="Digite o seu nome aqui"
                className={inputClass}
                required
              />
            </Field>
            <Field label="Telefone:">
              <input
                value={form.telefone}
                onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                placeholder="(00) 00000-0000"
                className={inputClass}
                required
              />
            </Field>
            <Field label="E-mail:">
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Digite o seu e-mail aqui"
                className={inputClass}
                required
              />
            </Field>
            <Field label="Motivo de Interesse:">
              <select
                value={form.motivo}
                onChange={(e) => setForm({ ...form, motivo: e.target.value })}
                className={inputClass}
              >
                <option value="">Selecione o motivo de interesse</option>
                {motivoOptions.map((m) => (
                  <option key={m.value} value={m.value}>
                    {m.label}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <div className="mt-5">
            <p className="mb-3 text-sm font-medium text-white">Serviço Desejado:</p>
            <div className="flex flex-wrap gap-4">
              {servicoOptions.map((s) => (
                <label
                  key={s}
                  className="flex cursor-pointer items-center gap-2 text-sm text-white"
                >
                  <input
                    type="checkbox"
                    checked={form.servicos.includes(s)}
                    onChange={() => toggleServico(s)}
                    className="h-4 w-4 rounded border-white/60 bg-white/20 accent-white"
                  />
                  {s}
                </label>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-navy-deep px-6 py-2.5 text-sm font-bold text-white shadow-sm transition hover:opacity-90"
            >
              ENVIAR PELO WHATSAPP <MessageCircle className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-white">{label}</span>
      {children}
    </label>
  );
}
