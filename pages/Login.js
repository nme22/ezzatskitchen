import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Login() {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   function handleUsername(e) {
      setUsername(e.target.value);
   }
   function handlePassword(e) {
      setPassword(e.target.value);
   }
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
               <label>Email:</label>
               <input
                  className="inputField"
                  placeholder="JohnDoe@gmail.com"
                  value={username}
                  onChange={handleUsername}
                  type="text"
               />
               <br />
               <label>Passoword:</label>
               <input
                  className="inputField"
                  type="password"
                  value={password}
                  onChange={handlePassword}
               />
               <br />
               <button className="button">Sign In</button>
               <br />
               <button className="button">Create Account</button>
            </form>
         </div>
      </div>
   );
}
