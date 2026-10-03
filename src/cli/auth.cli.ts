import { DatabaseSync } from "node:sqlite"
import { betterAuth } from "better-auth"
import {authConfig} from "../auth";

export const auth = betterAuth({
    database: new DatabaseSync("./tmp/auth.sqlite"),
    ...authConfig,
})