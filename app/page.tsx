"use client";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";

import collegeData from "@/public/schools";
import db from "@/lib/db";
import { create } from "./actions";
import formSchema from "@/lib/zod";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

const colleges = collegeData.map((school) => ({
  label: school,
  value: school,
}));

export function ProfileForm() {
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    const userId = await create(values);
    router.push(`/users/${userId}/badge`);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>what&apos;s your full name?</FormLabel>
              <FormControl>
                <Input placeholder="DDoSki the Bear" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>what&apos;s your email?</FormLabel>
              <FormControl>
                <Input placeholder="ddoski@berkeley.edu" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="college"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>what college are you from?</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? colleges.find(
                            (college) => college.value === field.value
                          )?.label
                        : "Select college"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                  <Command>
                    <CommandInput placeholder="Search college..." />
                    <CommandList>
                      <CommandEmpty>No college found.</CommandEmpty>
                      <CommandGroup>
                        {colleges.map((college) => (
                          <CommandItem
                            value={college.label}
                            key={college.value}
                            onSelect={() => {
                              form.setValue("college", college.value);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                college.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {college.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="major"
          render={({ field }) => (
            <FormItem>
              <FormLabel>what&apos;s your major?</FormLabel>
              <FormControl>
                <Input placeholder="Computer Science" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="year"
          render={({ field }) => (
            <FormItem>
              <FormLabel>what&apos;s your graduation year?</FormLabel>
              <FormControl>
                <Input type="number" placeholder="2024" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="github"
          render={({ field }) => (
            <FormItem>
              <FormLabel>what&apos;s your GitHub username?</FormLabel>
              <FormControl>
                <Input placeholder="ddoski" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="bg-accent text-black" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default function Home() {
  return (
    <main className="bg-black min-h-screen flex flex-col font-neue">
      <div className="flex flex-col text-white p-7">
        <h1 className="font-editorial font-extralight text-3xl">
          Welcome to <span className="font-normal italic">CalHacks 11.0</span>!
        </h1>
        <p>
          Are you ready for the world’s largest collegiate hackathon, back for
          our 11th year?
          <br />
          <br />
          If so, we just need a bit of information before we start!
        </p>
      </div>
      <div className="flex flex-col bg-white flex-1 rounded-t-2xl p-7">
        <ProfileForm />
      </div>
      {/* <motion.div className="h-screen w-screen bg-accent absolute"></motion.div> */}
    </main>
  );
}
