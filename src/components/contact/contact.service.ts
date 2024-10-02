import { BaseService } from "@/lib/services/baseService";

export class ContactService extends BaseService {
    constructor() {
        super('http://post.com/', '')
    }

    async submitContactForm(body: any) {
        try {
            const res = this.create(body)
            return res
    
        } catch (error) {
            console.log("error", error);
            return error
        }
    }
}