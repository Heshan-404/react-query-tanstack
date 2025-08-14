"use client"

import {useQuery} from "@tanstack/react-query";
import axios from "axios";

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}


async function fetchPosts(): Promise<Post[]> {
    const response = await axios.get<Post[]>(
        "https://jsonplaceholder.typicode.com/posts"
    );

    if (!response.data) throw new Error("Error fetching data")
    return response.data;
}

export default function Home() {

    const {data, error, isLoading} = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
        staleTime: 5000
    })

    if (isLoading) return <p>Loading...</p>

    if (error) return <p>Error : {error.message}</p>


    return (
        <div style={{backgroundColor: "white", color: "black"}}>
            {data?.map((post, key) => (
                <div key={key} style={{marginBottom: "40px"}}>
                    <p style={{marginBottom: "10px", fontWeight: "bold"}}>Title : {post.title}</p>
                    <p>Content : {post.body}</p>
                </div>
            ))}
        </div>
    );
}
