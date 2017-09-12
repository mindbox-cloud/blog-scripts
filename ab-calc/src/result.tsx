import * as React from "react";

interface Props {
    label: string;
    result: string | number;
}

export const Result = (props: Props) => {
    const {
        label,
        result
    } = props;
    return (
        <div className="block-group">
            <div className="b100 ab-test-group-size-container">
                <span className="ab-test-group-size">
                    {label}:
                    <span>{result}</span>
                </span>
            </div>
        </div>
    );
};
