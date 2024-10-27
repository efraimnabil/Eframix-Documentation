import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center flex flex-col items-center space-y-16 px-4 py-14 md:py-36">
      <h1 className="text-4xl font-extrabold text-muted-background tracking-wide lg:text-5xl capitalize">
        Start with Eframix
      </h1>

      <p className="text-xl md:w-3/4 text-muted-foreground text-center">
        A minimalistic Node.js framework inspired by Express.js, offering core
        routing, middleware, and JSON body parsing features with zero
        dependencies. Ideal for lightweight HTTP server applications.
      </p>
      <Button size={"lg"}>
        <Link href={"/"}>Show documentation</Link>
      </Button>
    </div>
  );
}
