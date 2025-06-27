import powerbi from "powerbi-visuals-api";
import "./../style/visual.less";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
export declare class Visual implements IVisual {
    private target;
    private formattingSettings;
    private formattingSettingsService;
    private dateRangeInput;
    private host;
    private dataView;
    private startDefaultTime;
    private endDefaultTime;
    private previousMinTimestamp;
    private previousMaxTimestamp;
    constructor(options: VisualConstructorOptions);
    update(options: VisualUpdateOptions): void;
    getFormattingModel(): powerbi.visuals.FormattingModel;
    destroy(): void;
    private handleDialogResult;
    private handleDialogError;
    private applyDateRangeFilter;
    private applyResetFilter;
}
