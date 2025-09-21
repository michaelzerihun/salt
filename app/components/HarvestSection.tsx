import { Button } from "@/components/ui/button";

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

      <footer className="p-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full w-12 h-12 p-0"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z" />
                </svg>
              </Button>

              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full w-12 h-12 p-0"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </Button>
            </div>

            <div className="flex gap-8">
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
