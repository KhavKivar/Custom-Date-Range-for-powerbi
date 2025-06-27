export interface DateRangePickerOptions {
    targetElement?: HTMLElement | null;
    initialStartDate?: Date;
    initialEndDate?: Date;
    defaultStartDate?: Date;
    defaultEndDate?: Date;
}
export interface DateRangePickerCallbacks {
    onChange?: (range: {
        start: Date | null;
        end: Date | null;
    }) => void;
    onReset?: () => void;
}
export declare class DateRangePicker {
    private targetElement;
    private onChangeCallback;
    private onResetCallback;
    private startDate;
    private endDate;
    private leftViewDate;
    private rightViewDate;
    private calendarVisible;
    private calendar;
    private _handleMousedown;
    private _showCalendarBound;
    private defaultStartDate;
    private defaultEndDate;
    constructor(options: DateRangePickerOptions, callbacks: DateRangePickerCallbacks);
    private init;
    showCalendar(): void;
    hideCalendar(): void;
    private handleMousedown;
    renderCalendar(): void;
    createHeader(date: Date, delta: number, calendarSide: 'left' | 'right'): HTMLElement;
    createWeekdays(): HTMLElement;
    createDaysGrid(monthDate: Date): HTMLElement;
    selectDate(day: number, year: number, month: number): void;
    setDates(startDate: Date, endDate: Date): void;
    formatDate(date: Date): string;
    createQuickSelectSection(): HTMLElement;
    private handleQuickSelect;
    resetSelection(): void;
}
