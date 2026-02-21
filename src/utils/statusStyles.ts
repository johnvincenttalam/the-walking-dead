import type { Character } from "../types/character"

type Status = Character["status"]

export const statusDot: Record<Status, string> = {
  Alive: "bg-emerald-500",
  Deceased: "bg-red-500",
  Unknown: "bg-amber-500",
}

export const statusText: Record<Status, string> = {
  Alive: "text-emerald-400",
  Deceased: "text-red-400",
  Unknown: "text-amber-400",
}

export const statusBadge: Record<Status, string> = {
  Alive: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  Deceased: "text-red-400 bg-red-500/10 border-red-500/20",
  Unknown: "text-amber-400 bg-amber-500/10 border-amber-500/20",
}

export const FALLBACK_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='800' fill='%23141414'%3E%3Crect width='600' height='800'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%23333' font-size='18' dy='.3em'%3EImage Unavailable%3C/text%3E%3C/svg%3E"
