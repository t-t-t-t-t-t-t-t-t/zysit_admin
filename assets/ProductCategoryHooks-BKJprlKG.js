import{b as r,d as s,E as c}from"./index-DDjioiAb.js";const u=e=>e?r.get(`${s}/productCategory/productCategoryList/${e}`):r.get(`${s}/productCategory/productCategoryList`),d=({title:e})=>r.post(`${s}/productCategory/productCategoryList`,{title:e}),y=({title:e,_id:g})=>r.put(`${s}/productCategory/productCategoryList`,{title:e,_id:g}),n=e=>r.delete(`${s}/productCategory/productCategoryList/${e}`);function P(){return{getProductCategoryList:async(o="")=>{try{const t=await u(o);return c({message:t.msg,type:"success"}),t.data}catch(t){console.log(t)}},addProductCategory:async({title:o})=>{try{const t=await d({title:o});return c({message:t.msg,type:"success"}),t.data}catch(t){console.log(t)}},putProductCategory:async({_id:o,title:t})=>{try{const a=await y({_id:o,title:t});return c({message:a.msg,type:"success"}),a.data}catch(a){console.log(a)}},deleteProductCategory:async o=>{try{const t=await n(o);return c({message:t.msg,type:"success"}),t.data}catch(t){console.log(t)}}}}export{P as u};