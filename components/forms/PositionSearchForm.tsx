"use client";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { japanRegions } from "@/constants";

const formSchema = z.object({
  job: z.string().optional(),
  sector: z.string().optional(),
  position: z.string().optional(),
  salary: z.number().optional(),
  style: z.string().optional(),
  area: z.string().optional(),
});

const sectors = [
  "Information Technology",
  "Marketing",
  "Hospitality",
  "Gastronomy",
];

const positions = ["Junior", "Mid-Level", "Senior"];

const workStyles = ["In-Office", "Remote", "Hybrid"];

export default function SearchFormContainer() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      job: "",
      sector: "",
      position: "",
      salary: undefined,
      style: "",
      area: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const transformedValues = {
      ...values,
      job: values.job?.toLowerCase().replace(/ /g, "-"),
      sector: values.sector?.toLowerCase().replace(/ /g, "-"),
      position: values.position?.toLowerCase().replace(/ /g, "-"),
      salary: values.salary,
      style: values.style?.toLowerCase().replace(/ /g, "-"),
      area: values.area?.toLowerCase().replace(/ /g, "-")?.split("-")[0],
    };

    console.log(transformedValues);
  };

  return (
    <div className="container py-20 px-4 sm:px-8 md:px-20 lg:px-60">
      <div className="bg-silver-400 p-4 sm:p-6 md:p-8 rounded-[30px] border-2 border-mediumslateblue font-bold">
        <h1 className="mb-8 text-center text-white text-xl underline tracking-widest">
          Search Listings
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col px-0"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-between tracking-wide relative mb-6">
              <FormField
                control={form.control}
                name="job"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Job</FormLabel>
                    <FormControl>
                      <Input placeholder="Software Engineer" {...field} />
                    </FormControl>
                    <FormDescription>Search for a job title</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sector"
                render={({ field }) => (
                  <FormItem className="w-full mt-4 sm:mt-0">
                    <FormLabel>Sector</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Please select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {sectors.map((sector, i) => (
                          <SelectItem value={sector} key={i}>
                            {sector}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>Select a job sector</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem className="w-full mt-4 sm:mt-0">
                    <FormLabel>Position</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Please Select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {positions.map((position, i) => (
                          <SelectItem
                            value={position}
                            key={i}
                            className="w-full"
                          >
                            {position}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Select your desired position
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-6">
              <FormField
                control={form.control}
                name="salary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Salary</FormLabel>
                    <div>
                      {" "}
                      {">"} ¥ {field.value} Million/year
                    </div>
                    <FormControl>
                      <Slider
                        defaultValue={[1]}
                        min={1}
                        max={20}
                        step={1}
                        onValueChange={(values) => {
                          const value = values[0];
                          field.onChange(value);
                        }}
                      />
                    </FormControl>
                    <FormDescription>
                      Select the minimum annual income you expect
                    </FormDescription>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-between tracking-wide mb-6">
              <FormField
                control={form.control}
                name="style"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Work Style</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Please Select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {workStyles.map((style, i) => (
                          <SelectItem value={style} key={i}>
                            {style}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="area"
                render={({ field }) => (
                  <FormItem className="w-full mt-4 sm:mt-0">
                    <FormLabel>Area/Region</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Please Select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {japanRegions.map((region, i) => (
                          <SelectItem value={region} key={i}>
                            {region}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              size="xl"
              className={cn(
                "w-[200px] text-xl rounded-full border-white border-2 mx-auto mt-4"
              )}
            >
              Search
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
