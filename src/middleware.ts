import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // console.log(request.url)
    // const currentAuthToken = request.cookies.get("next-auth.session-token")?.value || request.cookies.get("__Secure-next-auth.session-token")?.value;
    
    // if (currentAuthToken === undefined) {
    //     if (!(request.url.endsWith("/login") || request.url.endsWith("/sign-up") || request.url !== "/") || request.url.includes("/portal")) {
    //         return NextResponse.redirect(new URL('/login', request.url));
    //     }
    // } else {
    //     if (request.url.endsWith("/login") || request.url.endsWith('/sign-up')) {
    //         return NextResponse.redirect(new URL('/portal/home', request.url));
    //     }
    // }
    
    // return NextResponse.next();
}
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
