export class ListResponse {
    count: number;
    results: any[];

    constructor(count: number, results: any[]) {
        this.count = count;
        this.results = results;
    }
}
