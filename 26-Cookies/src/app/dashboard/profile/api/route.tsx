import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(req: NextRequest){
    const requestHeaders = new Headers(req.headers);
    const headersList = headers()
    console.log(requestHeaders.get("Authorisation"))
    console.log(headersList.get("Authorisation"))

    const oneWeekInSecondes = 7 * 24 * 60 * 60 ;
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + oneWeekInSecondes * 1000)
    cookies().set("resultsCookies", "20", {
        expires: expirationDate
    })

    console.log(cookies().get("resultsCookies"))
    const theme = req.cookies.get("theme")
    console.log(theme?.value)

    return new Response("<h1>Profile API</h1>", {
        headers:{
            "Content-Type":"text-html",
            "Set-Cookie":"theme=light",
        }
    })
}