import { ArrowLeft, ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

import SyntaxHighlighter from "@/components/SyntaxHighlighter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Routing | Eframix",
    description: "Learn how to define routes in your Eframix application.",
};

export default function Routing() {
    return (
        <div className="container max-w-3xl py-6 lg:py-10">
            <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl mb-8">
                Routing
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
                Learn how to define routes in your Eframix application.
            </p>

            <Card className="my-6">
                <CardHeader>
                    <CardTitle>Routing Overview</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        Eframix allows you to define routes for handling HTTP requests. Below are examples of how to handle different HTTP methods:
                    </p>

                    {/* GET Request */}
                    <h2 className="font-semibold text-lg mt-6">GET Request</h2>
                    <p className="text-muted-foreground mb-2">
                        The `GET` method is used to retrieve data from the server. Below is an example of how to define a `GET` route:
                    </p>
                    <SyntaxHighlighter
                        language="javascript"
                        code={`
app.get('/', (req, res) => {
  res.end('Home Page');
});
            `.trim()}
                    />
                    <p className="text-muted-foreground mt-4">
                        In this example, the root route (&apos;/&apos;) responds with the text &quot;Home Page&quot;.
                    </p>

                    <h2 className="font-semibold text-lg mt-6">GET Request - About Page</h2>
                    <p className="text-muted-foreground mb-2">
                        You can also define additional `GET` routes like this:
                    </p>
                    <SyntaxHighlighter
                        language="javascript"
                        code={`
app.get('/about', (req, res) => {
  res.end('About Page');
});
            `.trim()}
                    />
                    <p className="text-muted-foreground mt-4">
                        Here, the `/about` route will return &quot;About Page&quot; when accessed.
                    </p>

                    {/* POST Request */}
                    <h2 className="font-semibold text-lg mt-6">POST Request</h2>
                    <p className="text-muted-foreground mb-2">
                        The `POST` method is used to send data to the server. Below is an example of how to define a `POST` route:
                    </p>
                    <SyntaxHighlighter
                        language="javascript"
                        code={`
app.post('/api/data', (req, res) => {
  res.json({ message: 'Data received' });
});
            `.trim()}
                    />
                    <p className="text-muted-foreground mt-4">
                        In this example, when data is sent to the `/api/data` route, the server responds with a JSON object confirming receipt.
                    </p>
                </CardContent>
            </Card>

            <p className="text-muted-foreground mt-4">
                These examples demonstrate how to define routes for different HTTP methods and paths. Feel free to explore and customize your routes based on your application needs.
            </p>

            <div className="flex justify-between items-center mt-16">
                <Button variant="outline" asChild>
                    <Link href="/docs/hello-world">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Previous: Hello World
                    </Link>
                </Button>
                <Button asChild>
                    <Link href="/docs/write-middleware">
                        Next: Writing Middleware
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </div>
    );
}
