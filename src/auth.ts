import { betterAuth } from "better-auth"
import {jwt, twoFactor} from "better-auth/plugins"

export const authConfig = {
    emailAndPassword: {
        enabled: true,
    },

    plugins: [
        jwt(),
        twoFactor(),
    ],
}

export function createAuth(env: CloudflareBindings) {
    return betterAuth({
        database: env.DB,
        ...authConfig,
    })
}