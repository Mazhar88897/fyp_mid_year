'use client';

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import router from "next/router";

 function CardWithForm() {
  const [tests, setTests] = React.useState<string[]>([]);
  const [testName, setTestName] = React.useState("");

  // Function to add test
  const addTest = () => {
    if (testName.trim()) {
      setTests([...tests, testName.trim()]);
      setTestName("");
    }
  };

  // Function to remove a specific test
  const removeTest = (index: number) => {
    const updatedTests = tests.filter((_, i) => i !== index);
    setTests(updatedTests);
  };

  // Function to clear all tests
  const clearAllTests = () => {
    setTests([]);
  };

  // Function to truncate text
  const truncateText = (text: string) => {
    const words = text.split(" ");
    return words.length > 3 ? `${words.slice(0, 3).join(" ")}...` : text;
  };

  return (
    <div className="flex flex-col items-center flex-1 p-6">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create Project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Name of your project"
                  value={testName}
                  onChange={(e) => setTestName(e.target.value)}
                />
                <Button type="button" onClick={addTest} className="mt-2">
                  Add Test
                </Button>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Frameworks For Emaddings</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Single page</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
          <div className="mt-4">
            <Label>Added Tests</Label>
            {tests.length === 0 ? (
              <p className="text-gray-500">No tests added yet.</p>
            ) : (
              <ul className="list-disc pl-4">
                {tests.map((test, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span className="text-gray-700">{truncateText(test)}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeTest(index)}
                      className="ml-2"
                    >
                      Cancel
                    </Button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={clearAllTests}>
            Clear All
          </Button>
          <Button onClick={()=>{console.log(tests)}}>webScrap</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

function page() {
  return (
    <main className="p-4 lg:p-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-gray-500 dark:text-gray-400">
        Welcome to your dashboard. Here you can manage your products, customers,
        and analytics.
      </p>
      <div className="mt-8">
        <CardWithForm />
      </div>
      <div className="fixed bottom-4 right-4">
        <button
          onClick={() => router.push("/llm")}
          className="px-6 py-3 bg-black text-white rounded-lg shadow"
        >
          Next
        </button>
      </div>
    </main>
  );
}

export default page;