import { betterAuth } from "better-auth"
import { DatabaseSync } from "node:sqlite"

export const auth = betterAuth({
    database: new DatabaseSync(":memory:"),

    emailAndPassword: {
        enabled: true,
    },
})