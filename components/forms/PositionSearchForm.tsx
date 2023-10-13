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
      job: values.job?.toLocaleLowerCase().replace(/ /g, "-"),
      sector: values.sector?.toLocaleLowerCase().replace(/ /g, "-"),
      position: values.position?.toLocaleLowerCase().replace(/ /g, "-"),
      salary: values.salary,
      style: values.style?.toLowerCase().replace(/ /g, "-"),
      area: values.area?.toLocaleLowerCase().replace(/ /g, "-")?.split("-")[0],
    };

    console.log(transformedValues);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="job"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job</FormLabel>
              <FormControl>
                <Input placeholder="Type a job name" {...field} />
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
            <FormItem>
              <FormLabel>Sector</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a job sector" />
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
            <FormItem>
              <FormLabel>Sector</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a job sector" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {positions.map((position, i) => (
                    <SelectItem value={position} key={i}>
                      {position}
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
        <FormField
          control={form.control}
          name="style"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Work Style</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a work style" />
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
            <FormItem>
              <FormLabel>Area/Region</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your area" />
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
        <Button type="submit" size="xl">
          Submit
        </Button>
      </form>
    </Form>
  );
}
