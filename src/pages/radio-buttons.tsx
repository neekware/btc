import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  CreditCard,
  Package,
  RotateCcw,
  Star,
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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function RadioButtons() {
  const [selectedSize, setSelectedSize] = useState("medium");
  const [selectedColor, setSelectedColor] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [experience, setExperience] = useState("");

  const resetAll = () => {
    setSelectedSize("medium");
    setSelectedColor("");
    setDeliveryMethod("standard");
    setPaymentMethod("credit");
    setExperience("");
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
              Radio Button Tests
            </h1>
            <p className="text-muted-foreground text-lg">
              Test various radio button interactions and selection states
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Size Selection (Default Selected)</CardTitle>
                <CardDescription>
                  Select your preferred size option
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  id="size-selection"
                  value={selectedSize}
                  onValueChange={setSelectedSize}
                  className="space-y-3"
                >
                  {["small", "medium", "large", "extra-large"].map((size) => (
                    <div key={size} className="flex items-center space-x-2">
                      <RadioGroupItem value={size} id={`size-${size}`} />
                      <Label
                        htmlFor={`size-${size}`}
                        className="font-medium capitalize"
                      >
                        {size.replace("-", " ")}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                <div className="bg-muted mt-4 rounded-lg p-3">
                  <p className="text-sm">
                    Selected: <Badge variant="outline">{selectedSize}</Badge>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Color Selection (No Default)</CardTitle>
                <CardDescription>Choose your favorite color</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  id="color-selection"
                  value={selectedColor}
                  onValueChange={setSelectedColor}
                  className="grid grid-cols-2 gap-3 md:grid-cols-3"
                >
                  {["red", "blue", "green", "yellow", "purple"].map((color) => (
                    <div key={color} className="flex items-center space-x-2">
                      <RadioGroupItem value={color} id={`color-${color}`} />
                      <Label
                        htmlFor={`color-${color}`}
                        className="font-medium capitalize"
                        style={{
                          color: color === "yellow" ? "#FFA500" : color,
                        }}
                      >
                        {color}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                <div className="bg-muted mt-4 rounded-lg p-3">
                  <p className="text-sm">
                    Selected:{" "}
                    {selectedColor ? (
                      <Badge
                        variant="outline"
                        style={{
                          color:
                            selectedColor === "yellow"
                              ? "#FFA500"
                              : selectedColor,
                          borderColor:
                            selectedColor === "yellow"
                              ? "#FFA500"
                              : selectedColor,
                        }}
                      >
                        {selectedColor}
                      </Badge>
                    ) : (
                      <Badge variant="outline">None</Badge>
                    )}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Delivery Options
              </CardTitle>
              <CardDescription>
                Choose your delivery speed and pricing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup
                id="delivery-options"
                value={deliveryMethod}
                onValueChange={setDeliveryMethod}
                className="space-y-4"
              >
                {[
                  {
                    value: "express",
                    title: "Express Delivery",
                    description: "Get it tomorrow ($15)",
                    price: "$15",
                  },
                  {
                    value: "standard",
                    title: "Standard Delivery",
                    description: "3-5 business days ($5)",
                    price: "$5",
                  },
                  {
                    value: "economy",
                    title: "Economy Delivery",
                    description: "7-10 business days (Free)",
                    price: "Free",
                  },
                ].map((option) => (
                  <div
                    key={option.value}
                    className={`relative cursor-pointer rounded-lg border p-4 transition-colors ${
                      deliveryMethod === option.value
                        ? "border-primary bg-primary/5"
                        : "border-border hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem
                        value={option.value}
                        id={`delivery-${option.value}`}
                      />
                      <div className="flex-1">
                        <Label
                          htmlFor={`delivery-${option.value}`}
                          className="cursor-pointer font-semibold"
                        >
                          {option.title}
                        </Label>
                        <p className="text-muted-foreground mt-1 text-sm">
                          {option.description}
                        </p>
                      </div>
                      <Badge
                        variant={
                          deliveryMethod === option.value
                            ? "default"
                            : "outline"
                        }
                      >
                        {option.price}
                      </Badge>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Payment Method
              </CardTitle>
              <CardDescription>
                Select your preferred payment option
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup
                id="payment-method"
                value={paymentMethod}
                onValueChange={setPaymentMethod}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { value: "credit", label: "💳 Credit Card" },
                  { value: "debit", label: "💰 Debit Card" },
                  { value: "paypal", label: "🅿️ PayPal" },
                  { value: "apple", label: "🍎 Apple Pay" },
                ].map((method) => (
                  <div
                    key={method.value}
                    className={`relative cursor-pointer rounded-lg border-2 p-4 transition-all hover:shadow-md ${
                      paymentMethod === method.value
                        ? "border-green-400 bg-green-50"
                        : "border-muted hover:border-muted-foreground/30"
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-3">
                      <RadioGroupItem
                        value={method.value}
                        id={`payment-${method.value}`}
                      />
                      <Label
                        htmlFor={`payment-${method.value}`}
                        className="cursor-pointer text-center font-medium"
                      >
                        {method.label}
                      </Label>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Experience Rating
              </CardTitle>
              <CardDescription>
                How would you rate your experience?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup
                id="experience-rating"
                value={experience}
                onValueChange={setExperience}
                className="grid grid-cols-5 gap-4"
              >
                {["terrible", "bad", "okay", "good", "excellent"].map(
                  (rating, index) => (
                    <div key={rating} className="text-center">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="text-2xl">{"⭐".repeat(index + 1)}</div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value={rating}
                            id={`experience-${rating}`}
                          />
                          <Label
                            htmlFor={`experience-${rating}`}
                            className="cursor-pointer text-xs capitalize"
                          >
                            {rating}
                          </Label>
                        </div>
                      </div>
                    </div>
                  ),
                )}
              </RadioGroup>
              {experience && (
                <div className="bg-muted mt-4 rounded-lg p-3">
                  <p className="text-sm">
                    You rated: <Badge variant="outline">{experience}</Badge>
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Selection Summary
              </CardTitle>
              <CardDescription>Review all your selections</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted mb-4 rounded-lg p-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Size:</span>
                    <Badge variant="outline">{selectedSize}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Color:</span>
                    <Badge variant="outline">
                      {selectedColor || "Not selected"}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Delivery:</span>
                    <Badge variant="outline">{deliveryMethod}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Payment:</span>
                    <Badge variant="outline">{paymentMethod}</Badge>
                  </div>
                  <div className="flex items-center justify-between md:col-span-2">
                    <span className="font-medium">Experience:</span>
                    <Badge variant="outline">{experience || "Not rated"}</Badge>
                  </div>
                </div>
              </div>
              <Button onClick={resetAll} variant="outline" className="w-full">
                <RotateCcw className="mr-2 h-4 w-4" />
                Reset All Selections
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Layout>
  );
}
