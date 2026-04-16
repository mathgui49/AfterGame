import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <Logo />
            <p className="mt-3 text-xs text-white/50 max-w-sm">
              AfterGame est un jeu pour adultes consentants. Jouez toujours
              dans le respect et l&apos;écoute de l&apos;autre.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <span className="rounded-full px-3 py-1 border border-white/10">
              18+
            </span>
            <span>© {new Date().getFullYear()} AfterGame</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
