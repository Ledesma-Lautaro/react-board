"use client";


import { ReactNode } from "react";
import { ClientSideSuspense } from "@liveblocks/react";

import { RoomProvider } from "@/liveblocks.config";

interface RoomProps{
    children: ReactNode;
    id: string;
    fallback: NonNullable<ReactNode> | null;

}

export const Room = ({
    children,
    id,
    fallback,
} : RoomProps) => {

    return(
        <RoomProvider 
        id={id}   
        initialPresence={{
            cursor: null,
        }} >
            <ClientSideSuspense fallback={fallback}>
                {() => children}
            </ClientSideSuspense>
        </RoomProvider>
    )

}
