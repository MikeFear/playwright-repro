import {APIRequestContext, request} from "@playwright/test";

export class ApiClient {
    private context: APIRequestContext;

    async initializeContext() {
        this.context = await request.newContext({baseURL: 'https://jsonplaceholder.typicode.com'})
    }

    async dispose() {
        return this.context.dispose();
    }

    async createPost() {
        return this.context.post('/posts', {data: {title: 'Hello world'}, failOnStatusCode: true}).then(res => res.json());
    }
}
