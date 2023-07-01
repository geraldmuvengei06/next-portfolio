import HttpService from "./httpService"

export class BaseService {

    http

    constructor(ROOT_URL: string, prefix_url: string) {
        this.http = (new HttpService(ROOT_URL, prefix_url))
    }

    async getAll() {
        return await this.http.get('')
    } 

    async create(body: any) {
        return await this.http.post('', body)
    }
}