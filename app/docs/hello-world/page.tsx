import { ArrowLeft, ArrowRight } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

import SyntaxHighlighter from "@/components/SyntaxHighlighter"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
    title: "Hello World | Eframix",
    description: "Create your first Eframix application with a simple Hello World example.",
}

export default function HelloWorld() {
    return (
        <div className="container max-w-3xl py-6 lg:py-10">
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                <div className="flex-1 space-y-4">
                    <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
                        Hello World
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Create your first Eframix application with a simple Hello World example.
                    </p>
                </div>
            </div>
            <hr className="my-8" />
            <Card className="my-6">
                <CardHeader>
                    <CardTitle>Hello World Example</CardTitle>
                </CardHeader>
                <CardContent>
                    <SyntaxHighlighter
                        language="javascript"
                        code={`
const Eframix = require('eframix');
const app = new Eframix();

app.get('/', (req, res) => {
  res.end('Hello, World!');
});

app.startServer(3000, () => {
  console.log('Server running on http://localhost:3000');
});
            `.trim()}
                    />
                </CardContent>
            </Card>
            <p className="text-muted-foreground mt-4">
                Run this code and visit http://localhost:3000 in your browser to see the &quot;Hello, World!&quot; message.
            </p>
            <div className="flex justify-between items-center mt-16">
                <Button variant="outline" asChild>
                    <Link href="/docs/installation">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Previous: Installation
                    </Link>
                </Button>
                <Button asChild>
                    <Link href="/docs/routing">
                        Next: Routing
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </div>
    )
}