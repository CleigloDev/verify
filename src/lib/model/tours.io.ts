import { Currency } from "./currency.io";

export enum Status {
  SoldOut = 'SOLD_OUT',
  AlmostConfirmed = 'ALMOST_CONFIRMED',
  Confirmed = 'CONFIRMED',
  AlmostFull = 'ALMOST_FULL',
  Planned = 'PLANNED',
};

export type Price = {
  [key in Currency]: number;
}

export type TourResponseJson = {
  response: string;
  data: ToursJson[];
};

export type ToursJson = {
  id: string;
  code: string;
  startingDate: string;
  endingDate: string;
  ageBadge: string;
  price: Record<Currency, number>;
  salesStatus: Status;
  extra: {
    facebookGroupUrl: string;
  };
  coordinator: {
    firstName: string;
    lastName: string;
  };
};

export type Tours = {
  id: string;
  code: string;
  startingDate: string;
  endingDate: string;
  ageBadge: string;
  price: Price[];
  status: Status;
  facebookGroupUrl: string;
  coordinatorName: string;
  coordinatorLastName: string;
};

export function deserializeToursJson(response: TourResponseJson): Tours[] {
  return response.data.map(tours => {
    return {
      id: tours.id,
      code: tours.code,
      startingDate: tours.startingDate,
      endingDate: tours.endingDate,
      ageBadge: tours.ageBadge,
      price: Object.keys(tours.price).map(key => {
        const price = {
          [key]: tours.price[key as Currency]
        } as Price;

        return price;
      }),
      status: tours.salesStatus,
      facebookGroupUrl: tours.extra.facebookGroupUrl,
      coordinatorName: tours.coordinator.firstName,
      coordinatorLastName: tours.coordinator.lastName,
    }
  })
}