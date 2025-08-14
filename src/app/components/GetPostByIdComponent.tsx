import axios from "axios";
import { useQuery } from "@tanstack/react-query";

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

type GetPostByIdProps = {
    postId: number;
};

async function fetchPostById(postId: number): Promise<Post> {
    const response = await axios.get<Post>(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    return response.data;
}

export default function GetPostByIdComponent({ postId }: GetPostByIdProps) {
    const { data, isLoading, error } = useQuery({
        queryKey: ["post", postId],
        queryFn: () => fetchPostById(postId),
        enabled: !isNaN(postId),
    });

    if (error instanceof Error) return <p>Error: {error.message}</p>;
    if (isLoading) return <p>Loading...</p>;

    return (
        <>
            <h1>{data?.title}</h1>
            <p style={{ marginTop: "20px" }}>{data?.body}</p>
        </>
    );
}
