import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'employees' })
export class Employees {
    @PrimaryColumn()
    employee_id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    email: string;

    @Column()
    phone_number: string;

    @Column()
    hire_date: Date;

    @Column()
    job_id: string;

    @Column()
    salary: number;

    @Column()
    commission_pct: number;

    @Column()
    manager_id: number;

    @Column()
    department_id: number;
}