export function PageLoading() {
  return (
    <div
      className="flex min-h-[40vh] items-center justify-center"
      role="status"
      aria-live="polite"
      aria-label="Carregando página"
    >
      <p className="text-sm text-muted-foreground">Carregando…</p>
    </div>
  )
}
