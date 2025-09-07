import React, { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { CheckSquare } from "lucide-react";
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

export default function Checkboxes() {
  const [singleCheck, setSingleCheck] = useState(false);
  const [interests, setInterests] = useState({
    sports: false,
    music: false,
    reading: false,
    gaming: false,
    travel: false,
  });
  const [features, setFeatures] = useState({
    newsletter: true,
    notifications: false,
    updates: true,
    marketing: false,
  });
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Build an app", completed: false },
    { id: 3, text: "Deploy to production", completed: false },
  ]);

  const toggleInterest = (interest: keyof typeof interests) => {
    setInterests((prev) => ({ ...prev, [interest]: !prev[interest] }));
  };

  const toggleFeature = (feature: keyof typeof features) => {
    setFeatures((prev) => ({ ...prev, [feature]: !prev[feature] }));
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const selectAllInterests = () => {
    const newState = Object.keys(interests).reduce(
      (acc, key) => ({
        ...acc,
        [key]: true,
      }),
      {} as typeof interests,
    );
    setInterests(newState);
  };

  const clearAllInterests = () => {
    const newState = Object.keys(interests).reduce(
      (acc, key) => ({
        ...acc,
        [key]: false,
      }),
      {} as typeof interests,
    );
    setInterests(newState);
  };

  return (
    <Layout>
      <Head>
        <title>Checkbox Tests | Betsey (bTc)</title>
        <meta
          name="description"
          content="Test checkbox components with various states, controlled and uncontrolled modes, and checkbox groups. Perfect for automation testing."
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
              Checkbox Tests
            </h1>
            <p className="text-muted-foreground text-lg">
              Test various checkbox interactions and states
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckSquare className="h-5 w-5" />
                  Single Checkbox
                </CardTitle>
                <CardDescription>
                  Test basic checkbox functionality
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex items-center space-x-3">
                  <input
                    id="single-checkbox"
                    type="checkbox"
                    checked={singleCheck}
                    onChange={(e) => setSingleCheck(e.target.checked)}
                    className="text-primary focus:ring-primary h-5 w-5 rounded border-gray-300"
                  />
                  <label
                    htmlFor="single-checkbox"
                    className="text-lg font-medium"
                  >
                    I agree to the terms and conditions
                  </label>
                </div>
                <Badge variant={singleCheck ? "default" : "secondary"}>
                  Status: {singleCheck ? "✅ Checked" : "❌ Unchecked"}
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Multiple Checkboxes - Interests</CardTitle>
                <CardDescription>
                  Select your interests from the list
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 space-y-3">
                  {Object.entries(interests).map(([key, value]) => (
                    <div key={key} className="flex items-center space-x-3">
                      <input
                        id={`interest-${key}`}
                        type="checkbox"
                        checked={value}
                        onChange={() =>
                          toggleInterest(key as keyof typeof interests)
                        }
                        className="text-primary focus:ring-primary h-4 w-4 rounded border-gray-300"
                      />
                      <label
                        htmlFor={`interest-${key}`}
                        className="text-sm font-medium capitalize"
                      >
                        {key}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="mb-4 flex gap-2">
                  <Button
                    id="select-all"
                    onClick={selectAllInterests}
                    variant="outline"
                    size="sm"
                  >
                    Select All
                  </Button>
                  <Button
                    id="clear-all"
                    onClick={clearAllInterests}
                    variant="outline"
                    size="sm"
                  >
                    Clear All
                  </Button>
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-sm">
                    Selected:{" "}
                    <strong>
                      {Object.entries(interests)
                        .filter(([_, v]) => v)
                        .map(([k]) => k)
                        .join(", ") || "None"}
                    </strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pre-filled Checkboxes - Email Preferences</CardTitle>
                <CardDescription>
                  Configure your email preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 space-y-3">
                  {Object.entries(features).map(([key, value]) => (
                    <div key={key} className="flex items-center space-x-3">
                      <input
                        id={`feature-${key}`}
                        type="checkbox"
                        checked={value}
                        onChange={() =>
                          toggleFeature(key as keyof typeof features)
                        }
                        className="text-primary focus:ring-primary h-4 w-4 rounded border-gray-300"
                      />
                      <label
                        htmlFor={`feature-${key}`}
                        className="text-sm font-medium capitalize"
                      >
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <h4 className="mb-2 font-semibold">Current Preferences:</h4>
                  <div className="space-y-1">
                    {Object.entries(features).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="capitalize">{key}:</span>
                        <Badge variant={value ? "default" : "secondary"}>
                          {value ? "Enabled" : "Disabled"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Todo List Checkboxes</CardTitle>
                <CardDescription>
                  Interactive todo list with completion tracking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 rounded-lg border border-gray-200 p-4">
                  {todos.map((todo) => (
                    <div key={todo.id} className="flex items-center space-x-3">
                      <input
                        id={`todo-${todo.id}`}
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                        className="text-primary focus:ring-primary h-4 w-4 rounded border-gray-300"
                      />
                      <label
                        htmlFor={`todo-${todo.id}`}
                        className={`text-sm font-medium ${
                          todo.completed
                            ? "text-muted-foreground line-through opacity-60"
                            : ""
                        }`}
                      >
                        {todo.text}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="bg-accent mt-4 rounded-lg p-3">
                  <p className="text-sm">
                    Completed:{" "}
                    <strong>
                      {todos.filter((t) => t.completed).length} / {todos.length}
                    </strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Indeterminate Checkbox</CardTitle>
                <CardDescription>
                  Master checkbox that reflects partial selection state
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <input
                    id="indeterminate-checkbox"
                    type="checkbox"
                    ref={(el) => {
                      if (el) {
                        const checkedCount =
                          Object.values(interests).filter(Boolean).length;
                        el.indeterminate =
                          checkedCount > 0 &&
                          checkedCount < Object.keys(interests).length;
                        el.checked =
                          checkedCount === Object.keys(interests).length;
                      }
                    }}
                    onChange={(e) => {
                      if (e.target.checked) {
                        selectAllInterests();
                      } else {
                        clearAllInterests();
                      }
                    }}
                    className="text-primary focus:ring-primary h-4 w-4 rounded border-gray-300"
                  />
                  <label
                    htmlFor="indeterminate-checkbox"
                    className="text-sm font-medium"
                  >
                    Select all interests (indeterminate state)
                  </label>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
