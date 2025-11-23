import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const FloatingActions = () => {
  const phone = "9949196343";
  const text = `Hi! I’m interested in starting a project. Could you please provide more information?`;

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="
        fixed bottom-6 right-6 z-50 
        flex items-center gap-4
      "
    >
      {/* Scroll-To-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="
            w-12 h-12 rounded-full
            flex items-center justify-center
            bg-primary text-white
            shadow-lg shadow-primary/40
            hover:scale-110 transition-all
            backdrop-blur-md
          "
        >
          <ArrowUp size={22} />
        </button>
      )}

      {/* WhatsApp Button */}
      <img
        src="https://i.pinimg.com/736x/c6/09/0d/c6090df18193e2616a6a32076883b70c.jpg"
        alt="WhatsApp"
        onClick={openWhatsApp}
        className="
          w-12 h-12 rounded-full
          cursor-pointer
          hover:scale-110 transition-all
          animate-pulse
        "
      />
    </div>
  );
};

export default FloatingActions;
