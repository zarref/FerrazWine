# FerrazWine

## Notes about this project:
I decided to use Angular 5 with Bootstrap.
Since there was no opportunity to have an API key on time, I decided to use some fake data.

My priority was to finish it working well and on time, so I decided to divide my time in the following steps:
0,5h – understand the project and investigate a bit some important information (e.g.: data source)
3h – develop solution and test
0,5h – deploy

I pay more attention to functionality rather than cosmetic aspects, so CSS were barely modified.

This project was designed with the following main components:
Home – This is where main information and functionality are available for user. 
Detail – This component was reserved to show details of selected item.
App – Main App/common (e.g.: title).
Datahelper – Used to manipulate data and connect to data-source (in this case, a static array was used).
App-routing – Native Angular routing module to navigate between Home and Detail components.

I’ve search for the best solution to sort list. Sort code was found in a forum and adapted for my reality. Remaining code is my own code.

Some user instructions:
- Click on wine name to go to details
- Click on country or year to filter
- Click on filter button on right top corner of filtered list to clean filter
- Click on table headers to sort (click again to reverse order)
- Click on shopping cart plus icon to add one item to selected wines
- Click on thrash bin icon to remove from selected wines list

Unfortunately, I’ve found a bug that I was not able to solve on time: when we try to see details of first item in the list, it fails to load data.

It was a pleasure to do this challenge, I took the opportunity learn some Angular 5 (last version I've used in the past was 1)!
“Learning never exhausts the mind.” - Leonardo da Vinci

And that’s it!
Pedro


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
