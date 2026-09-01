import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getPreferredLang } from "@/i18n";
import {
  Cloud,
  Briefcase,
  Server,
  Code2,
  Satellite,
  Gamepad2,
  Mail,
  Phone,
  MapPin,
  Download,
  ArrowUpRight,
  Cpu,
  Database,
  Smartphone,
  Globe,
  ShieldCheck,
  Sparkles,
  Terminal,
  Zap,
  Languages,
  DollarSign,
  Clock,
  BrainCircuit,
  Workflow,
  FileText,
} from "lucide-react";
import heroTech from "@/assets/hero-tech.jpg";
import portraitTech from "@/assets/portrait-tech.jpg";


export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { id: "about", key: "nav.about" },
  { id: "experience", key: "nav.experience" },
  { id: "skills", key: "nav.skills" },
  { id: "projects", key: "nav.projects" },
  { id: "contact", key: "nav.contact" },
];

const EXPERIENCE = [
  {
    period: "2019 — Today",
    role: "Full Stack Developer",
    company: "Cloud Business Solutions (CBS)",
    description:
      "Bank integrations, web, mobile (Android / iOS), APIs and e-commerce. C#, ASP.NET Core, Azure, SQL Server, Xamarin, Laravel, PHP, Bootstrap.",
    icon: Cloud,
    tags: [".NET", "Azure", "Xamarin"],
  },
  {
    period: "2018 — 2019",
    role: "Project Manager",
    company: "AlmoTechnology (Grupo Almo)",
    description: "QA, project management, documentation and end-user training.",
    icon: Briefcase,
    tags: ["PM", "QA"],
  },
  {
    period: "2015 — 2018",
    role: "IT Manager",
    company: "Vanguard Security",
    description: "Project management, server administration and data analysis.",
    icon: Server,
    tags: ["DevOps", "Data"],
  },
  {
    period: "2014 — 2015",
    role: ".NET Developer",
    company: "Financiera Kineret (Grupo Kineret)",
    description: "ERP / CRM / GPS integrations. VB & C# .NET. DevExpress specialist.",
    icon: Code2,
    tags: ["C#", "ERP"],
  },
  {
    period: "2008 — 2010",
    role: "Developer",
    company: "GPS Satélite",
    description:
      "GPS tracking software (desktop & web), GIS knowledge and routing software analysis.",
    icon: Satellite,
    tags: ["GPS", "GIS"],
  },
  {
    period: "2004 — 2008",
    role: "Software / UI·UX Developer",
    company: "Central Valley Technology",
    description:
      "Online gaming software solutions: online casino, online poker and corporate websites.",
    icon: Gamepad2,
    tags: ["UI/UX", "Gaming"],
  },
];

const EDUCATION = [
  { title: "Systems Engineering", place: "Universidad Americana — San Pedro, Costa Rica" },
  { title: "Gazelles Methodology", place: "Allagis" },
  { title: "ISO 9001 Internal Auditor", place: "ISO" },
  { title: "Delphi Developer", place: "INDICO — Sabana Sur, Costa Rica" },
  { title: "MS SQL Server DBA", place: "New Horizons — Costa Rica" },
  { title: "EPSON POS / ESC Specialist", place: "EPSON Costa Rica" },
];

