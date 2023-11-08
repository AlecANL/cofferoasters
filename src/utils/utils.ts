import {
  COFFEE_PRICE_FOR_DELIVERY,
  TEXT_DELIVERY_PARSED,
  VALUE_TO_CALC_TOTAL_ORDER,
} from "../const/order.const.ts";
import type {FormValues} from "@models/types";
import type {
  COFFEE_KEYS_DELIVERY,
  TEXT_DELIVERY_PARSED_KEYS,
  VALUE_TO_CALC_TOTAL_ORDER_KEYS,
  COFFEE_PRICE_FOR_DELIVERY_KEYS,
} from "../const/order.const.ts";

export const $$ = <T extends HTMLElement = HTMLElement>(selector: string): NodeListOf<T> => {
  try {
    return document.querySelectorAll(selector);
  } catch (error) {
    throw new Error(`Selector: ${selector} not found`);
  }
};

export const $ = <T extends HTMLElement = HTMLElement>(selector: string): T => {
  try {
    return document.querySelector(selector) as T;
  } catch (error) {
    throw new Error(`Selector: ${selector} not found`);
  }
};

export const parseAmount = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}

export const getDeliveryFrequency = (value: string) => {
  if (!value) return ''
  
  return TEXT_DELIVERY_PARSED[value as TEXT_DELIVERY_PARSED_KEYS];
}

export const getTotalOrder = (values: FormValues) => {
  const { amount, frequency } = values;
  const currentAmount = COFFEE_PRICE_FOR_DELIVERY[amount as COFFEE_KEYS_DELIVERY][frequency as COFFEE_PRICE_FOR_DELIVERY_KEYS];
  const total = VALUE_TO_CALC_TOTAL_ORDER[frequency as VALUE_TO_CALC_TOTAL_ORDER_KEYS] * currentAmount;
  
  return {
    totalRaw: total,
    totalParsed: parseAmount(total),
  }
}

export const formattedAmountKgCoffee = (amount: string) => {
  if (!amount) return ''
  
  return `${amount}g`;
}
