import { ArrowLeft, ArrowRight } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

import SyntaxHighlighter from "@/components/SyntaxHighlighter"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
    title: "Parsing JSON in Requests | Eframix",
    description: "Learn how to use Eframix's bodyParser middleware for handling JSON data in requests.",
};

export default function ParseJSON() {
    return (
        <div className="container max-w-3xl py-6 lg:py-10">
            <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl mb-8">
                Parsing JSON in Requests
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
                Learn how to use Eframix&apos;s built-in <code>bodyParser</code> middleware to handle JSON data in your application.
            </p>

            <Card className="my-6">
                <CardHeader>
                    <CardTitle>What is JSON Parsing?</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        JSON parsing is the process of converting JSON-formatted data from the request body into a JavaScript object. 
                        This allows your server to access and manipulate the data.
                    </p>
                    <p className="text-muted-foreground mb-4">
                        In Eframix, the <code>bodyParser</code> middleware provides an easy way to parse JSON data in incoming requests, 
                        allowing your application to work with JSON data directly.
                    </p>
                </CardContent>
            </Card>

            <Card className="my-6">
                <CardHeader>
                    <CardTitle>Using the <code>bodyParser</code> Middleware</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        The <code>bodyParser</code> middleware in Eframix parses the request body as JSON, 
                        making it accessible through <code>req.body</code>. Here’s how to add it to your application.
                    </p>
                    <SyntaxHighlighter
                        language="javascript"
                        code={`
import Router from 'eframix';

const app = new Router();

app.use(app.bodyParser);

app.post('/api/movies', (req, res) => {
    const newMovie = req.body;
    console.log("New Movie:", newMovie);
    res.status(201).send({ message: 'Movie added successfully', data: newMovie });
});

app.startServer(5001, () => {
    console.log('Server is running on http://localhost:5001');
});
                        `.trim()}
                    />
                    <p className="text-muted-foreground mt-4">
                        Now, any JSON data sent in the request body will be automatically parsed and available as <code>req.body</code>.
                    </p>
                </CardContent>
            </Card>

            <div className="flex justify-between items-center mt-16">
                <Button variant="outline" asChild>
                    <Link href="/docs/use-middleware">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Previous: Using Middleware
                    </Link>
                </Button>
                <Button asChild>
                    <Link href="/docs/next-section">
                        Next: Next Section
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </div>
    );
}
