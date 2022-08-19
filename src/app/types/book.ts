export interface IBook {
    title: string;
    isAvailable: boolean;
    authorId: number;
    id: number;
    author: { firstname: string, lastname: string, id: number };
}