import Link from "next/link";

// TODO: If no profile exist, display create button.
// Otherwise, display: gen code, meet, edit button.
export default function Page() {
  return (
    <main>
      <p>Ask me home page.</p>
      <div className="flex h-full flex-col px-3 py-4">
        <Link href="/qrcode">QR Code</Link>
        <Link href="/scan">Scan</Link>
        <Link href="/profile">Create</Link>
      </div>
    </main>
  );
}
