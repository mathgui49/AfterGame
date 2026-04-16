"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Flame, ShieldAlert, Sparkles } from "lucide-react";

const STORAGE_KEY = "aftergame:adult_confirmed_v1";

export function AgeGate() {
  const [mounted, setMounted] = useState(false);
  const [confirmed, setConfirmed] = useState(true);
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      setConfirmed(raw === "true");
    } catch {
      setConfirmed(false);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {}
    setConfirmed(true);
  };

  const deny = () => setDenied(true);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {!confirmed && (
        <motion.div
          key="gate"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          style={{
            backdropFilter: "blur(28px) saturate(140%)",
            WebkitBackdropFilter: "blur(28px) saturate(140%)",
            background:
              "radial-gradient(ellipse at center, rgba(20, 0, 20, 0.75), rgba(0, 0, 0, 0.92))",
          }}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
            className="glass-strong noise relative w-full max-w-md rounded-3xl p-7 sm:p-9 glow-velvet overflow-hidden"
          >
            {/* Decorative flame */}
            <div className="absolute -top-6 -right-6 text-ember-500/30">
              <Flame className="h-32 w-32 flame-filter" />
            </div>

            <div className="relative">
              <div className="flex items-center gap-2 text-ember-400">
                <ShieldAlert className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                  Accès réservé
                </span>
              </div>

              <h1 className="mt-4 font-display text-3xl sm:text-4xl font-bold leading-tight">
                <span className="shimmer-text">AfterGame</span>
              </h1>
              <p className="mt-3 text-sm sm:text-base text-white/70 leading-relaxed">
                Ce site contient du contenu pour adultes : défis intimes, cartes
                coquines et jeux à deux. Certifie ton âge pour continuer.
              </p>

              {!denied ? (
                <>
                  <div className="mt-6 glass rounded-2xl p-4 text-sm text-white/80 flex items-start gap-3">
                    <Sparkles className="h-5 w-5 shrink-0 text-velvet-300 mt-0.5" />
                    <p>
                      En cliquant sur <b>J&apos;ai 18 ans et plus</b>, tu
                      confirmes être majeur·e et consentant·e à découvrir du
                      contenu à caractère sexuel.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={accept}
                      className="btn-hot no-select flex-1 rounded-full px-6 py-3.5 font-semibold text-white text-sm sm:text-base"
                    >
                      J&apos;ai 18 ans et plus
                    </button>
                    <button
                      onClick={deny}
                      className="no-select flex-1 rounded-full px-6 py-3.5 font-medium text-white/70 text-sm sm:text-base border border-white/15 hover:bg-white/5 transition"
                    >
                      Je suis mineur·e
                    </button>
                  </div>

                  <p className="mt-5 text-[11px] text-white/40 leading-relaxed">
                    AfterGame se joue entre adultes consentants. Aucun défi ne
                    doit être réalisé sans l&apos;accord explicite de ton / ta
                    partenaire. Le fun avant tout, toujours dans le respect.
                  </p>
                </>
              ) : (
                <div className="mt-6 glass rounded-2xl p-5 text-center">
                  <p className="text-white/85">
                    Désolé, ce contenu est strictement réservé aux adultes. À
                    bientôt quand tu auras 18 ans 👋
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
