import { jsx as _jsx } from "react/jsx-runtime";
import Label from '../../components/Label';
export default {
    title: 'UI/Label',
    component: Label,
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        fontColor: { control: 'color' }
    }
};
const Template = (args) => _jsx(Label, { ...args }, void 0);
export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    allCaps: false,
};
export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true
};
export const Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    color: 'secondary'
};
export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
};
export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    size: 'h1',
    fontColor: '#5517ac'
};
export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
    size: 'h1',
    fontColor: 'white',
    backgroundColor: 'black',
};
