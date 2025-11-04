import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-sky-50">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="rankings" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Live Rankings</h3>
                  <p className="text-sm text-slate-600 mt-1">Season standings update as new sends roll in.</p>
                </div>
                <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white text-sm font-semibold px-4 py-2 shadow hover:bg-slate-800">
                  Join the leaderboard
                </a>
              </div>
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1,2,3,4,5,6].map((i) => (
                  <div key={i} className="rounded-xl border border-slate-200 p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-400 to-sky-500 text-white flex items-center justify-center font-bold">{i}</div>
                      <div>
                        <p className="font-semibold text-slate-900">Climber {i}</p>
                        <p className="text-xs text-slate-600">Points: {1600 - i * 12}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <footer className="py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} ChalkUp. All rights reserved.
      </footer>
    </div>
  )
}

export default App
