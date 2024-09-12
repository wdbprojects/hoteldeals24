"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import DarkMode from "../shared/dark-mode";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
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
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z.string().email({ message: "Enter a valid email" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password should be at least 8 characters" }),
});

const LoginForm = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    const { email, password } = values;

    const result = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    });

    if (result?.error) {
      toast.error(`Login failed: ${result.error}`);
    } else {
      router.replace("/");
      reset();
    }
  };

  return (
    <Card className="mx-auto max-w-sm sm:w-sm">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl">Login</CardTitle>
          <DarkMode />
        </div>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grip gap-4 space-y-5">
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
                <Button type="submit" className="w-full">
                  {isSubmitting ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <span className="font-medium">Login</span>
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
          Don&apos;t have an account?{" "}
          <Link href="/register" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
