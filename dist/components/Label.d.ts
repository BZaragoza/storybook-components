/// <reference types="react" />
import './label.css';
export interface Props {
    /**
     * Message to show in label
    */
    label: string;
    /**
     * Size of label
    */
    size: "normal" | "h1" | "h2" | "h3";
    /**
     * Colors defined for the inner text
     */
    color: 'primary' | 'secondary' | 'tertiary';
    /**
     * Need all text in caps?
     */
    allCaps?: boolean;
    /**
     * Custom color for the inner text
     */
    fontColor?: string;
    /**
     * Custom color for the inner text
     */
    backgroundColor?: string;
}
export declare const Label: ({ allCaps, color, label, size, fontColor, backgroundColor }: Props) => JSX.Element;
export default Label;
