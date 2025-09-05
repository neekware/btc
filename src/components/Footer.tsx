import Link from "next/link";
import { Github, Linkedin, Twitch, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t py-6 md:py-0">
      <div className="mx-auto flex flex-col items-center justify-between gap-4 px-4 md:h-24 md:flex-row md:px-6 lg:px-8">
        <p className="text-muted-foreground text-sm">
          © 2006-2025 Neekware Inc.
          <span className="md:hidden"> All rights reserved.</span>
        </p>
        <p className="text-muted-foreground text-sm">
          Powered by{" "}
          <Link
            href="https://eh-aye.net"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            ehAye<span className="align-super text-xs">™</span> Engine
          </Link>
        </p>
        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com/un33k"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="text-muted-foreground hover:text-foreground h-5 w-5 transition-colors" />
          </Link>
          <Link href="https://x.com/uNeekVu" target="_blank" rel="noreferrer">
            <svg
              className="text-muted-foreground hover:text-foreground h-5 w-5 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com/in/neekman/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="text-muted-foreground hover:text-foreground h-5 w-5 transition-colors" />
          </Link>
          <Link
            href="https://www.youtube.com/@ehAyeEverything"
            target="_blank"
            rel="noreferrer"
          >
            <Youtube className="text-muted-foreground hover:text-foreground h-5 w-5 transition-colors" />
          </Link>
          <Link
            href="https://www.twitch.tv/ehayeeverything"
            target="_blank"
            rel="noreferrer"
          >
            <Twitch className="text-muted-foreground hover:text-foreground h-5 w-5 transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
