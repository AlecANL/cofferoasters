import {$, $$, formattedAmountKgCoffee, getDeliveryFrequency, getTotalOrder, parseAmount} from "../utils/utils.ts";
import {
  COFFEE_PRICE_FOR_DELIVERY,
  TEXT_FOR_DELIVERY_OPTION,
  TEXT_ORDER_FOR_ENABLED_GRIND,
  TEXT_ORDER_IN_DISABLED_GRIND, TYPE_COFFEE_MAP,
  TYPE_OF_DRINK_TO_DISABLED_GRIND
} from "../const/order.const.ts";

import type { COFFEE_KEYS_DELIVERY, COFFEE_OPTIONS_KEYS, TYPE_COFFEE_MAP_KEYS } from "../const/order.const.ts";
import type {FormValues, FormValuesName} from "@models/types";



export class Plan {
  #$form = $<HTMLFormElement>('#form');
  #$orderRecipe = $('#order-recipe');
  #$firstText = $('.first-txt');
  #$gFirst = $('#g-first');
  #$gSecond = $('#g-second');
  #$gThird = $('#g-third');
  #$gFour = $('#g-four');
  #$gFive = $('#g-five');
  #$errorMessage = $('#message-error');
  #$fourTxt = $('.four-txt');
  #$grindDetailCollapse = $<HTMLDetailsElement>('#grind');
  #$frequencyDetailCollapse = $<HTMLDetailsElement>('#frequency')
  #$drinkDetailCollapse = $<HTMLDetailsElement>('#drink');
  #$typeDetailCollapse = $<HTMLDetailsElement>('#type');
  #$amountDetailCollapse = $<HTMLDetailsElement>('#amount');
  #$$deliveryFrequency = this.#$frequencyDetailCollapse.querySelectorAll<HTMLElement>('.collapse__item-description')
  #$orderModal = $<HTMLDialogElement>('#order-modal')
  #$total = $$('.total');
  #$radioInputs = $$<HTMLInputElement>('input[type="radio"]');
  
  
  
  formValues: FormValues = {
    drink: '',
    type: '',
    amount: '',
    grind: '',
    frequency: '',
  }
  
  handleSetFormValues(name: string, value: string) {
    this.formValues[name as FormValuesName] = value;
    this.#setOrderValue(this.formValues);
    this.#manageFirstTxt();
    this.#setPriceForDelivery(name);
    this.#setDisabledGrindCollapse();
  }
  
  #manageFirstTxt() {
    const { drink } = this.formValues;
    
