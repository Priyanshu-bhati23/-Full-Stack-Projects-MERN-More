# My-App – Multi‑Tenant Platform

A fully-featured multi‑tenant starter using Next.js (App Router), Clerk (Auth + Organizations), Drizzle ORM, Shadcn UI, and Tailwind CSS.

## Features

- ✅ Multi-tenant subdomain routing & organization isolation  
- 🔐 Authentication via Clerk (sessions, orgs, MFA)  
- 🛠️ UI built with Shadcn UI + Tailwind CSS  
- 🗄️ Postgres-powered with Drizzle ORM + migrations  
- 🧩 Modular architecture: app, components, db, lib  
- 🚀 Typed fully via TypeScript  

## Setup

```bash
git clone https://github.com/<you>/my-app.git
cd my-app
npm install
cp .env.example .env.local
# Fill in your DATABASE_URL, NEXT_PUBLIC_CLERK_*, CLERK_SECRET_KEY, etc.
npm run dev
