import{_ as G,a as J,b as U,g as W}from"./images.343195b5.js";import{i as x,E as N,K as D,u as e,o as s,b as i,f as g,v as y,F as X,m as Y,z as w,j as Z,k as _,L as ee,x as te,l as ne,y as I,B as oe,M as ae,r as v,e as l,w as k,c as se,h as ce,N as re,O as le}from"./entry.d98ab85a.js";const ie={key:0,class:"mb-3"},de=["aria-label"],ue={selected:"",disabled:""},pe=["disabled","value"],_e=x({__name:"ProductVariants",props:{label:null,variants:null},setup(b){const u=b,{label:c,variants:a}=N(u),n=D(),d=t=>{n.setSelectedVariantId(t.target.value)};return(t,p)=>e(a)&&e(a).length?(s(),i("div",ie,[g("select",{class:"form-select appearance-none block w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none","aria-label":e(c),onChange:p[0]||(p[0]=r=>d(r))},[g("option",ue,y(e(c)),1),(s(!0),i(X,null,Y(e(a),r=>(s(),i("option",{key:r.node.id,disabled:!r.node.availableForSale,value:r.node.id},y(r.node.title),9,pe))),128))],40,de)])):w("",!0)}}),me=["disabled","onKeyup"],be=x({__name:"ProductAddToCart",setup(b){const u=D(),c=Z(),a="Add to Cart",n="Select Variant",d=_(()=>u.selectedVariantId),t=_(()=>d?a:n),p=()=>{!d.value||(c.cartLinesAdd(d.value),u.setSelectedVariantId(""))};return(r,V)=>(s(),i("button",{disabled:!e(d),class:"w-full p-4 text-center text-white bg-black disabled:opacity-75",onClick:p,onKeyup:ee(p,["enter"])},[g("span",null,y(e(t)),1)],40,me))}}),ge=["innerHTML"],he=x({__name:"ProductDescription",props:{description:null},setup(b){const u=b,{description:c}=N(u);return(a,n)=>(s(),i("div",null,[g("template",{innerHTML:e(c)},null,8,ge)]))}}),fe={class:"container mx-auto"},ve={key:0,class:"grid grid-cols-1 mx-auto my-4 md:grid-cols-[auto_minmax(300px,_1fr)] md:gap-8 md:my-8"},ye={class:"p-4 mt-4 border-2 border-black md:mt-0"},xe={key:1},ke={key:2},Pe=x({__name:"[product]",setup(b){const c=te().params.product;let a=ne(null);const{result:n,error:d}=I(re,{handle:c}),t=_(()=>{var o;return(o=n==null?void 0:n.value)==null?void 0:o.productByHandle}),p=_(()=>{var o;return(o=n==null?void 0:n.value)==null?void 0:o.productByHandle.variants.edges});a.value=p;const r=_(()=>{var o,m,h,f;return(f=(h=(m=(o=t.value.images)==null?void 0:o.edges[0])==null?void 0:m.node)==null?void 0:h.url)!=null?f:""}),V=`(max-width: ${oe.md}px) 95vw, 40vw`,K=_(()=>W(r.value||""));return ae(()=>{I(le,{handle:c},{fetchPolicy:"network-only"});const o=_(()=>{var m;return(m=n==null?void 0:n.value)==null?void 0:m.productByHandle.variants.edges});a.value=o}),(o,m)=>{var P,$,C,H,S,B,T,A;const h=v("Title"),f=v("Meta"),R=v("Head"),E=v("Html"),F=G,z=J,j=U,O=_e,Q=be,q=he;return s(),i("section",fe,[e(t)?(s(),i("div",ve,[l(E,null,{default:k(()=>{var L,M;return[((L=e(t))==null?void 0:L.title)&&((M=e(t))==null?void 0:M.description)?(s(),se(R,{key:0},{default:k(()=>[l(h,null,{default:k(()=>[ce(y(e(t).title),1)]),_:1}),l(f,{name:"description",content:e(t).description},null,8,["content"])]),_:1})):w("",!0)]}),_:1}),l(F,{alt:e(t).handle,sizes:V,srcset:e(K),width:(H=(C=($=(P=e(t).images)==null?void 0:P.edges[0])==null?void 0:$.node)==null?void 0:C.width)!=null?H:"",height:(A=(T=(B=(S=e(t).images)==null?void 0:S.edges[0])==null?void 0:B.node)==null?void 0:T.height)!=null?A:"",class:""},null,8,["alt","srcset","width","height"]),g("div",ye,[l(z,{tag:"h1",title:e(t).title,variant:"product",class:"text-xl"},null,8,["title"]),l(j,{"price-range":e(t).priceRange,"compare-at-price-range":e(t).compareAtPriceRange,class:"mb-4 md:mb-8"},null,8,["price-range","compare-at-price-range"]),l(O,{label:"Select option",variants:e(a)},null,8,["variants"]),l(Q),l(q,{description:e(t).descriptionHtml},null,8,["description"])])])):(s(),i("div",xe)),e(d)?(s(),i("div",ke," Error ")):w("",!0)])}}});export{Pe as default};