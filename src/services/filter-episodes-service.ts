
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { FilterPodcastModel } from "../models/responsive-podcast-model";

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<FilterPodcastModel> => {
    let responseFormat: FilterPodcastModel = {
        statusCode: 0, 
        body: [],
    };
    const queryString = podcastName?.split("?p=")[1] ?? "";
    const data = await repositoryPodcast(queryString);

    if (data.length !== 0){
        responseFormat.statusCode = 200;
    }else {
        responseFormat.statusCode = 204; //No content
    }

    responseFormat.body = data

    return responseFormat;
};