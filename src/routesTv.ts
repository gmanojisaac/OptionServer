import{Request,Response}from"express";
import{state}from"./state";
export const handleTvSignal=(req:Request,res:Response)=>{const{symbol,signal,buyThreshold}=req.body;
const s=state[symbol];if(!s||!["BUY","SELL"].includes(signal))return res.status(400).json({error:"bad"});
const ltp=s.ltp;if(signal==="BUY"){if(s.buyThreshold!=null)s.lastBuyThreshold=s.buyThreshold;
else if(ltp!=null)s.lastBuyThreshold=ltp;if(typeof buyThreshold==="number")s.buyThreshold=buyThreshold;
s.sellSignalsAfterBuy=0;s.reEnterBuyCondition=false;s.lastSignal="BUY";}
else{if(ltp!=null)s.buyThreshold=ltp;if(s.lastSignal==="BUY"){s.sellSignalsAfterBuy++;
if(s.sellSignalsAfterBuy>=2&&s.lastBuyThreshold!=null&&ltp!=null&&ltp<s.lastBuyThreshold)
s.reEnterBuyCondition=true;}s.lastSignal="SELL";}return res.json({ok:true,state:s});};
