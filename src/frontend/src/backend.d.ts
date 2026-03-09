import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface Enquiry {
    id: bigint;
    service: string;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export interface NewEnquiry {
    service: string;
    name: string;
    email: string;
    message: string;
    phone: string;
}
export interface backendInterface {
    getAllEnquiries(): Promise<Array<Enquiry>>;
    getEnquiry(id: bigint): Promise<Enquiry>;
    submitEnquiry(data: NewEnquiry): Promise<void>;
}
