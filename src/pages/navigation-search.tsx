import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  ExternalLink,
  Hash,
  Home,
  RotateCcw,
  Search as SearchIcon,
  X,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function NavigationSearch() {
  // Navigation state
  const [visitCount, setVisitCount] = useState(1);
  const router = useRouter();

  // Search state
  const [searchQuery, setSearchQuery] = useState("");
  const [instantQuery, setInstantQuery] = useState("");
  const [urlQuery, setUrlQuery] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [instantResults, setInstantResults] = useState<string[]>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const mockData = [
    "Apple iPhone 15 Pro",
    "Samsung Galaxy S24",
    "Google Pixel 8",
    "MacBook Pro M3",
    "Dell XPS 15",
    "iPad Air",
    "Microsoft Surface",
    "Sony PlayStation 5",
    "Xbox Series X",
    "Nintendo Switch",
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const results = mockData.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setSearchResults(results);

    if (searchQuery.trim() && !searchHistory.includes(searchQuery)) {
      setSearchHistory((prev) => [searchQuery, ...prev.slice(0, 4)]);
    }
  };

  const handleInstantSearch = (query: string) => {
    setInstantQuery(query);
    if (query.trim()) {
      const results = mockData.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase()),
      );
      setInstantResults(results);
    } else {
      setInstantResults([]);
    }
  };

  const handleUrlSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (urlQuery.trim()) {
      window.location.href = `/navigation-search?q=${encodeURIComponent(urlQuery)}`;
    }
  };

  const clearHistory = () => {
    setSearchHistory([]);
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="gradient-text mb-4 text-4xl font-bold">
              Navigation & Search
            </h1>
            <p className="text-muted-foreground text-lg">
              Test navigation methods and search functionality
            </p>
            <Badge variant="outline" className="mt-2">
              Page visits: {visitCount}
            </Badge>
          </motion.div>

          <Tabs defaultValue="navigation" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="navigation">Navigation</TabsTrigger>
              <TabsTrigger value="search">Search</TabsTrigger>
            </TabsList>

            <TabsContent value="navigation">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ExternalLink className="h-5 w-5" />
                      Links Navigation
                    </CardTitle>
                    <CardDescription>
                      Navigation using Next.js Link components
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href="/"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-md px-3 py-2 transition-colors"
                      >
                        <Home className="h-4 w-4" />
                        Home
                      </Link>
                      <Link
                        href="/forms"
                        className="bg-secondary text-secondary-foreground hover:bg-secondary/90 inline-flex items-center gap-2 rounded-md px-3 py-2 transition-colors"
                      >
                        Forms
                      </Link>
                      <Link
                        href="/interactive"
                        className="bg-secondary text-secondary-foreground hover:bg-secondary/90 inline-flex items-center gap-2 rounded-md px-3 py-2 transition-colors"
                      >
                        Interactive
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Programmatic Navigation</CardTitle>
                    <CardDescription>
                      Navigation using the Next.js router
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        onClick={() => router.push("/")}
                        className="flex items-center gap-2"
                      >
                        <Home className="h-4 w-4" />
                        Go to Home
                      </Button>
                      <Button
                        onClick={() => router.back()}
                        variant="outline"
                        className="flex items-center gap-2"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        Go Back
                      </Button>
                      <Button
                        onClick={() => router.forward()}
                        variant="outline"
                        className="flex items-center gap-2"
                      >
                        <ArrowRight className="h-4 w-4" />
                        Go Forward
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Hash className="h-5 w-5" />
                      Hash Navigation
                    </CardTitle>
                    <CardDescription>
                      Navigate to sections within the page
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="#section1"
                        className="bg-accent text-accent-foreground hover:bg-accent/90 inline-flex items-center gap-2 rounded-md px-3 py-2 transition-colors"
                      >
                        Section 1
                      </a>
                      <a
                        href="#section2"
                        className="bg-accent text-accent-foreground hover:bg-accent/90 inline-flex items-center gap-2 rounded-md px-3 py-2 transition-colors"
                      >
                        Section 2
                      </a>
                      <a
                        href="#section3"
                        className="bg-accent text-accent-foreground hover:bg-accent/90 inline-flex items-center gap-2 rounded-md px-3 py-2 transition-colors"
                      >
                        Section 3
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <RotateCcw className="h-5 w-5" />
                      Reload Test
                    </CardTitle>
                    <CardDescription>
                      Test page reload functionality
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      onClick={() => {
                        setVisitCount((count) => count + 1);
                        window.location.reload();
                      }}
                      variant="destructive"
                      className="flex items-center gap-2"
                    >
                      <RotateCcw className="h-4 w-4" />
                      Reload Page
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 space-y-8">
                <Card
                  id="section1"
                  className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950"
                >
                  <CardHeader>
                    <CardTitle className="text-blue-800 dark:text-blue-200">
                      Section 1
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-700 dark:text-blue-300">
                      This is section 1 content. You can navigate here using the
                      hash navigation buttons above.
                    </p>
                  </CardContent>
                </Card>

                <Card
                  id="section2"
                  className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950"
                >
                  <CardHeader>
                    <CardTitle className="text-green-800 dark:text-green-200">
                      Section 2
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-700 dark:text-green-300">
                      This is section 2 content. Hash navigation allows smooth
                      scrolling to specific page sections.
                    </p>
                  </CardContent>
                </Card>

                <Card
                  id="section3"
                  className="border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950"
                >
                  <CardHeader>
                    <CardTitle className="text-purple-800 dark:text-purple-200">
                      Section 3
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-purple-700 dark:text-purple-300">
                      This is section 3 content, the final section in our
                      navigation test page.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="search">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <SearchIcon className="h-5 w-5" />
                      Standard Search
                    </CardTitle>
                    <CardDescription>
                      Traditional form submit search
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form
                      id="search-form"
                      onSubmit={handleSearch}
                      className="space-y-4"
                    >
                      <div className="flex gap-2">
                        <Input
                          id="search-input"
                          name="q"
                          type="search"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search products..."
                          className="flex-1"
                        />
                        <Button id="search-button" type="submit">
                          Search
                        </Button>
                      </div>
                    </form>
                    {searchResults.length > 0 && (
                      <div className="mt-4">
                        <h4 className="mb-2 text-sm font-medium">Results:</h4>
                        <div className="space-y-2">
                          {searchResults.map((result, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <Badge
                                variant="secondary"
                                className="w-full justify-start"
                              >
                                {result}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Instant Search</CardTitle>
                    <CardDescription>
                      Real-time search as you type
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Input
                      id="instant-search"
                      type="search"
                      placeholder="Type to search instantly..."
                      value={instantQuery}
                      onChange={(e) => handleInstantSearch(e.target.value)}
                    />
                    {instantResults.length > 0 && (
                      <div className="mt-4">
                        <h4 className="mb-2 text-sm font-medium">
                          Live Results:
                        </h4>
                        <div className="space-y-2">
                          {instantResults.map((result, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Badge
                                variant="outline"
                                className="w-full justify-start"
                              >
                                {result}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                    {instantQuery && instantResults.length === 0 && (
                      <p className="text-muted-foreground mt-4 text-sm">
                        No results found
                      </p>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ExternalLink className="h-5 w-5" />
                      URL Parameter Search
                    </CardTitle>
                    <CardDescription>
                      Search that updates browser URL
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleUrlSearch} className="space-y-4">
                      <div className="flex gap-2">
                        <Input
                          type="search"
                          placeholder="Search and update URL..."
                          value={urlQuery}
                          onChange={(e) => setUrlQuery(e.target.value)}
                          className="flex-1"
                        />
                        <Button type="submit">Search with URL</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Search History
                    </CardTitle>
                    <CardDescription>Recently searched terms</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div id="search-history">
                      {searchHistory.length > 0 ? (
                        <div className="space-y-2">
                          {searchHistory.map((query, index) => (
                            <Button
                              key={index}
                              variant="ghost"
                              size="sm"
                              className="w-full justify-start"
                              onClick={() => {
                                setSearchQuery(query);
                                handleInstantSearch(query);
                              }}
                            >
                              <Clock className="mr-2 h-3 w-3" />
                              {query}
                            </Button>
                          ))}
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full"
                            onClick={clearHistory}
                          >
                            <X className="mr-2 h-3 w-3" />
                            Clear History
                          </Button>
                        </div>
                      ) : (
                        <p className="text-muted-foreground text-sm">
                          No search history
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Search Results Summary</CardTitle>
                  <CardDescription>
                    Combined results from all search types
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div id="search-results" className="text-muted-foreground">
                    {searchQuery || instantQuery ? (
                      <p>
                        Showing results for:{" "}
                        <strong>{searchQuery || instantQuery}</strong>
                      </p>
                    ) : (
                      <p>Enter a search query to see results</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </motion.div>
    </Layout>
  );
}
