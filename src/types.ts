import type { Context } from "hono";

export type AppEnv = {
    Bindings: CloudflareBindings
}

export type AppContext = Context<AppEnv>;
export type HandleArgs = [AppContext];
