function CTA() {
  return (
    <section id="get-started" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="px-6 py-12 md:px-12 md:py-16 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Ready to ChalkUp?
              </h3>
              <p className="mt-4 text-slate-300">
                Join the community, log your first send, and see where you stand.
                Your climbing story, beautifully measured.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#signin" className="inline-flex items-center justify-center rounded-md bg-white text-slate-900 text-sm font-semibold px-6 py-3 shadow hover:bg-slate-100">
                  Create free account
                </a>
                <a href="https://www.chalkup.app" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md border border-white/20 text-white text-sm font-semibold px-6 py-3 hover:bg-white/10">
                  Learn more
                </a>
              </div>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <dl className="grid grid-cols-2 gap-6 text-white">
                <div>
                  <dt className="text-sm text-slate-300">Competitions hosted</dt>
                  <dd className="mt-1 text-3xl font-extrabold">1.2k+</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-300">Sends logged</dt>
                  <dd className="mt-1 text-3xl font-extrabold">2.4M</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-300">Gyms on platform</dt>
                  <dd className="mt-1 text-3xl font-extrabold">350+</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-300">Countries</dt>
                  <dd className="mt-1 text-3xl font-extrabold">40</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
