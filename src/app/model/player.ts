import { Score } from './score';

export interface Player {
    id?: string;
    name: string;
    scores: Score[];
}
