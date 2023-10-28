"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(5, { message: "Please use 5 or more characters" }),
  email: z.string().email({ message: "Please use a valid email address" }),
  message: z
    .string()
    .min(10, { message: "Please type at least 10 characters or more" }),
});

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsSubmitted(true);

    const transformedValues = {
      name: values.name?.toLowerCase(),
      email: values.email?.toLowerCase(),
      message: values.message?.toLowerCase(),
    };

    console.log(transformedValues);
  };

  return (
    <div className="w-full sm:w-[80vw] lg:w-[60vw] xl:w-[50vw]">
      <div className="flex justify-center items-center bg-contactForm bg-cover bg-no-repeat rounded-[50px] border-2 violetGradient-border py-8 sm:py-12 md:py-18 lg:py-24 px-8 sm:px-16">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col w-full gap-8 sm:gap-12 rounded-[50px] p-4 sm:p-8 bg-silver-500"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center">
                    <FormLabel className="mb-2 sm:mb-0 w-full sm:w-[30%]">
                      Name: <span className="text-red">*</span>
                    </FormLabel>
                    <FormControl className="w-full sm:w-[70%]">
                      <Input
                        placeholder="John Doe"
                        className={cn(
                          "rounded-2xl text-sm sm:text-base placeholder-sm placeholder:text-silver-200 lg:placeholder-text-lg lg:placeholder:font-bold sm:placeholder-text-silver-100"
                        )}
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center">
                    <FormLabel className="mb-2 sm:mb-0 w-full sm:w-[30%]">
                      Email: <span className="text-red">*</span>
                    </FormLabel>
                    <FormControl className="w-full sm:w-[70%]">
                      <Input
                        placeholder="johndoe@gmail.com"
                        className={cn(
                          "rounded-2xl text-sm sm:text-base placeholder-sm placeholder:text-silver-200 lg:placeholder-text-lg lg:placeholder:font-bold sm:placeholder-text-silver-100"
                        )}
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center">
                    <FormLabel className="mb-2 sm:mb-0 w-full sm:w-[30%]">
                      Message: <span className="text-red">*</span>
                    </FormLabel>
                    <FormControl className="w-full sm:w-[70%]">
                      <Input
                        placeholder="Love your page!"
                        className={cn(
                          "rounded-2xl text-sm sm:text-base placeholder-sm placeholder:text-silver-200 lg:placeholder-text-lg lg:placeholder:font-bold sm:placeholder-text-silver-100"
                        )}
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              isLoading={isSubmitted}
              size="2xl"
              variant="secondary"
              className={cn(
                "w-[140px] sm:w-[200px] text-xl sm:text-2xl rounded-full border-white border-2 mx-auto"
              )}
            >
              {isSubmitted ? "Submitted" : "Submit"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
