export default function Footer() {
  return (
    <footer className="relative bg-background border-t border-accent/[0.06]">
      <div className="max-w-full mx-auto px-6 lg:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {/* Brand */}
          <div>
            <span className="font-display text-3xl text-accent tracking-[3px]">
              TWD
            </span>
            <p className="text-body/30 text-base leading-[1.9] max-w-xs mt-4 font-body font-light">
              A cinematic tribute to The Walking Dead. Exploring the characters,
              stories, and moments that defined a generation of television.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-accent/50 mb-5 font-body font-medium">
              Explore
            </h4>
            <ul className="space-y-3">
              {["Characters", "Iconic Scenes", "Timeline", "Death Toll", "Quotes", "Survival Guide", "Easter Eggs", "Memorial"].map((item) => (
                <li key={item}>
                  <a
                    href={`/#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-body/45 hover:text-accent transition-colors text-base font-body font-light"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-accent/50 mb-5 font-body font-medium">
              About This Project
            </h4>
            <p className="text-body/30 text-base leading-[1.9] font-body font-light">
              Built as a UI/UX showcase demonstrating dark cinematic design,
              scroll-driven storytelling, and responsive component architecture.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-accent/[0.04] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-body/20 text-sm font-body font-light">
            &copy; {new Date().getFullYear()} TWD Universe Experience. Fan project — not affiliated with AMC.
          </p>
          <p className="text-body/15 text-xs tracking-wider font-body font-light">
            React &middot; TypeScript &middot; TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  )
}
