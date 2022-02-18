export default async function handler(req, res) {
   // Takes in the username and password from client side
   const { username, password } = JSON.parse(req.body);

// Pick a database to use, then fetch this data from the database. Firebase, Supabase, MongoDb, mySQL

   const response = await fetch(` `, {
      method: 'GET',
      headers: {
         // hide our token with an enviornment variable
         Authorization: `token ${process.env.}`,
         'Content-Type': `application/json`,
      },
   });

   const data = await response.json();
   res.send({ data });
}
