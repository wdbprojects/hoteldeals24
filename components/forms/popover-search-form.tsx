"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  location: z.string(),
  category: z.string(),
  guestCapacity: z.number(),
  petsAllowed: z.boolean(),
});

const PopoverSearchForm = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      category: "",
      guestCapacity: 1,
      petsAllowed: false,
    },
  });
  const { handleSubmit, reset, control, setValue } = form;
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const { location, category, guestCapacity, petsAllowed } = values;
    const queryString = [
      location && `location=${encodeURIComponent(location)}`,
      category && `category=${encodeURIComponent(category)}`,
      guestCapacity > 1 && `guestCapacity=${encodeURIComponent(guestCapacity)}`,
      petsAllowed && `petsAllowed=${encodeURIComponent(petsAllowed)}`,
    ]
      .filter(Boolean)
      .join("&");
    router.push(`/?${queryString}`);
    setIsOpen(false);
  };

  const handleReset = () => {
    reset({ location: "", category: "", guestCapacity: 1, petsAllowed: false });
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-80 text-left relative text-muted-foreground cursor-text hover:bg-background"
        >
          <Search
            size={16}
            className="absolute left-2 top-1/2 -translate-y-1/2 transform text-muted-foreground font-extralight"
          />
          <span className="absolute left-8 top-1/2 -translate-y-1/2 transform font-normal text-muted-foreground">
            Search options...
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-2">
          <div className="space-y-2">
            <h4 className="font-medium leading-none text-lg">Search options</h4>
            <p className="text-sm text-muted-foreground">
              Set the search options for the room you need
            </p>
          </div>
          {/* FORM STARTS HERE */}
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-4 pt-4 pb-2">
                {/* LOCATION */}
                <FormField
                  control={control}
                  name="location"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <div className="grid grid-cols-3 items-center gap-2">
                          <FormLabel>Location:</FormLabel>
                          <div className="col-span-2">
                            <FormControl>
                              <Input
                                type="text"
                                placeholder="Enter the location"
                                {...field}
                                className="h-10"
                                autoComplete="off"
                              />
                            </FormControl>
                            <FormMessage />
                          </div>
                        </div>
                      </FormItem>
                    );
                  }}
                />

                {/* ROOM TYPE */}
                <FormField
                  control={control}
                  name="category"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <div className="grid grid-cols-3 items-center gap-2">
                          <div className="col-span-1 w-full">
                            <FormLabel>Room type:</FormLabel>
                          </div>
                          <div className="col-span-2">
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select the room type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="King">King</SelectItem>
                                <SelectItem value="Twins">Twins</SelectItem>
                                <SelectItem value="Single">Single</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </div>
                        </div>
                      </FormItem>
                    );
                  }}
                />

                {/* NUMBER OF GUESTS */}
                <FormField
                  control={control}
                  name="guestCapacity"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <div className="grid grid-cols-5 items-center gap-2">
                          <div className="col-span-3 w-full">
                            <FormLabel>Number of guests:</FormLabel>
                          </div>
                          <div className="col-span-2 w-full">
                            <FormControl>
                              <Input
                                className="text-center w-full shadow-none text-base font-normal"
                                type="number"
                                {...field}
                                onChange={(event) =>
                                  field.onChange(+event.target.value)
                                }
                              />
                            </FormControl>
                            <FormMessage />
                          </div>
                        </div>
                      </FormItem>
                    );
                  }}
                />

                <Separator className="mt-2" />

                {/* TRAVELING WITH PETS? */}

                <FormField
                  control={control}
                  name="petsAllowed"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <div className="grid grid-cols-5 items-center gap-2">
                          <div className="col-span-3 w-full">
                            <FormLabel>Pet friendly:</FormLabel>
                          </div>
                          <div className="col-span-2 w-full flex items-center justify-end">
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="border"
                              />
                            </FormControl>
                            <FormMessage />
                          </div>
                        </div>
                      </FormItem>
                    );
                  }}
                />

                {/* CALL TO ACTION */}
                <div className="w-full mt-4 flex items-center gap-2">
                  <Button
                    className="w-full"
                    variant="outline"
                    type="reset"
                    onClick={handleReset}
                  >
                    Reset
                  </Button>
                  <Button type="submit" className="w-full">
                    Search
                  </Button>
                </div>
              </div>
            </form>
          </Form>
          {/* FORM ENDS HERE */}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverSearchForm;
