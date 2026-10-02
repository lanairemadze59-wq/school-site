# School Website (Next.js + Tailwind + Supabase)

    npm install
    cp .env.example .env.local   # optional; without it the site shows demo data
    npm run dev                  # http://localhost:3000

Database: run `supabase/migrations/0001_init.sql` in the Supabase SQL editor,
then promote yourself: `update profiles set role='admin' where id='<your auth user id>';`
