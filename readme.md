
### Rockin App

# Installation

 - Clone this project
 - Install module dependencies by run this script in terminal
	`npm install`
 - After finish downloading, then run the app.
	 `npm run dev`
 - Navigate to  [http://localhost:6060](http://localhost:6060)

# Deployment

 - Open  `src/app/config/environment.js`
 - Set production `production: { isProd: true }` 
 - Then run `npm run prod`
 - If you're running in development mode, please stop development first

# Enable Direct Code Preview
To make documenation easy and effective to access and implement, we attached source code in every component demos. We call it Direct Code Preview. This feature can be used in purchased product only (not available in demo).

 - Open config file  `src/app/config/codePreview.js`
 - By default set by false
 - Change to  `enable: true`, to enabled direct code preview
 -   Test with any component demo, example in  [http://localhost:6060/app/tables/advanced-table](http://localhost:6060/app/tables/advanced-table).
-   Then at the bottom of every components you will see  **<> Show Code**  Button. Just click it.
-   The source code of that components will show as well.
-   You can see through, copy and paste directly any component in front of your eyes.

## License
This project is licensed under the terms of the [MIT license](https://github.com/ilhammeidi/boss-lite/blob/master/LICENSE.txt).


 
