"use server";

import db from "@/lib/db";
import { users } from "@/lib/schema";
import formSchema from "@/lib/zod";
import { z } from "zod";

export async function create(data: z.infer<typeof formSchema>) {
  console.log("creating user", data);
  const user = await db.insert(users).values(data).returning();
  return user[0].id;
}
