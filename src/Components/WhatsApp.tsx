"use client";
const WhatsAppButton = () => {

  const handleWhatsAppClick  = () => {
    window.open('https://wa.me/918368912200?text=Hello');
  };

  return (
    <div
      className="fixed bottom-4 right-4 z-50 transition-opacity duration-300"
    >
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-full shadow-lg"
        onClick={handleWhatsAppClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-6 w-6 inline-block"
        >
          <path
            fill="currentColor"
            d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z"
          />
        </svg>
        <span className="ml-2">WhatsApp</span>
      </button>
    </div>
  );
};

export default WhatsAppButton;