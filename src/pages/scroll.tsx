import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUp,
  BarChart3,
  ChevronsUp,
  Navigation,
  Target,
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
import { Progress } from "@/components/ui/progress";

export default function Scroll() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [visibleSection, setVisibleSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrolled = (window.scrollY / documentHeight) * 100;
      setScrollPercentage(Math.round(scrolled));

      // Check which section is visible
      const sections = [
        "section1",
        "section2",
        "section3",
        "section4",
        "section5",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            setVisibleSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToElement = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollByAmount = (amount: number) => {
    window.scrollBy({ top: amount, behavior: "smooth" });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h1 className="gradient-text mb-4 text-4xl font-bold">
              Scroll Tests
            </h1>
            <p className="text-muted-foreground text-lg">
              Test various scrolling behaviors and position tracking
            </p>
          </div>

          {/* Fixed position scroll indicator */}
          <Card className="fixed right-4 top-4 z-50 shadow-lg">
            <CardContent className="p-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Scroll Y:</span>
                  <Badge variant="outline">{scrollY}px</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Progress:</span>
                  <Badge variant="outline">{scrollPercentage}%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Section:</span>
                  <Badge variant={visibleSection ? "default" : "outline"}>
                    {visibleSection || "None"}
                  </Badge>
                </div>
                <Progress value={scrollPercentage} className="h-2 w-32" />
              </div>
            </CardContent>
          </Card>

          <div className="mb-8 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ArrowUp className="h-5 w-5" />
                  Scroll Controls
                </CardTitle>
                <CardDescription>
                  Navigate page with programmatic scrolling
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Button
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    variant="outline"
                    size="sm"
                  >
                    <ChevronsUp className="mr-2 h-4 w-4" />
                    Scroll to Top
                  </Button>
                  <Button
                    onClick={() =>
                      window.scrollTo({
                        top: document.documentElement.scrollHeight,
                        behavior: "smooth",
                      })
                    }
                    variant="outline"
                    size="sm"
                  >
                    <ArrowDown className="mr-2 h-4 w-4" />
                    Scroll to Bottom
                  </Button>
                  <Button
                    onClick={() => scrollByAmount(200)}
                    variant="outline"
                    size="sm"
                  >
                    Down 200px
                  </Button>
                  <Button
                    onClick={() => scrollByAmount(-200)}
                    variant="outline"
                    size="sm"
                  >
                    Up 200px
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Navigation className="h-5 w-5" />
                  Jump to Section
                </CardTitle>
                <CardDescription>
                  Quick navigation between page sections
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "section1",
                    "section2",
                    "section3",
                    "section4",
                    "section5",
                  ].map((section) => (
                    <Button
                      key={section}
                      onClick={() => scrollToElement(section)}
                      variant={
                        visibleSection === section ? "default" : "outline"
                      }
                      size="sm"
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card
            id="section1"
            className="mb-6 min-h-[600px] border-red-200 bg-red-50"
          >
            <CardHeader>
              <CardTitle className="text-red-800">
                Section 1: Introduction
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-red-700">
                This is the first section. Scroll down to see more content.
              </p>
              <p className="text-red-700">
                The navigation buttons above will highlight as you scroll
                through sections.
              </p>
              <Button
                id="section1-next"
                onClick={() => scrollToElement("section2")}
                className="mt-4 bg-red-600 hover:bg-red-700"
              >
                Go to Section 2 →
              </Button>
            </CardContent>
          </Card>

          <Card
            id="section2"
            className="mb-6 min-h-[600px] border-blue-200 bg-blue-50"
          >
            <CardHeader>
              <CardTitle className="text-blue-800">
                Section 2: Features
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-blue-700">
                This section demonstrates smooth scrolling between sections.
              </p>
              <ul className="list-inside list-disc space-y-2 text-blue-700">
                <li>Smooth scroll animations</li>
                <li>Scroll position tracking</li>
                <li>Section visibility detection</li>
                <li>Programmatic scroll control</li>
              </ul>
              <Button
                onClick={() => scrollToElement("section3")}
                className="mt-4 bg-blue-600 hover:bg-blue-700"
              >
                Continue to Section 3 →
              </Button>
            </CardContent>
          </Card>

          <Card
            id="section3"
            className="mb-6 min-h-[600px] border-green-200 bg-green-50"
          >
            <CardHeader>
              <CardTitle className="text-green-800">
                Section 3: Horizontal Scroll
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-green-700">
                This section includes a horizontal scroll area:
              </p>
              <div
                id="horizontal-scroll"
                className="flex gap-5 overflow-x-auto rounded-lg border bg-white p-5"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <motion.div
                    key={num}
                    whileHover={{ scale: 1.05 }}
                    className="flex h-36 min-w-[200px] flex-shrink-0 items-center justify-center rounded-lg text-2xl font-bold text-white"
                    style={{ backgroundColor: `hsl(${num * 45}, 70%, 60%)` }}
                  >
                    Card {num}
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card
            id="section4"
            className="mb-6 min-h-[600px] border-orange-200 bg-orange-50"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-800">
                <Target className="h-5 w-5" />
                Section 4: Scroll Into View
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-orange-700">
                Test the scrollIntoView functionality with different options:
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={() =>
                    document.getElementById("hidden-element")?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    })
                  }
                  variant="outline"
                  size="sm"
                >
                  Scroll to Hidden (Center)
                </Button>
                <Button
                  onClick={() =>
                    document.getElementById("hidden-element")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                  variant="outline"
                  size="sm"
                >
                  Scroll to Hidden (Top)
                </Button>
                <Button
                  onClick={() =>
                    document.getElementById("hidden-element")?.scrollIntoView({
                      behavior: "smooth",
                      block: "end",
                    })
                  }
                  variant="outline"
                  size="sm"
                >
                  Scroll to Hidden (Bottom)
                </Button>
              </div>
              <div className="mt-12 flex h-96 items-center justify-center rounded-lg bg-orange-100">
                <p className="text-orange-600">Scroll area filler content...</p>
              </div>
              <motion.div
                id="hidden-element"
                whileHover={{ scale: 1.02 }}
                className="rounded-lg bg-green-500 p-5 text-center text-xl font-bold text-white"
              >
                🎯 You found the hidden element!
              </motion.div>
              <div className="flex h-96 items-center justify-center rounded-lg bg-orange-100">
                <p className="text-orange-600">More filler content...</p>
              </div>
            </CardContent>
          </Card>

          <Card
            id="section5"
            className="min-h-[600px] border-pink-200 bg-pink-50"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-pink-800">
                <BarChart3 className="h-5 w-5" />
                Section 5: Conclusion
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-pink-700">
                This is the final section. You&apos;ve reached the end of the
                scroll test!
              </p>

              <div>
                <h3 className="mb-3 text-lg font-semibold text-pink-800">
                  Quick Navigation
                </h3>
                <div className="flex gap-3">
                  <Button
                    onClick={() => scrollToElement("section1")}
                    variant="outline"
                  >
                    Back to Start
                  </Button>
                  <Button
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    <ChevronsUp className="mr-2 h-4 w-4" />
                    Back to Top
                  </Button>
                </div>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <h3 className="mb-4 text-lg font-semibold">
                  Scroll Statistics
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div className="text-center">
                    <p className="text-2xl font-bold">{scrollY}px</p>
                    <p className="text-muted-foreground text-sm">
                      Scroll Position
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold">{scrollPercentage}%</p>
                    <p className="text-muted-foreground text-sm">
                      Page Progress
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold">
                      {visibleSection || "None"}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Current Section
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fixed progress bar at bottom */}
          <div className="bg-muted fixed bottom-0 left-0 right-0 z-50 h-1">
            <motion.div
              className="h-full bg-green-500"
              style={{ width: `${scrollPercentage}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
