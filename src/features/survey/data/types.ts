export type ProfileId = 'A' | 'B'
export type ZoneId = 'red' | 'yellow' | 'green'
export type Rating = 1 | 2 | 3 | 4 | 5

export interface Profile {
  id: ProfileId
  title: string
  shortLabel: string
  description: string
  scaleLow: string
  scaleHigh: string
}

export interface Question {
  id: string
  profileId: ProfileId
  order: number
  pillar: string
  title: string
  description: string
  icon: string
}

export interface Zone {
  id: ZoneId
  min: number
  max: number
  label: string
  badge: string
  colorClass: string
  messages: Record<ProfileId, string>
}

export interface WorkPhase {
  name: string
  duration: string
  items: string[]
}

export interface WorkPlan {
  profileId: ProfileId
  zoneId: ZoneId
  title: string
  summary: string
  phases: WorkPhase[]
  kpis: string[]
  services: string[]
}
