import * as React from "react"
import Link from "next/link"

// import { footerLinks, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
// import { ModeToggle } from "@/components/layout/mode-toggle";

// import { NewsletterForm } from "@/components/forms/newsletter-form";
import { Icons } from "@/components/shared/icons";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("border-t", className)}>
      <div className="container grid max-w-6xl grid-cols-2 gap-6 py-14 md:grid-cols-5">
       <p>Footer</p>     
      </div>
    </footer>
  );
}
