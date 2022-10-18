import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { PrismaClient } from './generated/client/deno/edge.ts'

const prisma = new PrismaClient()

async function handler(request: Request) {
    // const log = await prisma.log.create({
    //     data: {
    //         level: 'Info',
    //         message: `${request.method} ${request.url}`,
    //         meta: {
    //             headers: JSON.stringify(request.headers),
    //         },
    //     },
    // })
    const log = await prisma.api_key.create({
        data: {
            api_key: 'Info',
        },
    })
    const body = JSON.stringify(log, null, 2);
    return new Response(body, {
        headers: { "content-type": "application/json; charset=utf-8" },
    });
}

serve(handler);