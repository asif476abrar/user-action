import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1> Server Action page</h1>
      <Link href={'/user-management'} className="border border-yellow-400 bg-black text-white text-lg ">User Management page</Link>
    </div>
  );
}
