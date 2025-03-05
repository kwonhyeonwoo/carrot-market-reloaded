import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    console.log('users');
    return Response.json({
        ok: true,
    });
}