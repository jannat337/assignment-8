import { betterAuth } from "better-auth";
import { createClient } from "@libsql/client";

export const auth = betterAuth({
    database: {
        db: createClient({
            url: process.env.TURSO_DATABASE_URL,
            authToken: process.env.TURSO_AUTH_TOKEN,
        }),
        type: "sqlite",
    },
    emailAndPassword: {
        enabled: true
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }
    }
});