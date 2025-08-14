"use client"

import axios from "axios";
import {useQuery} from "@tanstack/react-query";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

async function getPosts(): Promise<Post[]> {
    const response = await axios.get<Post[]>(
        "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
}

export default function PostsListComponent() {

    const {data, isLoading, error} = useQuery({queryKey: ["posts"], queryFn: getPosts})

    if (isLoading) return <p>Loading ...</p>

    if (error) return <p>Error : {(error as Error).message}</p>

    return (
        <div>
            {data?.map((post, key) => (
                <div key={key}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}