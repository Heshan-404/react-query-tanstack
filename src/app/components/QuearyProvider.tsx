"use client"

import {ReactNode, useState} from "react";
import {QueryClientProvider} from "@tanstack/react-query";
import {QueryClient} from "@tanstack/query-core";

interface Props {
    children: ReactNode;
}

export default function QueryProvider({children}: Props) {

    const [queryCLient] = useState(() => new QueryClient());

    return <QueryClientProvider client={queryCLient}>{children}</QueryClientProvider>
}