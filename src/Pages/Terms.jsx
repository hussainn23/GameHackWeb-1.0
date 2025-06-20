import React, { useEffect } from "react";
import { FileText, ShieldAlert, Ban, Crown, Mail } from "lucide-react";
// import "./scrollspy.css";

 const Terms = () => {
  /* → re‑use the same scroll‑spy effect */
  useEffect(() => {
    const links = document.querySelectorAll("a[data-link]");
    const secs  = [...document.querySelectorAll("section[data-section]")];
    const handler = () => {
      const pos = window.scrollY + 120;
      secs.forEach((s) => {
        if (pos >= s.offsetTop && pos < s.offsetTop + s.offsetHeight) {
          links.forEach((l) => l.classList.remove("active-toc"));
          document.querySelector(`a[data-link='${s.id}']`)?.classList.add("active-toc");
        }
      });
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const sections = [
    {
      id: "accept",
      title: "1. Acceptance of Terms",
      icon: <FileText className="h-6 w-6 text-indigo-600" />,
      items: [
        "By accessing the app, you agree to be bound by these Terms.",
        "If you disagree with any part, please discontinue usage immediately."
      ],
    },
    {
      id: "conduct",
      title: "2. User Conduct",
      icon: <ShieldAlert className="h-6 w-6 text-indigo-600" />,
      items: [
        "You agree not to misuse the service, attempt to hack, or spread malware.",
        "Violation may result in account suspension or legal action."
      ],
    },
    {
      id: "ip",
      title: "3. Intellectual Property",
      icon: <Crown className="h-6 w-6 text-indigo-600" />,
      items: [
        "All trademarks, logos, and content remain the property of Real Rumpy Apps.",
        "You may not copy, modify, or distribute any part without written consent."
      ],
    },
    {
      id: "termination",
      title: "4. Termination",
      icon: <Ban className="h-6 w-6 text-indigo-600" />,
      items: [
        "We may terminate or suspend access without prior notice for any breach.",
        "Upon termination, your right to use the app ceases immediately."
      ],
    },
    {
      id: "contact",
      title: "5. Contact",
      icon: <Mail className="h-6 w-6 text-indigo-600" />,
      items: [
        <>
          For clarifications, email&nbsp;
          <span className="text-indigo-700 dark:text-indigo-300 font-semibold">
            legal@realrumpyapps.com
          </span>
        </>,
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-100 dark:from-zinc-900 dark:to-zinc-800">
      {/* Hero */}
      <header className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=60')] bg-cover bg-center opacity-20 dark:opacity-10" />
        <div className="backdrop-blur-sm bg-white/60 dark:bg-zinc-900/60">
          <div className="max-w-5xl mx-auto px-6 py-20 text-center">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-indigo-700 dark:text-indigo-400">
              Terms &amp; Conditions
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 lg:px-10 mt-12 lg:grid lg:grid-cols-[230px_1fr] gap-12">
        <nav className="hidden lg:block sticky top-28 self-start">
          <ul className="space-y-2 text-sm font-medium">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  data-link={s.id}
                  className="toc-link block rounded-md px-3 py-1 text-gray-600 dark:text-gray-400 hover:bg-indigo-50 dark:hover:bg-zinc-700"
                >
                  {s.title.replace(/^\d+\.\s/, '')}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <article className="space-y-14">
          {sections.map((sec) => (
            <section key={sec.id} id={sec.id} data-section className="scroll-mt-28">
              <div className="flex items-start gap-4">
                {sec.icon}
                <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-400">{sec.title}</h2>
              </div>
              <ul className="mt-4 list-disc ml-8 space-y-2 text-gray-700 dark:text-gray-300">
                {sec.items.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </section>
          ))}
        </article>
      </main>

      <footer className="text-center text-sm text-gray-500 dark:text-gray-400 mt-20 pb-12">
        Last updated&nbsp;·&nbsp;June&nbsp;2025
      </footer>
    </div>
  );
};
 export default Terms