
module.exports = {
	content: [
	  "./src/**/*.{js,jsx,ts,tsx}",
	  "./public/index.html",
	],
	theme: {
	  extend: {
		colors: {
		  primary: "#4a90e2",
		  secondary: "#d94f4f",
		},
	  },
	},
	plugins: [
	  require("rippleui"), 
	],
  };
  