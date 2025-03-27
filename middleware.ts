import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
    const res = NextResponse.next();

    try {
        const session = req.cookies.get("accessToken");

        // Protected routes
        if (req.nextUrl.pathname.startsWith('/dashboard')) {
            if (!session) {
                console.log('No session for dashboard, redirecting to login');
                return NextResponse.redirect(new URL('/auth/login', req.url));
            }
        }

        // Auth routes (login/signup)
        if (req.nextUrl.pathname.startsWith('/auth')) {
            if (session) {
                console.log('Session exists on auth route, redirecting to dashboard');
                return NextResponse.redirect(new URL('/dashboard', req.url));
            }
        }

        // Always set the response cookies
        return res;
    } catch (error) {
        console.error('Middleware Error:', error);
        return res;
    }
}

export const config = {
    matcher: ['/dashboard/:path*', '/auth/:path*'],
};