import { AndroidData } from './android-data.model';
import { IOSData } from './ios-data.model';
import { ShapeEnum } from './shape.enum';
export declare class Shadow {
    static DEFAULT_SHAPE: ShapeEnum;
    static DEFAULT_BGCOLOR: string;
    static DEFAULT_SHADOW_COLOR: string;
    static DEFAULT_PRESSED_ELEVATION: number;
    static DEFAULT_PRESSED_Z: number;
    static apply(tnsView: any, data: IOSData | AndroidData): void;
    private static getDefaults;
    private static isShadow;
    private static applyOnAndroid;
    private static overrideDefaultAnimator;
    private static applyOnIOS;
    static androidDipToPx(nativeView: any, dip: number): any;
}
