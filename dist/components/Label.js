import { jsx as _jsx } from "react/jsx-runtime";
import './label.css';
/* Basic component with inner text */
export const Label = ({ allCaps = false, color = 'primary', label = "No Label", size = "normal", fontColor, backgroundColor = "transparent" }) => {
    return (_jsx("span", { style: {
            color: fontColor,
            backgroundColor
        }, className: `label ${size} text-${color}`, children: allCaps ? label.toUpperCase() : label }, void 0));
};
export default Label;
