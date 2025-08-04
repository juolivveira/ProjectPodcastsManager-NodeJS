import { FilterPodcastModel } from "../models/responsive-podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";

export const serviceListEp = async () => {
   let responseFormat: FilterPodcastModel = {
           statusCode: 0, 
           body: [],
       };

   const data = await repositoryPodcast();
   
   if (data.length !== 0){
        responseFormat.statusCode = 200;
    }else {
        responseFormat.statusCode = 204; //No content
    }

    responseFormat.body = data

    return responseFormat;
};