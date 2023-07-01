

export default class HttpService {
    headers: { [key: string]: string } = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    url_prefix
    ROOT_URL

    constructor(ROOT_URL: string = "", url_prefix: string = "",) {
        this.url_prefix = url_prefix
        this.ROOT_URL = ROOT_URL
    }

    async get(url: string, queryParams: { [key: string]: any } = { null: null }) {
        try {
            let response = await fetch(this.getUrl(url) + this.getQueryParams(queryParams), {
                headers: this.headers
            })
            let jsonResponse = await response.json()
            return jsonResponse
        } catch (error) {
            return error
        }
    }

    async post(url: string, body: any, queryParams: { [key: string]: any } = { null: null }) {
        try {
            let response = await fetch(this.getUrl(url), {
                method: "POST",
                headers: this.headers,
                body: JSON.stringify(body)
            })

            let jsonResponse = await response.json()

            return jsonResponse
        } catch (error) {
            console.log("error", error);
            return error
        }
    }

    getUrl(url: string): string {
        console.log("this.ROOT_URL + this.url_prefix + url", this.ROOT_URL + this.url_prefix + url);
        
        return this.ROOT_URL + this.url_prefix + url
    }

    getQueryParams(queryParams: { [key: string]: string }): string {
        return queryParams
            ? Object?.keys(queryParams).map(key => `?${key}=${queryParams[key]}`).join('&')
            : ''
    }
}