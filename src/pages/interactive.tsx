import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Copy,
  Download,
  ExternalLink,
  Info,
  Loader2,
  MessageSquare,
  RefreshCw,
  Upload,
} from "lucide-react";
import { Layout } from "@/components/layout";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Spinner } from "@/components/ui/spinner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "@/hooks/use-toast";

export default function Interactions() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [dialogData, setDialogData] = useState({ name: "", email: "" });
  const [copied, setCopied] = useState(false);
  const [basicDialogOpen, setBasicDialogOpen] = useState(false);
  const [formDialogOpen, setFormDialogOpen] = useState(false);

  const handleLoadingDemo = () => {
    setLoading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false);
          toast({
            title: "Loading Complete!",
            description: "The operation finished successfully.",
          });
          return 0;
        }
        return prev + 10;
      });
    }, 300);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast({
      title: "Copied to clipboard",
      description: "The text has been copied successfully.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNewTab = () => {
    window.open("/about", "_blank");
  };

  const handleFileUpload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.onchange = (e: any) => {
      const file = e.target.files[0];
      if (file) {
        // Simulate upload process
        toast({
          title: "Uploading...",
          description: `${file.name} (${(file.size / 1024).toFixed(2)} KB)`,
        });

        // Simulate successful upload after 1.5 seconds
        setTimeout(() => {
          toast({
            title: "Upload Successful! ✅",
            description: `${file.name} has been uploaded successfully.`,
          });
        }, 1500);
      }
    };
    input.click();
  };

  return (
    <Layout>
      <TooltipProvider>
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <h1 className="gradient-text mb-4 text-4xl font-bold">
                Interactive Elements
              </h1>
              <p className="text-muted-foreground text-lg">
                Test dialogs, popovers, tooltips, and other interactive UI
                components
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Dialog Examples
                  </CardTitle>
                  <CardDescription>
                    Various dialog implementations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Dialog
                    open={basicDialogOpen}
                    onOpenChange={setBasicDialogOpen}
                  >
                    <DialogTrigger asChild>
                      <Button className="w-full">Open Basic Dialog</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Welcome to our Dialog</DialogTitle>
                        <DialogDescription>
                          This is a basic dialog with a title and description.
                          You can add any content here.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="py-4">
                        <p className="text-muted-foreground text-sm">
                          Dialogs are perfect for displaying important
                          information or collecting user input.
                        </p>
                      </div>
                      <DialogFooter>
                        <Button onClick={() => setBasicDialogOpen(false)}>
                          Continue
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <Dialog
                    open={formDialogOpen}
                    onOpenChange={setFormDialogOpen}
                  >
                    <DialogTrigger asChild>
                      <Button variant="secondary" className="w-full">
                        Dialog with Form
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit Profile</DialogTitle>
                        <DialogDescription>
                          Make changes to your profile here. Click save when
                          you&apos;re done.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            Name
                          </Label>
                          <Input
                            id="name"
                            value={dialogData.name}
                            onChange={(e) =>
                              setDialogData({
                                ...dialogData,
                                name: e.target.value,
                              })
                            }
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="email" className="text-right">
                            Email
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={dialogData.email}
                            onChange={(e) =>
                              setDialogData({
                                ...dialogData,
                                email: e.target.value,
                              })
                            }
                            className="col-span-3"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button
                          onClick={() => {
                            // Here you would normally save the data
                            toast({
                              title: "Profile Updated",
                              description:
                                "Your changes have been saved successfully.",
                            });
                            setFormDialogOpen(false);
                          }}
                        >
                          Save changes
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Alert Dialogs
                  </CardTitle>
                  <CardDescription>
                    Confirmation and warning dialogs
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" className="w-full">
                        Delete Account
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete your account and remove your data from our
                          servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction className="bg-destructive hover:bg-destructive/90">
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        Confirm Action
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Confirm your action</AlertDialogTitle>
                        <AlertDialogDescription>
                          Please confirm that you want to proceed with this
                          action.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>No, go back</AlertDialogCancel>
                        <AlertDialogAction>Yes, proceed</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5" />
                    Popovers & Tooltips
                  </CardTitle>
                  <CardDescription>
                    Hover and click interactions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline">Open Popover</Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-80">
                        <div className="grid gap-4">
                          <div className="space-y-2">
                            <h4 className="font-medium leading-none">
                              Dimensions
                            </h4>
                            <p className="text-muted-foreground text-sm">
                              Set the dimensions for the layer.
                            </p>
                          </div>
                          <div className="grid gap-2">
                            <div className="grid grid-cols-3 items-center gap-4">
                              <Label htmlFor="width">Width</Label>
                              <Input
                                id="width"
                                defaultValue="100%"
                                className="col-span-2 h-8"
                              />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-4">
                              <Label htmlFor="height">Height</Label>
                              <Input
                                id="height"
                                defaultValue="25px"
                                className="col-span-2 h-8"
                              />
                            </div>
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="icon">
                          <Info className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>This is a helpful tooltip</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Hover Me</Button>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p>Bottom positioned tooltip with more information</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Loading States</CardTitle>
                  <CardDescription>
                    Spinners and progress indicators
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    onClick={handleLoadingDemo}
                    disabled={loading}
                    className="w-full"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Loading... {progress}%
                      </>
                    ) : (
                      <>
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Start Loading Demo
                      </>
                    )}
                  </Button>

                  <div className="flex items-center justify-center space-x-4 rounded-lg border p-4">
                    <Spinner size="sm" />
                    <Spinner size="md" />
                    <Spinner size="lg" />
                  </div>

                  {loading && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{progress}%</span>
                      </div>
                      <div className="bg-secondary h-2 w-full rounded-full">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Toast Notifications</CardTitle>
                  <CardDescription>
                    Different types of toast messages
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button
                    onClick={() =>
                      toast({
                        title: "Success!",
                        description: "Your changes have been saved.",
                      })
                    }
                    className="w-full"
                    variant="default"
                  >
                    Show Success Toast
                  </Button>

                  <Button
                    onClick={() =>
                      toast({
                        title: "Error occurred",
                        description: "Something went wrong. Please try again.",
                        variant: "destructive",
                      })
                    }
                    className="w-full"
                    variant="destructive"
                  >
                    Show Error Toast
                  </Button>

                  <Button
                    onClick={() =>
                      toast({
                        title: "Scheduled: Catch up",
                        description: "Friday, February 10, 2023 at 5:57 PM",
                        action: (
                          <Button size="sm" variant="outline">
                            Undo
                          </Button>
                        ),
                      })
                    }
                    className="w-full"
                    variant="secondary"
                  >
                    Toast with Action
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Advanced Actions</CardTitle>
                  <CardDescription>
                    File handling and browser interactions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button
                    onClick={handleFileUpload}
                    className="w-full"
                    variant="outline"
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    Upload File
                  </Button>

                  <Button
                    onClick={() => handleCopy("This text will be copied!")}
                    className="w-full"
                    variant="outline"
                  >
                    <Copy className="mr-2 h-4 w-4" />
                    {copied ? "Copied!" : "Copy to Clipboard"}
                  </Button>

                  <Button
                    onClick={handleNewTab}
                    className="w-full"
                    variant="outline"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Open in New Tab
                  </Button>

                  <Button
                    onClick={() => {
                      // Create a 100KB text file
                      const lines = [];
                      const line =
                        "This is a test file created by ehAye™ Test Target App (Betsey - bTc). ";
                      const targetSize = 100 * 1024; // 100KB
                      let currentSize = 0;
                      let lineNumber = 1;

                      while (currentSize < targetSize) {
                        const lineContent = `Line ${lineNumber}: ${line}`;
                        lines.push(lineContent);
                        currentSize += lineContent.length + 1; // +1 for newline
                        lineNumber++;
                      }

                      const data = lines.join("\n");
                      const blob = new Blob([data], { type: "text/plain" });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement("a");
                      a.href = url;
                      a.download = "test-file-100kb.txt";
                      a.click();
                      URL.revokeObjectURL(url);

                      toast({
                        title: "Download Started",
                        description: "Downloading test-file-100kb.txt (100KB)",
                      });
                    }}
                    className="w-full"
                    variant="outline"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Test File (100KB)
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </TooltipProvider>
    </Layout>
  );
}
