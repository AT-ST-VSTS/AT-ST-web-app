
export class LoginModel {
    constructor() { }
    public email: string;
    public password: string;
    public rememberMe = false;
}

export class LoginExternalModel {
    constructor() { }
    public provider: string;
}
