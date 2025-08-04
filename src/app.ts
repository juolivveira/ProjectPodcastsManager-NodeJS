import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts-controller'
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {

    const baseUrl = req.url?.split("?")[0];

    if (req.method === HttpMethod.GET &&  baseUrl === Routes.list){
        await getListEpisodes(req, res);
    };

    if (req.method === HttpMethod.GET && baseUrl === Routes.episode){
        await getFilterEpisodes(req, res);
    };
}