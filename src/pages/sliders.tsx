import React, { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  BarChart,
  DollarSign,
  RotateCcw,
  Star,
  Sun,
  Thermometer,
  Volume2,
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
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";

export default function Sliders() {
  const [volume, setVolume] = useState(50);
  const [brightness, setBrightness] = useState(5);
  const [price, setPrice] = useState({ min: 100, max: 500 });
  const [rating, setRating] = useState(3);
  const [temperature, setTemperature] = useState(20);
  const [progress, setProgress] = useState(0);

  const resetAll = () => {
    setVolume(50);
    setBrightness(5);
    setPrice({ min: 100, max: 500 });
    setRating(3);
    setTemperature(20);
    setProgress(0);
  };

  return (
    <Layout>
      <Head>
        <title>Slider & Range Tests | Betsey (bTc)</title>
        <meta
          name="description"
          content="Test slider components, range inputs, and progress bars with various configurations for UI automation testing."
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
              Slider & Range Tests
            </h1>
            <p className="text-muted-foreground text-lg">
              Test various slider interactions and value controls
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Volume2 className="h-5 w-5" />
                  Volume Control
                </CardTitle>
                <CardDescription>Adjust audio volume level</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Label htmlFor="volume-slider">Volume: {volume}%</Label>
                  <Slider
                    id="volume-slider"
                    min={0}
                    max={100}
                    step={1}
                    value={[volume]}
                    onValueChange={([value]) => setVolume(value)}
                    className="w-full"
                  />
                  <div className="text-muted-foreground flex justify-between text-sm">
                    <span>🔇 Mute</span>
                    <Badge variant="outline">{volume}%</Badge>
                    <span>🔊 Max</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sun className="h-5 w-5" />
                  Brightness Control
                </CardTitle>
                <CardDescription>
                  Control display brightness with visual feedback
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Label htmlFor="brightness-slider">
                    Brightness: {brightness}%
                  </Label>
                  <div
                    className="rounded-lg border p-5 transition-all duration-300"
                    style={{
                      backgroundColor: `rgba(255, 255, 255, ${brightness / 100})`,
                      boxShadow: `inset 0 0 20px rgba(0,0,0,${(100 - brightness) / 200})`,
                    }}
                  >
                    <Slider
                      id="brightness-slider"
                      min={0}
                      max={100}
                      step={1}
                      value={[brightness]}
                      onValueChange={([value]) => setBrightness(value)}
                      className="w-full"
                    />
                    <p
                      className={`mt-3 text-center transition-colors ${brightness < 50 ? "text-gray-800" : "text-gray-600"}`}
                    >
                      Adjust brightness to see effect
                    </p>
                  </div>
                  <Badge variant="outline">Current: {brightness}%</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Price Range
              </CardTitle>
              <CardDescription>
                Set minimum and maximum price range
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-3">
                  <Label htmlFor="min-price">Min Price: ${price.min}</Label>
                  <Slider
                    id="min-price"
                    min={0}
                    max={1000}
                    step={50}
                    value={[price.min]}
                    onValueChange={([value]) =>
                      setPrice({
                        ...price,
                        min: Math.min(value, price.max - 50),
                      })
                    }
                    className="w-full"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="max-price">Max Price: ${price.max}</Label>
                  <Slider
                    id="max-price"
                    min={0}
                    max={1000}
                    step={50}
                    value={[price.max]}
                    onValueChange={([value]) =>
                      setPrice({
                        ...price,
                        max: Math.max(value, price.min + 50),
                      })
                    }
                    className="w-full"
                  />
                </div>
              </div>
              <div className="bg-muted rounded-lg p-4 text-center">
                <p className="text-muted-foreground mb-2 text-sm">
                  Selected Price Range
                </p>
                <div className="flex justify-center gap-2">
                  <Badge variant="outline">${price.min}</Badge>
                  <span className="self-center">-</span>
                  <Badge variant="outline">${price.max}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Star Rating
                </CardTitle>
                <CardDescription>
                  Rate your experience from 1 to 5 stars
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Label htmlFor="rating-slider">Rating: {rating} stars</Label>
                  <Slider
                    id="rating-slider"
                    min={1}
                    max={5}
                    step={1}
                    value={[rating]}
                    onValueChange={([value]) => setRating(value)}
                    className="w-full"
                  />
                  <div className="flex justify-center space-x-1 text-4xl">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.span
                        key={star}
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.2 }}
                        className={`cursor-pointer transition-colors ${
                          star <= rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                        onClick={() => setRating(star)}
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                  <div className="text-center">
                    <Badge variant="outline">{rating} out of 5 stars</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Thermometer className="h-5 w-5" />
                  Temperature Control
                </CardTitle>
                <CardDescription>
                  Set temperature with visual feedback
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Label htmlFor="temp-slider">
                    Temperature: {temperature}°C
                  </Label>
                  <Slider
                    id="temp-slider"
                    min={-10}
                    max={40}
                    step={1}
                    value={[temperature]}
                    onValueChange={([value]) => setTemperature(value)}
                    className="w-full"
                  />
                  <div className="text-muted-foreground flex justify-between text-xs">
                    <span>-10°C</span>
                    <span>0°C</span>
                    <span>20°C</span>
                    <span>30°C</span>
                    <span>40°C</span>
                  </div>
                  <motion.div
                    className={`rounded-lg p-4 text-center text-lg font-semibold transition-all duration-300 ${
                      temperature < 10
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                        : temperature > 25
                          ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400"
                          : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {temperature < 10 && "❄️ Cold"}
                    {temperature >= 10 && temperature <= 25 && "😊 Comfortable"}
                    {temperature > 25 && "🔥 Hot"}
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart className="h-5 w-5" />
                Progress Bar Control
              </CardTitle>
              <CardDescription>
                Control progress with color-coded feedback
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Label htmlFor="progress-slider">
                  Task Progress: {progress}%
                </Label>
                <Slider
                  id="progress-slider"
                  min={0}
                  max={100}
                  step={1}
                  value={[progress]}
                  onValueChange={([value]) => setProgress(value)}
                  className="w-full"
                />
                <div className="mt-4">
                  <Progress
                    value={progress}
                    className={`h-6 transition-all duration-300 ${
                      progress < 33
                        ? "[&>div]:bg-red-500"
                        : progress < 66
                          ? "[&>div]:bg-orange-500"
                          : "[&>div]:bg-green-500"
                    }`}
                  />
                  <p className="mt-2 text-center text-sm">
                    {progress < 33 && "🔴 Starting"}
                    {progress >= 33 && progress < 66 && "🟡 In Progress"}
                    {progress >= 66 && "🟢 Nearly Done"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Volume Presets</CardTitle>
              <CardDescription>
                Quick volume settings for common scenarios
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={() => setVolume(0)}
                  variant="outline"
                  size="sm"
                >
                  🔇 Mute
                </Button>
                <Button
                  onClick={() => setVolume(25)}
                  variant="outline"
                  size="sm"
                >
                  🔈 25%
                </Button>
                <Button
                  onClick={() => setVolume(50)}
                  variant="outline"
                  size="sm"
                >
                  🔉 50%
                </Button>
                <Button
                  onClick={() => setVolume(75)}
                  variant="outline"
                  size="sm"
                >
                  🔊 75%
                </Button>
                <Button
                  onClick={() => setVolume(100)}
                  variant="outline"
                  size="sm"
                >
                  📢 Max
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>All Values Summary</CardTitle>
              <CardDescription>Current settings overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted mb-4 rounded-lg p-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Volume:</span>
                    <Badge variant="outline">{volume}%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Brightness:</span>
                    <Badge variant="outline">{brightness}%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Price Range:</span>
                    <Badge variant="outline">
                      ${price.min} - ${price.max}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Rating:</span>
                    <Badge variant="outline">{rating} stars</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Temperature:</span>
                    <Badge variant="outline">{temperature}°C</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Progress:</span>
                    <Badge variant="outline">{progress}%</Badge>
                  </div>
                </div>
              </div>
              <Button onClick={resetAll} variant="outline" className="w-full">
                <RotateCcw className="mr-2 h-4 w-4" />
                Reset All Values
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Layout>
  );
}
