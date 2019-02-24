// export class SignUpInfo {
//     name: string;
//     username: string;
//     email: string;
//     role: string[];
//     password: string;

//     constructor(name: string, username: string, email: string, password: string) {
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.password = password;
//         this.role = ['user'];
//     }
// }


export class SignUpInfo {
    email: string;
    fullName: string;
    mobile: string;
    password: string;
    status: number;
    role: string[];

    constructor( email: string, fullName: string, mobile: string, password: string, status: number) {
        this.email = email;
        this.fullName = fullName;
        this.mobile = mobile;
        this.password = password;
        this.status = 1;
        this.role = ['user'];
    }
}
