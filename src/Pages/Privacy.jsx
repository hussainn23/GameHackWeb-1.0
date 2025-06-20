import React, { useEffect } from "react";
import { ShieldCheck, User, Lock, Mail, RefreshCcw } from "lucide-react";
             // ↓ tiny helper (included below)

export const Privacy = () => {
  /* ▸ Highlight nav link on scroll  ------------------------------------ */
  useEffect(() => {
    const tocLinks = document.querySelectorAll("a[data-link]");
    const headings = [...document.querySelectorAll("section[data-section]")];

    const onScroll = () => {
      const scrollPos = window.scrollY + 120;
      headings.forEach((h) => {
        if (scrollPos >= h.offsetTop && scrollPos < h.offsetTop + h.offsetHeight) {
          tocLinks.forEach((l) => l.classList.remove("active-toc"));
          document.querySelector(`a[data-link='${h.id}']`)?.classList.add("active-toc");
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-100 dark:from-zinc-900 dark:to-zinc-800">
      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <header className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=60')] bg-cover bg-center opacity-20 dark:opacity-10" />
        <div className="backdrop-blur-sm bg-white/60 dark:bg-zinc-900/60">
          <div className="max-w-5xl mx-auto px-6 py-20 text-center">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-indigo-700 dark:text-purple-400">
              Privacy&nbsp;Policy
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
              We respect your privacy. Below is a transparent look at what we collect and why.
            </p>
          </div>
        </div>
      </header>

      {/* ─── Main Content with side‑toc  ───────────────────────────────── */}
      <main className="max-w-6xl mx-auto px-6 lg:px-10 mt-12 lg:grid lg:grid-cols-[230px_1fr] gap-12">
        {/* ▸ Sticky TOC (desktop) */}
        <nav className="hidden lg:block sticky top-28 self-start">
          <ul className="space-y-2 text-sm font-medium">
            {[
              { id: "info", label: "Information" },
              { id: "usage", label: "Usage" },
              { id: "sharing", label: "Sharing & Security" },
              { id: "choices", label: "Your Choices" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  data-link={item.id}
                  className="toc-link block rounded-md px-3 py-1 text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-zinc-700"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ▸ Article */}
        <article className="space-y-14">
          {/* SECTION TEMPLATE */}
          {[
            {
              id: "info",
              title: "1. Information We Collect",
              icon: <User className="h-6 w-6 text-indigo-600" />,
              items: [
                "Personal identifiers (name, e‑mail) when you register or contact us.",
                "Device data – OS, version, country & language — purely for analytics.",
                "Optional permissions (camera, storage, location) only if required."
              ],
            },
            {
              id: "usage",
              title: "2. How We Use Information",
              icon: <RefreshCcw className="h-6 w-6 text-indigo-600" />,
              items: [
                "Operate and improve app performance.",
                "Personalize in‑app content & offers.",
                "Send product updates, security alerts and support replies.",
              ],
            },
            {
              id: "sharing",
              title: "3. Data Sharing & Security",
              icon: <Lock className="h-6 w-6 text-indigo-600" />,
              items: [
                "We **never sell** your data.",
                "Limited sharing with GDPR‑compliant processors (e.g., Firebase).",
                "Encryption at rest & in transit; periodic security audits.",
              ],
            },
            {
              id: "choices",
              title: "4. Your Choices",
              icon: <ShieldCheck className="h-6 w-6 text-indigo-600" />,
              items: [
                "Request data export or deletion via in‑app settings.",
                "Revoke permissions anytime through your phone’s OS.",
                "Opt‑out of marketing e‑mails in one click.",
              ],
            },
            {
              id: "contact",
              title: "5. Contact Us",
              icon: <Mail className="h-6 w-6 text-indigo-600" />,
              items: [
                <>
                  Questions? E‑mail us at{" "}
                  <span className="text-indigo-700 dark:text-indigo-400 font-semibold">support@realrumpyapps.com</span>
                </>
              ],
            },
          ].map((sec) => (
            <section key={sec.id} id={sec.id} data-section className="scroll-mt-28">
              <div className="flex items-start gap-4">
                {sec.icon}
                <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-400">
                  {sec.title}
                </h2>
              </div>
              <ul className="mt-4 list-disc ml-8 space-y-2 text-gray-700 dark:text-gray-300 [&_strong]:font-semibold">
                {sec.items.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </section>
          ))}
        </article>
      </main>

      {/* ─── Footer small print  ──────────────────────────────────────── */}
      <footer className="text-center text-sm text-gray-500 dark:text-gray-400 mt-20 pb-12">
        Last updated&nbsp;·&nbsp;June&nbsp;2025
      </footer>
    </div>
  );
};
export default Privacy