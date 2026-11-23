import React from "react";

export default function Footer() {
  const [views, setViews] = React.useState(null);

  React.useEffect(() => {
    const fetchGoatCounterViews = async () => {
      try {
        const res = await fetch(
          "https://nangkyalsinthwe.goatcounter.com/counter/TOTAL.json",
        );
        if (!res.ok) {
          throw new Error("Could not load count");
        }
        const data = await res.json();
        if (data && typeof data.count !== "undefined") {
          setViews(data.count);
        } else {
          setViews(1);
        }
      } catch (error) {
        setViews(1);
      }
    };
    const timer = setTimeout(fetchGoatCounterViews, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="w-full bg-[#0b0a0c] border-t border-pink-500/30 py-6 px-4 text-neutral-300">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm">
        <span
          aria-hidden="true"
          className="w-3.5 h-3.5 rounded-full bg-linear-to-tr from-pink-600 via-pink-400 to-white shadow-[0_0_12px_rgba(236,72,153,0.9)] shrink-0"
        />
        <p className="text-neutral-300 font-medium">
          Designed and Developed by{" "}
          <span className="text-pink-400 hover:text-pink-300 font-bold transition">
            Nang Kyal Sin Thwe
          </span>
        </p>
        <span className="text-pink-500/60 select-none">•</span>
        <div className="inline-flex items-center gap-2 text-neutral-300">
          <span className="font-medium text-neutral-400">Site Views</span>
          <span className="px-2.5 py-0.5 rounded-md bg-pink-950/80 border border-pink-500/40 text-pink-300 font-mono font-bold text-xs shadow-[0_0_8px_rgba(219,39,119,0.25)]">
            {views !== null ? views : "..."}
          </span>
        </div>
      </div>
    </footer>
  );
}
