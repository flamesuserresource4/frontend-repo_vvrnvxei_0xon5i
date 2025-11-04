import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-emerald-300/30 blur-3xl" />
        <div className="absolute top-40 -left-20 h-80 w-80 rounded-full bg-sky-300/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900"
            >
              Track. Compete. <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-sky-500">Climb higher.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-lg text-slate-600 max-w-xl"
            >
              ChalkUp is the performance hub for climbers. Log sends, join competitions,
              and see your progress climb with clean analytics and real-time rankings.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white text-sm font-semibold px-6 py-3 shadow hover:bg-slate-800"
              >
                Start tracking
              </a>
              <a
                href="#rankings"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 text-slate-900 text-sm font-semibold px-6 py-3 hover:bg-white/60"
              >
                Explore rankings
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-4 shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-gradient-to-br from-emerald-50 to-sky-50 p-4 border border-emerald-100">
                  <p className="text-xs font-medium text-slate-500">Current Rank</p>
                  <p className="mt-2 text-3xl font-extrabold text-slate-900">#12</p>
                  <p className="mt-1 text-xs text-emerald-600">+4 this week</p>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-sky-50 to-emerald-50 p-4 border border-sky-100">
                  <p className="text-xs font-medium text-slate-500">Flash Rate</p>
                  <p className="mt-2 text-3xl font-extrabold text-slate-900">36%</p>
                  <p className="mt-1 text-xs text-emerald-600">+8% vs last month</p>
                </div>
                <div className="col-span-2 rounded-xl bg-white p-4 border border-slate-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-slate-500">Season Points</p>
                      <p className="mt-1 text-2xl font-bold text-slate-900">1,420</p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">
                      Live
                      <span className="ml-1 block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    </span>
                  </div>
                  <div className="mt-4 h-24 w-full rounded-md bg-gradient-to-r from-emerald-200 via-sky-200 to-emerald-200" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
