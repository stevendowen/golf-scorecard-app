export interface Course {
    id: number;
    status: string;
    membershipType: string;
    practiceAreaId: number;
    measurementType: string;
    holeCount: number;
    localRank: number;
    localMaxRank: number;
    globalRank: number;
    globalMaxRank: number;
    name: string;
    addr1: string;
    city: string;
    stateOrProvince: string;
    country: string;
    zipCode: string;
    phone: string;
    website: string;
    inserted: string;
    updated: string;
    holes: [];
    extras: [];
    links: {};
    href: string;
    type: string;
    image?: string;
}
