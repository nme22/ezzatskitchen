import Link from 'next/link';
import Image from 'next/image';

export default function About() {
   return (
      <main>
         <nav className="navbar">
            <Link href="/Login">Login</Link>
            <Link href="/">Back</Link>
         </nav>

         <div className="center">
            <article className="about">
               <div className="shirazImg">
                  <Image
                     src="/iran-flag.jpeg"
                     className="iranImage"
                     width={500}
                     height={300}
                     alt="shiraz"
                  />
               </div>
               <h1 className="center">A little about Ezzat</h1>

               <p className="pictureText">
                  Ezzat is an Iranian immigrant from Abadan, Iran. She became an
                  American citizen in the 1980&apos;s and ended up settling in
                  Queens, New York. There created a loving family and two first
                  generations of Iranian Americans. While raising her kids, she
                  noticed the American culture tends to lean towards foods with
                  high cholesterol and trans fats at ridiculous prices.Using
                  various recipes from her childhood, lineage, and experiences;
                  Ezzat aims to bring you authentic persian cuisine at an
                  affordable price.
               </p>
            </article>
         </div>
      </main>
   );
}
