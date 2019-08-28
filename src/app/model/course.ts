export interface Course {
    id: number;
    status: string;
    membership_type: string;
    practice_area_id: number;
    measurement_type: string;
    hole_count: number;
    local_rank: number;
    local_max_rank: number;
    global_rank: number;
    global_max_rank: number;
    name: string;
    addr_1: string;
    city: string;
    state_or_province: string;
    country: string;
    zip_code: string;
    phone: string;
    website: string;
    inserted: string;
    updated: string;
    holes: [];
    extras: [];
    links: {};
    href: string;
    type: string;
    image: string;
}
