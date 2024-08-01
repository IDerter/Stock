import axios from "axios";
import { CommentGet, CommentPost } from "../Models/Comment";
import { handleError } from "../Helpers/ErrorHandler";

const api = "http://localhost:5159/api/comment/";

export const commentPostAPI = async (title: string, content: string, symbol: string) => {
    try {
        const data = await axios.post<CommentPost>(api + `${symbol}`, {
            title: title,
            content: content,
        })
        return data;
    } catch (error) {
        handleError(error);
    }
}

export const commentsGetAPI = async (symbol: string) => {
    try {
        const data = await axios.get<CommentGet[] >(api + `?symbol=${symbol}`)
        return data;
    } catch (error) {
        handleError(error); 
    }
}