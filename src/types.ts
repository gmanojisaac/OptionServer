export type BuyCondn=boolean|null;
export type Signal="BUY"|"SELL"|null;
export interface SymbolState{ltp:number|null;
buyThreshold:number|null;lastBuyThreshold:number|null;
buyThresholdCondn:BuyCondn;lastSignal:Signal;
sellSignalsAfterBuy:number;reEnterBuyCondition:boolean;}
export type StateMap=Record<string,SymbolState>;
