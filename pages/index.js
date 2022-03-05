import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
   return (
      <div>
         <Head>
            <title>{"Ezzat's"} Kitchen</title>
            <meta
               name="viewport"
               content="initial-scale=1.0, width=device-width"
            />
         </Head>
         <nav className="navbar">
            <Link href="/Login">Login</Link>
            <Link href="/About">About</Link>
            <Link href="/Contact">Contact</Link>
         </nav>
         <h1 className="title">Welcome To {"Ezzat's"} Kitchen!</h1>
         <h2 className="title">"A Taste Of Shiraz"</h2>
         <p className="title">
            Sunt ea ex cupidatat dolore. Consequat exercitation consequat tempor
            cillum fugiat culpa. Ullamco eiusmod sint ea anim pariatur. Veniam
            et id ad officia laboris quis laboris. Adipisicing Lorem ut sit quis
            esse officia incididunt Lorem esse. Laboris enim voluptate pariatur
            ullamco mollit reprehenderit eiusmod ex nulla aute nisi.
         </p>
         <div className="shirazImg">
            <Image
               src="/shiraz.png"
               className="iranImage"
               width={400}
               height={400}
               alt="shiraz"
            />
            <Image
               src="/baclava.jpeg"
               className="iranImage"
               width={400}
               height={400}
               alt="baclava"
            />
            <Image
               className="iranImage"
               src="/tahdig.jpeg"
               width={400}
               height={400}
               alt="Tahdig"
            />
         </div>
      </div>
   );
}
