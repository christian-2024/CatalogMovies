interface Api {
    id: string;
    name: string;
    description: string;
    endpoint: string;
}

interface ApiResponse {
    data: Api[];
    total: number;
    page: number;
    perPage: number;
}