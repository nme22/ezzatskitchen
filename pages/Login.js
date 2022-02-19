import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import Auth from '../components/Auth';

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

         <nav className="loginNavbar">
            <h2 className="appName">Ezzat's Kitchen</h2>
            <Link href="/">Back</Link>
         </nav>
         <h1 className="title">Log Into Ezzats Kitchen!</h1>

         <div style={{ padding: '50px 0 100px 0' }}>
            {!session ? (
               <Auth />
            ) : (
               <Account key={session.user.id} session={session} />
            )}
         </div>
      </div>
   );
}
