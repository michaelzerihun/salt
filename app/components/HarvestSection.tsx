import Image from "next/image";

export function HarvestSection() {
  return (
    <section className="min-h-screen flex flex-col justify-between relative z-10">
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Join our community and harvest $SALT
          </h2>
        </div>
      </div>

      <div className="px-32">
        <div className="flex gap-8 items-center justify-center border-b border-white/20 pb-6">
          <a
            href="#"
            className="text-white hover:text-white/80 transition-colors"
          >
            How It Works
          </a>
          <a
            href="#"
            className="text-white hover:text-white/80 transition-colors"
          >
            Buy Salt AI
          </a>
        </div>
      </div>

      <footer className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-4">
              <Image
                src="/images/telegram.png"
                alt="Telegram"
                width={36}
                height={36}
                className="hover:opacity-80 transition-opacity cursor-pointer"
              />
              <Image
                src="/images/x.png"
                alt="X/Twitter"
                width={36}
                height={36}
                className="hover:opacity-80 transition-opacity cursor-pointer"
              />
            </div>

            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white/80 transition-colors">
                Terms of Use
              </a>
              <a href="#" className="hover:text-white/80 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white/80 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
