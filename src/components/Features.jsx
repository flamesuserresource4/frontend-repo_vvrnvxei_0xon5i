import { Trophy, BarChart3, Target, Users } from 'lucide-react'

const features = [
  {
    title: 'Competition-first',
    desc: 'Create events, set categories, and watch leaderboards update in real-time.',
    icon: Trophy,
  },
  {
    title: 'Progress analytics',
    desc: 'See trends across grades, styles, and gyms. PRs and flashes at a glance.',
    icon: BarChart3,
  },
  {
    title: 'Goal tracking',
    desc: 'Define projects and training blocks, then measure the impact on results.',
    icon: Target,
  },
  {
    title: 'Community rankings',
    desc: 'Compare with friends, teams, and local gyms. Climb together, improve faster.',
    icon: Users,
  },
]

function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Built for climbers who love progress
          </h2>
          <p className="mt-4 text-slate-600">
            ChalkUp brings competition energy to your everyday training with clean,
            actionable insights and frictionless logging.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-md bg-gradient-to-br from-emerald-400 to-sky-500 text-white flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
