
export interface ClientAllocation {
    employeeName: string;
    clientName: string;
    clientStartDate: Date;
    clientEndDate: Date;
}

export interface RootObject {
    clientAllocations: ClientAllocation[];
}

