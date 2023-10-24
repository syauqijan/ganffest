import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./middlewares/withAuth";

export function mainMiddleware(req: NextRequest) {
    const isLogin = true
    if (isLogin) {
        return NextResponse.next()
    }
    return NextResponse.redirect(new URL("/auth/login", req.url))
}

export default withAuth(mainMiddleware, ["/submission"]);
// export const config = {
//     matcher: ("/profile")
// }