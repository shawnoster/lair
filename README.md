# Lair

## Overview

Welcome to Lair, a loose collection of code things all centered around play tabletop games. It's also, and more importantly, a shared learning project where anyone can contribute to evolving Franksenstein's digitial buddy.

## Road Map

Road Map, you're hilarious, but here are a few thoughts:

- Random Dungeon Generator
  - create a service that returns useful data for random dungeon generation
  - front-end that displays a random dungeon

### Dice Roller

- create a service that accepts a free-form string (_3d6_) and returns the rolled value
- create a front-end that calls the service and does something cool

Current API end-points:

- [https://lair-dice.azurewebsites.net/diceroll/1d20] - Roll 1d20 dice
- [https://lair-dice.azurewebsites.net/swagger/index.html] - Swagger docs


#### Dice Roller User Stories
- As a developer I want to be able to randomly tamper with dice rolls.
- As a user I want to be able to input my perception score to notice if my dice have been tampered with.
- As a user I want to be able to physically drag/throw my dice individually.
- As a user I want to be able to make it rain.
- As a user I want to know if my roll could have scored points in a different style of game.
- As a user I want to be able to log in to my account and be able to pick from a giant selection of dice styles.
- As a developer I want to be able have dice with Different Effects when they are rolled.
- As a user I want to control how my dice are rolled: IE thrown through a fire, tossed into a solar system and have gravity throw them around, drop them from a plane etc...
- As a user I want to be able to "load" my dice.
- As a user I want my dice rolls logged. 