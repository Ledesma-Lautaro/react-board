"use client"

import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useApiMutation } from "@/hooks/use-api-mutations";
import { toast } from "sonner";

export const EmptyBoards = () => {

    const router = useRouter();
    const { organization } = useOrganization();
    const {mutate, pending} = useApiMutation(api.board.create);

    const onClick = () =>{
        if(!organization) return;

        mutate({
            orgId: organization.id,
            title: "Untitled",
        })
        .then((id) => {
            toast.success("Board created successfully")
            router.push(`/board/${id}`);
        })
        .catch(() => toast.error("Failed to create board"))
    }

    return(
        <div className="h-full flex flex-col items-center justify-center">
            <Image
            src="/note.svg"
            alt="Empty"
            height="110"
            width="110"
            />
            <h2 className="text-2xl font-semibold mt-6">
                Create your first board
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
                Start by creatinga bord for your organization
            </p>
            <div className="mt-6">
                <Button disabled={pending} onClick={onClick} size="lg">
                    Create Board
                </Button>
            </div>
        </div>
    )
}