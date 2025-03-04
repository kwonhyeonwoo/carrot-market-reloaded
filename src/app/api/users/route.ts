import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    console.log(request.body);
    return Response.json({
        ok: true,
    });
}