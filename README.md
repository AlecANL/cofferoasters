# Frontend Mentor - Coffeeroasters subscription site solution

This is a solution to the [Coffeeroasters subscription site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coffeeroasters-subscription-site-5Fc26HVY6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
- [Author](#author)

# Frontend Mentor - Coffeeroasters subscription site

![Design preview for the Coffeeroasters subscription site coding challenge](./preview.jpg)

## The challenge

Your challenge is to build out this multi-page coffee subscription website and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Make selections to create a coffee subscription and see an order summary modal of their choices (details provided below)

### Expected bahaviour

The interactive subscription page has a number of specific behaviours, which are listed below:

- If "Capsule" is selected for the first option
    - The "Want us to grind them?" section should be disabled and not able to be opened
- Order summary texts updates
    - If "Capsule" is selected, update the order summary text to:
        - "I drink my coffee **using** Capsules"
        - Remove the grind selection text
    - If "Filter" or "Espresso" are selected, update the order summary text to:
        - "I drink my coffee **as** Filter||Espresso"
        - Keep/Add the grind selection text
    - For all other selections, add the selection title in the blank space where appropriate
- Updating per shipment price (shown in "How often should we deliver?" section at the bottom) based on weight selected
    - If 250g weight is selected
        - Every Week price per shipment is $7.20
        - Every 2 Weeks price per shipment is $9.60
        - Every Month price per shipment is $12.00
    - If 500g weight is selected
        - Every Week price per shipment is $13.00
        - Every 2 Weeks price per shipment is $17.50
        - Every Month price per shipment is $22.00
    - If 1000g weight is selected
        - Every Week price per shipment is $22.00
        - Every 2 Weeks price per shipment is $32.00
        - Every Month price per shipment is $42.00
- Calculating per month cost for the Order Summary modal
    - If Every Week is selected, the Order Summary modal should show the per shipment price multiplied by 4. For example, if 250g weight is selected, the price would be $28.80/month
    - If Every 2 Weeks is selected, the Order Summary modal should show the per shipment price multiplied by 2. For example, if 250g weight is selected, the price would be $19.20/month
    - If Every Month is selected, the Order Summary modal should show the per shipment price multiplied by 1. For example, if 250g weight is selected, the price would be $12.00/month




### Screenshot

![demo](https://github.com/AlecANL/cofferoasters/blob/main/public/gif/coffeeroasters.gif?raw=true)


### Links

- Solution URL: [repo](https://github.com/AlecANL/cofferoasters)
- Live Site URL: [demo](https://cofferoasters-v1.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Astro](https://astro.build/) - JS library


## Author

- Frontend Mentor - [@alecanl](https://www.frontendmentor.io/profile/alecanl)
- Twitter - [@alecanl](https://www.twitter.com/alecanl)

