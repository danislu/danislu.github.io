import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background ">
      <div className="flex flex-col justify-center items-center gap-2">
        <Avatar className="min-w-48 min-h-48">
          <AvatarImage src="/me2.jpeg" />
          <AvatarFallback>DL</AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-bold">Daniel Lundekvam</h1>
        <div className="flex gap-2">
          <Link href="mailto:daniel@lundekvam.io"><Mail /></Link>
          <Link href="https://github.com/danislu"><Github /></Link>
          <Link href="https://www.linkedin.com/in/daniellundekvam/"><Linkedin /></Link>
        </div>
      </div>
    </main>
  );
}
