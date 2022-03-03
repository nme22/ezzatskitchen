import Link from 'next/link';
export default function About() {
   return (
      <main>
         <nav className="navbar">
            <Link href="/Login">Login</Link>
            <Link href="/">Back</Link>
         </nav>
         <article className="about">
            <h1>A little about Ezzat</h1>

            <p>
               {' '}
               Ezzat is an Iranian immigrant from Abadan, Iran. She became an
               American citizen in the 1980's and ended up settling in Queens,
               New York. There created a loving family and two first generations
               of Iranian Americans. While raising her kids, she noticed the
               American culture tends to lean towards foods with high
               cholesterol and trans fats at ridiculous prices.Using various
               recipes from her childhood, lineage, and experiences; Ezzat aims
               to bring you authentic persian cuisine at an affordable price.
            </p>
         </article>
      </main>
   );
}
