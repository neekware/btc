import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Mail,
  MessageSquare,
  RotateCcw,
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function FormSubmit() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(
    null,
  );
  const [submitCount, setSubmitCount] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedData({ ...formData });
    setSubmitCount((count) => count + 1);
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
    setSubmittedData(null);
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
              Form Submit Test
            </h1>
            <p className="text-muted-foreground text-lg">
              Test form submission and validation handling
            </p>
          </div>

          <div className="grid max-w-6xl gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Contact Form
                </CardTitle>
                <CardDescription>
                  Fill out the form to test submission
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  id="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          })
                        }
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john.doe@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="flex items-center gap-2"
                    >
                      <MessageSquare className="h-4 w-4" />
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Your message here..."
                    />
                  </div>

                  <div className="flex gap-3">
                    <Button id="submit-btn" type="submit" className="flex-1">
                      <Send className="mr-2 h-4 w-4" />
                      Submit Form
                    </Button>
                    <Button
                      id="reset-btn"
                      type="button"
                      onClick={handleReset}
                      variant="outline"
                    >
                      <RotateCcw className="mr-2 h-4 w-4" />
                      Reset
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Form Status
                </CardTitle>
                <CardDescription>
                  View submission results and manage data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  id="form-status"
                  className={`min-h-[200px] rounded-lg border-2 p-6 ${
                    submittedData
                      ? "border-green-200 bg-green-50"
                      : "bg-muted border-gray-200"
                  }`}
                >
                  {submittedData ? (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-green-700">
                        <CheckCircle className="h-5 w-5" />
                        <h3 className="text-lg font-semibold">
                          Form Submitted Successfully!
                        </h3>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-green-300 text-green-700"
                      >
                        Submit count: {submitCount}
                      </Badge>
                      <div>
                        <h4 className="mb-3 font-semibold">Submitted Data:</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="font-medium">Name:</span>
                            <span>
                              {submittedData.firstName} {submittedData.lastName}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Email:</span>
                            <span>{submittedData.email}</span>
                          </div>
                          <div className="flex items-start justify-between">
                            <span className="font-medium">Message:</span>
                            <span className="max-w-xs text-right">
                              {submittedData.message || "(No message provided)"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2 py-8 text-center">
                      <h3 className="text-muted-foreground font-semibold">
                        No form submitted yet
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Fill out the form and click submit to see the results
                        here.
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-6 space-y-3">
                  <h3 className="font-semibold">Quick Actions</h3>
                  <div className="flex gap-3">
                    <Button
                      onClick={() =>
                        setFormData({
                          firstName: "John",
                          lastName: "Doe",
                          email: "john.doe@example.com",
                          message: "This is a test message.",
                        })
                      }
                      variant="outline"
                      size="sm"
                    >
                      Fill Sample Data
                    </Button>
                    <Button
                      onClick={() => setSubmittedData(null)}
                      variant="outline"
                      size="sm"
                    >
                      Clear Results
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
