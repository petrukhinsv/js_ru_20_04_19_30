module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
	"parser": "babel-eslint",
	"rules": {
		// отходим от airbnb в вопросе spaces/tabs
		// indent ставим равным tab
		"indent": ["error", "tab"],
		"no-tabs": 0,
		"react/jsx-indent": ["error", "tab"],
		"react/jsx-indent-props": ["error", "tab"],
		"react/jsx-filename-extension": 0,
		"jsx-a11y/no-static-element-interactions": 0,
		"jsx-a11y/href-no-hash": 0
	}
};