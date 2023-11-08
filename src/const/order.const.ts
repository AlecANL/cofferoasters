export const TEXT_FOR_DELIVERY_OPTION = 'per shipment. Includes free first-class shipping.'

export const TYPE_OF_DRINK_TO_DISABLED_GRIND = 'capsule'
export const TEXT_ORDER_IN_DISABLED_GRIND = 'I drink my coffee using'
export const TEXT_ORDER_FOR_ENABLED_GRIND = 'I drink my coffee as'
export const COFFEE_PRICE_FOR_DELIVERY = {
  '250': {
    'every-week': 7.2,
    'every-2-weeks': 9.6,
    'every-month': 12.0,
  },
  '500': {
    'every-week': 13.0,
    'every-2-weeks': 17.5,
    'every-month': 22.0,
  },
  '1000': {
    'every-week': 22.0,
    'every-2-weeks': 32.0,
    'every-month': 42.0,
  },
} as const

export const COFFEE_OPTIONS = {
  drink: 'drink',
  type: 'type',
  amount: 'amount',
  grind: 'grind',
  frequency: 'frequency',
} as const;

export type COFFEE_OPTIONS_KEYS = keyof typeof COFFEE_OPTIONS

export type COFFEE_KEYS_DELIVERY  =  keyof typeof COFFEE_PRICE_FOR_DELIVERY

export type COFFEE_PRICE_FOR_DELIVERY_KEYS = keyof typeof COFFEE_PRICE_FOR_DELIVERY[keyof typeof COFFEE_PRICE_FOR_DELIVERY]

export const TEXT_DELIVERY_PARSED = {
  'every-week': 'Every week',
  'every-2-weeks': 'Every 2 weeks',
  'every-month': 'Every month',
}

export type TEXT_DELIVERY_PARSED_KEYS = keyof typeof TEXT_DELIVERY_PARSED
export const VALUE_TO_CALC_TOTAL_ORDER = {
  'every-week': 4,
  'every-2-weeks': 2,
  'every-month': 1,
}

export type VALUE_TO_CALC_TOTAL_ORDER_KEYS = keyof typeof VALUE_TO_CALC_TOTAL_ORDER

export const TYPE_COFFEE_MAP = {
  'single-origin': 'Single Origin',
  'decaf': 'Decaf',
  'blended': 'Blended'
} as const

export type TYPE_COFFEE_MAP_KEYS = keyof typeof TYPE_COFFEE_MAP
