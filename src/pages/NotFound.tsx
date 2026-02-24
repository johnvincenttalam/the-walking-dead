import { Link } from "react-router-dom"
import { assetUrl } from "../utils/assetUrl"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Rick cutout — faded into background */}
      <img
        src={assetUrl("/images/rpynnv_large.png")}
        alt=""
        aria-hidden="true"
        className="absolute right-0 bottom-0 h-[80%] opacity-[0.07] pointer-events-none object-contain"
      />

      <div className="text-center space-y-5 relative z-10">
        <h1 className="font-display text-6xl md:text-8xl text-accent tracking-[5px]">
          404
        </h1>
        <p className="text-body/40 text-base font-body font-light">
          This path leads nowhere. The herd has moved on.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#2a2a2a] border border-accent text-accent hover:text-accent-glow px-6 py-3 rounded-lg text-base font-body tracking-wider transition-all hover:shadow-[0_0_15px_rgba(199,162,93,0.1)]"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
