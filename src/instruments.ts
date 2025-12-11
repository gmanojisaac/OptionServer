export type Instr={symbol:string;
exchange:"NFO"|"BFO";tradingsymbol:string;
token:number;lot:number;};
export const INSTRUMENTS:Instr[]=[
{symbol:"NIFTY251216C25750",exchange:"NFO",tradingsymbol:"NIFTY25D1625750CE",token:12341762,lot:75},
{symbol:"NIFTY251216P25800",exchange:"NFO",tradingsymbol:"NIFTY25D1625800PE",token:12343554,lot:75},
{symbol:"BANKNIFTY251230C58900",exchange:"NFO",tradingsymbol:"BANKNIFTY25DEC58900CE",token:13161474,lot:35},
{symbol:"BANKNIFTY251230P59000",exchange:"NFO",tradingsymbol:"BANKNIFTY25DEC59000PE",token:13162242,lot:35},
{symbol:"BSX251211C84400",exchange:"BFO",tradingsymbol:"SENSEX25D1184400CE",token:290361093,lot:20},
{symbol:"BSX251211P84500",exchange:"BFO",tradingsymbol:"SENSEX25D1184500PE",token:290355717,lot:20}];
console.log("[sixInstruments] loaded",INSTRUMENTS.length,"instruments");
