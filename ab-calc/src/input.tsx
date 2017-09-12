import * as React from "react";

interface Props {
    label: string;
    value: number;

    onChange: (value: number) => void;
}

export const Input = (props: Props) => {
    const {
        label,
        value,
        onChange
    } = props;

    const onChangeEvent = (event: any) => {
        const value = event.target.value as number;
        if (value < 0 || value > 100)
            return;
        onChange(value);
    };

    return (
        <div>
            <div className="test">{label}</div>
            <input type="number" max="100" min="0" value={value} onChange={onChangeEvent} />
        </div>
    );
};
