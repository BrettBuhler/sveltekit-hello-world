import { comments } from "$lib/comments";
import { json } from "@sveltejs/kit";

export function GET(req) {
    const { params } = req
    const { commentId } = params
    const comment = comments.find((comment) => comment.id === parseInt(commentId))
    if (comment) {
        return json(comment, {status: 200})
    } else {
        return json("error", {status: 404})
    }
}

export async function PATCH(req) {
    const {params, request} = req
    const { commentId } = params
    const { text } = await request.json()
    const comment = comments.find((comment)=> comment.id === parseInt(commentId))
    if (comment) {
        comment.text = text
        return json(comment, {status: 204})
    } else {
        return json("error", {status: 404})
    }
}

export async function DELETE(req) {
    const { params } = req
    const { commentId } = params
    const toDelete = comments.find((comment) => comment.id === parseInt(commentId))
    const index = comments.findIndex((comment) => comment.id === parseInt(commentId))
    if (index !== -1) {
        comments.splice(index, 1)
        return json(toDelete)
    } else {
        return json("error", {status: 404})
    }
}