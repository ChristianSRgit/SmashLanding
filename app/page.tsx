import Image from "next/image"
import { Instagram } from "lucide-react"

export default function LandingPage() {
  return (
    <main className="min-h-dvh bg-background flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-8 text-center">
        {/* Brand Name */}
        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-0.5">
          BAJONEANDO SMASH
        </p>

        {/* Main Headline */}
        <h1 className="text-primary sm:text-4xl md:text-5xl font-black uppercase leading-tight tracking-tight max-w-2xl text-balance mb-2 leading-7 text-2xl">
          Hamburguesas SMASH de verdad!
        </h1>

        {/* Subheadline */}
        <p className="text-foreground text-base sm:text-lg max-w-md mb-0 mt-0.5">
          La Calidad no se negocia.
          <br />
          Entrega de 15 a 30 minutos.
        </p>

        {/* Hero Image */}
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md my-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cheddar%20triple.png-muFs5TziEMzIUFUZfLViFPcjGayjTo.jpeg"
            alt="hamburguesa smash artesanal en San Isidro"
            width={500}
            height={500}
            priority
            className="w-full object-contain leading-7 h-auto"
          />
        </div>

        {/* CTA Button */}
        <a
          id="cta-whatsapp"
          href="https://api.whatsapp.com/send/?phone=541121873161&text=Quiero%20hacer%20un%20pedido!"
          className="inline-block bg-accent text-accent-foreground text-xl sm:text-2xl font-black uppercase px-12 py-4 rounded-lg mt-4 transition-transform hover:scale-105 active:scale-95"
        >
          QUIERO!
        </a>

        {/* Delivery Info */}
        <p className="text-foreground text-sm sm:text-base mt-4">
          Envío GRATIS a todo San Isidro 📍
        </p>

        {/* Social Proof */}
        <div className="mt-6 space-y-1 text-muted-foreground text-xs sm:text-sm">
          <p>
            <span className="text-yellow-400">★</span> 4.8 en Google (31 opiniones) · <span className="text-yellow-400">★</span> 4.8 en PedidosYa (59 opiniones)
          </p>
          <p className="text-foreground font-medium">
            Más de 1000 bajoneros felices
          </p>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-6 px-4 text-center border-t border-border">
        <p className="text-muted-foreground text-sm mb-3">
          Miércoles a Domingo · 19:30 a 01:00
        </p>
        <a
          href="https://www.instagram.com/BAJONEANDOSMASH"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          aria-label="Instagram de BAJONEANDO SMASH"
        >
          <Instagram className="w-5 h-5" />
          <span className="text-sm">@BAJONEANDOSMASH</span>
        </a>
      </footer>
    </main>
  )
}
