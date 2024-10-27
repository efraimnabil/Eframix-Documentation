import CopyCommand from "@/components/CommandCopy";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <div className="text-center flex flex-col items-center space-y-16 px-4 py-14 md:py-36 w-full">
      <h1 className="text-5xl md:text-8xl font-extrabold font-sans tracking-wide">
        Eframix
      </h1>

      <p className="text-xl font-sans lg:w-2/5 text-muted-foreground text-center">
        A minimalistic Node.js framework inspired by Express.js, offering core
        routing, middleware, and JSON body parsing features with zero
        dependencies. Ideal for lightweight HTTP server applications.
      </p>

      <div className="space-y-10">
        <Button>
          <Link href={"/"} className="font-bold">Get Started</Link>
        </Button>
        <CopyCommand command="npm i eframix" />
      </div>
    </div>
  );
}
