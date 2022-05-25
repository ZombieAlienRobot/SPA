import type { RequestHandler } from "@sveltejs/kit";

import { getShoes } from "src/utils/prisma";

export const get: RequestHandler =async () => {
    const shoes = await getShoes()

    if (!shoes) {
        return {status: 400}
    }

    return {
        headers: {'Content-Type': 'application/json'},
        status: 200,
        body: {shoes}
    }
    
}