export type GlobalData<T> = {
  error: any;
  is_success: boolean;
  status_code: number;
  message: string;
  response: T;
};

export interface IEventItem {
  basePrice: number;
  finalPrice: number;
  remainingCapacity: number;
  dateTime: string;
  game: IGame;
  host: IHost;
}

export interface IGame {
  title: string;
  logoUrl: string;
}

export interface IHost {
  title: string;
  district: string;
  logoUrl: string;
}
