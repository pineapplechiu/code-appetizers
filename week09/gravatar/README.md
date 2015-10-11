# Gravatar

Do your work in `index.html` and `script.js`.


Make it so that when someone types in an email in the input, replace the image with that person's gravatar.

The format for the gravatar URL: http://www.gravatar.com/avatar/HASH?s=256

The hash is calculated as follows:
  1. Strip out all trailing and leading spaces from the email
  2. convert the email to all lowercase
  3. create the MD5 hash of that string using the `MD5` function provided

`MD5("stuff")` will return the MD5 hash of the string `"stuff"`
