import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import Avatar from './Avatar';

export default function Account({ session }) {
   const [loading, setLoading] = useState(true);
   const [username, setUsername] = useState(null);
   const [avatar_url, setAvatarUrl] = useState(null);

   useEffect(() => {
      getProfile();
   }, [session]);

   async function getProfile() {
      try {
         setLoading(true);
         const user = supabase.auth.user();

         let { data, error, status } = await supabase
            .from('profiles')
            .select(`username,  avatar_url`)
            .eq('id', user.id)
            .single();

         if (error && status !== 406) {
            throw error;
         }

         if (data) {
            setUsername(data.username);
            setAvatarUrl(data.avatar_url);
         }
      } catch (error) {
         alert(error.message);
      } finally {
         setLoading(false);
      }
   }

   async function updateProfile({ username, avatar_url }) {
      try {
         setLoading(true);
         const user = supabase.auth.user();

         const updates = {
            id: user.id,
            username,
            avatar_url,
            updated_at: new Date(),
         };

         let { error } = await supabase.from('profiles').upsert(updates, {
            returning: 'minimal', // Don't return the value after inserting
         });

         if (error) {
            throw error;
         }
      } catch (error) {
         alert(error.message);
      } finally {
         setLoading(false);
      }
   }

   return (
      <div className="loggedTitle">
         <h3>Welcome back {username}! </h3>
         <Avatar
            url={avatar_url}
            size={150}
            onUpload={(url) => {
               setAvatarUrl(url);
               updateProfile({ username, avatar_url: url });
            }}
         />

         <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" value={session.user.email} disabled />
         </div>
         <div>
            <label htmlFor="username">Name</label>
            <input
               id="username"
               type="text"
               value={username || ''}
               onChange={(e) => setUsername(e.target.value)}
            />
         </div>

         <div>
            <button
               className="button block primary"
               onClick={() => updateProfile({ username, avatar_url })}
               disabled={loading}
            >
               {loading ? 'Loading ...' : 'Update'}
            </button>
         </div>

         <div>
            <button
               className="button block"
               onClick={() => supabase.auth.signOut()}
            >
               Sign Out
            </button>
         </div>
      </div>
   );
}
