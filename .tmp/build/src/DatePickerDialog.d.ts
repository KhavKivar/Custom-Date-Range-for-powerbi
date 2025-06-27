import powerbi from "powerbi-visuals-api";
import DialogConstructorOptions = powerbi.extensibility.visual.DialogConstructorOptions;
import './custom_calendar/style.css';
export declare class DatePickerDialog {
    static id: string;
    private picker;
    private host;
    constructor(options: DialogConstructorOptions, initialState: any);
    destroy(): void;
}
