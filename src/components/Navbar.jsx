import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-gradient-to-br from-emerald-400 to-sky-500 shadow-inner" />
            <span className="font-extrabold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">
              ChalkUp
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-slate-700 hover:text-slate-900">Features</a>
            <a href="#rankings" className="text-sm font-medium text-slate-700 hover:text-slate-900">Rankings</a>
            <a href="https://www.chalkup.app" target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-700 hover:text-slate-900">Website</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#signin" className="text-sm font-semibold text-slate-700 hover:text-slate-900">Sign in</a>
            <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white text-sm font-semibold px-4 py-2 shadow hover:bg-slate-800">
              Get Started
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-slate-200 text-slate-700"
            onClick={() => setOpen(!open)}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-200 py-4 space-y-2">
            <a href="#features" className="block text-sm font-medium text-slate-700">Features</a>
            <a href="#rankings" className="block text-sm font-medium text-slate-700">Rankings</a>
            <a href="https://www.chalkup.app" target="_blank" rel="noreferrer" className="block text-sm font-medium text-slate-700">Website</a>
            <div className="pt-2 flex items-center gap-2">
              <a href="#signin" className="text-sm font-semibold text-slate-700">Sign in</a>
              <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white text-sm font-semibold px-3 py-2">
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
