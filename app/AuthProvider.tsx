'use client';
import { SessionProvider } from "next-auth/react";

type Prop = {
    children: React.ReactNode,
};

export default function AuthProvider({children}: Prop) {
    return <SessionProvider>{children}</SessionProvider>
}