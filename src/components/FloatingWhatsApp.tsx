const FloatingWhatsApp = () => {
  const phone = "919123456789"; // replace with your number
  const text = "Hi! I’m interested in starting a project.";

  const handleClick = () => {
    window.open(
      "https://wa.me/" + phone + "?text=" + encodeURIComponent(text),
      "_blank"
    );
  };

  return (
    <img
      src="https://i.pinimg.com/736x/c6/09/0d/c6090df18193e2616a6a32076883b70c.jpg"
      alt="WhatsApp"
      onClick={handleClick}
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14
        cursor-pointer
        rounded-full
        hover:scale-110
        transition-all
        animate-bounce
      "
    />
  );
};

export default FloatingWhatsApp;
