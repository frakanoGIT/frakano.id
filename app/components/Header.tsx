import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center h-32 mx-12 border-b border-b-black text-3xl">
        <span className="text-6xl tracking-tighter ml-12">Frakano</span>
        <nav>
          <Link href="/" className="mx-8 hover:border-b-2 hover:border-pr-dark last:mr-0">About</Link>
          <Link href="/skills" className="mx-8 hover:border-b-2 hover:border-pr-dark last:mr-0">Skills</Link>
          <Link href="/projects" className="mx-8 hover:border-b-2 hover:border-pr-dark last:mr-0">Projects</Link>
          <Link href="/contact" className="mx-8 hover:border-b-2 hover:border-pr-dark last:mr-0">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
