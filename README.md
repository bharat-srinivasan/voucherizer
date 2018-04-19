# Voucherizer

## About
Voucherizer is an simple PWA to create gift cards/voucher. The purpose of this application is to demonstrate PWA and might not have full capabilities implemented. 

## Assumptions & Behaviors
1. User contains 1000 points initially.
2. Whenever user starts application, it resets to 1000 points.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running as a PWA
1. Install http-server using `npm i -g http-server`
2. Run `npm run build`
3. Run `npm run launch`

## To see PWA evaluation report, open `pwa-report.html`

## Future Enhancement
1. Persist user's available points
2. Integrate with payment systems, when short of points.
3. Integrate with system that can generate points.
