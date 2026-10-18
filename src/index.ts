import { Hono } from "hono"
import {AppEnv} from "./types";
import {createAuth} from "./auth";
import { cors } from "hono/cors"
import {getTrustedOrigins} from "./config";
import { logger } from "hono/logger"

const app = new Hono<AppEnv>()

app.use(logger())

app.use("/api/auth/*",
    cors({
        origin: (origin, c)=>{
            const trustedOrigins = getTrustedOrigins(c.env)

            return trustedOrigins.includes(origin) ? origin : undefined
        },
        allowMethods: ["GET", "POST", "OPTIONS"],
        allowHeaders: ["Content-Type", "Authorization"],
        credentials: true,
    }))

app.on(["GET", "POST"], "/api/auth/**", (c) => {
    const auth = createAuth(c.env)
    return auth.handler(c.req.raw)
})


export default app