import Link from "next/link";

export default function Page() {
  return (
    <main>
      <div>
        <p>Hi, my name is Alan</p>
        <p>You can ask me</p>
        <p>1: How to play guitar.</p>
        <p>2: What does it feel like to participate in a Music Festival</p>
        <p>3: What happen to my recent trip to island.</p>
        <Link href="/">Done</Link>
      </div>
    </main>
  );
}
