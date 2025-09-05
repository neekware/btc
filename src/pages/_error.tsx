import type { NextPageContext } from "next";
import Link from "next/link";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";

interface ErrorProps {
  statusCode?: number;
}

function Error({ statusCode }: ErrorProps) {
  return (
    <Layout>
      <div className="container flex min-h-[80vh] flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold text-destructive">
            {statusCode || "Error"}
          </h1>
          <h2 className="mb-4 text-2xl font-semibold">
            {statusCode === 404
              ? "Page Not Found"
              : statusCode === 403
                ? "Access Forbidden"
                : statusCode === 500
                  ? "Internal Server Error"
                  : "An error occurred"}
          </h2>
          <p className="mb-8 text-muted-foreground">
            {statusCode === 404
              ? "The page you&apos;re looking for doesn&apos;t exist."
              : statusCode === 403
                ? "You don&apos;t have permission to access this resource."
                : statusCode === 500
                  ? "Something went wrong on our server."
                  : "Something unexpected happened."}
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/">
              <Button>Go to Homepage</Button>
            </Link>
            <Button variant="outline" onClick={() => window.history.back()}>
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
