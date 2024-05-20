
import { Room } from "@/components/room";
import { Canvas } from "./_components/canvas";
import { Loading } from "./_components/loading";
import { log } from "console";

interface BoardIdPageProps {
    params: {
        boardid: string;
    };
}

const BoardIdPage = ({
    params,
} : BoardIdPageProps) => {

    return(
        <Room id={params.boardid} fallback={<Loading/>}>
            <Canvas boardId={params.boardid}/>
        </Room>
    )
}

export default BoardIdPage;