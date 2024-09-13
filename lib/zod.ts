import { z } from "zod";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters long" })
    .refine((name) => name.includes(" "), {
      message: "Full name must contain a space",
    }),
  email: z.string().email({ message: "Invalid email address" }),
  college: z
    .string()
    .min(2, { message: "College name must be at least 2 characters long" }),
  major: z
    .string()
    .min(2, { message: "Major must be at least 2 characters long" }),
  year: z.string().refine(
    (val) => {
      const year = Number(val);
      return !isNaN(year) && year >= 2024;
    },
    { message: "Year must be 2024 or later" }
  ),
  github: z
    .string()
    .min(2, { message: "GitHub username must be at least 2 characters long" }),
});

export default formSchema;
