export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase border border-[#30363d]">
          Invoice &amp; Billing
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Audit Time Tracking for{" "}
          <span className="text-[#58a6ff]">Billing Accuracy</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Analyze time entries for patterns, flag suspicious blocks, and unlock
          actionable insights to maximize project profitability — all in one dashboard.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get Started — $13/mo
        </a>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: "Pattern Detection", desc: "Automatically flag duplicate, rounded, or suspiciously short time entries." },
            { title: "Profitability Insights", desc: "See true project margins by comparing billed vs. actual hours in real time." },
            { title: "Rate Optimization", desc: "Get data-driven suggestions to adjust billing rates for each client or project." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] text-xs font-semibold uppercase tracking-widest mb-3">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$13<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to audit and optimize billing</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "CSV upload & API integrations",
              "Suspicious entry flagging",
              "Analytics dashboard",
              "Profitability calculator",
              "Billing rate suggestions",
              "Unlimited projects"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold hover:bg-[#79b8ff] transition-colors"
          >
            Start Auditing Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            {
              q: "What time tracking tools does it support?",
              a: "You can import data via CSV from any tool (Toggl, Harvest, Clockify, etc.) or connect directly via API integrations."
            },
            {
              q: "How does suspicious entry detection work?",
              a: "Our pattern detection algorithms flag entries with unusual rounding, duplicate timestamps, abnormally short or long blocks, and outliers compared to your historical averages."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel anytime from your billing portal with no questions asked. You keep access until the end of your billing period."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#484f58] text-xs pb-8">
        &copy; {new Date().getFullYear()} Freelancer Time Audit Analyzer. All rights reserved.
      </footer>
    </main>
  );
}
