import { ArrowLeft, ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

import SyntaxHighlighter from "@/components/SyntaxHighlighter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Writing Middleware | Eframix",
    description: "Learn how to write custom middleware for your Eframix application.",
};

export default function WriteMiddleware() {
    return (
        <div className="container max-w-3xl py-6 lg:py-10">
            <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl mb-8">
                Writing Middleware
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
                Learn how to write custom middleware for your Eframix application.
            </p>

            <Card className="my-6">
                <CardHeader>
                    <CardTitle>What is Middleware?</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        Middleware is a function that has access to the request, response, and the next middleware function in the application&apos;s request-response cycle. It can perform various tasks such as:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Executing code.</li>
                        <li>Modifying the request and response objects.</li>
                        <li>Ending the request-response cycle.</li>
                        <li>Calling the next middleware function in the stack.</li>
                    </ul>
                    <p className="text-muted-foreground mb-4">
                        Middleware can be used for various purposes, including logging, authentication, error handling, and more.
                    </p>
                </CardContent>
            </Card>

            <Card className="my-6">
                <CardHeader>
                    <CardTitle>Custom Logging Middleware</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        Below is an example of a simple logging middleware that logs the request method and URL along with the timestamp.
                    </p>
                    <SyntaxHighlighter
                        language="javascript"
                        code={`
import Eframix, { Handler } from 'eframix';
const app = new Eframix();

// Logging middleware
const loggingMiddleware: Handler = (req, res, next) => {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
  next();
};

// Use global middleware
app.use(loggingMiddleware);

app.get('/', (req, res) => {
  res.end('Hello, Eframix!');
});

app.startServer(3000, () => {
  console.log('Server running on http://localhost:3000');
});
            `.trim()}
                    />
                    <p className="text-muted-foreground mt-4">
                        This middleware logs the method and URL of every incoming request to the console.
                    </p>
                </CardContent>
            </Card>

            <div className="flex justify-between items-center mt-16">
                <Button variant="outline" asChild>
                    <Link href="/docs/routing">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Previous: Routing
                    </Link>
                </Button>
                <Button asChild>
                    <Link href="/docs/use-middleware">
                        Next: Using Middleware
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </div>
    );
}
