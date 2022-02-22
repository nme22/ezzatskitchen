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
            <title> Login Ezzat's Kitchen</title>
            <meta
               name="viewport"
               content="initial-scale=1.0, width=device-width"
            />
         </Head>
         <div>
            <nav className="loginNavbar">
               <h2 className="appName"></h2>
               <Link href="/">Back</Link>
            </nav>
            {!session ? (
               <h1 className="title">Log Into Ezzat's Kitchen!</h1>
            ) : (
               <h1 className="title">So good to see you again!</h1>
            )}

            {!session ? (
               <Auth />
            ) : (
               <Account key={session.user.id} session={session} />
            )}
         </div>
      </div>
   );
}
