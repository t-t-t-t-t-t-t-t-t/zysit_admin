import{b as c,d as o,E as u}from"./index-DDjioiAb.js";const C=t=>t?c.get(`${o}/cases/casesList/${t}`):c.get(`${o}/cases/casesList`),y=({title:t,content:r,category:n,detail:i,image:e})=>c.post(`${o}/cases/casesList`,{title:t,content:r,category:n,detail:i,image:e}),m=({title:t,content:r,category:n,detail:i,image:e,_id:s})=>c.put(`${o}/cases/casesList`,{title:t,content:r,category:n,detail:i,image:e,_id:s}),L=t=>c.delete(`${o}/cases/casesList/${t}`);function h(){return{getCasesList:async(e="")=>{try{const s=await C(e);return u({message:s.msg,type:"success"}),s.data}catch(s){console.log(s)}},addCases:async({title:e,content:s,category:p,detail:d,image:l})=>{try{const a=await y({title:e,content:s,category:p,detail:d,image:l});return u({message:a.msg,type:"success"}),a.data}catch(a){console.log(a)}},putCases:async({_id:e,title:s,content:p,category:d,detail:l,image:a})=>{try{const g=await m({_id:e,title:s,content:p,category:d,detail:l,image:a});return u({message:g.msg,type:"success"}),g.data}catch(g){console.log(g)}},deleteCases:async e=>{try{const s=await L(e);return u({message:s.msg,type:"success"}),s.data}catch(s){console.log(s)}}}}export{h as u};