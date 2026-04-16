"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, X, Smartphone } from "lucide-react";
import { useCouple } from "@/lib/couple";

const DISMISS_KEY = "aftergame:install_dismissed_v1";

// Minimal type for the beforeinstallprompt event
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

export function InstallPrompt() {
  const { isInitialized } = useCouple();
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [installed, setInstalled] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [showIOS, setShowIOS] = useState(false);

  useEffect(() => {
    // Already dismissed?
    try {
      if (localStorage.getItem(DISMISS_KEY) === "true") setDismissed(true);
    } catch {}

    // Already running as standalone (installed)?
    const isStandalone =
      typeof window !== "undefined" &&
      (window.matchMedia("(display-mode: standalone)").matches ||
        // iOS Safari
        // @ts-expect-error — non-standard
        window.navigator.standalone === true);
    if (isStandalone) setInstalled(true);

    // Chrome / Edge / Android: beforeinstallprompt
    const onInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", onInstallPrompt);

    const onInstalled = () => setInstalled(true);
    window.addEventListener("appinstalled", onInstalled);

    // iOS Safari doesn't fire beforeinstallprompt — detect + offer manual steps
    const ua = window.navigator.userAgent || "";
    const isIOS = /iPad|iPhone|iPod/.test(ua) && !("MSStream" in window);
    const isSafari = /^((?!chrome|android|crios|fxios).)*safari/i.test(ua);
    if (isIOS && isSafari && !isStandalone) {
      setShowIOS(true);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", onInstallPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  const install = async () => {
    if (!deferred) return;
    await deferred.prompt();
    const choice = await deferred.userChoice;
    if (choice.outcome === "accepted") {
      setInstalled(true);
    }
    setDeferred(null);
  };

  const dismiss = () => {
    setDismissed(true);
    try {
      localStorage.setItem(DISMISS_KEY, "true");
    } catch {}
  };

  const visible =
    isInitialized &&
    !installed &&
    !dismissed &&
    (deferred !== null || showIOS);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="install-prompt"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm z-[70]"
        >
          <div className="rounded-3xl p-0.5 bg-gradient-to-br from-ember-500 via-velvet-500 to-midnight-600 glow-velvet">
            <div className="relative rounded-[calc(1.5rem-2px)] bg-[#0d0513]/95 p-5 noise overflow-hidden">
              <button
                aria-label="Fermer"
                onClick={dismiss}
                className="absolute top-3 right-3 p-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/5 transition"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-2 text-velvet-300">
                <Smartphone className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                  Installer AfterGame
                </span>
              </div>
              <div className="mt-2 font-display text-xl font-bold">
                Gardez l&apos;app à portée
              </div>
              <p className="mt-1 text-sm text-white/65 leading-snug">
                Ajoutez-la à votre écran d&apos;accueil pour un accès direct,
                en plein écran, plus discret.
              </p>

              {deferred ? (
                <button
                  onClick={install}
                  className="btn-hot mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
                >
                  <Download className="h-4 w-4" /> Installer maintenant
                </button>
              ) : (
                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-3 text-[12px] text-white/75 leading-snug">
                  Sur iPhone / iPad — Safari : touche le bouton{" "}
                  <b>Partager</b> puis <b>« Sur l&apos;écran d&apos;accueil »</b>.
                </div>
              )}
              <p className="mt-3 text-[11px] text-white/35">
                Sur ordinateur : ajoutez en favoris avec{" "}
                <kbd className="rounded bg-white/10 px-1">Ctrl/⌘ + D</kbd>.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
