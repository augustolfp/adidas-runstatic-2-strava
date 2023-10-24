export type SuccessResponse = {
    accessToken: string;
    athleteName: string;
    expiresIn: number;
};

export type ErrorResponse = {
    message: string;
    errorArr: string;
};

export type AuthRequestParams = {
    client_id: number;
    client_secret: string;
    code: string;
};

export type Status = "loading" | "success" | "error" | "idle";
