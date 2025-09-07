import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Eye,
  Quote,
  Rocket,
  Settings,
  Sparkles,
  Star,
  Target,
  Users,
  Zap,
} from "lucide-react";
import packageJson from "../../package.json";
import { Layout } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Betsey (bTc) | ehAye™ Test Target App</title>
        <meta
          name="description"
          content="Learn about Betsey (bTc), the comprehensive test automation target designed to train and showcase ehAye™ Engine capabilities. Built with modern web technologies."
        />
        <meta
          name="keywords"
          content="about Betsey, bTc, test automation, ehAye Engine, web testing, automation framework"
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8 mt-8 text-center">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mb-8 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-5xl font-bold text-transparent md:text-6xl dark:from-blue-400 dark:to-cyan-400">
                About Betsey
              </h1>
            </motion.div>
            <p className="text-foreground/80 mb-8 text-xl md:text-2xl">
              Introducing{" "}
              <span className="font-bold text-blue-600 dark:text-blue-400">
                Betsey (bTc)
              </span>{" "}
              — Between the Clicks
            </p>
            <Badge
              variant="outline"
              className="-mb-4 border-blue-500/30 px-3 py-1 text-sm"
            >
              Version {packageJson.version}
            </Badge>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="shadow-xl transition-shadow duration-300 hover:shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-3xl">
                  <Brain className="h-8 w-8 text-blue-500" />
                  Why we built Betsey (bTc)
                </CardTitle>
                <CardDescription className="mt-2 text-lg">
                  The vision behind Between the Clicks
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed">
                  In browser automation, we saw a clear gap. Existing tools were
                  either too complex for beginners or too limited for advanced
                  users. Teams struggled with:
                </p>
                <ul className="list-disc space-y-3 pl-6 text-lg">
                  <li>Tests that break with minor UI changes</li>
                  <li>Complex setup and maintenance</li>
                  <li>Lack of visual feedback during execution</li>
                  <li>Limited cross-browser and cross-platform support</li>
                  <li>
                    Testing external websites, even when allowed, without
                    verifying human interaction
                  </li>
                </ul>
                <p className="mt-6 text-lg font-semibold text-blue-600 dark:text-blue-400">
                  We knew there had to be a better way: a tool that combines
                  AI-powered vision with simple natural language commands, plus
                  a dedicated playground where anyone can safely test and
                  experiment.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-xl transition-shadow duration-300 hover:shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-3xl">
                  <Rocket className="h-8 w-8 text-cyan-500" />
                  The What
                </CardTitle>
                <CardDescription className="mt-2 text-lg">
                  What makes ehAye™ Engine&apos;s bTc unique
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed">
                  ehAye™ Engine is a next-generation browser automation
                  platform powered by the Model Context Protocol (MCP). Our
                  flagship feature, <strong>Betsey (bTc)</strong>
                  operates &ldquo;Between the Clicks,&rdquo; providing a
                  playground for ehAye™ Engine to understand and interact with
                  web applications like a human.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Eye className="mt-1 h-6 w-6 flex-shrink-0 text-green-500" />
                    <div className="text-lg">
                      <strong className="text-green-600 dark:text-green-400">
                        Vision-Based Detection:
                      </strong>{" "}
                      AI Agents interpret UI elements visually
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="mt-1 h-6 w-6 flex-shrink-0 text-yellow-500" />
                    <div className="text-lg">
                      <strong className="text-yellow-600 dark:text-yellow-400">
                        Lightning Fast:
                      </strong>{" "}
                      Optimized for speed without sacrificing accuracy
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Code2 className="mt-1 h-6 w-6 flex-shrink-0 text-blue-500" />
                    <div className="text-lg">
                      <strong className="text-blue-600 dark:text-blue-400">
                        MCP Finetuned:
                      </strong>{" "}
                      Tailored Anthropic&apos;s Model Context Protocol AI agents
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="mt-1 h-6 w-6 flex-shrink-0 text-purple-500" />
                    <div className="text-lg">
                      <strong className="text-purple-600 dark:text-purple-400">
                        Betsey is open:
                      </strong>{" "}
                      Free to all with no limits, no captchas, no barriers
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500/20 bg-gradient-to-br from-blue-50/30 to-cyan-50/30 shadow-2xl md:col-span-2 dark:from-blue-950/10 dark:to-cyan-950/10">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-3 text-3xl">
                  <Sparkles className="h-8 w-8 animate-pulse text-blue-500" />
                  An Open Invitation
                </CardTitle>
                <CardDescription className="mt-2 text-center text-lg">
                  Betsey is here for you!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 text-center">
                <p className="text-xl leading-relaxed">
                  ehAye™ Engine Betsey (bTc) - Between The Clicks is a
                  full-featured site built to showcase ehAye™ Engine&apos;s
                  Vision and Control automation. Normally, MCP must target a
                  specific site, but Betsey is open for everyone.
                </p>
                <p className="text-xl leading-relaxed">
                  Run your automation scripts, experiment, and explore freely.
                </p>
                <p className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-2xl font-bold text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                  Just don&apos;t let your AI fall for Betsey (bTc).{" "}
                  <span className="text-foreground">😉</span>
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-xl transition-shadow duration-300 hover:shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Target className="h-7 w-7 text-orange-500" />
                  Test Interface Features
                </CardTitle>
                <CardDescription className="mt-2 text-lg">
                  This demo showcases our comprehensive test suite
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-lg">
                  This test interface demonstrates all the UI patterns that
                  Betsey can interact with:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <Badge
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground justify-center py-2 text-base transition-colors"
                  >
                    Click Detection
                  </Badge>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground justify-center py-2 text-base transition-colors"
                  >
                    Form Handling
                  </Badge>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground justify-center py-2 text-base transition-colors"
                  >
                    Text Input
                  </Badge>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground justify-center py-2 text-base transition-colors"
                  >
                    Dropdowns
                  </Badge>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground justify-center py-2 text-base transition-colors"
                  >
                    Checkboxes
                  </Badge>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground justify-center py-2 text-base transition-colors"
                  >
                    Radio Buttons
                  </Badge>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground justify-center py-2 text-base transition-colors"
                  >
                    Sliders
                  </Badge>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground justify-center py-2 text-base transition-colors"
                  >
                    Hover States
                  </Badge>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground justify-center py-2 text-base transition-colors"
                  >
                    Focus Management
                  </Badge>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground justify-center py-2 text-base transition-colors"
                  >
                    Scroll Behavior
                  </Badge>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground justify-center py-2 text-base transition-colors"
                  >
                    Navigation
                  </Badge>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground justify-center py-2 text-base transition-colors"
                  >
                    Interactions
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl transition-shadow duration-300 hover:shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Star className="h-7 w-7 text-amber-500" />
                  The Future
                </CardTitle>
                <CardDescription className="mt-2 text-lg">
                  Where we&apos;re heading
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg">
                  We&apos;re just getting started. Our roadmap includes:
                </p>
                <ul className="list-disc space-y-3 pl-6 text-lg">
                  <li>Advanced AI-powered test generation</li>
                  <li>Self-healing tests that adapt to UI changes</li>
                  <li>Real-time collaboration features</li>
                  <li>Extended browser and platform support</li>
                  <li>Integration with popular CI/CD pipelines</li>
                </ul>
                <p className="mt-6 text-lg font-semibold text-amber-600 dark:text-amber-400">
                  Join us in revolutionizing browser automation — one click at a
                  time.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 mb-8 flex justify-center">
            <Card className="glass w-[90%] md:w-[35%] min-w-[400px]">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Quote className="h-12 w-12 text-muted-foreground/50 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground text-2xl italic">
                      We created Betsey (bTc) not only to train our ehAye™
                      Engine Vision & Control, but because Betsey needs to
                      exist.
                    </p>
                    <p className="text-muted-foreground/80 text-sm mt-4">
                      — Val Neekman @ Neekware Inc.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 border-2 border-green-500/20 bg-gradient-to-br from-green-50/20 to-emerald-50/20 shadow-2xl dark:from-green-950/10 dark:to-emerald-950/10">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-3">
                <Settings className="animate-spin-gentle h-7 w-7" />
                <span className="text-3xl">Get Started</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-center">
              <p className="text-xl">
                Ready to experience the future of browser automation?
              </p>
              <div className="flex flex-col items-center justify-center gap-6 text-lg sm:flex-row">
                <a
                  href="https://github.com/un33k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 transition-transform hover:scale-110 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  Follow on GitHub
                </a>
                <span className="text-muted-foreground hidden sm:inline">
                  •
                </span>
                <a
                  href="https://www.youtube.com/@ehAyeEverything"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-red-600 transition-transform hover:scale-110 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  Watch in Action
                </a>
                <span className="text-muted-foreground hidden sm:inline">
                  •
                </span>
                <a
                  href="https://x.com/uNeekVu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 transition-transform hover:scale-110 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Follow Updates
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Layout>
  );
}
