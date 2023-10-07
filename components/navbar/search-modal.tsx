"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { SearchIcon, X } from "lucide-react"
import { useForm } from "react-hook-form"
import { Poppins } from "next/font/google"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel
} from "@/components/ui/form"
import { cn } from "@/lib/utils"
import { DialogClose } from "@radix-ui/react-dialog"

interface Categories {
    value: string
    label: string
}

type FilterValues = [
    string,
    ...string[]
]

const categories: Categories[] = [
    {
        value: "women",
        label: "Women"
    },
    {
        value: "men",
        label: "Men"
    },
    {
        value: "kids",
        label: "Kids"
    },
]

const filters: Categories[] = [
    {
        value: "all",
        label: "All Categories"
    },
    ...categories
]

const filterValues: FilterValues = ["all", ...filters.map(({ value }) => value)]

const formSchema = z.object({
    filter: z.enum(filterValues),
    search: z.string().min(0),
})

export const SearchModal = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            filter: "all",
            search: "",
        }
    })

    const search = (values: z.infer<typeof formSchema>) => {
        if (!values.search) return null
        console.log(values)
    }

    return (
        <Dialog>
            <DialogTrigger>
                <SearchIcon className="h-5 w-5 hover:text-secondary transition-all cursor-pointer" />
            </DialogTrigger>
            <DialogContent showCloseButton={false} className="h-full flex flex-col">
                <DialogHeader className="w-full flex flex-row items-center justify-between">
                    <DialogTitle className="text-left text-2xl font-light">Search</DialogTitle>
                    <DialogClose>
                        <X className="h-6 w-6 font-light transition-all hover:text-muted-foreground" />
                    </DialogClose>
                </DialogHeader>
                <Form {...form}>
                    <form onChange={form.handleSubmit(search)} className="mt-16 md:mt-0 h-full w-full flex flex-col md:grid md:place-content-center gap-y-16 md:gap-y-20 lg:gap-y-24">
                        <FormItem>
                            <FormField
                                name="filter"
                                control={form.control}
                                render={({ field }) => (
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex items-center justify-center gap-x-4 md:gap-x-6"
                                        >
                                            {filters.map(({ value, label }) => (
                                                <div key={value} className="flex items-center space-x-2">
                                                    <FormControl>
                                                        <RadioGroupItem
                                                            id={"filter-radio-" + value}
                                                            value={value}
                                                            onClick={(e) => {
                                                                e.preventDefault()
                                                                form.setValue("filter", value)
                                                                search({ search: form.getValues("search"), filter: form.getValues("filter") })
                                                            }}
                                                            className="hidden"
                                                        />
                                                    </FormControl>
                                                    <FormLabel
                                                        htmlFor={"filter-radio-" + value}
                                                        className={cn(
                                                            "text-base md:text-xl lg:cursor-pointer transition-all hover:text-foreground",
                                                            form.getValues("filter") !== value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {label}
                                                    </FormLabel>
                                                </div>
                                            ))}
                                        </RadioGroup>
                                    </FormControl>
                                )}
                            />
                        </FormItem>
                        <FormItem>
                            <FormField
                                name="search"
                                control={form.control}
                                render={({ field }) => (
                                    <FormControl>
                                        <div className="border-b px-2 md:w-[60vw] flex items-center gap-x-4 transition-all group hover:border-b-foreground">
                                            <SearchIcon className="h-6 w-6 text-muted-foreground transition-all group-hover:text-foreground" />
                                            <input
                                                {...field}
                                                autoFocus
                                                spellCheck={false}
                                                value={field.value}
                                                placeholder="Search"
                                                className="flex w-full  h-16 focus:border-b-primary focus:outline-none focus:ring-0"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    form.resetField("search")
                                                    form.setFocus("search")
                                                }}>
                                                <X className="h-6 w-6 text-muted-foreground transition-all group-hover:text-foreground" />
                                            </button>
                                        </div>
                                    </FormControl>
                                )}
                            />
                        </FormItem>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}