import React from "react";
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
function page() {
  return (
    <main className="p-4 lg:p-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-gray-500 dark:text-gray-400">
        Welcome to your dashboard. Here you can manage your products, customers,
        and analytics.
      </p>
      <div className="mt-8 justify-center items-center">
        <div class="flex-1  w-full h-full justify-center items-center ">
          <button
            id="createButton"
            class="w-24 h-24 rounded-full bg-gradient-to-r from-black to-black text-white font-bold uppercase shadow-lg transform transition-transform duration-300 hover:scale-110 focus:outline-none"
          >
            Create Chatbot
          </button>
        </div>
      </div>
    </main>
  );
}

export default page;
