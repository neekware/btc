import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Eye, MousePointer, Target } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";

export default function Focus() {
  const [focusedElement, setFocusedElement] = useState<string | null>(null);
  const [focusHistory, setFocusHistory] = useState<string[]>([]);
  const [inputValues, setInputValues] = useState({
    input1: "",
    input2: "",
    input3: "",
  });
  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const input2Ref = useRef<HTMLInputElement>(null);
  const input3Ref = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleFocus = (element: string) => {
    setFocusedElement(element);
    setFocusHistory((prev) => [...prev.slice(-4), element]);
  };

  const handleBlur = () => {
    setFocusedElement(null);
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
              Focus & Blur Tests
            </h1>
            <p className="text-muted-foreground text-lg">
              Test focus management and blur event handling
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Focus Tracking
                </CardTitle>
                <CardDescription>
                  Monitor which element currently has focus
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-accent rounded-lg p-3">
                    <p className="text-sm">
                      Currently focused:{" "}
                      <Badge variant="outline">
                        {focusedElement || "None"}
                      </Badge>
                    </p>
                  </div>
                  <div className="bg-muted rounded-lg p-3">
                    <p className="text-sm">
                      Focus history:{" "}
                      <span className="font-mono text-xs">
                        {focusHistory.join(" → ") || "Empty"}
                      </span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Tab Navigation
                </CardTitle>
                <CardDescription>
                  Use Tab key to navigate through these fields
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input
                    id="tab-input-1"
                    type="text"
                    placeholder="First field (Tab to next)"
                    onFocus={() => handleFocus("Field 1")}
                    onBlur={handleBlur}
                    className={`transition-colors ${
                      focusedElement === "Field 1"
                        ? "border-green-500 ring-2 ring-green-500/20"
                        : ""
                    }`}
                  />
                  <Input
                    id="tab-input-2"
                    type="text"
                    placeholder="Second field"
                    onFocus={() => handleFocus("Field 2")}
                    onBlur={handleBlur}
                    className={`transition-colors ${
                      focusedElement === "Field 2"
                        ? "border-green-500 ring-2 ring-green-500/20"
                        : ""
                    }`}
                  />
                  <Input
                    id="tab-input-3"
                    type="text"
                    placeholder="Third field"
                    onFocus={() => handleFocus("Field 3")}
                    onBlur={handleBlur}
                    className={`transition-colors ${
                      focusedElement === "Field 3"
                        ? "border-green-500 ring-2 ring-green-500/20"
                        : ""
                    }`}
                  />
                  <Button
                    id="tab-button"
                    onFocus={() => handleFocus("Button")}
                    onBlur={handleBlur}
                    className={`w-full transition-colors ${
                      focusedElement === "Button"
                        ? "bg-green-500 hover:bg-green-600"
                        : ""
                    }`}
                  >
                    Tab to me!
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MousePointer className="h-5 w-5" />
                  Programmatic Focus
                </CardTitle>
                <CardDescription>
                  Click buttons to focus specific elements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        document.getElementById("prog-input-1")?.focus();
                      }}
                    >
                      Focus Input 1
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        input2Ref.current?.focus();
                      }}
                    >
                      Focus Input 2
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        input3Ref.current?.focus();
                      }}
                    >
                      Focus Input 3
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        textareaRef.current?.focus();
                        textareaRef.current?.setSelectionRange(5, 10);
                      }}
                    >
                      Focus Textarea
                    </Button>
                  </div>
                  <div className="space-y-3">
                    <Input
                      id="prog-input-1"
                      type="text"
                      placeholder="Input 1"
                      value={inputValues.input1}
                      onChange={(e) =>
                        setInputValues({
                          ...inputValues,
                          input1: e.target.value,
                        })
                      }
                      onFocus={() => handleFocus("Prog Input 1")}
                      onBlur={handleBlur}
                    />
                    <Input
                      ref={input2Ref}
                      id="prog-input-2"
                      type="text"
                      placeholder="Input 2"
                      value={inputValues.input2}
                      onChange={(e) =>
                        setInputValues({
                          ...inputValues,
                          input2: e.target.value,
                        })
                      }
                      onFocus={() => handleFocus("Prog Input 2")}
                      onBlur={handleBlur}
                    />
                    <Input
                      ref={input3Ref}
                      id="prog-input-3"
                      type="text"
                      placeholder="Input 3"
                      value={inputValues.input3}
                      onChange={(e) =>
                        setInputValues({
                          ...inputValues,
                          input3: e.target.value,
                        })
                      }
                      onFocus={() => handleFocus("Prog Input 3")}
                      onBlur={handleBlur}
                    />
                    <Textarea
                      ref={textareaRef}
                      id="prog-textarea"
                      placeholder="Textarea with selectable text"
                      defaultValue="This is some text that can be selected"
                      onFocus={() => handleFocus("Textarea")}
                      onBlur={handleBlur}
                      rows={3}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Focus Trap</CardTitle>
                <CardDescription>
                  Tab navigation is trapped within this section
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 p-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Tab navigation is trapped within this box:
                  </p>
                  <Input
                    id="trap-input-1"
                    type="text"
                    placeholder="Trap field 1"
                    onFocus={() => handleFocus("Trap 1")}
                    onBlur={handleBlur}
                    className="w-full"
                  />
                  <Input
                    id="trap-input-2"
                    type="text"
                    placeholder="Trap field 2"
                    onFocus={() => handleFocus("Trap 2")}
                    onBlur={handleBlur}
                    className="w-full"
                  />
                  <Button
                    id="trap-button"
                    onFocus={() => handleFocus("Trap Button")}
                    onBlur={handleBlur}
                    onKeyDown={(e) => {
                      if (e.key === "Tab" && e.shiftKey === false) {
                        e.preventDefault();
                        document.getElementById("trap-input-1")?.focus();
                      }
                    }}
                    className="w-full"
                  >
                    Last element (Tab goes back to first)
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Auto-focus on Load</CardTitle>
                <CardDescription>
                  This input receives focus automatically
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Input
                  id="autofocus-input"
                  type="text"
                  placeholder="This input should be focused on page load"
                  autoFocus
                  onFocus={() => handleFocus("Autofocus")}
                  onBlur={handleBlur}
                  className="w-full border-2 border-orange-400 focus:border-orange-500"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Focus Visual Indicators</CardTitle>
                <CardDescription>
                  Compare different focus styles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="mb-2 font-medium">Default Browser Focus</h4>
                    <input
                      type="text"
                      placeholder="Browser focus style"
                      className="w-full rounded-md border border-gray-300 px-3 py-2"
                    />
                  </div>
                  <div>
                    <h4 className="mb-2 font-medium">Custom Focus Style</h4>
                    <input
                      type="text"
                      placeholder="Custom focus style"
                      onFocus={(e) => {
                        handleFocus("Custom Style");
                        e.target.style.boxShadow =
                          "0 0 0 3px rgba(76, 175, 80, 0.3)";
                      }}
                      onBlur={(e) => {
                        handleBlur();
                        e.target.style.boxShadow = "none";
                      }}
                      className="w-full rounded-md border-2 border-gray-300 px-3 py-2 outline-none transition-all duration-300 focus:border-green-400"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Blur Event Test</CardTitle>
                <CardDescription>
                  Type something and click outside to trigger blur event
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Input
                  id="blur-test"
                  type="text"
                  placeholder="Type and click outside"
                  onBlur={(e) => {
                    if (e.target.value) {
                      setDialogMessage(`You typed: ${e.target.value}`);
                      setShowDialog(true);
                      e.target.value = "";
                    }
                  }}
                  className="w-full"
                />
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Blur Event Triggered</DialogTitle>
            <DialogDescription>{dialogMessage}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setShowDialog(false)}>OK</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
