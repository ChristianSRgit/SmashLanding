import Image from "next/image"

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export default function LandingPage() {
  return (
    <main className="min-h-dvh bg-background flex flex-col">
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-8 text-center">
        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-0.5">
          BAJONEANDO SMASH
        </p>

        <h1 className="text-primary text-2xl sm:text-4xl md:text-5xl font-black uppercase leading-tight tracking-tight max-w-2xl text-balance mb-2">
          Hamburguesas SMASH de verdad!
        </h1>

        <p className="text-foreground text-base sm:text-lg max-w-md mb-0 mt-0.5">
          La Calidad no se negocia.
          <br />
          Entrega de 15 a 30 minutos.
        </p>

        <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg my-6">
          <Image
            src="/burger.png"
            alt="hamburguesa smash artesanal en San Isidro"
            width={600}
            height={600}
            priority
            sizes="(max-width: 640px) 384px, (max-width: 768px) 448px, 512px"
            className="w-full h-auto"
          />
        </div>

        <a
          id="cta-whatsapp"
          href="https://api.whatsapp.com/send/?phone=541121873161&text=Quiero%20hacer%20un%20pedido!"
          className="inline-block bg-accent text-accent-foreground text-xl sm:text-2xl font-black uppercase px-12 py-4 rounded-lg mt-4 transition-transform hover:scale-105 active:scale-95"
        >
          QUIERO!!!
        </a>

        <p className="text-foreground text-sm sm:text-base mt-4">
          {'Envío GRATIS a todo San Isidro 📍'}
        </p>

        <div className="mt-6 space-y-1 text-muted-foreground text-xs sm:text-sm">
          <p>
            <span className="text-yellow-400">{'★'}</span> 4.8 en Google (31 opiniones) · <span className="text-yellow-400">{'★'}</span> 4.8 en PedidosYa (59 opiniones)
          </p>
          <p className="text-foreground font-medium">
            {'Más de 1000 bajoneros felices'}
          </p>
        </div>
      </section>

      <footer className="py-6 px-4 text-center border-t border-border">
        <p className="text-muted-foreground text-sm mb-3">
          {'Miércoles a Domingo · 19:30 a 01:00'}
        </p>
        <a
          href="https://www.instagram.com/BAJONEANDOSMASH"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          aria-label="Instagram de BAJONEANDO SMASH"
        >
          <InstagramIcon />
          <span className="text-sm">@BAJONEANDOSMASH</span>
        </a>
      </footer>
    </main>
  )
}
