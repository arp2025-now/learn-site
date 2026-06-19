export default function Footer() {
  return (
    <footer className="border-t border-card-border mt-20 py-12">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-muted text-sm mb-4">
          רוצים שנקים לכם מערכת כזו? אנחנו עושים את זה עבורכם.
        </p>
        <a
          href="https://apauto.co.il/#contact"
          className="inline-block bg-purple text-white font-medium px-6 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
        >
          לפגישת ייעוץ חינם ←
        </a>
        <p className="text-muted/50 text-xs mt-8">
          © {new Date().getFullYear()} AP Automations. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  )
}
