import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Filter, Globe, RotateCcw } from "lucide-react";
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

export default function Dropdowns() {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [multiSelect, setMultiSelect] = useState<string[]>([]);
  const [size, setSize] = useState("medium");
  const [category, setCategory] = useState("");

  const countries = [
    { code: "us", name: "United States" },
    { code: "ca", name: "Canada" },
    { code: "uk", name: "United Kingdom" },
    { code: "au", name: "Australia" },
    { code: "de", name: "Germany" },
    { code: "fr", name: "France" },
    { code: "jp", name: "Japan" },
  ];

  const states = {
    us: ["California", "New York", "Texas", "Florida"],
    ca: ["Ontario", "Quebec", "British Columbia", "Alberta"],
    uk: ["England", "Scotland", "Wales", "Northern Ireland"],
  };

  const categories = {
    electronics: ["Phones", "Laptops", "Tablets", "Cameras"],
    clothing: ["Shirts", "Pants", "Shoes", "Accessories"],
    books: ["Fiction", "Non-Fiction", "Science", "History"],
  };

  const handleMultiSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(e.target.selectedOptions).map(
      (option) => option.value,
    );
    setMultiSelect(selected);
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
              Dropdown/Select Tests
            </h1>
            <p className="text-muted-foreground text-lg">
              Test various dropdown and select interactions
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ChevronDown className="h-5 w-5" />
                  Basic Dropdown
                </CardTitle>
                <CardDescription>
                  Test basic select functionality
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="size-select"
                      className="mb-2 block text-sm font-medium"
                    >
                      Select Size:
                    </label>
                    <select
                      id="size-select"
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                      className="focus:ring-primary focus:border-primary w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm"
                    >
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                      <option value="xlarge">Extra Large</option>
                    </select>
                  </div>
                  <Badge variant="outline">
                    Selected: <strong>{size}</strong>
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Country/State Cascade
                </CardTitle>
                <CardDescription>Dependent dropdown selection</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="country-select"
                      className="mb-2 block text-sm font-medium"
                    >
                      Country:
                    </label>
                    <select
                      id="country-select"
                      value={country}
                      onChange={(e) => {
                        setCountry(e.target.value);
                        setState(""); // Reset state when country changes
                      }}
                      className="focus:ring-primary focus:border-primary w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm"
                    >
                      <option value="">-- Select Country --</option>
                      {countries.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {country && states[country as keyof typeof states] && (
                    <div>
                      <label
                        htmlFor="state-select"
                        className="mb-2 block text-sm font-medium"
                      >
                        State/Province:
                      </label>
                      <select
                        id="state-select"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        disabled={!country}
                        className="focus:ring-primary focus:border-primary w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm disabled:opacity-50"
                      >
                        <option value="">-- Select State/Province --</option>
                        {states[country as keyof typeof states]?.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {country && state && (
                    <div className="bg-accent rounded-lg p-3">
                      <p className="text-sm">
                        Selected:{" "}
                        <strong>
                          {countries.find((c) => c.code === country)?.name},{" "}
                          {state}
                        </strong>
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Multi-Select</CardTitle>
                <CardDescription>
                  Select multiple programming languages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="multi-select"
                      className="mb-2 block text-sm font-medium"
                    >
                      Select Languages (Hold Ctrl/Cmd to select multiple):
                    </label>
                    <select
                      id="multi-select"
                      multiple
                      value={multiSelect}
                      onChange={handleMultiSelectChange}
                      className="focus:ring-primary focus:border-primary h-36 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm"
                    >
                      <option value="javascript">JavaScript</option>
                      <option value="python">Python</option>
                      <option value="java">Java</option>
                      <option value="csharp">C#</option>
                      <option value="ruby">Ruby</option>
                      <option value="go">Go</option>
                      <option value="rust">Rust</option>
                    </select>
                  </div>
                  <div className="bg-muted rounded-lg p-3">
                    <p className="text-sm">
                      Selected:{" "}
                      <strong>
                        {multiSelect.length > 0
                          ? multiSelect.join(", ")
                          : "None"}
                      </strong>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Grouped Options
                </CardTitle>
                <CardDescription>Organized product categories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="category-select"
                      className="mb-2 block text-sm font-medium"
                    >
                      Select Product:
                    </label>
                    <select
                      id="category-select"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="focus:ring-primary focus:border-primary w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm"
                    >
                      <option value="">-- Select Product --</option>
                      {Object.entries(categories).map(([cat, items]) => (
                        <optgroup
                          key={cat}
                          label={cat.charAt(0).toUpperCase() + cat.slice(1)}
                        >
                          {items.map((item) => (
                            <option
                              key={item}
                              value={`${cat}-${item.toLowerCase()}`}
                            >
                              {item}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>
                  {category && (
                    <Badge variant="outline">
                      Selected: <strong>{category}</strong>
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Disabled Options</CardTitle>
                <CardDescription>Some options are unavailable</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <label
                    htmlFor="availability-select"
                    className="mb-2 block text-sm font-medium"
                  >
                    Select Day:
                  </label>
                  <select
                    id="availability-select"
                    className="focus:ring-primary focus:border-primary w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm"
                  >
                    <option value="">-- Select Day --</option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday" disabled>
                      Wednesday (Unavailable)
                    </option>
                    <option value="thursday">Thursday</option>
                    <option value="friday" disabled>
                      Friday (Unavailable)
                    </option>
                    <option value="saturday">Saturday</option>
                    <option value="sunday">Sunday</option>
                  </select>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Selection Summary</CardTitle>
              <CardDescription>
                Current dropdown selections overview
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted mb-4 rounded-lg p-4">
                <h3 className="mb-3 font-semibold">Current Selections:</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Size:</span>
                    <Badge variant="outline">{size}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Location:</span>
                    <Badge variant="outline">
                      {country && state
                        ? `${countries.find((c) => c.code === country)?.name}, ${state}`
                        : "Not selected"}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Languages:</span>
                    <Badge variant="outline">
                      {multiSelect.length > 0
                        ? multiSelect.join(", ")
                        : "None selected"}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Product:</span>
                    <Badge variant="outline">
                      {category || "Not selected"}
                    </Badge>
                  </div>
                </div>
              </div>
              <Button
                onClick={() => {
                  setCountry("");
                  setState("");
                  setMultiSelect([]);
                  setSize("medium");
                  setCategory("");
                }}
                variant="outline"
                className="w-full"
              >
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
