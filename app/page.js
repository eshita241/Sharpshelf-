import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <h2 className="text-3xl mb-8">Inventory Management System</h2>
    <Link href="/dashboard/home/overview">View the dashboard</Link>
    <Link href="/dashboard/home/announcements">View the announcements here</Link>
    <Link href="/dashboard/home/getting-started">Lets get started</Link>
    <Link href="/dashboard/home/updates">You get all the updates here</Link>
    </div>
    
  );
}
