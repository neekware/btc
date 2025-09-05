import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Hash,
  Home,
  RotateCcw,
} from "lucide-react";
import { Layout } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Navigation() {
  const [visitCount, setVisitCount] = useState(1);
  const router = useRouter();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h1 className="gradient-text mb-4 text-4xl font-bold">
              Navigation Tests
            </h1>
            <p className="text-muted-foreground text-lg">
              Test various navigation methods and routing
            </p>
            <Badge variant="outline" className="mt-2">
              Page visits: {visitCount}
            </Badge>
          </div>

          <div className="mb-8 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ExternalLink className="h-5 w-5" />
                  Links Navigation
                </CardTitle>
                <CardDescription>
                  Navigation using Next.js Link components
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-md px-3 py-2 transition-colors"
                  >
                    <Home className="h-4 w-4" />
                    Home
                  </Link>
                  <Link
                    href="/forms"
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90 inline-flex items-center gap-2 rounded-md px-3 py-2 transition-colors"
                  >
                    Forms
                  </Link>
                  <Link
                    href="/interactions"
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90 inline-flex items-center gap-2 rounded-md px-3 py-2 transition-colors"
                  >
                    Interactions
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Programmatic Navigation</CardTitle>
                <CardDescription>
                  Navigation using the Next.js router
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Button
                    onClick={() => router.push("/")}
                    className="flex items-center gap-2"
                  >
                    <Home className="h-4 w-4" />
                    Go to Home
                  </Button>
                  <Button
                    onClick={() => router.back()}
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Go Back
                  </Button>
                  <Button
                    onClick={() => router.forward()}
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <ArrowRight className="h-4 w-4" />
                    Go Forward
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Hash className="h-5 w-5" />
                  Hash Navigation
                </CardTitle>
                <CardDescription>
                  Navigate to sections within the page
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#section1"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 inline-flex items-center gap-2 rounded-md px-3 py-2 transition-colors"
                  >
                    Section 1
                  </a>
                  <a
                    href="#section2"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 inline-flex items-center gap-2 rounded-md px-3 py-2 transition-colors"
                  >
                    Section 2
                  </a>
                  <a
                    href="#section3"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 inline-flex items-center gap-2 rounded-md px-3 py-2 transition-colors"
                  >
                    Section 3
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <RotateCcw className="h-5 w-5" />
                  Reload Test
                </CardTitle>
                <CardDescription>
                  Test page reload functionality
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => {
                    setVisitCount((count) => count + 1);
                    window.location.reload();
                  }}
                  variant="destructive"
                  className="flex items-center gap-2"
                >
                  <RotateCcw className="h-4 w-4" />
                  Reload Page
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card id="section1" className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800">Section 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700">
                  This is section 1 content. You can navigate here using the
                  hash navigation buttons above.
                </p>
              </CardContent>
            </Card>

            <Card id="section2" className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800">Section 2</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700">
                  This is section 2 content. Hash navigation allows smooth
                  scrolling to specific page sections.
                </p>
              </CardContent>
            </Card>

            <Card id="section3" className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-800">Section 3</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-700">
                  This is section 3 content, the final section in our navigation
                  test page.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
