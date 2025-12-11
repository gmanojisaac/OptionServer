import{Request,Response}from"express";
import{state,symbols}from"./state";
import{INSTRUMENTS}from"./instruments";
export const handleGetState=(req:Request,res:Response)=>
res.json({symbols,state,instruments:INSTRUMENTS});
