import{b as G,d as J,E as Y,r as g,e as R,j as ue,f as y,o as u,g as c,w as l,a as n,c as q,F as K,l as _,k as $,h as k,t as E,q as H,i as re,s as N}from"./index-DDjioiAb.js";import{u as de}from"./SolutionCategoryHooks-Dk6ZlqOz.js";import{U as Z}from"./UploadImage-COppiFFJ.js";const ge=i=>i?G.get(`${J}/solution/solutionList/${i}`):G.get(`${J}/solution/solutionList`),fe=({title:i,bannerImage:w,content:D,contentImage:v,demandAnalysis:d,heighLight:A,mainProduct:m,mainCaseImage:f,mainCase:L,category:r})=>G.post(`${J}/solution/solutionList`,{title:i,bannerImage:w,content:D,contentImage:v,demandAnalysis:d,heighLight:A,mainProduct:m,mainCaseImage:f,mainCase:L,category:r}),ce=({_id:i,title:w,bannerImage:D,content:v,contentImage:d,demandAnalysis:A,heighLight:m,mainProduct:f,mainCaseImage:L,mainCase:r,category:s})=>G.put(`${J}/solution/solutionList`,{_id:i,title:w,bannerImage:D,content:v,contentImage:d,demandAnalysis:A,heighLight:m,mainProduct:f,mainCaseImage:L,mainCase:r,category:s}),pe=i=>G.delete(`${J}/solution/solutionList/${i}`),ye=()=>G.get(`${J}/solution/solutionProductList`),ve=()=>G.get(`${J}/solution/solutionCasesList`);function F(){return{getSolutionList:async(m="")=>{try{const f=await ge(m);return Y({message:f.msg,type:"success"}),f.data}catch(f){console.log(f)}},addSolution:async({title:m,bannerImage:f,content:L,contentImage:r,demandAnalysis:s,heighLight:p,mainProduct:S,mainCaseImage:x,mainCase:B,category:P})=>{try{const b=await fe({title:m,bannerImage:f,content:L,contentImage:r,demandAnalysis:s,heighLight:p,mainProduct:S,mainCaseImage:x,mainCase:B,category:P});return Y({message:b.msg,type:"success"}),b.data}catch(b){console.log(b)}},putSolution:async({_id:m,title:f,bannerImage:L,content:r,contentImage:s,demandAnalysis:p,heighLight:S,mainProduct:x,mainCaseImage:B,mainCase:P,category:b})=>{try{const U=await ce({_id:m,title:f,bannerImage:L,content:r,contentImage:s,demandAnalysis:p,heighLight:S,mainProduct:x,mainCaseImage:B,mainCase:P,category:b});return Y({message:U.msg,type:"success"}),U.data}catch(U){console.log(U)}},deleteSolution:async m=>{try{const f=await pe(m);return Y({message:f.msg,type:"success"}),f.data}catch(f){console.log(f)}},getProductTitle:async()=>{try{const m=await ye();return Y({message:m.msg,type:"success"}),m.data}catch(m){console.log(m)}},getCasesTitle:async()=>{try{const m=await ve();return Y({message:m.msg,type:"success"}),m.data}catch(m){console.log(m)}}}}const be={class:"flex gap-2"},he={class:"flex gap-2"},Ce={__name:"SolutionAdd",props:["isShowDialog"],emits:["addSolution"," closeBox"],setup(i,{emit:w}){const D=w,v=g(),d=R({title:"",bannerImage:"",category:{},mcontent:"",contentImage:"",demandAnalysis:[],heighLight:[],mainProduct:[],mainCaseImage:"",mainCase:[]}),A=R({category:[{required:!0,message:"请选择类别",trigger:"blur"}],title:[{required:!0,message:"请输入标题",trigger:"blur"}],bannerImage:[{required:!0,message:"请选择Banner",trigger:"blur"}],content:[{required:!0,message:"请输入内容",trigger:"blur"}],contentImage:[{required:!0,message:"请输入内容图片",trigger:"blur"}],demandAnalysis:[{required:!0,message:"请输入需求分析",trigger:"blur"}],heighLight:[{required:!0,message:"请输入方案亮点",trigger:"blur"}],mainProduct:[{required:!1,message:"请输入主要产品",trigger:"blur"}],mainCaseImage:[{required:!0,message:"请输入案例图片",trigger:"blur"}],mainCase:[{required:!1,message:"请输入案例",trigger:"blur"}]}),m=g([]),f=g([]),L=g([]);ue(()=>{F().getProductTitle().then(o=>{m.value=o}),F().getCasesTitle().then(o=>{L.value=o}),de().getSolutionCategoryList().then(o=>{f.value=o})});const r=()=>{v.value.validate().then(o=>{o&&F().addSolution(d).then(e=>{D("addSolution",{_id:e._id,title:e.title,category:e.category,bannerImage:e.bannerImage,content:e.content,contentImage:e.contentImage,demandAnalysis:e.demandAnalysis,heighLight:e.heighLight,mainProduct:e.mainProduct,mainCaseImage:e.mainCaseImage,mainCase:e.mainCase}),D("closeBox"),v.value&&v.value.resetFields()})}).catch(o=>{console.log(o)})},s=R({title:"",content:""}),p=R({title:"",content:""}),S=g(!1),x=g(!1),B=g(),P=g(),b=()=>{p.title="",p.content="",S.value=!0,N(()=>{B.value.input.focus()})},U=()=>{x.value=!0,N(()=>{P.value.input.focus()})},ee=()=>{s.title&&(p.title+=s.title,S.value=!1,s.title="",U())},I=()=>{s.content&&(p.content+=s.content,d.demandAnalysis.push({title:p.title,content:p.content}),s.content="",x.value=!1)},h=R({title:"",content:""}),z=R({title:"",content:""}),O=g(!1),Q=g(!1),te=g(),ae=g(),ie=()=>{z.title="",z.content="",O.value=!0,N(()=>{te.value.input.focus()})},oe=()=>{Q.value=!0,N(()=>{ae.value.input.focus()})},le=()=>{h.title&&(z.title+=h.title,O.value=!1,h.title="",oe())},V=()=>{h.content&&(z.content+=h.content,d.heighLight.push({title:z.title,content:z.content}),h.content="",Q.value=!1)};return(o,e)=>{const C=y("el-input"),T=y("el-form-item"),M=y("el-option"),W=y("el-select"),X=y("el-tag"),ne=y("el-button"),se=y("el-form"),a=y("el-dialog");return u(),c(a,{"model-value":i.isShowDialog,onSubmit:e[13]||(e[13]=re(()=>{},["prevent"])),title:"添加解决方案类别",width:"500",onClose:e[14]||(e[14]=t=>D("closeBox"))},{default:l(()=>[n(se,{model:d,ref_key:"formRef",ref:v,"label-width":"auto",rules:A,style:{"max-width":"600px"}},{default:l(()=>[n(T,{label:"标题",prop:"title"},{default:l(()=>[n(C,{style:{width:"280px"},modelValue:d.title,"onUpdate:modelValue":e[0]||(e[0]=t=>d.title=t)},null,8,["modelValue"])]),_:1}),n(T,{label:"类别",prop:"category"},{default:l(()=>[n(W,{modelValue:d.category,"onUpdate:modelValue":e[1]||(e[1]=t=>d.category=t)},{default:l(()=>[(u(!0),q(K,null,_(f.value,t=>(u(),c(M,{key:t._id,label:t.title,value:t.title},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),n(T,{label:"Banner",prop:"bannerImage"},{default:l(()=>[n(Z,{image:d.bannerImage,onUploadImage:e[2]||(e[2]=t=>{d.bannerImage=t})},null,8,["image"])]),_:1}),n(T,{label:"内容",prop:"content"},{default:l(()=>[n(C,{type:"textarea",style:{width:"280px"},modelValue:d.content,"onUpdate:modelValue":e[3]||(e[3]=t=>d.content=t)},null,8,["modelValue"])]),_:1}),n(T,{label:"内容图片",prop:"contentImage"},{default:l(()=>[n(Z,{image:d.contentImage,onUploadImage:e[4]||(e[4]=t=>{d.contentImage=t})},null,8,["image"])]),_:1}),n(T,{label:"需求分析",prop:"demandAnalysis"},{default:l(()=>[$("div",be,[(u(!0),q(K,null,_(d.demandAnalysis,(t,j)=>(u(),c(X,{key:j,closable:"","disable-transitions":!1,style:{"margin-right":"5px"},onClose:me=>o.handleClose(t)},{default:l(()=>[k(E(t.title+":"+t.content),1)]),_:2},1032,["onClose"]))),128)),S.value?(u(),c(C,{key:0,ref_key:"demandAnalysisTitleRef",ref:B,modelValue:s.title,"onUpdate:modelValue":e[5]||(e[5]=t=>s.title=t),placeholder:"请输入键",class:"w-20",size:"small",onKeyup:H(ee,["enter"]),onBlur:ee},null,8,["modelValue"])):x.value?(u(),c(C,{key:1,ref_key:"demandAnalysisContentRef",ref:P,modelValue:s.content,"onUpdate:modelValue":e[6]||(e[6]=t=>s.content=t),placeholder:"请输入值",class:"w-20",size:"small",onKeyup:H(I,["enter"]),onBlur:I},null,8,["modelValue"])):(u(),c(ne,{key:2,class:"button-new-tag",size:"small",onClick:b},{default:l(()=>e[15]||(e[15]=[k(" + New Tag ")])),_:1}))])]),_:1}),n(T,{label:"方案亮点",prop:"heighLight"},{default:l(()=>[$("div",he,[(u(!0),q(K,null,_(d.heighLight,(t,j)=>(u(),c(X,{key:j,closable:"","disable-transitions":!1,style:{"margin-right":"5px"},onClose:me=>o.handleClose(t)},{default:l(()=>[k(E(t.title+":"+t.content),1)]),_:2},1032,["onClose"]))),128)),O.value?(u(),c(C,{key:0,ref_key:"heighLightTitleRef",ref:te,modelValue:h.title,"onUpdate:modelValue":e[7]||(e[7]=t=>h.title=t),placeholder:"请输入键",class:"w-20",size:"small",onKeyup:H(le,["enter"]),onBlur:le},null,8,["modelValue"])):Q.value?(u(),c(C,{key:1,ref_key:"heighLightContentRef",ref:ae,modelValue:h.content,"onUpdate:modelValue":e[8]||(e[8]=t=>h.content=t),placeholder:"请输入值",class:"w-20",size:"small",onKeyup:H(V,["enter"]),onBlur:V},null,8,["modelValue"])):(u(),c(ne,{key:2,class:"button-new-tag",size:"small",onClick:ie},{default:l(()=>e[16]||(e[16]=[k(" + New Tag ")])),_:1}))])]),_:1}),n(T,{label:"主要产品",prop:"mainProduct"},{default:l(()=>[n(W,{modelValue:d.mainProduct,"onUpdate:modelValue":e[9]||(e[9]=t=>d.mainProduct=t),"value-key":"_id",placeholder:"Select",style:{width:"240px"},clearable:"",multiple:""},{label:l(({label:t,value:j})=>[$("span",null,E(t),1)]),default:l(()=>[(u(!0),q(K,null,_(m.value,t=>(u(),c(M,{key:t._id,label:t.title,value:t},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),n(T,{label:"案例图片",prop:"mainCaseImage"},{default:l(()=>[n(Z,{image:d.mainCaseImage,onUploadImage:e[10]||(e[10]=t=>{d.mainCaseImage=t})},null,8,["image"])]),_:1}),n(T,{label:"案例",prop:"mainCase"},{default:l(()=>[n(W,{modelValue:d.mainCase,"onUpdate:modelValue":e[11]||(e[11]=t=>d.mainCase=t),"value-key":"_id",placeholder:"Select",style:{width:"240px"},clearable:"",multiple:""},{label:l(({label:t,value:j})=>[$("span",null,E(t),1)]),default:l(()=>[(u(!0),q(K,null,_(L.value,t=>(u(),c(M,{key:t._id,label:t.title,value:t},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),n(ne,{type:"primary",onClick:e[12]||(e[12]=t=>r())},{default:l(()=>e[17]||(e[17]=[k(" 确认添加 ")])),_:1})]),_:1},8,["model","rules"])]),_:1},8,["model-value"])}}},we={class:"flex gap-2"},Ve={class:"flex gap-2"},ke={__name:"SolutionEdit",props:["isShowDialog","formData"],emits:["editSolution","closeBox"],setup(i,{emit:w}){const D=w,v=g(),d=R({title:[{required:!0,message:"请输入标题",trigger:"blur"}],bannerImage:[{required:!0,message:"请选择Banner",trigger:"blur"}],content:[{required:!0,message:"请输入内容",trigger:"blur"}],contentImage:[{required:!0,message:"请输入内容图片",trigger:"blur"}],demandAnalysis:[{required:!0,message:"请输入需求分析",trigger:"blur"}],heighLight:[{required:!0,message:"请输入方案亮点",trigger:"blur"}],mainProduct:[{required:!1,message:"请选择主要产品",trigger:"blur"}],mainCaseImage:[{required:!0,message:"请输入案例图片",trigger:"blur"}],mainCase:[{required:!1,message:"请选择案例",trigger:"blur"}]}),A=g([]),m=g([]),f=g([]);ue(()=>{F().getProductTitle().then(V=>{A.value=V}),F().getCasesTitle().then(V=>{m.value=V}),de().getSolutionCategoryList().then(V=>{f.value=V})});const L=()=>{v.value.validate().then(V=>{V&&F().putSolution(i.formData).then(o=>{D("editSolution",{_id:i.formData._id,title:i.formData.title,category:i.formData.category,bannerImage:i.formData.bannerImage,content:i.formData.content,contentImage:i.formData.contentImage,demandAnalysis:i.formData.demandAnalysis,heighLight:i.formData.heighLight,mainProduct:i.formData.mainProduct,mainCaseImage:i.formData.mainCaseImage,mainCase:i.formData.mainCase}),D("closeBox"),v.value&&v.value.resetFields()})}).catch(V=>{console.log(V)})},r=R({title:"",content:""}),s=R({title:"",content:""}),p=g(!1),S=g(!1),x=g(),B=g(),P=()=>{s.title="",s.content="",p.value=!0,N(()=>{x.value.input.focus()})},b=()=>{S.value=!0,N(()=>{B.value.input.focus()})},U=()=>{r.title&&(s.title+=r.title,p.value=!1,r.title="",b())},ee=()=>{r.content&&(s.content+=r.content,i.formData.demandAnalysis.push({title:s.title,content:s.content}),r.content="",S.value=!1)},I=R({title:"",content:""}),h=R({title:"",content:""}),z=g(!1),O=g(!1),Q=g(),te=g(),ae=()=>{h.title="",h.content="",z.value=!0,N(()=>{Q.value.input.focus()})},ie=()=>{O.value=!0,N(()=>{te.value.input.focus()})},oe=()=>{I.title&&(h.title+=I.title,z.value=!1,I.title="",ie())},le=()=>{I.content&&(h.content+=I.content,i.formData.heighLight.push({title:h.title,content:h.content}),I.content="",O.value=!1)};return(V,o)=>{const e=y("el-input"),C=y("el-form-item"),T=y("el-option"),M=y("el-select"),W=y("el-tag"),X=y("el-button"),ne=y("el-form"),se=y("el-dialog");return u(),c(se,{"model-value":i.isShowDialog,onSubmit:o[13]||(o[13]=re(()=>{},["prevent"])),title:"编辑解决方案类别",width:"500",onClose:o[14]||(o[14]=a=>D("closeBox"))},{default:l(()=>[n(ne,{model:i.formData,ref_key:"formRef",ref:v,"label-width":"auto",rules:d,style:{"max-width":"600px"}},{default:l(()=>[n(C,{label:"标题",prop:"title"},{default:l(()=>[n(e,{style:{width:"280px"},modelValue:i.formData.title,"onUpdate:modelValue":o[0]||(o[0]=a=>i.formData.title=a)},null,8,["modelValue"])]),_:1}),n(C,{label:"类别",prop:"category"},{default:l(()=>[n(M,{modelValue:i.formData.category,"onUpdate:modelValue":o[1]||(o[1]=a=>i.formData.category=a)},{default:l(()=>[(u(!0),q(K,null,_(f.value,a=>(u(),c(T,{key:a._id,label:a.title,value:a.title},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),n(C,{label:"Banner",prop:"bannerImage"},{default:l(()=>[n(Z,{image:i.formData.bannerImage,onUploadImage:o[2]||(o[2]=a=>{i.formData.bannerImage=a})},null,8,["image"])]),_:1}),n(C,{label:"内容",prop:"content"},{default:l(()=>[n(e,{type:"textarea",style:{width:"280px"},modelValue:i.formData.content,"onUpdate:modelValue":o[3]||(o[3]=a=>i.formData.content=a)},null,8,["modelValue"])]),_:1}),n(C,{label:"内容图片",prop:"contentImage"},{default:l(()=>[n(Z,{image:i.formData.contentImage,onUploadImage:o[4]||(o[4]=a=>{i.formData.contentImage=a})},null,8,["image"])]),_:1}),n(C,{label:"需求分析",prop:"demandAnalysis"},{default:l(()=>[$("div",we,[(u(!0),q(K,null,_(i.formData.demandAnalysis,(a,t)=>(u(),c(W,{key:t,closable:"","disable-transitions":!1,style:{"margin-right":"5px"},onClose:j=>V.handleClose(a)},{default:l(()=>[k(E(a.title+":"+a.content),1)]),_:2},1032,["onClose"]))),128)),p.value?(u(),c(e,{key:0,ref_key:"demandAnalysisTitleRef",ref:x,modelValue:r.title,"onUpdate:modelValue":o[5]||(o[5]=a=>r.title=a),placeholder:"请输入键",class:"w-20",size:"small",onKeyup:H(U,["enter"]),onBlur:U},null,8,["modelValue"])):S.value?(u(),c(e,{key:1,ref_key:"demandAnalysisContentRef",ref:B,modelValue:r.content,"onUpdate:modelValue":o[6]||(o[6]=a=>r.content=a),placeholder:"请输入值",class:"w-20",size:"small",onKeyup:H(ee,["enter"]),onBlur:ee},null,8,["modelValue"])):(u(),c(X,{key:2,class:"button-new-tag",size:"small",onClick:P},{default:l(()=>o[15]||(o[15]=[k(" + New Tag ")])),_:1}))])]),_:1}),n(C,{label:"方案亮点",prop:"heighLight"},{default:l(()=>[$("div",Ve,[(u(!0),q(K,null,_(i.formData.heighLight,(a,t)=>(u(),c(W,{key:t,closable:"","disable-transitions":!1,style:{"margin-right":"5px"},onClose:j=>V.handleClose(a)},{default:l(()=>[k(E(a.title+":"+a.content),1)]),_:2},1032,["onClose"]))),128)),z.value?(u(),c(e,{key:0,ref_key:"heighLightTitleRef",ref:Q,modelValue:I.title,"onUpdate:modelValue":o[7]||(o[7]=a=>I.title=a),placeholder:"请输入键",class:"w-20",size:"small",onKeyup:H(oe,["enter"]),onBlur:oe},null,8,["modelValue"])):O.value?(u(),c(e,{key:1,ref_key:"heighLightContentRef",ref:te,modelValue:I.content,"onUpdate:modelValue":o[8]||(o[8]=a=>I.content=a),placeholder:"请输入值",class:"w-20",size:"small",onKeyup:H(le,["enter"]),onBlur:le},null,8,["modelValue"])):(u(),c(X,{key:2,class:"button-new-tag",size:"small",onClick:ae},{default:l(()=>o[16]||(o[16]=[k(" + New Tag ")])),_:1}))])]),_:1}),n(C,{label:"主要产品",prop:"mainProduct"},{default:l(()=>[n(M,{modelValue:i.formData.mainProduct,"onUpdate:modelValue":o[9]||(o[9]=a=>i.formData.mainProduct=a),"value-key":"_id",placeholder:"Select",style:{width:"240px"},clearable:"",multiple:""},{label:l(({label:a,value:t})=>[$("span",null,E(a),1)]),default:l(()=>[(u(!0),q(K,null,_(A.value,a=>(u(),c(T,{key:a._id,label:a.title,value:a},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),n(C,{label:"案例图片",prop:"mainCaseImage"},{default:l(()=>[n(Z,{image:i.formData.mainCaseImage,onUploadImage:o[10]||(o[10]=a=>{i.formData.mainCaseImage=a})},null,8,["image"])]),_:1}),n(C,{label:"案例",prop:"mainCase"},{default:l(()=>[n(M,{modelValue:i.formData.mainCase,"onUpdate:modelValue":o[11]||(o[11]=a=>i.formData.mainCase=a),"value-key":"_id",placeholder:"Select",style:{width:"240px"},clearable:"",multiple:""},{label:l(({label:a,value:t})=>[$("span",null,E(a),1)]),default:l(()=>[(u(!0),q(K,null,_(m.value,a=>(u(),c(T,{key:a._id,label:a.title,value:a},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),n(X,{type:"primary",onClick:o[12]||(o[12]=a=>L())},{default:l(()=>o[17]||(o[17]=[k(" 确认编辑 ")])),_:1})]),_:1},8,["model","rules"])]),_:1},8,["model-value"])}}},De={class:"card-header",style:{display:"flex","justify-content":"space-between"}},Le={style:{"text-align":"center",margin:"0"}},Ie={__name:"SolutionList",setup(i){const w=g([]),D=r=>{w.value.push(r)},v=g(!1),d=(r,s)=>{F().deleteSolution(s._id).then(p=>{w.value.splice(r,1)})},A=g(0),m=(r,s)=>{A.value=r,f.value=!0},f=g(!1),L=r=>{w.value.splice(A.value,1,r)};return ue(()=>{F().getSolutionList().then(r=>{w.value=r,console.log(r)})}),(r,s)=>{const p=y("el-button"),S=y("el-table-column"),x=y("el-popover"),B=y("el-table"),P=y("el-card");return u(),q("div",null,[n(P,null,{header:l(()=>[$("div",De,[s[4]||(s[4]=$("span",null,"解决方案",-1)),n(p,{onClick:s[0]||(s[0]=b=>v.value=!0)},{default:l(()=>s[3]||(s[3]=[k("添加解决方案")])),_:1})])]),default:l(()=>[n(B,{data:w.value,style:{width:"100%"}},{default:l(()=>[n(S,{prop:"title",label:"标题",width:"180"}),n(S,{fixed:"right",width:"180",label:"选项"},{default:l(b=>[n(p,{size:"small",onClick:U=>m(b.$index,b.row)},{default:l(()=>s[5]||(s[5]=[k(" 编辑 ")])),_:2},1032,["onClick"]),n(x,{trigger:"click",placement:"top",width:160},{reference:l(()=>[n(p,{size:"small",type:"danger"},{default:l(()=>s[8]||(s[8]=[k(" 删除 ")])),_:1})]),default:l(()=>[s[9]||(s[9]=$("p",{style:{"margin-bottom":"20px"}},"你确定要删除吗?",-1)),$("div",Le,[n(p,{size:"small"},{default:l(()=>s[6]||(s[6]=[k("取消")])),_:1}),n(p,{size:"small",type:"primary",onClick:U=>d(b.$index,b.row)},{default:l(()=>s[7]||(s[7]=[k(" 确定 ")])),_:2},1032,["onClick"])])]),_:2},1024)]),_:1})]),_:1},8,["data"])]),_:1}),n(Ce,{onAddSolution:D,onCloseBox:s[1]||(s[1]=b=>v.value=!1),isShowDialog:v.value},null,8,["isShowDialog"]),n(ke,{onEditSolution:L,onCloseBox:s[2]||(s[2]=b=>f.value=!1),isShowDialog:f.value,formData:w.value[A.value]},null,8,["isShowDialog","formData"])])}}};export{Ie as default};
