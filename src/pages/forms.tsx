import React, { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, FileText, Save } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

export default function Forms() {
  const [formData, setFormData] = useState({
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
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!formData.country) newErrors.country = "Please select a country";
    if (!formData.terms) newErrors.terms = "You must accept the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitted(true);
      toast({
        title: "Form Submitted Successfully!",
        description:
          "Your form has been submitted with all validations passed.",
      });
      console.log("Form Data:", formData);
    } else {
      toast({
        title: "Validation Failed",
        description: "Please fix the errors in the form.",
        variant: "destructive",
      });
    }
  };

  const handleReset = () => {
    setFormData({
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
    setSubmitted(false);
  };

  return (
    <Layout>
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h1 className="gradient-text mb-4 text-4xl font-bold">
              Form Elements Test
            </h1>
            <p className="text-muted-foreground text-lg">
              Comprehensive form with all input types and validation
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Basic Information
                </CardTitle>
                <CardDescription>
                  Enter your basic account information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username *</Label>
                  <Input
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                    className={errors.username ? "border-destructive" : ""}
                  />
                  {errors.username && (
                    <p className="text-destructive flex items-center gap-1 text-sm">
                      <AlertCircle className="h-3 w-3" />
                      {errors.username}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-destructive flex items-center gap-1 text-sm">
                      <AlertCircle className="h-3 w-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password *</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className={errors.password ? "border-destructive" : ""}
                  />
                  {errors.password && (
                    <p className="text-destructive flex items-center gap-1 text-sm">
                      <AlertCircle className="h-3 w-3" />
                      {errors.password}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    placeholder="Tell us about yourself..."
                    value={formData.bio}
                    onChange={(e) =>
                      setFormData({ ...formData, bio: e.target.value })
                    }
                    className="min-h-[100px]"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Preferences</CardTitle>
                <CardDescription>Customize your experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="country">Country *</Label>
                  <Select
                    value={formData.country}
                    onValueChange={(value) =>
                      setFormData({ ...formData, country: value })
                    }
                  >
                    <SelectTrigger
                      id="country"
                      className={errors.country ? "border-destructive" : ""}
                    >
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                      <SelectItem value="de">Germany</SelectItem>
                      <SelectItem value="fr">France</SelectItem>
                      <SelectItem value="jp">Japan</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.country && (
                    <p className="text-destructive flex items-center gap-1 text-sm">
                      <AlertCircle className="h-3 w-3" />
                      {errors.country}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="notifications">Email Notifications</Label>
                    <p className="text-muted-foreground text-sm">
                      Receive emails about your account activity
                    </p>
                  </div>
                  <Switch
                    id="notifications"
                    checked={formData.notifications}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, notifications: checked })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label>Theme Preference</Label>
                  <RadioGroup
                    value={formData.theme}
                    onValueChange={(value) =>
                      setFormData({ ...formData, theme: value })
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

                <div className="space-y-2">
                  <Label htmlFor="volume">
                    Volume Level: {formData.volume[0]}%
                  </Label>
                  <Slider
                    id="volume"
                    min={0}
                    max={100}
                    step={1}
                    value={formData.volume}
                    onValueChange={(value) =>
                      setFormData({ ...formData, volume: value })
                    }
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Legal Agreements</CardTitle>
                <CardDescription>
                  Please review and accept our terms
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.terms}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, terms: checked as boolean })
                    }
                  />
                  <Label
                    htmlFor="terms"
                    className={`text-sm font-normal ${errors.terms ? "text-destructive" : ""}`}
                  >
                    I accept the terms and conditions *
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) =>
                      setFormData({
                        ...formData,
                        newsletter: checked as boolean,
                      })
                    }
                  />
                  <Label htmlFor="newsletter" className="text-sm font-normal">
                    Subscribe to our newsletter
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="privacy"
                    checked={formData.privacy}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, privacy: checked as boolean })
                    }
                  />
                  <Label htmlFor="privacy" className="text-sm font-normal">
                    I have read the privacy policy
                  </Label>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Button type="submit" size="lg" className="flex-1">
                    <Save className="mr-2 h-4 w-4" />
                    Submit Form
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={handleReset}
                  >
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </form>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6"
            >
              <Card className="border-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="h-5 w-5" />
                    Form Submitted Successfully!
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Here&apos;s what was submitted:
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex gap-2">
                      <span className="font-medium">Username:</span>
                      <Badge variant="secondary">{formData.username}</Badge>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium">Email:</span>
                      <Badge variant="secondary">{formData.email}</Badge>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium">Country:</span>
                      <Badge variant="secondary">{formData.country}</Badge>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium">Theme:</span>
                      <Badge variant="secondary">{formData.theme}</Badge>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium">Notifications:</span>
                      <Badge
                        variant={formData.notifications ? "default" : "outline"}
                      >
                        {formData.notifications ? "Enabled" : "Disabled"}
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium">Volume:</span>
                      <Badge variant="secondary">{formData.volume[0]}%</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </div>
    </Layout>
  );
}
