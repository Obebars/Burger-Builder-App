import React from 'react';
import classes from './Logo.css';
import burgerLogo from '../../assets/images/burger-logo.png'
//burgerLogo here will just receive the path of the image

const logo = (props) =>(
  <div className={classes.Logo} style={{height: props.height}}>
    <img src={burgerLogo} alt='myBurger'/>

  </div>
  /*burgerLogo here in the src property will refer to a sting at the end,
   to the path where webpack stored the optimized and copied image*/
);

export default logo;

/* The src on the img here should be set dynamically.
Keep in mind the source folder is only the folder we're working in.
In the end, Webpack will take all these files bundle them together
and create a new output folder. We can't see that here because we're
in development mode where all of that will happen in memory, but once
we do publish our app we'll get a real different folder where all the
optimized, compiled and bundled assets are contained in.
Nowtherfore this assets folder here in the source folder will not
be shipped to any real server, the whole src folder won't be shipped
there.Hence we should also make webpack aware of the fact that we're
using this image and we're actually doing that by importing the
image into our javascript file here.
Noew of course just like for the css files, this does not mean that
webpack mixes the image with our javascript code. It just means that
we make webpack aware that we're using this image and webpack will
then handle this image with a special plug-in or a special module that
was added to webpack, to its config, and will basically copy it over to
the destination directory it creates, again only in memory during
development and we'll even optimize the image.  */
