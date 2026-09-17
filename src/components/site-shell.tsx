import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

const navigation = [
  { to: "/", label: "Story" },
  { to: "/reviews", label: "Reviews" },
  { to: "/guides", label: "Buying guide" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-50 -translate-y-24 bg-primary px-4 py-3 font-semibold text-primary-foreground transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <Link to="/" className="w-fit py-2 text-sm font-semibold text-foreground no-underline">
            A buyer’s account
          </Link>
          <nav aria-label="Primary navigation">
            <ul className="flex items-center gap-1">
              {navigation.map((item) => {
                const isActive = pathname === item.to;
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      aria-current={isActive ? "page" : undefined}
                      className={`inline-flex min-h-11 items-center border-b-2 px-2 text-sm font-medium no-underline transition-colors sm:px-3 ${
                        isActive
                          ? "border-primary text-primary"
                          : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
      {children}
      <footer className="mt-24 border-t border-border bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6">
          <div>
            <p className="text-sm font-semibold text-foreground">Contact</p>
            <a className="mt-2 inline-flex min-h-11 items-center text-primary" href="mailto:author@example.com">
              author@example.com
            </a>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground sm:justify-self-end">
            An independent editorial project by the author. Northvale Motors and all events described here are placeholder content for evaluation.
          </p>
        </div>
      </footer>
    </>
  );
}