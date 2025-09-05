import Link from "next/link";
import { useRouter } from "next/router";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";

export default function Custom404() {
  const router = useRouter();

  return (
    <Layout>
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
        <h2 className="mb-4 text-2xl font-semibold">Page Not Found</h2>
        <p className="mb-8 text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/">
            <Button>Go to Homepage</Button>
          </Link>
          <Button variant="outline" onClick={() => router.back()}>
            Go Back
          </Button>
        </div>
      </div>
    </Layout>
  );
}
