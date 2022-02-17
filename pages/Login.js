import Head from 'next/head';
import Link from 'next/link';

export default function Login() {
   return (
      <div>
         <Head>
            <title> Login Ezzat's Kitchen</title>
            <meta
               name="viewport"
               content="initial-scale=1.0, width=device-width"
            />
         </Head>

         <nav className="loginNavbar">
            <h2 className="appName">Ezzat's Kitchen</h2>
            <Link href="/">Back</Link>
         </nav>
         <h1 className="title">Log Into Your Account!</h1>
         <div className="center">
            <form className="loginTitle">
               <label>Username:</label>
               <input className="inputField" />
               <br />
               <label>Passoword:</label>
               <input className="inputField" />
               <br />
               <button className="button">Sign In</button>
               <br />
               <button className="button">Create Account</button>
            </form>
         </div>
      </div>
   );
}
