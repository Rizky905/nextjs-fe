export interface GetAllData {
    success: boolean;
    message: string;
    data: [{
        id: number,
        customerNumber: number,
        customerName: string,
        contactLastName: string,
        contactFirstName: string,
    }];
}

export interface AllData {
    id: 'Customer Number' | 'Customer Name' | 'Contact Last Name' | 'Contact First Name';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}