# Personal Site

## Setup

### Local Development

1.  Install npm
2.  Install the required packages `npm install`

### Mobile Development

1.  Follow the steps in Local Development
2.  Enable `Port Forwarding` in [Chrome Dev Tools](chrome://inspect/#devices)
3.  Run `adb reverse tcp:3000 tcp:3000`

### Credits

-   [SVG Loaders](http://samherbert.net/svg-loaders/)
-   [R Logo](https://i.ytimg.com/vi/DX2gH3iWpGY/maxresdefault.jpg)
-   [FontAwesome](https://fontawesome.com/icons?d=gallery)
-   [React](https://reactjs.org/)

## Learnings:

1.  To add multiple styles to a hook that is very basic
    <div className={`panel ${props.styles ? props.styles.join(" ") : ""}`}>
2.  Building SVGs is super cool! My Logo
    ```<svg
          xmlns="http://www.w3.org/2000/svg"
          width="240"
          height="240"
          viewBox="0 0 240 240">
          <path d="M0 90 L57 90 L217 240 L160 240 Z" />
          <path d="M8 0 L150 0 C240 0 240 130 150 145.30 L91.33 90 L150 90 C182 90 182 42.5 150 42 L52.8 42 Z" />
        </svg>
    ```
3.  SCSS mixins are super useful!
    @mixin then using it through an @import and @include
4.  Keyframes in CSS are the backbone of all awesome animations!
