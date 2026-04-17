import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const EXPERIENCE = [
  {
    period: "2019 — Today",
    role: "Full Stack Developer",
    company: "Cloud Business Solutions (CBS)",
    description:
      "Bank integrations, web, mobile (Android / iOS), APIs and e-commerce. C#, ASP.NET Core, Azure, SQL Server, Xamarin, Laravel, PHP, Bootstrap.",
  },
  {
    period: "2018 — 2019",
    role: "Project Manager",
    company: "AlmoTechnology (Grupo Almo)",
    description: "QA, project management, documentation and end-user training.",
  },
  {
    period: "2015 — 2018",
    role: "IT Manager",
    company: "Vanguard Security",
    description: "Project management, server administration and data analysis.",
  },
  {
    period: "2014 — 2015",
    role: ".NET Developer",
    company: "Financiera Kineret (Grupo Kineret)",
    description: "ERP / CRM / GPS integrations. VB & C# .NET. DevExpress specialist.",
  },
  {
    period: "2008 — 2010",
    role: "Developer",
    company: "GPS Satélite",
    description:
      "GPS tracking software (desktop & web), GIS knowledge and routing software analysis.",
  },
  {
    period: "2004 — 2008",
    role: "Software / UI·UX Developer",
    company: "Central Valley Technology",
    description:
      "Online gaming software solutions: online casino, online poker and corporate websites.",
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

const SKILLS = [
  "C#", ".NET / ASP.NET Core", "Azure", "SQL Server", "REST APIs",
  "JavaScript", "jQuery", "HTML5", "CSS3", "MVC / MVVM",
  "Xamarin", "Android / iOS", "Node.js", "Laravel · PHP", "SEO",
];

const PROJECTS = [
  { title: "REST API · Integrations", href: "https://wscbsecommerce.azurewebsites.net/", tag: "Backend" },
  { title: "E-commerce platform", href: "https://tienda.cbs.cr/", tag: "Web" },
  {
    title: "SIFO mobile app",
    href: "https://play.google.com/store/apps/details?id=cr.co.cbs.sifo&hl=es&gl=US",
    tag: "Mobile",
  },
  { title: "QA Testing Services", href: "#", tag: "Quality" },
  { title: "UX / UI Design", href: "#", tag: "Design" },
  { title: "Database Architecture", href: "#", tag: "Data" },
];

function Index() {
  const [active, setActive] = useState("about");

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
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-lg tracking-tight">
            Rubén<span className="text-accent">.</span>
          </a>
          <nav className="hidden md:flex gap-8 text-sm">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`transition-colors hover:text-foreground ${
                  active === n.id ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="https://rubenparrales.azurewebsites.net/docs/cv2021.pdf"
            className="text-sm border border-foreground/80 px-4 py-2 rounded-full hover:bg-foreground hover:text-background transition-colors"
          >
            Download CV
          </a>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-6 sm:px-10 pt-32 pb-32">
        {/* HERO */}
        <section className="grid md:grid-cols-12 gap-10 items-end pb-32 border-b border-border">
          <div className="md:col-span-8">
            <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-6">
              Full Stack Developer · Lynwood, CA
            </p>
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl leading-[0.95] text-balance">
              Rubén
              <br />
              <span className="italic font-light">Parrales</span>
            </h1>
            <p className="mt-10 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Twenty-two years building software across every phase of the lifecycle —
              from enterprise .NET systems and cloud APIs to mobile apps and e-commerce.
              Passionate about adopting what's next.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right space-y-2 text-sm">
            <div className="text-muted-foreground">Currently</div>
            <div className="font-display text-2xl">CBS · Full Stack</div>
            <div className="pt-6 text-muted-foreground">Available for</div>
            <div className="font-display text-2xl italic">Freelance work</div>
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about" index="01" title="About">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-7 space-y-6 text-lg leading-relaxed">
              <p>
                Expert in full-stack, desktop, web and mobile applications. I lead products
                end-to-end — discovery, architecture, build, QA and delivery — with a strong
                focus on performance, integrations and clean user experience.
              </p>
              <p className="text-muted-foreground">
                Born July 13, 1980. Based in Lynwood, California. Bilingual (EN / ES) and
                always learning the next thing.
              </p>
            </div>
            <dl className="md:col-span-5 grid grid-cols-2 gap-x-6 gap-y-8 text-sm">
              <Stat k="22+" v="Years of experience" />
              <Stat k="24" v="Projects delivered" />
              <Stat k="10" v="Happy clients" />
              <Stat k="∞" v="Cups of coffee" />
            </dl>
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" index="02" title="Experience">
          <ol className="space-y-0">
            {EXPERIENCE.map((e, i) => (
              <li
                key={i}
                className="grid md:grid-cols-12 gap-6 py-8 border-t border-border first:border-t-0 group"
              >
                <div className="md:col-span-3 text-sm text-muted-foreground tracking-wide pt-2">
                  {e.period}
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-display text-2xl group-hover:text-accent transition-colors">
                    {e.role}
                  </h3>
                  <div className="text-sm text-muted-foreground mt-1">{e.company}</div>
                  <p className="mt-3 text-base leading-relaxed">{e.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* SKILLS + EDUCATION */}
        <Section id="skills" index="03" title="Skills & Education">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-7">
              <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Stack
              </h3>
              <ul className="flex flex-wrap gap-2">
                {SKILLS.map((s) => (
                  <li
                    key={s}
                    className="text-sm border border-border rounded-full px-4 py-2 hover:border-accent hover:text-accent transition-colors"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-5">
              <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Education
              </h3>
              <ul className="space-y-5">
                {EDUCATION.map((e) => (
                  <li key={e.title}>
                    <div className="font-display text-lg">{e.title}</div>
                    <div className="text-sm text-muted-foreground">{e.place}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" index="04" title="Selected work">
          <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
            {PROJECTS.map((p) => (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="bg-background p-8 group hover:bg-secondary transition-colors flex flex-col justify-between min-h-[180px]"
              >
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {p.tag}
                </span>
                <div className="flex items-end justify-between mt-10">
                  <h3 className="font-display text-2xl">{p.title}</h3>
                  <span className="text-accent text-2xl translate-x-0 group-hover:translate-x-1 transition-transform">
                    ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" index="05" title="Get in touch">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7">
              <h3 className="font-display text-5xl sm:text-6xl leading-[1] text-balance">
                Let's build something
                <br />
                <span className="italic font-light text-accent">worth shipping.</span>
              </h3>
            </div>
            <div className="md:col-span-5 space-y-6 text-sm">
              <ContactRow label="Email">
                <a href="mailto:ruben.parrales@gmail.com" className="hover:text-accent">
                  ruben.parrales@gmail.com
                </a>
              </ContactRow>
              <ContactRow label="USA">
                <a href="tel:+12135641434" className="hover:text-accent">
                  +1 (213) 564-1434
                </a>
              </ContactRow>
              <ContactRow label="Costa Rica">
                <a href="tel:+50661235401" className="hover:text-accent">
                  +506 6123-5401
                </a>
              </ContactRow>
              <ContactRow label="Address">Lynwood, California — USA</ContactRow>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Rubén Parrales. All rights reserved.</span>
          <span className="font-display italic">Crafted with care.</span>
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
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="pt-32 scroll-mt-20">
      <div className="flex items-baseline gap-6 mb-14">
        <span className="text-xs tracking-[0.3em] text-muted-foreground">{index}</span>
        <h2 className="font-display text-3xl sm:text-4xl">{title}</h2>
        <span className="flex-1 h-px bg-border" />
      </div>
      {children}
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="font-display text-4xl">{k}</dt>
      <dd className="text-muted-foreground mt-1">{v}</dd>
    </div>
  );
}

function ContactRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-border pb-4">
      <span className="text-muted-foreground uppercase tracking-[0.2em] text-xs">{label}</span>
      <span className="font-display text-lg text-right">{children}</span>
    </div>
  );
}
