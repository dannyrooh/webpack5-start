const rule_BABEL = require("./1-rule-babel")
const rules_css = require("./2-rule-cssExtract")
const rule_IMAGE = require("./3-rule-images")


const rules_function = ()  => 
     [
        rule_BABEL,
        rule_IMAGE, 
        ...rules_css
    ]

 
module.exports = rules_function