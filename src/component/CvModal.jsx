import React from "react";

const CvModal = ({ isOpen, onClose }) => {
  const cvPdfUrl = `${import.meta.env.BASE_URL}Nang_Kyal_Sin_Thwe_CV.pdf`;
  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="CV Preview Modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl h-[88vh] bg-[#0b0a0c] text-white rounded-2xl border border-pink-500/40 shadow-[0_0_40px_rgba(219,39,119,0.25)] flex flex-col overflow-hidden"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 bg-neutral-950 border-b border-pink-500/20">
          <div>
            <h3 className="text-lg font-bold text-white">
              Nang Kyal Sin Thwe — CV
            </h3>
            <p className="text-xs text-neutral-400">
              Aspiring Full-Stack Developer • React, TypeScript, Node.js, SQL
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={cvPdfUrl}
              download="Nang_Kyal_Sin_Thwe_CV.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-pink-600 hover:bg-pink-700 text-white text-xs sm:text-sm font-bold px-4 py-2 transition cursor-pointer"
            >
              <span>Download PDF</span>
              <span>↓</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close CV preview"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-pink-600/30 text-neutral-300 hover:text-white flex items-center justify-center transition cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="flex-1 bg-neutral-900/70 p-4 sm:p-6 overflow-y-auto">
          <div className="w-full h-full min-h-125 bg-white rounded-xl overflow-hidden shadow-inner">
            <iframe
              src={`${cvPdfUrl}#toolbar=0`}
              title="CV Preview"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvModal;
