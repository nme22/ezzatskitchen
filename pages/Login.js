import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import Auth from '../components/Auth';
import Account from '../components/Account';

export default function Login() {
   const [session, setSession] = useState(null);

   useEffect(() => {
      setSession(supabase.auth.session());

      supabase.auth.onAuthStateChange((_event, session) => {
         setSession(session);
      });
   }, []);
   return (
      <div>
         <Head>
            <title> Login Ezzat&apos;s Kitchen</title>
            <meta
               name="viewport"
               content="initial-scale=1.0, width=device-width"
            />
         </Head>

         <nav className="loginNavbar">
            {/* {!session ? '' : <h2 className="appName">Ezzat&apos;s Kitchen</h2>} */}

            <Link href="/Cart">Cart</Link>
            <Link href="/About">About</Link>
            <Link href="/">Back</Link>
         </nav>
         {!session ? (
            <h1 className="title">Log Into Ezzat&apos;s Kitchen!</h1>
         ) : (
            ''
         )}

         {!session ? (
            <Auth />
         ) : (
            <Account key={session.user.id} session={session} />
         )}
      </div>
   );
}
