export type GlobalData<T> = {
  error: any;
  is_success: boolean;
  status_code: number;
  message: string;
  response: T;
};

export interface IEventDetail {
  title: string;
  basePrice: number;
  finalPrice: number;
  availableCapacity: number;
  dateTime: string;
  host: IHostDetail;
  game: IGameDetail;
  participants: any[];
}

export interface IGameDetail {
  gameType: string;
  title: string;
  logoUrl: string;
  scenario: string;
  rules: string;
  mafia: { characters: ICharacter[] };
}
export interface ICharacter {
  title: string;
  logoUrl: string;
  description: string;
}

export interface IEventItem {
  eventId: number;
  dateId: number;
  timeId: number;
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

export interface IHostDetail {
  id: number;
  title: string;
  latitude: number;
  longitude: number;
  address: string;
  districtTitle: string;
}
export interface IHost {
  title: string;
  district: string;
  logoUrl: string;
}

export enum GameMode {
  mafia = "mafia",
  golyapoch = "golyapoch",
}

export interface ICoffeeShopListItem {
  id: number;
  title: string;
  logoUrl: string;
  rate: number;
  address: string;
}

export interface ICoffeeShopDetail {
  id: number;
  title: string;
  logoUrl:string
  rate: number;
  address: string;
  imageUrls: [];
  description: string;
  menuUrl: string;
  facilities: [];
}

export enum FacilityType {
  "Parking"="Parking",
  "FreeWifi"="FreeWifi",
  "Meal"="Meal",
  "Wc"="Wc",
  "Smoking"="Smoking",
  "OpenSpace"="OpenSpace"
}
