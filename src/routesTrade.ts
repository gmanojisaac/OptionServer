import{Request,Response}from"express";
import{INSTRUMENTS}from"./instruments";
import{kc}from"./kiteClient";
export const handleTrade=async(req:Request,res:Response)=>{const{symbol,mode,action,direction,qty}=req.body;
if(!["paper","livesim","live"].includes(mode))return res.status(400).json({error:"mode"});
if(mode!=="live")return res.json({ok:true,mode});
const i=INSTRUMENTS.find(x=>x.symbol===symbol);if(!i)return res.status(400).json({error:"symbol"});
try{const q=qty||i.lot;if(action==="OPEN")await kc.placeOrder("regular",
{exchange:i.exchange,tradingsymbol:i.tradingsymbol,
transaction_type:direction,quantity:q,product:"NRML",order_type:"MARKET"});
else await kc.placeOrder("regular",{exchange:i.exchange,tradingsymbol:i.tradingsymbol,
transaction_type:direction,quantity:q,product:"NRML",order_type:"MARKET"});
return res.json({ok:true});}catch(e){console.error(e);return res.status(500).json({error:"kite"});}};
