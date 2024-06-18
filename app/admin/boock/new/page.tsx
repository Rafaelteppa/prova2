
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const FormSchema = z.object({
    titulo: z.string().min(2, {
        message: "Necessário mais que dois caracteres.",
    }),
    descricao: z.string()
})

export default function SaveBoock() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: { //valor que aparece por padrão
            titulo: "",
        },
    })

    async function onSubmit(boock: z.infer<typeof FormSchema>) {
        const requestOptions= {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(boock)
        }
        const response = await fetch("https://server20241-nine.vercel.app/book", requestOptions)
        form.reset();
        alert("Livro Cadastrado!")
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="titulo"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome:</FormLabel>
                            <FormControl>
                                <Input placeholder="Digite o nome do livro" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>

                        
                    )}
                />
                <FormField
                    control={form.control}
                    name="descricao"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Descricao:</FormLabel>
                            <FormControl>
                                <Input placeholder="Digite a descricao do livro" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        
                    )}
                />
                <Button type="submit">Salvar</Button>
            </form>
        </Form>
    )
}
