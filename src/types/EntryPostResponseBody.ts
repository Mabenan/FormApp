import { FieldError } from './FieldError';

export class EntryPostResponseBody {
        Success: number;
        ErrorText: string;
        EntryId: number;
        EntryLink: string;
        FieldErrors: FieldError[];
    }
