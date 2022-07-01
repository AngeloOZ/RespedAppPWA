import { NextResponse, NextRequest } from "next/server";
// import axios from "axios";

export const config = {
   runtime: 'experimental-edge',
}

export async function middleware(request) {
   const currentUrl = request.nextUrl.pathname;

   if (currentUrl.startsWith('/cliente')) {
      if (existSession(request)) {
         return NextResponse.next();
      }
      return NextResponse.redirect(new URL(`/auth/login?p=${currentUrl}`, request.url));
   }
}

function existSession(request = NextRequest) {
   const session = request.cookies.get('SESSION_ID');
   if (session) {
      // console.log(session);
      return session;
   } else {
      undefined;
   }
}

async function isValidToken(token) {
   if (!token) {
      console.error("No hay un token");
      return false;
   }
   const url = `${process.env.BASE_URL_API}/auth/validate-token`;
   const requestOptions = {
      method: 'POST',
      headers: {
         "Authorization": `Bearer ${token}`,
         "Content-Type": "application/json",
      },
      body: JSON.stringify({ "token": token }),
   };

   try {
      const req = await fetch(url, requestOptions);
      const json = await req.json();
      console.log(json);
      return true;
   } catch (error) {
      console.error(error);
      return false;
   }
}

