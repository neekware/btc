import React, { useState } from "react";
// import { useRouter } from 'next/router';
import { motion } from "framer-motion";
import { Clock, ExternalLink, Search as SearchIcon, X } from "lucide-react";
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

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [instantQuery, setInstantQuery] = useState("");
  const [urlQuery, setUrlQuery] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [instantResults, setInstantResults] = useState<string[]>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  // const router = useRouter();

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
      // router.push(`/search?q=${encodeURIComponent(urlQuery)}`);
      window.location.href = `/search?q=${encodeURIComponent(urlQuery)}`;
    }
  };

  const clearHistory = () => {
    setSearchHistory([]);
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
              Search Functionality Test
            </h1>
            <p className="text-muted-foreground text-lg">
              Test various search implementations and behaviors
            </p>
          </div>

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
                <CardDescription>Real-time search as you type</CardDescription>
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
                    <h4 className="mb-2 text-sm font-medium">Live Results:</h4>
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
                {/* {router.query.q && (
                  <div className="bg-muted mt-4 rounded-lg p-3">
                    <p className="text-sm">
                      Current search from URL: <strong>{router.query.q}</strong>
                    </p>
                  </div>
                )} */}
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
        </motion.div>
      </div>
    </Layout>
  );
}
