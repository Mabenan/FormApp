import { FieldError } from './FieldError';

export interface EntryPostResponseBody {
        Success: number;
        ErrorText: string;
        EntryId: number;
        EntryLink: string;
        FieldErrors: FieldError[];
    }
