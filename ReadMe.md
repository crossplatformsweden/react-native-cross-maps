[![Crossplatform](https://crossplatform.se/wp-content/uploads/2018/05/Crossplatform-Sweden-AB-01_web.jpg)](https://www.crossplatform.se/)

<!-- language-all: javascript -->

# Crossplatform React-Native Maps

A beautiful React-Native map using [react-native-maps](https://github.com/react-native-community/react-native-maps) and other libraries.

## Install

Install [react-native-paper](https://github.com/callstack/react-native-paper), [react-native-maps](https://github.com/react-native-community/react-native-maps) and [react-native-maps-directions](https://github.com/bramus/react-native-maps-directions) if you don't already have them.

```bash
	npm i react-native-paper
        npm i react-native-maps
        npm i react-native-maps-directions
```

Or with yarn

```bash
	yarn add react-native-paper
	yarn add react-native-maps
        yarn add react-native-maps-directions
```

Once those packages are installed:

```bash
	npm i react-native-cross-maps
```

or

```bash
	yarn add react-native-cross-maps
```

## Documentation

---

<!-- [![npm](https://img.shields.io/npm/v/react-native-cross-maps.svg)](https://www.npmjs.com/package/react-native-cross-maps)
[![npm](https://img.shields.io/npm/dt/react-native-cross-maps.svg)](https://www.npmjs.com/package/react-native-cross-maps)
[![Build status](https://img.shields.io/azure-devops/build/crossplatformsweden/parkeraapp/15.svg)](https://crossplatformsweden.visualstudio.com/ParkeraApp/_build/latest?definitionId=15)
[![codecov](https://codecov.io/gh/crossplatformsweden/react-native-components/branch/master/graph/badge.svg)](https://codecov.io/gh/crossplatformsweden/react-native-components)
[![dependencies](https://david-dm.org/crossplatformsweden/react-native-components/status.svg)](https://david-dm.org/crossplatformsweden/react-native-components)
[![peer dependencies](https://img.shields.io/david/peer/crossplatformsweden/react-native-components.svg)](https://github.com/crossplatformsweden/react-native-components)
[![Prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
![GitHub](https://img.shields.io/github/license/crossplatformsweden/react-native-components.svg)

[![React Native](https://img.shields.io/badge/React%20Native-v0.57-blue.svg)](https://facebook.github.io/react-native/)
[![React Native Paper](https://img.shields.io/badge/React%20Native%20Paper-v2.2.4-blue.svg)](https://github.com/callstack/react-native-paper)
[![React Native Vector Icons](https://img.shields.io/badge/React%20Native%20Vector%20Icons-v4.5.0-blue.svg)](https://github.com/oblador/react-native-vector-icons)
[![React Native Indicators](https://img.shields.io/badge/React%20Native%20Indicators-v0.13.0-blue.svg)](https://github.com/n4kz/react-native-indicators)
[![React Native Modal](https://img.shields.io/badge/React%20Native%20Modal-v7.0.0-blue.svg)](https://github.com/react-native-community/react-native-modal)

[![GitHub forks](https://img.shields.io/github/forks/crossplatformsweden/react-native-components.svg?style=social&label=Fork)](https://github.com/crossplatformsweden/react-native-components)
[![GitHub stars](https://img.shields.io/github/stars/crossplatformsweden/react-native-components.svg?style=social&label=Star)](https://github.com/crossplatformsweden/react-native-components)
[![GitHub watchers](https://img.shields.io/github/watchers/crossplatformsweden/react-native-components.svg?style=social&label=Watch)](https://github.com/crossplatformsweden/react-native-components)
[![Twitter Follow](https://img.shields.io/twitter/follow/crossplatformse.svg?style=social)](https://twitter.com/crossplatformse) -->

### MapComponent

<!-- ![](https://media.giphy.com/media/MohS56wPG7AgPGteu1/giphy.gif) -->

Renders a MapView from [react-native-maps](https://github.com/react-native-community/react-native-maps) and a MapViewDirections from [react-native-maps-directions](https://github.com/bramus/react-native-maps-directions)

Also includes UserLocationButton based of [react-native-paper](https://github.com/callstack/react-native-paper) which can navigate to the user's current position. To enable this set the property userLocationButton to true

<!-- **Examples**

Button with **[title](https://crossplatformsweden.github.io/react-native-components/interfaces/_components_modals_crossbusyindicator_.ibusyindicatorprops.html#type)**, but no icon and **[mode](https://crossplatformsweden.github.io/react-native-components/interfaces/_components_buttons_crossbutton_.icrossbuttonprops.html#mode)** _contained_ (background color):

```typescript
	import { CrossButton } from 'react-native-cross-maps';

	export const ButtonComp => () => (
 		<CrossButton
            title="Click me"
            mode="contained"
            onPress={() => OnButtonPress('Pressed button with no icon')}
          />
	);
``` -->
