"use client";

import { useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import DarkMode from "../shared/dark-mode";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRegisterMutation } from "@/redux/api/auth-api";
import { isApiError } from "@/redux/api/auth-api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const registerSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "Required field" })
    .min(2, { message: "First name should be at least 2 characters" })
    .max(32, { message: "First name should be at most 32 characters" }),
  lastName: z
    .string()
    .min(1, { message: "Required field" })
    .min(2, { message: "Last name should be at least 2 characters" })
    .max(32, { message: "Last name should be at most 32 characters" }),
  email: z.string().email({ message: "Enter a valid email" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password should be at least 8 characters" }),
});

const RegisterForm = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = form;

  const router = useRouter();

  const [register, { isLoading, error, isSuccess }] = useRegisterMutation();

  useEffect(() => {
    if (error && "data" in error) {
      if (isApiError(error)) {
        toast.error(error?.data?.message);
      } else {
        toast.error("Something went wrong, please try again later.");
      }
    }
    if (isSuccess) {
      router.push("/login");
      toast.success("Account created successfully, please Log In now");
      reset();
    }
  }, [error, isSuccess]);

  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    const { firstName, lastName, email, password } = values;
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    await register(userData);
  };

  return (
    <Card className="mx-auto max-w-sm sm:w-sm">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <DarkMode />
        </div>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grip gap-4 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={control}
                  name="firstName"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>First name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="text"
                            placeholder="Nata"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={control}
                  name="lastName"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Last name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="text"
                            placeholder="Slut"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  control={control}
                  name="email"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="text"
                            placeholder="m@example.com"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  control={control}
                  name="password"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="password"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
              <div className="space-y-2">
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <span className="font-medium">Register</span>
                  )}
                </Button>
                <Button
                  type="reset"
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    reset();
                  }}
                >
                  Reset form
                </Button>
              </div>
            </div>
          </form>
        </Form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Log in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
