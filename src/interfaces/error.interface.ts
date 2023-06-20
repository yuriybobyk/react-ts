export interface IError {
    details?: string

}

export interface IErrorAuth extends IError {
    username: string[]
}
