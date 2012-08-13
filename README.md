tooltip
=======

ToolTip is a simple and easy to use tooltip system using jQuery. It allows it's users to quickly and easily create good looking tooltips

To setup a tooltip follow the below instructions:

1. Include jQuery into your markup (included in this package)
2. Include the tooltip.js file (included in this package)
3. Apply the class "tooltip" to any element that you would like to have a tooltip appear on
4. Apply the attribute: data-tooltip="YOUR TOOLTIP HERE" - to the same element
5. Hover over the element to ensure everything is working correctlly.

Extra:

If you want to set your own styling for the tooltip, or change the classname used, simply edit the config vars in the tooltip.js file.

- tooltipClass: Changing this will change the class that will trigger the tooltips
- tooltipStyle: Setting this variable to FALSE will stop the script from performing any styling actions on the tooltip display

To set your own styling attributes, simply add styling rules for the class "x-tooltip-overlay" to your css file.