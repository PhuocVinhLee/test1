export declare type ThemeOptions = 'white' | 'black';
export declare const $theme: {
    get(): ThemeOptions;
    set(value: 'white' | 'black'): void;
    onchange(callback: (event: CustomEvent<ThemeOptions>) => void): () => void;
};
