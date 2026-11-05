import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts'

interface PillarRadarProps {
  data: Array<{ pillar: string; score: number }>
}

export function PillarRadar({ data }: PillarRadarProps) {
  const chartData = data.map((item) => ({
    pillar: item.pillar.split(' ')[0],
    fullName: item.pillar,
    score: item.score,
  }))

  return (
    <div className="glass rounded-3xl p-4 sm:p-6">
      <h3 className="mb-2 px-2 font-display text-lg font-semibold">
        Radar de pilares
      </h3>
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={chartData} cx="50%" cy="50%" outerRadius="70%">
            <PolarGrid stroke="#243056" />
            <PolarAngleAxis
              dataKey="pillar"
              tick={{ fill: '#cbd5e1', fontSize: 12 }}
            />
            <Radar
              name="Puntaje"
              dataKey="score"
              stroke="#22d3ee"
              fill="#7c5cff"
              fillOpacity={0.35}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
