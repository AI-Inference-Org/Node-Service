import { cn } from "../lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div
      className={cn("flex flex-1 items-center justify-between", className)}
      {...props}
    >
      {/* <Logo /> */}
      <nav className="flex items-center space-x-4 lg:space-x-6">
        <a
          href="/customer/login"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Buy Services
        </a>
        <a
          href="/provider/login"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Sell Services
        </a>
        <a
          href="/organization-signup"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Organization
        </a>
        <a
          href="/user-signup"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Service Providers
        </a>
        {/* <ModeToggle /> */}
      </nav>
    </div>
  );
}
