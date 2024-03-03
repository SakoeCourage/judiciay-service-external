export interface IApplication {
    applicationType: string,
    createdAt: string,
    numberOfAccounts: number
    status: "Pending" | "Processed"
}


export const applicationList: Array<IApplication> = [
    {
        applicationType: "Individual - Self",
        createdAt: "2023/05/05",
        numberOfAccounts: 4,
        status: "Pending"
    }
]
