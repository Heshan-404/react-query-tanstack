"use client";

import GetPostByIdComponent from "@/app/components/GetPostByIdComponent";
import {useParams} from "next/navigation";
import Link from "next/link";

export default function GetPostById() {
    const {id} = useParams();
    const postId = id ? Number(id) : NaN;

    return (
        <>
            <div style={{display: "flex", flexDirection: "row", gap: "20px", margin : "20px"}}>
                {Array.from({length: 10}).map((_, index) => (
                    <Link key={index} href={`/posts/${index + 1}`}>
                        <button key={index}>Round {index + 1}</button>
                    </Link>
                ))}
            </div>
            <GetPostByIdComponent postId={postId}/>
        </>
    )
        ;
}
