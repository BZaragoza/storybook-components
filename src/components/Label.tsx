import './label.css'

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

}

/* Basic component with inner text */
const Label = ({
  allCaps=false,
  color='primary',
  label="No Label",
  size="normal",
  fontColor
}: Props) => {
  return (
    <span 
      style={{
        color: fontColor
      }}
      className={`label ${size} text-${color}`} 
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}

export default Label
