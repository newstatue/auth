import { Hono } from "hono"
import {AppEnv} from "./types";
import {createAuth} from "./auth";


const app = new Hono<AppEnv>()

app.on(["GET", "POST"], "/api/auth/**", (c) => {
    const auth = createAuth(c.env)
    return auth.handler(c.req.raw)
})


export default app