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
        <div>
            <div>{label}</div>
            <div>{result}</div>
        </div>
    );
};
