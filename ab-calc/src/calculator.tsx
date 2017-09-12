import * as React from "react";

import { Input } from "./input";
import { Result } from "./result";

import "./style.scss";

interface Props {
}

interface State {
    average: number;
    minimalDiff: number;

    variant1: number;
    variant2: number;
}

const Za = 1.9600;
const Zb = .841621;

export class Calculator extends React.Component<Props, State> {
    constructor() {
        super();

        this.state = {
            average: 0,
            minimalDiff: 0,
            variant1: 0,
            variant2: 0
        }    
    }

    private onAverageUpdate = (value: number) => {
        this.setState({
            ...this.state,
            average: value
        });
    }

    private onMinimalDiffUpdate = (value: number) => {
        this.setState({
            ...this.state,
            minimalDiff: value
        });
    }

    private onVariant1Update = (value: number) => {
        this.setState({
            ...this.state,
            variant1: value
        });
    }

    private onVariant2Update = (value: number) => {
        this.setState({
            ...this.state,
            variant2: value
        });
    }

    private controlGroupSize(): number {
        const {
            average,
            minimalDiff
        } = this.state;

        if (minimalDiff == 0)
            return 0;

        const p = average / 100;
        const sigma = minimalDiff / 100;

        return Math.ceil(2 * (Za + Zb) * (Za + Zb) * (1 - p) * p / (sigma * sigma));
    }

    private successfullVariant(): string {

        const {
            minimalDiff,
            variant1,
            variant2
        } = this.state;

        if (minimalDiff == 0)
            return "";
// |p1-p2|>1,96*корень((p1*(1-p1))/n1+(p2*(1-p2))/n2)

        const groupSize = this.controlGroupSize();

        const p1 = variant1 / 100;
        const p2 = variant2 / 100;

        const absDiff = Math.abs(p1 - p2);

        const eff = Za * Math.sqrt((p1 * (1 - p1) / groupSize) + (p2 * (1 - p2) / groupSize));

        const hasSignificatDifference = absDiff > eff;

        if (!hasSignificatDifference)
            return "Ни один из вариантов не успешен";

        if (p1 > p2)
            return "Вариант 1 более успешен";
        return "Вариант 2 более успешен";
    }

    public render() {

        const {
            average,
            minimalDiff,
            variant1,
            variant2
        } = this.state;

        const controlGroupSize = this.controlGroupSize();

        return (
            <div>
                <Input
                    label="среднее значение тестируемого показателя"
                    value={average}
                    onChange={this.onAverageUpdate} />
                    
                <Input
                    label="минимальный эффект, который планируем получить"
                    value={minimalDiff}
                    onChange={this.onMinimalDiffUpdate} />

                <Result
                    label="размер каждого варианта"
                    result={minimalDiff == 0 ? "" : controlGroupSize} />

                <hr />

                <div>Значение показателя</div>

                <Input
                    label="Вариант 1"
                    value={variant1}
                    onChange={this.onVariant1Update} />
                    
                <Input
                    label="Вариант 2"
                    value={variant2}
                    onChange={this.onVariant2Update} />

                <div>{this.successfullVariant()}</div>
            </div>
        );
    }
}
