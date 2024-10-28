import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

import SyntaxHighlighter from "@/components/SyntaxHighlighter"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Using Middleware | Eframix",
  description: "Learn how to use middleware in your Eframix application.",
}

export default function UseMiddleware() {
  return (
    <div className="container max-w-3xl py-6 lg:py-10">
      <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl mb-8">
        Using Middleware
      </h1>
      <p className="text-xl text-muted-foreground mb-8">
        Learn how to use middleware in your Eframix application.
      </p>
      <Card className="my-6">
        <CardHeader>
          <CardTitle>Using Multiple Middleware</CardTitle>
        </CardHeader>
        <CardContent>
          <SyntaxHighlighter
            language="javascript"
            code={`
const Eframix = require('eframix');
const app = new Eframix();

// Logging middleware
const loggingMiddleware = (req, res, next) => {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
  next();
};

// Authentication middleware
const authMiddleware = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey === 'secret-key') {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

// Use global middleware
app.use(loggingMiddleware);

// Use middleware for specific routes
app.get('/api/protected', authMiddleware, (req, res) => {
  res.send('Protected route accessed');
});

app.get('/', (req, res) => {
  res.send('Hello, Eframix!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
            `.trim()}
          />
        </CardContent>
      </Card>
      <p className="text-muted-foreground mt-4">
        This example demonstrates how to use multiple middleware functions, both globally and for specific routes.
      </p>
      <div className="flex justify-start items-center mt-16">
        <Button variant="outline" asChild>
          <Link href="/docs/guide/write-middleware">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous: Writing Middleware
          </Link>
        </Button>
      </div>
    </div>
  )
}