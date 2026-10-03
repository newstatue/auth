import { Hono } from "hono"
import {AppEnv} from "./types";
import {createAuth} from "./auth";
import { cors } from "hono/cors"
import {trustedOrigins} from "./config";

const app = new Hono<AppEnv>()

app.use("/api/auth/*",
    cors({
        origin: trustedOrigins,
        allowMethods: ["GET", "POST", "OPTIONS"],
        allowHeaders: ["Content-Type", "Authorization"],
        credentials: true,
    }))

app.on(["GET", "POST"], "/api/auth/**", (c) => {
    const auth = createAuth(c.env)
    return auth.handler(c.req.raw)
})


export default app