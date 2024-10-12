import { type NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(req: NextRequest){
    const requestHeaders = new Headers(req.headers);
    const headersList = headers()
    console.log(requestHeaders.get("Authorisation"))
    console.log(headersList.get("Authorisation"))

    return new Response("<h1>Profile API</h1>", {
        headers:{
            "Content-Type":"text-html"
        }
    })
}