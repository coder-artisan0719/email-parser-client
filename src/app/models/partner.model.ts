export interface Partner {
    id: number;
    partnerName: string;
    partnerType: string;
    conversions: number;
    commissions: number;
    grosssales: number;
    contract: string;
    [key: string]: string | number;
}