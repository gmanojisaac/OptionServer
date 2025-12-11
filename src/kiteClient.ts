import{KiteTicker,KiteConnect}from"kiteconnect";
import{state,tokenToSymbol}from"./state";
const apiKey=process.env.KITE_API_KEY!;
const accessToken=process.env.KITE_ACCESS_TOKEN!;
export const kc=new KiteConnect({api_key:apiKey});kc.setAccessToken(accessToken);
export const ticker=new KiteTicker({api_key:apiKey,access_token:accessToken});
export const startTicker=()=>{ticker.connect();
ticker.on("connect",()=>{const t=[...tokenToSymbol.keys()];
ticker.subscribe(t);ticker.setMode(ticker.modeFull,t);});
ticker.on("ticks",ticks=>ticks.forEach(t=>{const s=tokenToSymbol.get(t.instrument_token);if(!s)return;
const st=state[s];st.ltp=t.last_price;if(st.buyThreshold!=null&&st.ltp!=null){
st.buyThresholdCondn=st.ltp>st.buyThreshold?true:st.ltp<st.buyThreshold?false:null;}}));};
