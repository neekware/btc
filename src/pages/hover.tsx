import React, { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { Info, MousePointer, Navigation, Target, Zap } from "lucide-react";
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Hover() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [hoverCount, setHoverCount] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [tooltip, setTooltip] = useState("");
  const [cardHovered, setCardHovered] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: Math.round(e.clientX - rect.left),
      y: Math.round(e.clientY - rect.top),
    });
  };

  return (
    <Layout>
      <Head>
        <title>Hover Effect Tests | Betsey (bTc)</title>
        <meta
          name="description"
          content="Test hover interactions, tooltips, and mouse tracking. Complete hover state testing for automation frameworks."
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h1 className="gradient-text mb-4 text-4xl font-bold">
              Hover Effect Tests
            </h1>
            <p className="text-muted-foreground text-lg">
              Test various hover interactions and visual effects
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MousePointer className="h-5 w-5" />
                  Basic Hover Detection
                </CardTitle>
                <CardDescription>
                  Test basic hover enter and leave events
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  id="hover-area"
                  onMouseEnter={() => {
                    setHoveredItem("basic");
                    setHoverCount((count) => count + 1);
                  }}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`flex h-40 w-full cursor-pointer flex-col items-center justify-center rounded-lg text-center text-lg font-medium transition-all duration-300 ${
                    hoveredItem === "basic"
                      ? "scale-105 transform bg-green-500 text-white shadow-lg"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  <span className="mb-2">
                    {hoveredItem === "basic" ? "Hovering!" : "Hover over me"}
                  </span>
                  <Badge
                    variant="outline"
                    className={
                      hoveredItem === "basic" ? "border-white text-white" : ""
                    }
                  >
                    Hover count: {hoverCount}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Navigation className="h-5 w-5" />
                  Menu with Hover Effects
                </CardTitle>
                <CardDescription>Hover over navigation items</CardDescription>
              </CardHeader>
              <CardContent>
                <nav
                  id="hover-menu"
                  className="mb-4 overflow-hidden rounded-lg bg-gray-800"
                >
                  <ul className="m-0 flex list-none flex-wrap p-0">
                    {["Home", "Products", "Services", "About", "Contact"].map(
                      (item) => (
                        <li
                          key={item}
                          onMouseEnter={() => setHoveredItem(item)}
                          onMouseLeave={() => setHoveredItem(null)}
                          className={`cursor-pointer px-5 py-4 text-white transition-colors duration-300 ${
                            hoveredItem === item
                              ? "bg-gray-600"
                              : "hover:bg-gray-700"
                          }`}
                        >
                          {item}
                        </li>
                      ),
                    )}
                  </ul>
                </nav>
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-sm">
                    Hovered:{" "}
                    <Badge variant="outline">{hoveredItem || "None"}</Badge>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Mouse Position Tracking
                </CardTitle>
                <CardDescription>
                  Move your mouse to track position
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  id="mouse-tracker"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setHoveredItem("tracker")}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative h-48 w-full overflow-hidden rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800"
                >
                  <div className="p-5">
                    <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                      Move your mouse here
                    </p>
                    <Badge variant="outline">
                      Position: X: {mousePosition.x}, Y: {mousePosition.y}
                    </Badge>
                  </div>
                  {hoveredItem === "tracker" && (
                    <div
                      className="pointer-events-none absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-red-500 transition-all duration-100"
                      style={{
                        left: mousePosition.x,
                        top: mousePosition.y,
                      }}
                    />
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  Tooltip on Hover
                </CardTitle>
                <CardDescription>
                  Hover over buttons to see tooltips
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TooltipProvider>
                  <div className="flex flex-wrap gap-4">
                    {[
                      {
                        id: "tooltip1",
                        text: "Help",
                        tip: "Click here for help documentation",
                      },
                      {
                        id: "tooltip2",
                        text: "Settings",
                        tip: "Configure your preferences",
                      },
                      {
                        id: "tooltip3",
                        text: "Profile",
                        tip: "View and edit your profile",
                      },
                    ].map((item) => (
                      <Tooltip key={item.id}>
                        <TooltipTrigger asChild>
                          <Button
                            id={item.id}
                            variant="default"
                            onMouseEnter={() => setTooltip(item.tip)}
                            onMouseLeave={() => setTooltip("")}
                          >
                            {item.text}
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{item.tip}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </TooltipProvider>
                <div className="bg-muted mt-4 rounded-lg p-3">
                  <p className="text-sm">
                    Active tooltip:{" "}
                    <span className="font-mono text-xs">
                      {tooltip || "None"}
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Card Hover Effects</CardTitle>
              <CardDescription>
                Interactive cards with hover animations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {[1, 2, 3].map((num) => (
                  <motion.div
                    key={num}
                    id={`card-${num}`}
                    whileHover={{ scale: 1.05, y: -5 }}
                    onMouseEnter={() => setCardHovered(num)}
                    onMouseLeave={() => setCardHovered(null)}
                    className={`cursor-pointer rounded-xl border-2 p-6 transition-all duration-300 ${
                      cardHovered === num
                        ? "border-green-400 bg-green-50 dark:bg-green-950/50 shadow-lg"
                        : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-md"
                    }`}
                  >
                    <h3 className="mb-2 text-lg font-semibold">Card {num}</h3>
                    <p className="text-muted-foreground mb-4">
                      Hover to see effect
                    </p>
                    {cardHovered === num && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button
                          size="sm"
                          className="bg-green-500 hover:bg-green-600"
                        >
                          Action
                        </Button>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Hover Delay Test
              </CardTitle>
              <CardDescription>
                Hover and hold for 1 second to activate
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div
                id="hover-delay"
                onMouseEnter={() => {
                  setTimeout(() => {
                    if (hoveredItem === "delay-pending") {
                      setHoveredItem("delay-active");
                    }
                  }, 1000);
                  setHoveredItem("delay-pending");
                }}
                onMouseLeave={() => setHoveredItem(null)}
                className={`flex h-24 w-full items-center justify-center rounded-lg text-lg font-medium transition-all duration-300 ${
                  hoveredItem === "delay-active"
                    ? "bg-green-500 text-white"
                    : hoveredItem === "delay-pending"
                      ? "bg-orange-500 text-white"
                      : "bg-muted"
                }`}
              >
                {hoveredItem === "delay-active"
                  ? "Fully active!"
                  : hoveredItem === "delay-pending"
                    ? "Wait for it..."
                    : "Hover for 1 second"}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Layout>
  );
}
