import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>
        <Avatar>
          <AvatarImage src="/me2.jpeg" />
          <AvatarFallback>DL</AvatarFallback>
        </Avatar>
      </div>
    </main>
  );
}
