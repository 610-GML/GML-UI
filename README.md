# GmlUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Team Recommendation Feature

The Team Recommendation feature is an intelligent system that helps in forming optimal project teams based on various parameters. This feature provides data-driven recommendations for team composition to maximize project success.

### Features

- Dynamic team formation based on project requirements
- Branch-specific recommendations
- Project type consideration
- Multiple team suggestions
- Performance prediction scores

### How to Use

1. Select a branch from the dropdown menu
2. Choose the project type
3. Specify the number of team recommendations needed (1-5)
4. Click submit to get team recommendations

### Team Recommendation Details

Each recommendation includes:

- Team members with their details
- Predicted performance score
- Project type probability

### Technical Implementation

The feature is implemented using:

- Angular Reactive Forms for user input
- TypeScript interfaces for type safety
- RESTful API integration
- Modern UI components with responsive design

### API Integration

The feature communicates with a backend service to:

- Fetch branch metadata
- Get project type options
- Retrieve team recommendations
- Process user inputs
