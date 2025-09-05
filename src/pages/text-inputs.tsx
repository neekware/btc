import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AlignLeft,
  Globe,
  Hash,
  Lock,
  Mail,
  Phone,
  RotateCcw,
  Search,
  Type,
} from "lucide-react";
import { Layout } from "@/components/layout";
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

export default function TextInputs() {
  const [values, setValues] = useState({
    text: "",
    password: "",
    email: "",
    number: "",
    tel: "",
    url: "",
    search: "",
    textarea: "",
    readonly: "This is readonly",
    disabled: "This is disabled",
  });

  const handleChange = (field: string, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const clearAll = () => {
    setValues({
      text: "",
      password: "",
      email: "",
      number: "",
      tel: "",
      url: "",
      search: "",
      textarea: "",
      readonly: "This is readonly",
      disabled: "This is disabled",
    });
  };

  const inputFields = [
    {
      id: "text-input",
      field: "text",
      type: "text",
      label: "Basic Text Input",
      placeholder: "Enter text...",
      icon: Type,
      description: `Value: ${values.text}`,
    },
    {
      id: "password-input",
      field: "password",
      type: "password",
      label: "Password Input",
      placeholder: "Enter password...",
      icon: Lock,
      description: `Length: ${values.password.length} characters`,
    },
    {
      id: "email-input",
      field: "email",
      type: "email",
      label: "Email Input",
      placeholder: "user@example.com",
      icon: Mail,
      description: `Value: ${values.email}`,
    },
    {
      id: "number-input",
      field: "number",
      type: "number",
      label: "Number Input",
      placeholder: "Enter a number...",
      icon: Hash,
      min: "0",
      max: "100",
      description: `Value: ${values.number}`,
    },
    {
      id: "tel-input",
      field: "tel",
      type: "tel",
      label: "Telephone Input",
      placeholder: "(123) 456-7890",
      icon: Phone,
      description: `Value: ${values.tel}`,
    },
    {
      id: "url-input",
      field: "url",
      type: "url",
      label: "URL Input",
      placeholder: "https://example.com",
      icon: Globe,
      description: `Value: ${values.url}`,
    },
    {
      id: "search-input",
      field: "search",
      type: "search",
      label: "Search Input",
      placeholder: "Search...",
      icon: Search,
      description: `Search term: ${values.search}`,
    },
  ];

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
              Text Input Tests
            </h1>
            <p className="text-muted-foreground text-lg">
              Test various text input types and validation states
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {inputFields.map((input) => {
              const Icon = input.icon;
              return (
                <Card key={input.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon className="h-5 w-5" />
                      {input.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Input
                        id={input.id}
                        type={input.type}
                        placeholder={input.placeholder}
                        value={values[input.field as keyof typeof values]}
                        onChange={(e) =>
                          handleChange(input.field, e.target.value)
                        }
                        min={input.min}
                        max={input.max}
                      />
                      <p className="text-muted-foreground text-sm">
                        {input.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlignLeft className="h-5 w-5" />
                  Textarea
                </CardTitle>
                <CardDescription>Multi-line text input</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Textarea
                    id="textarea-input"
                    placeholder="Enter multiple lines of text..."
                    rows={5}
                    value={values.textarea}
                    onChange={(e) => handleChange("textarea", e.target.value)}
                  />
                  <p className="text-muted-foreground text-sm">
                    Characters: {values.textarea.length}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Special States</CardTitle>
                <CardDescription>Readonly and disabled inputs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="readonly-input">Readonly Input</Label>
                    <Input
                      id="readonly-input"
                      type="text"
                      value={values.readonly}
                      readOnly
                      className="bg-muted"
                    />
                  </div>
                  <div>
                    <Label htmlFor="disabled-input">Disabled Input</Label>
                    <Input
                      id="disabled-input"
                      type="text"
                      value={values.disabled}
                      disabled
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Actions</CardTitle>
              <CardDescription>Clear all input values at once</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                id="clear-all"
                onClick={clearAll}
                variant="outline"
                className="w-full"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Clear All Inputs
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Layout>
  );
}