const SKILL_GROUPS = [
  {
    icon: Code2,
    title: "Backend",
    items: ["C#", ".NET / ASP.NET Core", "REST APIs", "MVC / MVVM", "Node.js"],
  },
  {
    icon: Globe,
    title: "Frontend",
    items: ["JavaScript", "HTML5", "CSS3", "jQuery", "Bootstrap"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    items: ["Azure", "SQL Server", "CI/CD", "Server Admin"],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    items: ["Xamarin", "Android", "iOS"],
  },
  {
    icon: Database,
    title: "Data",
    items: ["SQL", "Database Design", "Data Analysis"],
  },
  {
    icon: ShieldCheck,
    title: "Quality & SEO",
    items: ["QA Testing", "ISO 9001", "SEO"],
  },
];

const PROJECTS = [
  {
    title: "REST API · Integrations",
    href: "https://wscbsecommerce.azurewebsites.net/swagger/index.html",
    tag: "Backend",
    icon: Server,
    desc: "Bank & e-commerce integrations exposed as scalable APIs — Swagger documented.",
  },
  {
    title: "E-commerce Platform",
    href: "#",
    tag: "Web",
    icon: Globe,
    desc: "Storefront stack with payments, catalog and POS sync (nopCommerce + .NET).",
  },
  {
    title: "SIFO Mobile App",
    href: "https://play.google.com/store/apps/details?id=cr.co.cbs.sifo&hl=es&gl=US",
    tag: "Mobile",
    icon: Smartphone,
    desc: "Native Android app on Google Play, used in production.",
  },
  {
    title: "QA Testing Services",
    href: "#",
    tag: "Quality",
    icon: ShieldCheck,
    desc: "End-to-end test plans, automation and release reviews.",
  },
  {
    title: "UX / UI Design",
    href: "#",
    tag: "Design",
    icon: Sparkles,
    desc: "Interface design for desktop, web and mobile products.",
  },
  {
    title: "Database Architecture",
    href: "#",
    tag: "Data",
    icon: Database,
    desc: "Schema design, performance tuning and reporting.",
  },
];

const ENGAGEMENT = [
  { icon: DollarSign, key: "about.engagement.salary" },
  { icon: Globe, key: "about.engagement.remote" },
  { icon: Clock, key: "about.engagement.time" },
  { icon: BrainCircuit, key: "about.engagement.aiRoi" },
  { icon: Workflow, key: "about.engagement.automation" },
  { icon: FileText, key: "about.engagement.visa" },
];

function Index() {

  const [active, setActive] = useState("about");
  const { t, i18n } = useTranslation();
  const [visitors, setVisitors] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://abacus.jasoncameron.dev/hit/rubenparrales/home")
      .then((r) => r.json())
      .then((d) => typeof d?.value === "number" && setVisitors(d.value))
      .catch(() => {});
  }, []);

  const toggleLang = () => {
    const next = i18n.language?.startsWith("es") ? "en" : "es";
    i18n.changeLanguage(next);
    try { localStorage.setItem("lang", next); } catch {}
  };
  const isEs = i18n.language?.startsWith("es");

  // Keep <html lang> in sync with i18n for screen readers + SEO
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = isEs ? "es" : "en";
    }
  }, [isEs]);

  // Apply the user's stored / browser language after hydration to avoid SSR mismatch
  useEffect(() => {
    const preferred = getPreferredLang();
    if (preferred !== i18n.language) {
      i18n.changeLanguage(preferred);
    }
  }, [i18n]);


  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Ambient background grid + scanline */}
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-40" aria-hidden />
      <div
        className="pointer-events-none fixed left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--neon)] to-transparent opacity-60 animate-scan"
        aria-hidden
      />

      {/* NAV */}
      <header className="no-print fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-mono text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-[var(--neon)] animate-ping opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--neon)]" />
            </span>
            <span className="tracking-widest">RUBEN<span className="text-[var(--neon)]">.</span>DEV</span>
          </a>
          <nav className="hidden md:flex gap-7 text-xs font-mono uppercase tracking-widest">
            {NAV.map((n, i) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`transition-colors hover:text-[var(--neon)] ${
                  active === n.id ? "text-[var(--neon)]" : "text-muted-foreground"
                }`}
              >
                <span className="text-[var(--neon)]/60 mr-1">0{i + 1}</span>
                {t(n.key)}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLang}
              aria-label="Toggle language"
              aria-pressed={isEs}
              className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest border border-border rounded-full px-2.5 py-1.5 hover:border-[var(--neon)]/60 transition-colors"
            >
              <Languages className="h-3 w-3 text-[var(--neon)]" aria-hidden="true" />
              <span className={isEs ? "text-[var(--neon)]" : "text-muted-foreground"}>ES</span>
              <span className="text-muted-foreground/40" aria-hidden="true">|</span>
              <span className={!isEs ? "text-[var(--neon)]" : "text-muted-foreground"}>EN</span>
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              title={isEs ? "Imprimir / Guardar como PDF" : "Print / Save as PDF"}
              aria-label={isEs ? "Imprimir / Guardar como PDF" : "Print / Save as PDF"}
              className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest border border-[var(--neon)]/40 text-[var(--neon)] px-4 py-2 rounded-full hover:bg-[var(--neon)] hover:text-primary-foreground hover:shadow-[var(--shadow-neon)] transition-all"
            >
              <Download className="h-3.5 w-3.5" />
              CV
            </button>
          </div>
        </div>
      </header>

      <main id="top" className="relative mx-auto max-w-7xl px-6 sm:px-10 pt-28 pb-32">
        {/* PRINT-ONLY HEADER */}
        <header className="print-only print-header">
          <h1>Rubén Parrales</h1>
          <div className="role">{t("hero.role")}</div>
          <div className="contact">
            ruben.parrales@gmail.com · +1 (323) 636-3684 · +506 6123-5401 · USA · CR · Lynwood, CA
          </div>
          <div className="print-only terms-line" style={{ fontSize: "9pt", marginTop: "2mm", color: "#333" }}>
            {t("about.engagement.printSummary")}
          </div>
          <hr />

        </header>

        {/* HERO */}
        <section className="no-print relative pt-10 pb-32">
          {/* Hero image backdrop */}
          <div className="absolute inset-0 -z-10 rounded-3xl overflow-hidden border border-border/60 scanline">
            <img
              src={heroTech}
              alt="Futuristic neural network visualization"
              width={1920}
              height={1080}
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
          </div>

          <div className="grid md:grid-cols-12 gap-10 items-center px-4 sm:px-8 py-16 md:py-24">
            <div className="md:col-span-8 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--neon)]/40 bg-[var(--neon)]/5 font-mono text-xs uppercase tracking-widest text-[var(--neon)]">
                <Zap className="h-3 w-3" />
                {t("hero.status")}
              </div>

              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.95] text-balance">
                {t("hero.name")}
                <span className="block text-gradient-neon mt-2 text-3xl sm:text-4xl md:text-5xl">{t("hero.role")}</span>
              </h1>

              <p className="font-mono text-sm text-muted-foreground max-w-xl leading-relaxed">
                <span className="text-[var(--neon)]" aria-hidden="true">$</span> {t("hero.subtitle1")}
                <br />
                <span className="text-[var(--neon)]" aria-hidden="true">$</span> {t("hero.subtitle2")}
                <span className="animate-blink ml-1 text-[var(--neon)]" aria-hidden="true">▍</span>
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--neon)] text-primary-foreground font-medium hover:shadow-[var(--shadow-neon)] transition-all"
                >
                  <Terminal className="h-4 w-4" />
                  {t("hero.ctaContact")}
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-[var(--magenta)] hover:text-[var(--magenta)] transition-colors"
                >
                  {t("hero.ctaProjects")}
                </a>
              </div>
            </div>

            <div className="md:col-span-4 relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-[var(--neon)]/30 shadow-[var(--shadow-card)] glow-card">
                <img
                  src={portraitTech}
                  alt="Developer portrait with holographic code overlay"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover mix-blend-luminosity opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--magenta)]/30 via-transparent to-[var(--neon)]/20" />
                {/* Corner brackets */}
                <Corner className="top-2 left-2" />
                <Corner className="top-2 right-2 rotate-90" />
                <Corner className="bottom-2 right-2 rotate-180" />
                <Corner className="bottom-2 left-2 -rotate-90" />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 font-mono text-[10px] uppercase tracking-widest">
                <div className="px-3 py-2 rounded-md border border-border bg-card/50">
                  <div className="text-muted-foreground">{t("hero.location")}</div>
                  <div className="text-[var(--neon)] mt-1">Lynwood, CA</div>
                </div>
                <div className="px-3 py-2 rounded-md border border-border bg-card/50">
                  <div className="text-muted-foreground">{t("hero.statusLabel")}</div>
                  <div className="text-[var(--neon)] mt-1 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon)] animate-pulse" />
                    {t("hero.active")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT / STATS */}
        <Section id="about" index="01" title={t("nav.about")}>
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-7 glow-card rounded-2xl p-8 space-y-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-[var(--neon)]/10 border border-[var(--neon)]/30 flex items-center justify-center">
                  <Cpu className="h-5 w-5 text-[var(--neon)]" />
                </div>
                <h3 className="font-display text-2xl">{t("about.mission")}</h3>
              </div>
              <p className="text-base leading-relaxed text-foreground/90">
                {t("about.p1")}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t("about.p2")}
              </p>
            </div>
            <div className="md:col-span-5 grid grid-cols-2 gap-4">
              <Stat icon={Briefcase} k="22+" v={t("about.stats.years")} />
              <Stat icon={Sparkles} k="24" v={t("about.stats.projects")} />
              <Stat icon={Cloud} k="10+" v={t("about.stats.clients")} />
              <Stat icon={Terminal} k="∞" v={t("about.stats.code")} />
            </div>
          </div>

          {/* Engagement terms */}
          <div className="no-print mt-8 glow-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-[var(--neon)]/10 border border-[var(--neon)]/30 flex items-center justify-center">
                <Zap className="h-5 w-5 text-[var(--neon)]" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl">{t("about.engagement.title")}</h3>
            </div>
            <ul className="grid sm:grid-cols-2 gap-4">
              {ENGAGEMENT.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.key} className="flex items-start gap-3">
                    <Icon className="h-5 w-5 text-[var(--neon)] mt-0.5 shrink-0" aria-hidden="true" />
                    <span className="text-sm text-foreground/80 leading-relaxed">{t(item.key)}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </Section>


        {/* EXPERIENCE */}
        <Section id="experience" index="02" title={t("sections.experience")}>
          {/* Print-only compact list */}
          <ul className="print-only print-exp-list">
            {EXPERIENCE.map((e, i) => (
              <li key={i} className="print-exp-item">
                <div className="print-exp-line">
                  <strong>{e.period}</strong> · {e.company} · {e.role}
                </div>
                <p>{e.description}</p>
              </li>
            ))}
          </ul>
          <div className="no-print relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--neon)]/40 to-transparent" />

            <ol className="space-y-10">
              {EXPERIENCE.map((e, i) => {
                const Icon = e.icon;
                const left = i % 2 === 0;
                return (
                  <li
                    key={i}
                    className={`relative grid md:grid-cols-2 gap-8 items-center ${
                      left ? "" : "md:[direction:rtl]"
                    }`}
                  >
                    {/* Node */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                      <div className="h-12 w-12 rounded-full bg-card border border-[var(--neon)]/50 flex items-center justify-center shadow-[var(--shadow-neon)]">
                        <Icon className="h-5 w-5 text-[var(--neon)]" />
                      </div>
                    </div>

                    <div className={`pl-20 md:pl-0 ${left ? "md:pr-16 md:text-right" : "md:pl-16 [direction:ltr]"}`}>
                      <time className="block font-mono text-xs uppercase tracking-widest text-[var(--neon)] mb-2">
                        {e.period}
                      </time>
                      <h3 className="font-display text-2xl font-semibold">{e.role}</h3>
                      <div className="text-sm text-muted-foreground mt-1">{e.company}</div>
                      <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                        {e.description}
                      </p>
                      <div
                        className={`mt-4 flex flex-wrap gap-2 ${
                          left ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        {e.tags.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded border border-border text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="hidden md:block" />
                  </li>
                );
              })}
            </ol>
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" index="03" title={t("sections.stack")}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SKILL_GROUPS.map((g) => {
              const Icon = g.icon;
              return (
                <div key={g.title} className="glow-card rounded-2xl p-6 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-[var(--neon)]/10 border border-[var(--neon)]/30 flex items-center justify-center group-hover:bg-[var(--neon)]/20 transition-colors">
                      <Icon className="h-5 w-5 text-[var(--neon)]" />
                    </div>
                    <h3 className="font-display text-lg font-semibold">{g.title}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {g.items.map((i) => (
                      <li
                        key={i}
                        className="font-mono text-xs px-2.5 py-1 rounded-md bg-secondary/60 border border-border text-foreground/80"
                      >
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Education strip */}
          <div className="mt-12">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              // {t("sections.education")}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {EDUCATION.map((e) => (
                <div
                  key={e.title}
                  className="border border-border rounded-xl p-4 bg-card/40 hover:border-[var(--magenta)]/50 transition-colors"
                >
                  <div className="font-display text-sm font-semibold">{e.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">{e.place}</div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" index="04" title={t("sections.projects")}>
          <ul className="print-only print-proj-list">
            {PROJECTS.filter((p) => p.href && p.href !== "#").map((p) => (
              <li key={p.title}>
                <strong>{p.title}</strong> — <span>{p.href}</span>
              </li>
            ))}
          </ul>
          <div className="no-print grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.map((p) => {
              const Icon = p.icon;
              const isLive = p.href && p.href !== "#";
              return (
                <a
                  key={p.title}
                  href={isLive ? p.href : undefined}
                  target={isLive ? "_blank" : undefined}
                  rel={isLive ? "noreferrer" : undefined}
                  aria-disabled={!isLive}
                  className={`glow-card rounded-2xl p-6 flex flex-col justify-between min-h-[200px] group ${
                    !isLive ? "cursor-default opacity-90" : ""
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-[var(--neon)]/20 to-[var(--magenta)]/20 border border-[var(--neon)]/30 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-[var(--neon)]" aria-hidden="true" />
                    </div>
                    {isLive && (
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-[var(--neon)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" aria-hidden="true" />
                    )}
                  </div>
                  <div className="mt-6">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--magenta)] mb-2">
                      {p.tag}
                    </div>
                    <h3 className="font-display text-xl font-semibold leading-tight">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" index="05" title={t("sections.contact")} className="no-print">
          <div className="relative glow-card rounded-3xl p-8 sm:p-12 overflow-hidden">
            <div
              className="absolute -top-20 -right-20 h-64 w-64 rounded-full opacity-30 blur-3xl"
              style={{ background: "var(--neon)" }}
            />
            <div
              className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full opacity-30 blur-3xl"
              style={{ background: "var(--magenta)" }}
            />
            <div className="relative grid md:grid-cols-12 gap-10 items-end">
              <div className="md:col-span-7">
                <div className="font-mono text-xs uppercase tracking-widest text-[var(--neon)] mb-4">
                  // {t("contact.openChannel")}
                </div>
                <h3 className="font-display text-4xl sm:text-5xl font-bold leading-[1] text-balance">
                  {t("contact.headline1")}
                  <span className="block text-gradient-neon mt-2">{t("contact.headline2")}</span>
                </h3>
              </div>
              <div className="md:col-span-5 space-y-3">
                <ContactRow icon={Mail} label={t("contact.email")} href="mailto:ruben.parrales@gmail.com">
                  ruben.parrales@gmail.com
                </ContactRow>
                <ContactRow icon={Phone} label={t("contact.usa")} href="tel:+13236363684">
                  +1 (323) 636-3684
                </ContactRow>
                <ContactRow icon={Phone} label={t("contact.work")} href="tel:+50661235401">
                  +506 6123-5401
                </ContactRow>
                <ContactRow icon={MapPin} label={t("contact.address")}>
                  {t("contact.addressValue")}
                </ContactRow>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="no-print relative border-t border-border/60 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <span className="font-mono text-[11px] tracking-widest" style={{ color: "oklch(0.85 0.2 145)" }}>
            {t("footer.visitors")}: {visitors !== null ? String(visitors).padStart(8, "0") : "--------"}
          </span>
          <span>
            © {new Date().getFullYear()} Rubén Parrales · {t("footer.ops")}
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon)] animate-pulse" />
            v2.0 · {t("footer.built")}
          </span>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id,
  index,
  title,
  children,
  className = "",
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`pt-28 scroll-mt-20 ${className}`}>
      <div className="flex items-baseline gap-4 mb-12">
        <span className="font-mono text-xs tracking-widest text-[var(--neon)]">
          [{index}]
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold">{title}</h2>
        <span className="flex-1 h-px bg-gradient-to-r from-[var(--neon)]/40 to-transparent" />
      </div>
      {children}
    </section>
  );
}

function Stat({
  icon: Icon,
  k,
  v,
}: {
  icon: React.ComponentType<{ className?: string }>;
  k: string;
  v: string;
}) {
  return (
    <div className="glow-card rounded-xl p-5">
      <Icon className="h-4 w-4 text-[var(--neon)] mb-3" />
      <div className="font-display text-3xl font-bold">{k}</div>
      <div className="text-xs text-muted-foreground mt-1 font-mono uppercase tracking-widest">
        {v}
      </div>
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  href,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href?: string;
  children: React.ReactNode;
}) {
  const inner = (
    <div className="flex items-center gap-4 p-3 rounded-lg border border-border bg-background/40 hover:border-[var(--neon)]/50 hover:bg-background/70 transition-all group">
      <div className="h-9 w-9 rounded-md bg-[var(--neon)]/10 border border-[var(--neon)]/30 flex items-center justify-center">
        <Icon className="h-4 w-4 text-[var(--neon)]" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
        <div className="text-sm truncate group-hover:text-[var(--neon)] transition-colors">
          {children}
        </div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

function Corner({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute h-4 w-4 ${className}`}>
      <div className="absolute top-0 left-0 h-full w-px bg-[var(--neon)]" />
      <div className="absolute top-0 left-0 w-full h-px bg-[var(--neon)]" />
    </div>
  );
}
