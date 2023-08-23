import { comments } from "$lib/comments"
import { json } from '@sveltejs/kit'

export function GET() {
    return json(comments)
}

export async function POST(req) {
    const {request} = req
    const { text } = await request.json()
    const newComment = {
        id: comments.length + 1,
        text
    }
    comments.push(newComment)
    return json(newComment, {status: 201})
}