import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
   return (
      <div>
         <Head>
            <title>Ezzat's Kitchen</title>
            <meta
               name="viewport"
               content="initial-scale=1.0, width=device-width"
            />
         </Head>
         <nav className="navbar">
            <h1>Ezzat's Kitchen</h1>
            <Link href="/Login">Login</Link>
            <Link href="/About">About</Link>
            <Link href="/Contact">Contact</Link>
         </nav>
      </div>
   );
}
