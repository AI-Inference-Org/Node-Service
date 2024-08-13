import { cn } from "../lib/utils";
import Logo from "./Logo";
// import { ModeToggle } from "@/app/components/mode-toggle";

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
          href="#"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Customer Login
        </a>
        <a
          href="E"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Seller Login
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
