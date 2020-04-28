# Personal Site

## Setup

### Local Development

1.  Install npm
2.  Install the required packages `npm install`

### Mobile Development

1.  Follow the steps in Local Development
2.  Enable `Port Forwarding` in [Chrome Dev Tools](chrome://inspect/#devices)
3.  Run `adb reverse tcp:3000 tcp:3000`

## Slides

-   Slide 1: Intro, name, picture of myself etc
-   Slide 2: Work experience, timeline on left, info on right about what I do and what I enjoy working on
-   Slide 3: Things I enjoy (music - dermot, tv shows, movies, etc)
-   Slide 4: Contact me

Do social media icons

Hi I am Ryan,

in the contact me section as the photo:
Not Gosling,
Reynolds,
or Seacrest
...
but van Huuksloot
(Now that's a mouthful)

## Mobile

For mobile, write
'Hi my name is Ryan, for the best experience, please visit this site with a desktop computer'

Give inspiration credits
SVG Loaders = <http://samherbert.net/svg-loaders/>
R Logo = <https://i.ytimg.com/vi/DX2gH3iWpGY/maxresdefault.jpg>
General format = <https://codepen.io/mariosmaselli/pen/WGwKVg/>

## Learnings:

1.  To add multiple styles to a hook that is very basic
    <div className={`panel ${props.styles ? props.styles.join(" ") : ""}`}>
2.  Building SVGs is super cool! My Logo
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="240"
      height="240"
      viewBox="0 0 240 240">
      <path d="M0 90 L57 90 L217 240 L160 240 Z" />
      <path d="M8 0 L150 0 C240 0 240 130 150 145.30 L91.33 90 L150 90 C182 90 182 42.5 150 42 L52.8 42 Z" />
    </svg>
3.  SCSS mixins are super useful!
    @mixin then using it through an @import and @include
4.  Keyframes in CSS are the backbone of all awesome animations!
