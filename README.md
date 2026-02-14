[![Build Status](https://travis-ci.org/coda-it/graphen.svg?branch=master)](https://travis-ci.org/coda-it/graphen)

# Graphen UI library
[[Documentation]](https://coda-it.github.io/graphen/)
[[Tasks board]](https://trello.com/b/vhEpkIJr/project-coda-it)

## About
'graphen' is a small library, that keeps reusable blocks of UI and helps making application design consistent across multiple projects.

## Motivation and principles
Motivation for building graphen is to create a small, reusable and customizable UI library that will follow current best practices in the CSS world and allow to create clean and easily maintainable code.     

Graphen architecture is driven by:

#### Namespacing
Every style or variable name are prefixed, so developer will have knowledge where from the style or variable is coming from what is its role.
All variables and styles are prefixed with the following pattern: `g[b|c|m|x]-<semantic name>`.

* `g` - responsibility of the first letter is to tells developers what is the origin of the entity (where to look when necessary) and to avoid naming collision (although probability is low) 
* `b|c|x|m` - the second letter tells developers what is the role of (or how to use) a particular entity
  * `b` - branding, variables that can be overwritten for custom styling
  * `c` - component (BEM block), a style that can be applied for markups (along with elements and modifiers)
  * `m` - BEM mix, that can apply a generic style not related with particular block or element 
  * `x` - mixin, which can extend our custom classes

Few examples:
* `gb-color-success` - variable representing a color 
* `gc-component gc-component__element gc-component--modifier` - few component classes
* `gm-pull-right` - a mix class that allows to attach a generic class  

#### Block Element Modifier
As mentioned above, graphen uses BEM naming convention which have two benefits, removing specificity issues and Block Element Modifier principle simplifies how to think about components and it sub-parts.

#### Object Oriented CSS
The last principle helps to separate component (BEM block) layouting from its skinning (BEM modifier), hence blocks when used (ex. `gc-mycomponent`) should have added at least default skin (ex `gc-mycomponent--default`). This principle helps to avoid overwriting CSS properties related with skinning (ex. `color`, `background-color` etc.) which is considered a bad practice but also reduces CSS file size.

## Installation
1. Install as npm package: `npm i graphen`
2. Import `style.scss` (or particular components) into your project
3. In order to build font successfully, set `$c-icon-font-url` to point from your project root level (ex. `~graphen/src/assets/font`)

## Development
In order to develop with `graphen` you'll need to:
1. Clone `graphen` repository: `git clone https://github.com/coda-it/graphen`
2. Build example app: `make example`
3. Run example server in another bash window `npm run example-run` 
4. After development check integration tests with `make integration-test`

## Customization
Graphen allows to customize branding variables (palette of colors and font) to fit graphical requirements of the project it's used in.
In order to customize, checkout `src/variables/_brand.scss` for particular variables that can be overwritten.

