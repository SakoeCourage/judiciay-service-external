

export interface httpUserLoginResponse {
    id: number,
    surname: string,
    otherNames: string,
    email: string,
    contactNumber: string,
    otp: any,
    otpExpiration: any,
    accessToken: string,
    refreshToken: string
}


declare module "next-auth" {
    interface Session {
        user: httpUserLoginResponse;
    }

    interface User extends DefaultUser, httpUserLoginResponse {

    }

}

declare module "next-auth/jwt" {
    interface User extends httpUserLoginResponse { }
    interface JWT extends DefaultJWT {
        userId: number,
        expires: string;
        accessToken: string;
        refreshToken: string;
        user: httpUserLoginResponse;
    }
}
