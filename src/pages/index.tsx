import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckSquare,
  CircleDot,
  FileInput,
  FileText,
  Focus,
  Menu,
  MessageSquare,
  MousePointer,
  Navigation,
  Quote,
  ScrollText,
  Settings,
  Sliders,
  Sparkles,
  Target,
  Zap,
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const testCategories = [
  {
    title: "Input Tests",
    description: "Test various form inputs and controls",
    items: [
      {
        href: "/text-inputs",
        label: "Text Inputs",
        icon: FileText,
        color: "bg-blue-500",
      },
      {
        href: "/forms",
        label: "Forms",
        icon: FileInput,
        color: "bg-green-500",
      },
      {
        href: "/checkboxes",
        label: "Checkboxes",
        icon: CheckSquare,
        color: "bg-purple-500",
      },
      {
        href: "/radio-buttons",
        label: "Radio Buttons",
        icon: CircleDot,
        color: "bg-pink-500",
      },
      {
        href: "/dropdowns",
        label: "Dropdowns",
        icon: Menu,
        color: "bg-yellow-500",
      },
      {
        href: "/sliders",
        label: "Sliders & Range",
        icon: Sliders,
        color: "bg-indigo-500",
      },
    ],
  },
  {
    title: "Interaction Tests",
    description: "Test user interactions and events",
    items: [
      {
        href: "/clicks",
        label: "Click Events",
        icon: MousePointer,
        color: "bg-red-500",
      },
      {
        href: "/hover",
        label: "Hover Effects",
        icon: Target,
        color: "bg-orange-500",
      },
      {
        href: "/focus",
        label: "Focus & Blur",
        icon: Focus,
        color: "bg-teal-500",
      },
      {
        href: "/scroll",
        label: "Scrolling",
        icon: ScrollText,
        color: "bg-cyan-500",
      },
      {
        href: "/navigation-search",
        label: "Navigation & Search",
        icon: Navigation,
        color: "bg-emerald-500",
      },
      {
        href: "/interactive",
        label: "Interactive",
        icon: MessageSquare,
        color: "bg-amber-500",
      },
    ],
  },
];

export default function Home() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <Layout>
      {/* Lava Lamp Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="animate-float-1 absolute left-[15%] top-[15%] h-20 w-20 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-600/20 blur-3xl md:h-32 md:w-32" />
        <div className="animate-float-2 absolute right-[20%] top-[35%] h-24 w-24 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-600/20 blur-3xl md:h-40 md:w-40" />
        <div className="animate-float-3 absolute left-[25%] top-[50%] h-20 w-20 rounded-full bg-gradient-to-br from-pink-400/20 to-purple-600/20 blur-3xl md:h-36 md:w-36" />
        <div className="animate-float-1 absolute right-[15%] top-[40%] h-16 w-16 rounded-full bg-gradient-to-br from-indigo-400/20 to-blue-600/20 blur-3xl md:h-28 md:w-28" />
        <div className="animate-float-2 absolute left-[60%] top-[50%] h-28 w-28 rounded-full bg-gradient-to-br from-teal-400/15 to-green-600/15 blur-3xl md:h-44 md:w-44" />
        <div className="animate-float-3 absolute left-[10%] top-[65%] h-16 w-16 rounded-full bg-gradient-to-br from-orange-400/20 to-red-600/20 blur-3xl md:h-24 md:w-24" />
        <div className="animate-float-1 absolute right-[40%] top-[25%] h-20 w-20 rounded-full bg-gradient-to-br from-violet-400/20 to-indigo-600/20 blur-3xl md:h-32 md:w-32" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 flex justify-center"
          >
            <div className="animate-bounce-gentle relative h-64 w-[460px]">
              <Image
                src="/images/ehAye.png"
                alt="ehAye™ Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="-mt-12 mb-4 flex justify-center"
          >
            <Settings className="animate-spin-gentle text-primary/60 h-12 w-12" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6"
          >
            <h2 className="text-foreground text-5xl font-bold">
              ehAye<span className="align-super text-2xl">™</span> Engine
            </h2>
          </motion.div>
          <div className="mx-auto mt-8 max-w-2xl text-center">
            <p className="text-foreground/80 mb-3 text-2xl font-medium">
              Introducing Betsey (bTc) — <span className="dark:text-white/90 text-black/80 font-bold">B</span>etween <span className="dark:text-white/90 text-black/80 font-bold">T</span>he <span className="dark:text-white/90 text-black/80 font-bold">C</span>licks
            </p>
            <p className="text-muted-foreground text-xl">
              MCP Automation with Vision and Control.
            </p>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Badge variant="secondary" className="animate-pulse-slow">
              <Sparkles className="mr-1 h-3 w-3" />
              Dark Mode First
            </Badge>
            <Badge variant="secondary">
              <Zap className="mr-1 h-3 w-3" />
              Fully Responsive
            </Badge>
            <Badge variant="secondary">
              <CheckSquare className="mr-1 h-3 w-3" />
              All Elements
            </Badge>
          </div>
        </motion.div>

        <div className="mb-12 grid gap-8 lg:grid-cols-2">
          {testCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
            >
              <Card className="glass h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">{category.title}</CardTitle>
                  <CardDescription className="text-base">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {category.items.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.3 + index * 0.05,
                        }}
                      >
                        <Link href={item.href}>
                          <div className="bg-card hover:bg-accent group flex cursor-pointer items-center justify-between rounded-lg border p-3 transition-all">
                            <div className="flex items-center gap-3">
                              <div
                                className={`rounded-md p-2 ${item.color} bg-opacity-10 transition-all group-hover:bg-opacity-20`}
                              >
                                <item.icon
                                  className={`h-5 w-5 ${item.color.replace("bg-", "text-")}`}
                                />
                              </div>
                              <span className="font-medium">{item.label}</span>
                            </div>
                            <ArrowRight className="text-muted-foreground group-hover:text-foreground h-4 w-4 transition-all" />
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="my-12 flex justify-center"
        >
          <Card className="glass w-[30%]">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Quote className="h-12 w-12 text-muted-foreground/50 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground text-2xl italic">
                    We created Betsey (bTc) not only to train our ehAye™ Engine Vision & Control, but because Betsey needs to exist.
                  </p>
                  <p className="text-muted-foreground/80 text-sm mt-4">
                    — Val Neekman @ Neekware Inc.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card id="test-content" className="glass">
            <CardHeader>
              <CardTitle>Quick Test Elements</CardTitle>
              <CardDescription>
                Try these interactive elements right here
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button
                  id="test-button"
                  onClick={() => setShowDialog(true)}
                  variant="default"
                  className="animate-in"
                >
                  <MousePointer className="mr-2 h-4 w-4" />
                  Click Me
                </Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>

              <div className="flex items-center gap-4">
                <Input
                  id="test-input"
                  type="text"
                  placeholder="Type something amazing..."
                  className="max-w-sm"
                />
                <Button variant="secondary">Submit</Button>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  { label: "Active", variant: "default" },
                  { label: "Pending", variant: "secondary" },
                  { label: "Success", variant: "outline" },
                  { label: "Error", variant: "destructive" },
                ].map((badge) => (
                  <Badge
                    key={badge.label}
                    variant={badge.variant as any}
                    className="justify-center py-2"
                  >
                    {badge.label}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Button Clicked!</DialogTitle>
            <DialogDescription>You clicked the button! 🎉</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setShowDialog(false)}>OK</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
