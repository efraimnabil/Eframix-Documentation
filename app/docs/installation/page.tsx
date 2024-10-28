import { ArrowLeft, ArrowRight } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

import SyntaxHighlighter from "@/components/SyntaxHighlighter"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
    title: "Installation | Eframix",
    description: "Learn how to install and set up Eframix in your project.",
}

export default function Installation() {
    return (
        <div className="container max-w-3xl py-6 lg:py-10">
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                <div className="flex-1 space-y-4">
                    <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
                        Installation
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Learn how to install and set up Eframix in your project.
                    </p>
                </div>
            </div>
            <hr className="my-8" />
            <Card className="my-6">
                <CardHeader>
                    <CardTitle>Quick Start</CardTitle>
                    <CardDescription>Get up and running with Eframix in minutes.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="npm" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="npm">npm</TabsTrigger>
                            <TabsTrigger value="yarn">Yarn</TabsTrigger>
                        </TabsList>
                        <TabsContent value="npm">
                            <SyntaxHighlighter language="bash" code="npm install eframix" />
                        </TabsContent>
                        <TabsContent value="yarn">
                            <SyntaxHighlighter language="bash" code="yarn add eframix" />
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
            <div className="flex justify-between items-center mt-16">
                <Button variant="outline" asChild>
                    <Link href="/docs">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Previous: Introduction
                    </Link>
                </Button>
                <Button asChild>
                    <Link href="/docs/hello-world">
                        Next: Hello World
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </div>
    )
}