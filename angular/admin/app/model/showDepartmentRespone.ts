import { DepartmentData } from "./departmentData";

export interface showDepartmentRespone {
    result: string;
    message: string;
    data: DepartmentData[];
}