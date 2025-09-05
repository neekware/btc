import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  MousePointer,
  RotateCcw,
  Target,
  Timer,
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

export default function Clicks() {
  const [clickCount, setClickCount] = useState(0);
  const [doubleClickCount, setDoubleClickCount] = useState(0);
  const [rightClickCount, setRightClickCount] = useState(0);
  const [lastAction, setLastAction] = useState("");
  const [mouseDownTime, setMouseDownTime] = useState<number | null>(null);
  const [holdDuration, setHoldDuration] = useState(0);
  const [buttonStates, setButtonStates] = useState({
    button1: false,
    button2: false,
    button3: false,
  });
  const [targetHits, setTargetHits] = useState<number[]>([]);

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setRightClickCount((count) => count + 1);
    setLastAction("Right clicked");
  };

  const handleMouseDown = () => {
    setMouseDownTime(Date.now());
  };

  const handleMouseUp = () => {
    if (mouseDownTime) {
      const duration = Date.now() - mouseDownTime;
      setHoldDuration(duration);
      setMouseDownTime(null);
      setLastAction(`Held for ${duration}ms`);
    }
  };

  const toggleButton = (button: keyof typeof buttonStates) => {
    setButtonStates((prev) => ({ ...prev, [button]: !prev[button] }));
    setLastAction(`Toggled ${button}`);
  };

  const hitTarget = (targetNumber: number) => {
    setTargetHits([...targetHits, targetNumber]);
    setLastAction(`Hit target ${targetNumber}`);
  };

  const resetAll = () => {
    setClickCount(0);
    setDoubleClickCount(0);
    setRightClickCount(0);
    setLastAction("");
    setHoldDuration(0);
    setButtonStates({ button1: false, button2: false, button3: false });
    setTargetHits([]);
  };

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
              Click Event Tests
            </h1>
            <p className="text-muted-foreground text-lg">
              Test various mouse interactions and click events
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MousePointer className="h-5 w-5" />
                  Basic Click Counter
                </CardTitle>
                <CardDescription>Test single click events</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  id="click-counter"
                  size="lg"
                  onClick={() => {
                    setClickCount((count) => count + 1);
                    setLastAction("Single clicked");
                  }}
                  className="animate-in w-full"
                >
                  Click Me! (Count: {clickCount})
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Double Click Test</CardTitle>
                <CardDescription>Test double click detection</CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  id="double-click-area"
                  onDoubleClick={() => {
                    setDoubleClickCount((count) => count + 1);
                    setLastAction("Double clicked");
                  }}
                  className="bg-primary/10 hover:bg-primary/20 flex h-32 cursor-pointer select-none items-center justify-center rounded-lg transition-colors"
                >
                  <div className="text-center">
                    <p className="text-lg font-medium">Double Click Me!</p>
                    <Badge variant="secondary" className="mt-2">
                      Count: {doubleClickCount}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Right Click Test</CardTitle>
                <CardDescription>Test context menu events</CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  id="right-click-area"
                  onContextMenu={handleRightClick}
                  className="bg-destructive/10 hover:bg-destructive/20 flex h-32 cursor-pointer select-none items-center justify-center rounded-lg transition-colors"
                >
                  <div className="text-center">
                    <p className="text-lg font-medium">Right Click Me!</p>
                    <Badge variant="destructive" className="mt-2">
                      Count: {rightClickCount}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Timer className="h-5 w-5" />
                  Click and Hold Test
                </CardTitle>
                <CardDescription>Test mouse down duration</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  id="hold-button"
                  size="lg"
                  variant="secondary"
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  className="w-full"
                >
                  {mouseDownTime ? "Holding..." : "Click and Hold"}
                </Button>
                {holdDuration > 0 && (
                  <p className="text-muted-foreground mt-2 text-sm">
                    Last hold duration: <strong>{holdDuration}ms</strong>
                  </p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Toggle Buttons</CardTitle>
                <CardDescription>Test stateful button toggles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {Object.entries(buttonStates).map(([button, state]) => (
                    <Button
                      key={button}
                      id={button}
                      variant={state ? "default" : "outline"}
                      onClick={() =>
                        toggleButton(button as keyof typeof buttonStates)
                      }
                      className="min-w-[100px]"
                    >
                      <CheckCircle
                        className={`mr-2 h-4 w-4 ${state ? "opacity-100" : "opacity-0"}`}
                      />
                      {button}: {state ? "ON" : "OFF"}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Click Target Practice
                </CardTitle>
                <CardDescription>
                  Test precise clicking on targets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted relative h-48 overflow-hidden rounded-lg">
                  <motion.button
                    id="target-1"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => hitTarget(1)}
                    className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-violet-500 font-bold text-white transition-colors hover:bg-violet-600"
                  >
                    1
                  </motion.button>
                  <motion.button
                    id="target-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => hitTarget(2)}
                    className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-500 font-bold text-white transition-colors hover:bg-blue-600"
                  >
                    2
                  </motion.button>
                  <motion.button
                    id="target-3"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => hitTarget(3)}
                    className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 font-bold text-white transition-colors hover:bg-emerald-600"
                  >
                    3
                  </motion.button>
                </div>
                <div className="mt-2 flex flex-wrap gap-1">
                  {targetHits.map((hit, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {hit}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Click Statistics</CardTitle>
              <CardDescription>Current interaction statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="bg-muted rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold">{clickCount}</p>
                  <p className="text-muted-foreground text-sm">Single Clicks</p>
                </div>
                <div className="bg-muted rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold">{doubleClickCount}</p>
                  <p className="text-muted-foreground text-sm">Double Clicks</p>
                </div>
                <div className="bg-muted rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold">{rightClickCount}</p>
                  <p className="text-muted-foreground text-sm">Right Clicks</p>
                </div>
                <div className="bg-muted rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold">{targetHits.length}</p>
                  <p className="text-muted-foreground text-sm">Target Hits</p>
                </div>
              </div>

              {lastAction && (
                <div className="bg-accent mb-4 rounded-lg p-3">
                  <p className="text-sm">
                    Last Action: <strong>{lastAction}</strong>
                  </p>
                </div>
              )}

              <Button onClick={resetAll} variant="outline" className="w-full">
                <RotateCcw className="mr-2 h-4 w-4" />
                Reset All
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Layout>
  );
}
