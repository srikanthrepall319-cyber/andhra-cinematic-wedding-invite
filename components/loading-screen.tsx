export function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory">
      <div className="text-center">
        <div className="diya-glow mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-maroon font-serif text-2xl text-gold">
          ✦
        </div>
        <p className="font-serif text-3xl font-light text-maroon">
          Preparing your invitation…
        </p>
        <p className="mt-2 text-sm text-ink/45">A little sparkle is on its way.</p>
      </div>
    </div>
  );
}