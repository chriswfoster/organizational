export interface FormattedEvent {
    endpoint: string;
    method: string;
    body: any;
    query: any;
    authToken: string;
    headers: Headers;
}

export type Headers = any;



export interface IdObj {
    id: number;
}


export type ControllerMethod = (eventObj: FormattedEvent) => any;
