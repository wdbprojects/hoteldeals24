"use client";

import { FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchField = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} method="GET" action="/search">
      <div className="relative">
        <Input name="query" placeholder="Search..." className="pl-8" />
        <Search className="absolute left-2 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
      </div>
    </form>
  );
};

export default SearchField;
