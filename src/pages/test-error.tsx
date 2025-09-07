import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";

export default function TestError() {
  const trigger404 = () => {
    window.location.href = "/this-page-does-not-exist";
  };

  const triggerError = () => {
    throw new Error("Test error!");
  };

  return (
    <Layout>
      <Head>
        <title>Error Test Page | Betsey (bTc)</title>
        <meta
          name="description"
          content="Test error handling, error boundaries, and error states. Essential error testing for robust automation frameworks."
        />
      </Head>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Test Error Pages</h1>
        <div className="flex gap-4">
          <Button onClick={trigger404}>Test 404 Page</Button>
          <Button onClick={triggerError} variant="destructive">
            Test Error Page
          </Button>
        </div>
      </div>
    </Layout>
  );
}
