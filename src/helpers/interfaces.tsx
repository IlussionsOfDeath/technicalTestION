export interface Navigation {
    navigation:         any;
}

export interface HeaderProps {
    isHome?:            boolean;
    navigation?:        any;
    text?:              string;
}

export interface ButtonProps {
    customPosition?:    any;
    icon?:              string | null;
    label?:             string | null;
    onPress?:           any;
    type?:              string | null;
}

export interface InputProps {
    customPosition?:    any;
    icon?:              string | null;
    keyboardType?:      any;
    onChangeText?:      any;
    placeholder?:       string;
    type?:              string | null;
    value?:             any;
}