export function GovTopBar() {
  return (
    <div
      className="bg-govbar text-govbar-foreground"
      role="region"
      aria-label="Identidade gov.br"
    >
      <div className="flex h-8 w-full items-center justify-center px-4 text-xs font-semibold tracking-wide sm:justify-start sm:px-6 lg:px-8">
        <span className="opacity-95">gov.br</span>
        <span className="mx-2 hidden font-normal opacity-60 sm:inline" aria-hidden>
          |
        </span>
        <span className="hidden font-normal opacity-90 sm:inline">
          Cadastro Rural
        </span>
      </div>
    </div>
  )
}
