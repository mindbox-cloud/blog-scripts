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
        <div className="block-group">
            <div className="block b70">
                <div className="ab-test-label">{label}</div>
            </div>
            <span className="block b30">
                <span className="ab-test-input-span">
                    <input className="ab-test-input" type="number" max="100" min="0" value={value} onChange={onChangeEvent} />%
                </span>
            </span>
        </div>
    );
};
