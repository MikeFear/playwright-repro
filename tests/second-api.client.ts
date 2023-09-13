import {APIRequestContext, request} from "@playwright/test";

export class SecondApiClient {
    private context: APIRequestContext;

    async initializeContext() {
        this.context = await request.newContext({baseURL: 'https://jsonplaceholder.typicode.com'});
    }

    async dispose() {
        await this.context.dispose();
    }
}
