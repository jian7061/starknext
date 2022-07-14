import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import Image from "next/image";

export default function NavBar() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async () => {
      const { results } = await (await fetch("/api/movies")).json();
      setMovies(results);
    };
  }, []);
  const router = useRouter();
  return (
    <nav>
      <img src="/vercel.svg" />
      <div>
        <Link href="/">
          <a style={{ color: router.pathname === "/" ? "red" : "blue" }}>
            Home
          </a>
        </Link>
        <Link href="/about">
          <a style={{ color: router.pathname === "/" ? "blue" : "red" }}>
            About
          </a>
        </Link>
      </div>
    </nav>
  );
}
