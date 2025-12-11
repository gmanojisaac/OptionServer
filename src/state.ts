import{INSTRUMENTS}from"./instruments";
import{StateMap,SymbolState}from"./types";
export const state:StateMap={};
INSTRUMENTS.forEach(i=>state[i.symbol]={
ltp:null,buyThreshold:null,lastBuyThreshold:null,
buyThresholdCondn:null,lastSignal:null,
sellSignalsAfterBuy:0,reEnterBuyCondition:false});
export const symbols=INSTRUMENTS.map(i=>i.symbol);
export const tokenToSymbol=new Map<number,string>(
INSTRUMENTS.map(i=>[i.token,i.symbol]));
