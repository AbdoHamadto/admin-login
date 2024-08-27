import Link from "next/link";
import This from "./components/the";

export default function Home() {

  return (
    <>
      <div className="m-8">
        <Link href="/login" className="text-xl bg-red-500 p-2 rounded-full"> Log In </Link>
      </div>
      <This />
    </>
  );
}
