type IPaginatedData<T> = {
    data: T[],
    newPageInfo: {
        currentPage: string | null
        firstPageUrl: string | null
        lastPageUrl: string | null,
        nextPageUrl: string | null
        path: string,
        prevPageUrl: string | null
        total: number
    },
    pageInfo: {
        currentPage: string | null
        hasNextPage: boolean
        hasPreviousPage: boolean
        totalCount: number
        totalPages: number
    }
}

type setData<T> = {
    (key: keyof T, value?: any): void;
    (values: Partial<T>): void;
}

interface IFormWithDataProps<T> {
    formData?: T | null,
    setFormData?: setData<T>
    onNewDataSucess: () => void,
    onCancel: () => void,
    processing?: boolean
}

type dbTimeStamp = {
    createdAt: string;
    updatedAt: string;
    createdBy: string | null;
    updatedBy: string | null;
}

type IActionResponseError = {
    error: string,
    message: string | string[],
    statusCode: number
}


interface IActionResultOk {
    message: string,
    status: number,
    success: boolean
}



