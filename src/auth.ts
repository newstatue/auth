import { betterAuth } from "better-auth";

export function createAuth(env: CloudflareBindings) {
    return betterAuth({
        database: env.DB,
        emailAndPassword: {
            enabled: true,
        },
    })
}