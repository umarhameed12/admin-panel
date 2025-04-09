NextJs 15, Shadcn UI and Supabase

## Install Dependencies

```bash
npm install
```

## Add Env variables

```base
rename .env.local to .env
```

## Run Project

```bash
npm run dev
```

## Supabase Setup

1. In you supabase first you need to setup your project and then navigate to authentication page in the sidebar, Add a new user and copy it's uid and email.
2. Now navigate to SQL Editor page from sidebar, click a plus button and create a new snippet and paste the code below

```bash
-- First, create the users table
CREATE TABLE IF NOT EXISTS public.users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    role TEXT NOT NULL CHECK (role IN ('Admin', 'User', 'Guest')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create the trigger function outside of any DO blocks
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create the trigger
CREATE TRIGGER update_users_updated_at
BEFORE UPDATE ON public.users
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Disable Row Level Security
ALTER TABLE public.users DISABLE ROW LEVEL SECURITY;

-- Insert an admin user using the API
-- Note: You'll need to create the user in auth separately
INSERT INTO public.users (user_id, email, role)
VALUES (
    '00000000-0000-0000-0000-000000000000', -- Replace with actual user_id from auth
    'admin@example.com', -- Replace with actual email address from auth
    'Admin'
)
ON CONFLICT (user_id) DO NOTHING;
```
3. In the end of this script replace the user_id and email with the user_id and email you copied from authentication and click run.

4. This script will create a user table with a user of role Admin and you can login in admin panel through that user

This project uses Nextjs 15, Shadcn UI and Supabase and uses both dark and light theme. Protected routes are already implemented and authenticated in middleware. Most of the UI components are alread added in components/ui and if there's something missing please visit shadcn UI docs 
https://ui.shadcn.com/docs/components/accordion