    if (drink === TYPE_OF_DRINK_TO_DISABLED_GRIND) {
      this.#$firstText.textContent = TEXT_ORDER_IN_DISABLED_GRIND;
      this.#$fourTxt.style.display = 'none';
      this.#$gFour.style.display = 'none';
    } else {
      this.#$firstText.textContent = TEXT_ORDER_FOR_ENABLED_GRIND;
      this.#$fourTxt.style.display = 'inline-block';
      this.#$gFour.style.display = 'inline-block';
      this.#$grindDetailCollapse.removeAttribute('disabled')
    }
  }
  
  #setDisabledGrindCollapse() {
    const { drink } = this.formValues;
    
    if (drink !== TYPE_OF_DRINK_TO_DISABLED_GRIND) return
    
    this.#$grindDetailCollapse.setAttribute('disabled', 'true')
    this.#$grindDetailCollapse.open = false
    this.#$grindDetailCollapse.removeAttribute('open')
  }
  
  #setPriceForDelivery(name: string) {
    const { amount } = this.formValues
    
    if (name !== 'amount') return
    const currentValue = COFFEE_PRICE_FOR_DELIVERY[amount as COFFEE_KEYS_DELIVERY]
    
    this.#$$deliveryFrequency.forEach(($item, index) => {
      const [_, value] = Object.entries(currentValue)[index]
      $item.textContent = `${parseAmount(value)} ${TEXT_FOR_DELIVERY_OPTION}`
    })
  }
  
  #setOrderValue(values: FormValues)  {
    const { drink, type, amount, grind ,frequency } = values;
    
    this.#$gFirst.textContent = drink || '________';
    this.#$gSecond.textContent = TYPE_COFFEE_MAP[type as TYPE_COFFEE_MAP_KEYS] || '________';
    this.#$gThird.textContent = formattedAmountKgCoffee(amount) || '________';
    this.#$gFour.textContent = grind || '________';
    this.#$gFive.textContent = getDeliveryFrequency(frequency) || '________';
  }
  
  resetForm() {
    window.scrollTo(0, 0);
    this.#$form.reset();
    this.resetFormValues()
    this.#$drinkDetailCollapse.open = false;
    this.#$typeDetailCollapse.open = false;
    this.#$amountDetailCollapse.open = false;
    this.#$grindDetailCollapse.open = false;
    this.#$frequencyDetailCollapse.open = false;
    this.removeDisabledAttribute();
    this.#setOrderValue(this.formValues);
  }
  
  resetFormValues() {
    this.formValues = {
      drink: '',
      type: '',
      amount: '',
      grind: '',
      frequency: '',
    }
  }
  
  removeDisabledAttribute() {
    this.#$grindDetailCollapse.removeAttribute('disabled');
  }
  
  renderOrderInModal() {
    const { drink, type: typeCoffee, amount, grind, frequency} = this.formValues;
    const isShowGrind = drink === TYPE_OF_DRINK_TO_DISABLED_GRIND
    const firstText = drink === TYPE_OF_DRINK_TO_DISABLED_GRIND
      ? TEXT_ORDER_IN_DISABLED_GRIND : TEXT_ORDER_FOR_ENABLED_GRIND
    const $paragraph = document.createElement('p')
    
    const $contentConditional = `
      <span class="txt"> ground ala </span>
      <span id="custom-text">${grind}</span>
    `

    $paragraph.innerHTML = `
    “<span class="txt"> ${firstText} </span>
      <span id="custom-text">${drink}</span>
      <span class="txt">, with a </span>
      <span id="custom-text">${TYPE_COFFEE_MAP[typeCoffee as TYPE_COFFEE_MAP_KEYS]}</span>
      <span class="txt"> type of bean. </span>
      <span id="custom-text">${formattedAmountKgCoffee(amount)}</span>
      ${!isShowGrind ? $contentConditional : ''}
      <span class="txt">, sent to me </span>
      <span id="custom-text">${getDeliveryFrequency(frequency)}</span>.”
    `
    
    this.#$orderRecipe.appendChild($paragraph)
  }
  
  showOrderInModal() {
    const { drink, type, amount, grind, frequency} = this.formValues;
    const isGrindCollapseDisabled = drink === TYPE_OF_DRINK_TO_DISABLED_GRIND;
    const isValid = Boolean(drink && type && amount && frequency);
    const isValidGrind = Boolean(!isGrindCollapseDisabled && grind);
    const isShowOrderModal = (isGrindCollapseDisabled && isValid) || (isValid && isValidGrind);
    
    if (!isShowOrderModal) {
      console.log('not valid')
      this.#$errorMessage.style.display = 'inline-block';
      return
    }
    
    this.#$errorMessage.style.display = 'none';
    this.renderOrderInModal();
    this.setTotalOrder();
    this.#$orderModal.showModal();
  }
  
  setTotalOrder() {
    const totalOrder = getTotalOrder(this.formValues);
    const txtTotal = `${totalOrder.totalParsed} / mo`;
    this.#$total.forEach(($item) => $item.textContent = txtTotal);
  }
  
  closeModal() {
    this.#$orderModal.close();
    this.#$orderRecipe.innerHTML = '';
  }
  
  handleOpenCollapseByOption(event: MouseEvent) {
    const target = event.target as HTMLDetailsElement;
    const $parent = target.parentElement as HTMLLIElement;
    
    const currentElementAttribute = $parent.getAttribute('data-option') ?? target.getAttribute('data-option');
    
    if (!currentElementAttribute) return;
    
    const collapseMapped = {
      drink: this.#$drinkDetailCollapse,
      type: this.#$typeDetailCollapse,
      amount: this.#$amountDetailCollapse,
      grind: this.#$grindDetailCollapse,
      frequency: this.#$frequencyDetailCollapse,
    }
    
    const currentCollapse = collapseMapped[currentElementAttribute as COFFEE_OPTIONS_KEYS];
    currentCollapse.open = true;
  }
  
  handleBlockGrindCollapseInDisabledState(event: Event) {
    const target = event.target as HTMLDetailsElement;
    const { drink } = this.formValues;
    
    if (drink !== TYPE_OF_DRINK_TO_DISABLED_GRIND)  return
    
    target.open = false;
    target.removeAttribute('open');
    target.setAttribute('disabled', 'true');
    this.#$radioInputs.forEach(($radio: HTMLInputElement) => {
      const $input = $radio.id.startsWith(':d')
      if (!$input) return
      $radio.value = '';
      $radio.checked = false;
    })
  }

}
