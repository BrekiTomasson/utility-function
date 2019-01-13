# `utility-function`

## What It Do Be

After installing the package in the normal way, all you need to do is require the module into a variable:

`const utility = require('utility-function')

> If you're writing your code in Typescript, the following should work:
>
> `import { UtilityFunction } from 'utility-function/src/utility-function'`

After that, all you need to think about are `utility.value` and `utility.add()`.

## What It Do Does - Example The First

Say you're made the terrible decision of playing the lottery. A ticket is $5, and the odds of hitting the jackpot - for a $15,000,000 pay day - is exactly 0.00000015%. There are other, more likely, wins to consider as well, such as the 0.00025% chance of winning $100,000, the 0.001% chance of winning $1500, the 0.01% chance of winning $150 and the fairly decent 0.1% chance of winning $15.

With this in mind, you have to ask yourself what the expected utility of the lottery is. Enter `utility-function`.

```
const utility = require('utility-function')
utility.add(100, -5) // Because there's 100% chance of paying 5 dollars.
utility.add(0.00000015, 15000000)
utility.add(0.00025, 100000)
utility.add(0.001, 1500)
utility.add(0.01, 150)
utility.add(0.1, 15)
```

Once that's done, check the contents of `utility.value`, and you'll find that it's about -0.7804166666666669. Yup, that's right. Even buying a million tickets and winning on the approrpriate percentage of them would still net you an average loss of almost a dollar per ticket.

## What It Do Does - Example The Second

You've got a weird tropical disease called Terriblylethaliosis. It's weird in the way that it doesn't give you any symptoms up until one day, you just spontaneously combust. The Doctors have analyzed the way the disease progresses, and they've given you the following data:

- There's a 10% chance you'll die within a year.
- There's a 40% chance you'll die within two years.
- There's a 80% chance you'll die within three years.
- There's a 100% chance you'll die within four years.

Enter utility function!

```
utility.add(10, 1)
utility.add(40, 2)
utility.add(80, 3)
utility.add(100,4)
```

According to the utility function, you can expect to die about 1.825 years. Fortunately, the doctors have an ingenious treatment for you, but they're weirdly sadistic and introduce it as a math problem. According to their best minds, the treatment has a 35% of killing you outright, a 25% chance of curing you from the disease, a 10% chance of doubling your current life expectancy and a 30% chance of doing nothing.

Let's think about this in terms of preference. Dying is bad, so we think that's desirable 0% of the time. Being cured, however, is something we want 100% of the time. Having our lifespan doubled is good, so let's give that a score of 75% "good". Finally, for the medicine to do nothing is neutral, so we'll assign that a score of 50%.

```
utility.add(35, 0)
utility.add(25, 100)
utility.add(10, 75)
utility.add(30, 50)
```

Adding up the odds of the likely results gets us 47.5, on the wrong side of neutral.

## What It Do Does - Example The Third

You're at a restaurant, and you're famished. Unfortunately, it's one of those new hipster restaurants with a crazy theme - it's built in the old town morgue. Because of that, every item of food has two numbers associated to it - the cost of the itme and the percentage likelihood of getting food poisoning. Luckily, they have both vegan and gluten-free options for everything, so it's not all bad! Here's what you ended up getting:

- Grass-fed Soy Cream Substitute Sprinkle: 15% chance.
- Non-Dairy Pickle Sunday: 10% chance.
- TwinkleTwinkle Non-Sectarian Fish and Chips: 11% chance.
- Powdered Serotonin Inhibitor Smoothie: 19% chance.
- Two Rhubarb Jelly Shots with Caffeine and L-Carnitine: 9% each.

You do the math, and it turns out you've got about a 73% chance of leaving that restaurant with the finest hipster dining fighting to evacuate your bowels. But hey, that means a 27% chance you'll be all right, right? Right.
