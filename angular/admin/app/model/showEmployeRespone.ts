import { EmployeData } from "./employeData";

export interface showEmployeRespone {
    result: string;
    message: string;
    data: EmployeData[];
}