# ng-siret-validator
## About
#### A simple SIRET validator for Angular :

* SIRET Entreprises
* SIRET La Poste 

## Licence

![NPM](https://img.shields.io/npm/l/ng-siret-validator?style=for-the-badge)
## Installation

Run the following command to install the package :

```sh
npm install ng-siret-validator --save
```

## Setup

You must import the validator ``` ValidateSiret ``` in your component

```ts

import { ValidateSiret } from "ng-siret-validator";


 this.siretForm = this.formBuilder.group({
      siret: ['', [Validators.required, ValidateSiret]]
 });

```
