import { IncomingMessage, ServerResponse } from "http";

import { serviceListEp } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { FilterPodcastModel } from "../models/responsive-podcast-model";

export const getListEpisodes = 
async (req: IncomingMessage, res: ServerResponse) => {

    const content = await serviceListEp();
    res.writeHead(200, {"Content-type": "application/json"});
    res.end(
        JSON.stringify(content));
};

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    
    const content: FilterPodcastModel = await serviceFilterEpisodes(req.url);
    res.writeHead(content.statusCode, {"Content-type": "application/json"});
    res.end(
        JSON.stringify(content.body));
}