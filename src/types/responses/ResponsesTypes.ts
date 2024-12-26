export type GlobalData<T> = {
    error: any;
    is_success: boolean;
    status_code: number;
    message: string;
    response: T;
  };