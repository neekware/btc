import Link from "next/link";

const iconClassName =
  "text-muted-foreground hover:text-foreground h-5 w-5 transition-colors";

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
            aria-label="GitHub"
          >
            <svg
              className={iconClassName}
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 1.5A10.5 10.5 0 0 0 8.677 22c.526.097.72-.228.72-.507 0-.249-.009-.908-.014-1.782-2.93.636-3.55-1.413-3.55-1.413-.479-1.214-1.17-1.538-1.17-1.538-.957-.655.072-.642.072-.642 1.058.074 1.615 1.087 1.615 1.087.94 1.61 2.466 1.145 3.067.876.096-.681.368-1.145.67-1.409-2.34-.266-4.8-1.17-4.8-5.208 0-1.15.41-2.09 1.083-2.827-.109-.267-.47-1.341.103-2.796 0 0 .884-.283 2.898 1.08a10.08 10.08 0 0 1 5.278 0c2.013-1.363 2.896-1.08 2.896-1.08.574 1.455.213 2.529.104 2.796.674.737 1.082 1.677 1.082 2.827 0 4.048-2.464 4.94-4.812 5.2.378.326.715.967.715 1.95 0 1.407-.012 2.542-.012 2.888 0 .281.19.609.726.506A10.5 10.5 0 0 0 12 1.5Z" />
            </svg>
          </Link>
          <Link
            href="https://x.com/uNeekVu"
            target="_blank"
            rel="noreferrer"
            aria-label="X"
          >
            <svg
              className={iconClassName}
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
            aria-label="LinkedIn"
          >
            <svg
              className={iconClassName}
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M4.98 3.5a2.48 2.48 0 1 0 0 4.96 2.48 2.48 0 0 0 0-4.96ZM3 8.75h3.96V21H3V8.75Zm6.46 0H13.3v1.67h.05c.53-1 1.83-2.06 3.78-2.06 4.04 0 4.79 2.66 4.79 6.11V21h-3.96v-5.8c0-1.38-.02-3.15-1.92-3.15-1.93 0-2.23 1.5-2.23 3.05V21H9.46V8.75Z" />
            </svg>
          </Link>
          <Link
            href="https://www.youtube.com/@ehAyeEverything"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
          >
            <svg
              className={iconClassName}
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M21.58 7.19a2.99 2.99 0 0 0-2.1-2.12C17.62 4.5 12 4.5 12 4.5s-5.62 0-7.48.57a2.99 2.99 0 0 0-2.1 2.12A31.1 31.1 0 0 0 1.86 12c0 1.62.2 3.24.56 4.81a2.99 2.99 0 0 0 2.1 2.12c1.86.57 7.48.57 7.48.57s5.62 0 7.48-.57a2.99 2.99 0 0 0 2.1-2.12c.36-1.57.56-3.19.56-4.81 0-1.62-.2-3.24-.56-4.81ZM9.75 15.25v-6.5L15.5 12l-5.75 3.25Z" />
            </svg>
          </Link>
          <Link
            href="https://www.twitch.tv/ehayeeverything"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitch"
          >
            <svg
              className={iconClassName}
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M4.5 2.25 2.25 7.5v12h4.5v2.25h2.25L11.25 19.5h3l5.25-5.25V2.25H4.5Zm12.75 10.9-2.6 2.6h-3.4l-2.25 2.25v-2.25H6.75V4.5h10.5v8.65Zm-3-5.9h-1.5v4.5h1.5v-4.5Zm-4.5 0h-1.5v4.5h1.5v-4.5Z" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
