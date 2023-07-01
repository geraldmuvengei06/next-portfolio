import { BaseService } from "@/lib/services/baseService";
export interface Article {
    [key: string]: any;
    tag_list: string[]
    user: { [key: string]: any; }
}

export class ArticlesService extends BaseService {
    constructor() {
        super('https://dev.to/api/' || '', 'articles')
    }


    getArticles () {
        try {
            let res = this.http.get('/', { 'username': 'geraldmuvengei06' })            
            return res
        } catch (error) {
            console.log("error", error);
            throw error
        }
    }

}