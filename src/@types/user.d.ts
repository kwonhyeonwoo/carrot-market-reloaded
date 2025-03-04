declare module "user" {
    interface AccountType {
        email: string,
        userName: string;
        password: string;
        phone: string;
        github_id?: string;
        create_at: Date;
        update_at: Date;
        SMSToken?: unknown;
        passwordConfirm: string;
    }
}