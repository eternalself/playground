declare module Models {
    interface Location {
        id: number;
        name: string;
    }

    interface Restaurant {
        id: number;
        locationId: number;
        name: string;
        tags: string[];
    }
}