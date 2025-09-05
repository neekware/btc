import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle,
  FileText,
  Mail,
  MessageSquare,
  RotateCcw,
  Save,
  Send,
  User,
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
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

export default function Forms() {
  // Simple form state
  const [simpleForm, setSimpleForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [submittedData, setSubmittedData] = useState<typeof simpleForm | null>(
    null,
  );
  const [submitCount, setSubmitCount] = useState(0);

  // Complex form state
  const [complexForm, setComplexForm] = useState({
    username: "",
    email: "",
    password: "",
    bio: "",
    country: "",
    notifications: false,
    theme: "dark",
    volume: [50],
    terms: false,
    newsletter: false,
    privacy: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [complexSubmitted, setComplexSubmitted] = useState(false);

  // Simple form handlers
  const handleSimpleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedData({ ...simpleForm });
    setSubmitCount((count) => count + 1);
    toast({
      title: "Simple form submitted!",
      description: "Check the submission details below.",
    });
  };

  const handleSimpleReset = () => {
    setSimpleForm({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
    setSubmittedData(null);
    setSubmitCount(0);
  };

  // Complex form handlers
  const validateComplexForm = () => {
    const newErrors: Record<string, string> = {};

    if (!complexForm.username) newErrors.username = "Username is required";
    if (!complexForm.email) newErrors.email = "Email is required";
    if (!complexForm.password) newErrors.password = "Password is required";
    if (!complexForm.country) newErrors.country = "Please select a country";
    if (!complexForm.terms) newErrors.terms = "You must accept the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleComplexSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateComplexForm()) {
      setComplexSubmitted(true);
      toast({
        title: "Complex form submitted successfully!",
        description: "All validations passed.",
      });
    } else {
      toast({
        title: "Validation failed",
        description: "Please fix the errors and try again.",
        variant: "destructive",
      });
    }
  };

  const handleComplexReset = () => {
    setComplexForm({
      username: "",
      email: "",
      password: "",
      bio: "",
      country: "",
      notifications: false,
      theme: "dark",
      volume: [50],
      terms: false,
      newsletter: false,
      privacy: false,
    });
    setErrors({});
    setComplexSubmitted(false);
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  return (
    <Layout>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto py-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="gradient-text mb-4 text-4xl font-bold">
              Form Examples
            </h1>
            <p className="text-muted-foreground text-lg">
              Test various form implementations from simple to complex
            </p>
          </motion.div>

          <Tabs defaultValue="simple" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="simple">Simple Form</TabsTrigger>
              <TabsTrigger value="complex">Complex Form</TabsTrigger>
            </TabsList>

            <TabsContent value="simple">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Simple Form */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Contact Form
                    </CardTitle>
                    <CardDescription>
                      A simple form with basic validation and submission
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form
                      id="simple-form"
                      onSubmit={handleSimpleSubmit}
                      className="space-y-4"
                    >
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">
                            <User className="mr-1 inline h-4 w-4" />
                            First Name
                          </Label>
                          <Input
                            id="firstName"
                            value={simpleForm.firstName}
                            onChange={(e) =>
                              setSimpleForm({
                                ...simpleForm,
                                firstName: e.target.value,
                              })
                            }
                            placeholder="John"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            value={simpleForm.lastName}
                            onChange={(e) =>
                              setSimpleForm({
                                ...simpleForm,
                                lastName: e.target.value,
                              })
                            }
                            placeholder="Doe"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          <Mail className="mr-1 inline h-4 w-4" />
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={simpleForm.email}
                          onChange={(e) =>
                            setSimpleForm({
                              ...simpleForm,
                              email: e.target.value,
                            })
                          }
                          placeholder="john.doe@example.com"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">
                          <MessageSquare className="mr-1 inline h-4 w-4" />
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          value={simpleForm.message}
                          onChange={(e) =>
                            setSimpleForm({
                              ...simpleForm,
                              message: e.target.value,
                            })
                          }
                          placeholder="Enter your message here..."
                          rows={4}
                          required
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button type="submit" className="flex-1">
                          <Send className="mr-2 h-4 w-4" />
                          Submit Form
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={handleSimpleReset}
                        >
                          <RotateCcw className="mr-2 h-4 w-4" />
                          Reset
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>

                {/* Submission Details */}
                <div className="space-y-4">
                  <Card id="submission-result">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        Submission Details
                      </CardTitle>
                      <CardDescription>
                        Form data after submission
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {submittedData ? (
                        <div className="space-y-3">
                          {Object.entries(submittedData).map(([key, value]) => (
                            <div key={key} className="flex justify-between">
                              <span className="text-muted-foreground capitalize">
                                {key.replace(/([A-Z])/g, " $1").trim()}:
                              </span>
                              <span className="font-medium">{value || "N/A"}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground text-center py-8">
                          No data submitted yet
                        </p>
                      )}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Form Statistics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span>Submit Count:</span>
                        <Badge variant="secondary" className="text-lg">
                          {submitCount}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="complex">
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Complex Form */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Advanced Form
                    </CardTitle>
                    <CardDescription>
                      Complex form with various input types and validation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form
                      id="complex-form"
                      onSubmit={handleComplexSubmit}
                      className="space-y-6"
                    >
                      {/* Text Inputs */}
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="username">Username</Label>
                          <Input
                            id="username"
                            value={complexForm.username}
                            onChange={(e) =>
                              setComplexForm({
                                ...complexForm,
                                username: e.target.value,
                              })
                            }
                            className={errors.username ? "border-red-500" : ""}
                          />
                          {errors.username && (
                            <p className="text-sm text-red-500">{errors.username}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="complex-email">Email</Label>
                          <Input
                            id="complex-email"
                            type="email"
                            value={complexForm.email}
                            onChange={(e) =>
                              setComplexForm({
                                ...complexForm,
                                email: e.target.value,
                              })
                            }
                            className={errors.email ? "border-red-500" : ""}
                          />
                          {errors.email && (
                            <p className="text-sm text-red-500">{errors.email}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="password">Password</Label>
                          <Input
                            id="password"
                            type="password"
                            value={complexForm.password}
                            onChange={(e) =>
                              setComplexForm({
                                ...complexForm,
                                password: e.target.value,
                              })
                            }
                            className={errors.password ? "border-red-500" : ""}
                          />
                          {errors.password && (
                            <p className="text-sm text-red-500">{errors.password}</p>
                          )}
                        </div>
                      </div>

                      {/* Textarea */}
                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                          id="bio"
                          value={complexForm.bio}
                          onChange={(e) =>
                            setComplexForm({
                              ...complexForm,
                              bio: e.target.value,
                            })
                          }
                          placeholder="Tell us about yourself..."
                          rows={3}
                        />
                      </div>

                      {/* Select */}
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Select
                          value={complexForm.country}
                          onValueChange={(value) =>
                            setComplexForm({ ...complexForm, country: value })
                          }
                        >
                          <SelectTrigger
                            id="country"
                            className={errors.country ? "border-red-500" : ""}
                          >
                            <SelectValue placeholder="Select a country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                            <SelectItem value="au">Australia</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.country && (
                          <p className="text-sm text-red-500">{errors.country}</p>
                        )}
                      </div>

                      {/* Switch */}
                      <div className="flex items-center justify-between">
                        <Label htmlFor="notifications">Email Notifications</Label>
                        <Switch
                          id="notifications"
                          checked={complexForm.notifications}
                          onCheckedChange={(checked) =>
                            setComplexForm({
                              ...complexForm,
                              notifications: checked,
                            })
                          }
                        />
                      </div>

                      {/* Radio Group */}
                      <div className="space-y-2">
                        <Label>Theme Preference</Label>
                        <RadioGroup
                          value={complexForm.theme}
                          onValueChange={(value) =>
                            setComplexForm({ ...complexForm, theme: value })
                          }
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="light" id="light" />
                            <Label htmlFor="light">Light</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="dark" id="dark" />
                            <Label htmlFor="dark">Dark</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="system" id="system" />
                            <Label htmlFor="system">System</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      {/* Slider */}
                      <div className="space-y-2">
                        <Label>
                          Volume: {complexForm.volume[0]}%
                        </Label>
                        <Slider
                          value={complexForm.volume}
                          onValueChange={(value) =>
                            setComplexForm({ ...complexForm, volume: value })
                          }
                          max={100}
                          step={1}
                        />
                      </div>

                      {/* Checkboxes */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="terms"
                            checked={complexForm.terms}
                            onCheckedChange={(checked) =>
                              setComplexForm({
                                ...complexForm,
                                terms: checked as boolean,
                              })
                            }
                          />
                          <Label
                            htmlFor="terms"
                            className={errors.terms ? "text-red-500" : ""}
                          >
                            I accept the terms and conditions
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="newsletter"
                            checked={complexForm.newsletter}
                            onCheckedChange={(checked) =>
                              setComplexForm({
                                ...complexForm,
                                newsletter: checked as boolean,
                              })
                            }
                          />
                          <Label htmlFor="newsletter">
                            Subscribe to newsletter
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="privacy"
                            checked={complexForm.privacy}
                            onCheckedChange={(checked) =>
                              setComplexForm({
                                ...complexForm,
                                privacy: checked as boolean,
                              })
                            }
                          />
                          <Label htmlFor="privacy">
                            I agree to the privacy policy
                          </Label>
                        </div>
                      </div>

                      {/* Submit Buttons */}
                      <div className="flex gap-2">
                        <Button type="submit" className="flex-1">
                          <Save className="mr-2 h-4 w-4" />
                          Submit Form
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={handleComplexReset}
                        >
                          <RotateCcw className="mr-2 h-4 w-4" />
                          Reset
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>

                {/* Status Card */}
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Form Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span>Validation Errors:</span>
                          <Badge
                            variant={
                              Object.keys(errors).length > 0
                                ? "destructive"
                                : "secondary"
                            }
                          >
                            {Object.keys(errors).length}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Form Status:</span>
                          <Badge
                            variant={complexSubmitted ? "success" : "secondary"}
                          >
                            {complexSubmitted ? "Submitted" : "Not Submitted"}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Validation Summary */}
                  {Object.keys(errors).length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <AlertCircle className="h-5 w-5 text-red-500" />
                          Validation Errors
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {Object.entries(errors).map(([field, error]) => (
                            <li key={field} className="text-sm text-red-500">
                              • {error}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )}

                  {/* Success Message */}
                  {complexSubmitted && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          Success!
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Form submitted successfully with all data valid.</p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </motion.div>
    </Layout>
  );
}