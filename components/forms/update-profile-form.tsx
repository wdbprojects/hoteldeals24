"use client";

import { useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  useLazyUpdateSessionQuery,
  useUpdateProfileMutation,
} from "@/redux/api/user-api";
import { isApiError } from "@/redux/api/auth-api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setUser } from "@/redux/features/userSlice";

const updateUserSchema = z.object({
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
});

const UpdateProfileForm = () => {
  const form = useForm<z.infer<typeof updateUserSchema>>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const { handleSubmit, control, reset, setValue } = form;

  const router = useRouter();
  const dispatch = useAppDispatch();

  const { user: currentUser } = useAppSelector((state) => {
    return state.auth;
  });

  const [updateProfile, { isLoading, error, isSuccess }] =
    useUpdateProfileMutation();

  const [updateSession, { data }] = useLazyUpdateSessionQuery();

  console.log(data);

  if (data) {
    dispatch(setUser(data?.user));
  }

  useEffect(() => {
    if (isSuccess) {
      //@ts-ignore
      updateSession();
      router.refresh();
      toast.success("Profile updated successfully.");
      reset();
    }
  }, [isSuccess, currentUser, error]);

  const onSubmit = async (values: z.infer<typeof updateUserSchema>) => {
    const { firstName, lastName, email } = values;
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    await updateProfile(userData);
  };

  const handleSetValue = () => {
    for (const key in currentUser) {
      if (Object.hasOwnProperty.call(currentUser, key)) {
        setValue(key as "firstName" | "lastName" | "email", currentUser[key]);
      }
    }
  };

  useEffect(() => {
    if (currentUser) {
      handleSetValue();
    }
  }, [currentUser]);

  return (
    <Card className="mx-auto max-w-sm sm:w-sm">
      <CardHeader>
        <div className="">
          <CardTitle className="text-2xl">Update Profile</CardTitle>
        </div>
        <CardDescription>Update your profile information</CardDescription>
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

              <div className="space-y-2 !mt-6">
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <span className="font-medium">Update Profile</span>
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
      </CardContent>
    </Card>
  );
};

export default UpdateProfileForm;
