import{j as i}from"./jsx-runtime-DR9Q75dM.js";import{r as d}from"./index-DRjF_FHU.js";import{c as le}from"./index-BdQq_4o_.js";import{c as Re,a as De,d as V}from"./index-BSdpmjSK.js";import{u as T,P as B}from"./index-rW5U9cm3.js";import{c as je,u as Ee}from"./index-CzUF5-ib.js";import{a as Ve,u as _e}from"./index-B9TBPUnv.js";import{c as Ae}from"./clsx-B-dksMZM.js";import"./index-F1fJ65uJ.js";var ce=["PageUp","PageDown"],ue=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],de={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},_="Slider",[F,Ne,Te]=je(_),[me,st]=Re(_,[Te]),[Me,H]=me(_),fe=d.forwardRef((e,t)=>{const{name:r,min:n=0,max:a=100,step:l=1,orientation:s="horizontal",disabled:c=!1,minStepsBetweenThumbs:m=0,defaultValue:h=[n],value:y,onValueChange:o=()=>{},onValueCommit:f=()=>{},inverted:S=!1,form:P,...v}=e,g=d.useRef(new Set),u=d.useRef(0),b=s==="horizontal"?Ie:Ke,[p=[],C]=De({prop:y,defaultProp:h,onChange:w=>{var j;(j=[...g.current][u.current])==null||j.focus(),o(w)}}),z=d.useRef(p);function O(w){const R=Oe(p,w);A(w,R)}function Pe(w){A(w,u.current)}function Ce(){const w=z.current[u.current];p[u.current]!==w&&f(p)}function A(w,R,{commit:j}={commit:!1}){const X=$e(l),q=Ue(Math.round((w-n)/l)*l+n,X),N=le(q,[n,a]);C((E=[])=>{const D=He(E,N,R);if(Fe(D,m*l)){u.current=D.indexOf(N);const G=String(D)!==String(E);return G&&j&&f(D),G?D:E}else return E})}return i.jsx(Me,{scope:e.__scopeSlider,name:r,disabled:c,min:n,max:a,valueIndexToChangeRef:u,thumbs:g.current,values:p,orientation:s,form:P,children:i.jsx(F.Provider,{scope:e.__scopeSlider,children:i.jsx(F.Slot,{scope:e.__scopeSlider,children:i.jsx(b,{"aria-disabled":c,"data-disabled":c?"":void 0,...v,ref:t,onPointerDown:V(v.onPointerDown,()=>{c||(z.current=p)}),min:n,max:a,inverted:S,onSlideStart:c?void 0:O,onSlideMove:c?void 0:Pe,onSlideEnd:c?void 0:Ce,onHomeKeyDown:()=>!c&&A(n,0,{commit:!0}),onEndKeyDown:()=>!c&&A(a,p.length-1,{commit:!0}),onStepKeyDown:({event:w,direction:R})=>{if(!c){const q=ce.includes(w.key)||w.shiftKey&&ue.includes(w.key)?10:1,N=u.current,E=p[N],D=l*q*R;A(E+D,N,{commit:!0})}}})})})})});fe.displayName=_;var[pe,he]=me(_,{startEdge:"left",endEdge:"right",size:"width",direction:1}),Ie=d.forwardRef((e,t)=>{const{min:r,max:n,dir:a,inverted:l,onSlideStart:s,onSlideMove:c,onSlideEnd:m,onStepKeyDown:h,...y}=e,[o,f]=d.useState(null),S=T(t,b=>f(b)),P=d.useRef(void 0),v=Ee(a),g=v==="ltr",u=g&&!l||!g&&l;function x(b){const p=P.current||o.getBoundingClientRect(),C=[0,p.width],O=Y(C,u?[r,n]:[n,r]);return P.current=p,O(b-p.left)}return i.jsx(pe,{scope:e.__scopeSlider,startEdge:u?"left":"right",endEdge:u?"right":"left",direction:u?1:-1,size:"width",children:i.jsx(ge,{dir:v,"data-orientation":"horizontal",...y,ref:S,style:{...y.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:b=>{const p=x(b.clientX);s==null||s(p)},onSlideMove:b=>{const p=x(b.clientX);c==null||c(p)},onSlideEnd:()=>{P.current=void 0,m==null||m()},onStepKeyDown:b=>{const C=de[u?"from-left":"from-right"].includes(b.key);h==null||h({event:b,direction:C?-1:1})}})})}),Ke=d.forwardRef((e,t)=>{const{min:r,max:n,inverted:a,onSlideStart:l,onSlideMove:s,onSlideEnd:c,onStepKeyDown:m,...h}=e,y=d.useRef(null),o=T(t,y),f=d.useRef(void 0),S=!a;function P(v){const g=f.current||y.current.getBoundingClientRect(),u=[0,g.height],b=Y(u,S?[n,r]:[r,n]);return f.current=g,b(v-g.top)}return i.jsx(pe,{scope:e.__scopeSlider,startEdge:S?"bottom":"top",endEdge:S?"top":"bottom",size:"height",direction:S?1:-1,children:i.jsx(ge,{"data-orientation":"vertical",...h,ref:o,style:{...h.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:v=>{const g=P(v.clientY);l==null||l(g)},onSlideMove:v=>{const g=P(v.clientY);s==null||s(g)},onSlideEnd:()=>{f.current=void 0,c==null||c()},onStepKeyDown:v=>{const u=de[S?"from-bottom":"from-top"].includes(v.key);m==null||m({event:v,direction:u?-1:1})}})})}),ge=d.forwardRef((e,t)=>{const{__scopeSlider:r,onSlideStart:n,onSlideMove:a,onSlideEnd:l,onHomeKeyDown:s,onEndKeyDown:c,onStepKeyDown:m,...h}=e,y=H(_,r);return i.jsx(B.span,{...h,ref:t,onKeyDown:V(e.onKeyDown,o=>{o.key==="Home"?(s(o),o.preventDefault()):o.key==="End"?(c(o),o.preventDefault()):ce.concat(ue).includes(o.key)&&(m(o),o.preventDefault())}),onPointerDown:V(e.onPointerDown,o=>{const f=o.target;f.setPointerCapture(o.pointerId),o.preventDefault(),y.thumbs.has(f)?f.focus():n(o)}),onPointerMove:V(e.onPointerMove,o=>{o.target.hasPointerCapture(o.pointerId)&&a(o)}),onPointerUp:V(e.onPointerUp,o=>{const f=o.target;f.hasPointerCapture(o.pointerId)&&(f.releasePointerCapture(o.pointerId),l(o))})})}),ve="SliderTrack",Se=d.forwardRef((e,t)=>{const{__scopeSlider:r,...n}=e,a=H(ve,r);return i.jsx(B.span,{"data-disabled":a.disabled?"":void 0,"data-orientation":a.orientation,...n,ref:t})});Se.displayName=ve;var $="SliderRange",xe=d.forwardRef((e,t)=>{const{__scopeSlider:r,...n}=e,a=H($,r),l=he($,r),s=d.useRef(null),c=T(t,s),m=a.values.length,h=a.values.map(f=>ye(f,a.min,a.max)),y=m>1?Math.min(...h):0,o=100-Math.max(...h);return i.jsx(B.span,{"data-orientation":a.orientation,"data-disabled":a.disabled?"":void 0,...n,ref:c,style:{...e.style,[l.startEdge]:y+"%",[l.endEdge]:o+"%"}})});xe.displayName=$;var U="SliderThumb",be=d.forwardRef((e,t)=>{const r=Ne(e.__scopeSlider),[n,a]=d.useState(null),l=T(t,c=>a(c)),s=d.useMemo(()=>n?r().findIndex(c=>c.ref.current===n):-1,[r,n]);return i.jsx(ke,{...e,ref:l,index:s})}),ke=d.forwardRef((e,t)=>{const{__scopeSlider:r,index:n,name:a,...l}=e,s=H(U,r),c=he(U,r),[m,h]=d.useState(null),y=T(t,x=>h(x)),o=m?s.form||!!m.closest("form"):!0,f=Ve(m),S=s.values[n],P=S===void 0?0:ye(S,s.min,s.max),v=ze(n,s.values.length),g=f==null?void 0:f[c.size],u=g?qe(g,P,c.direction):0;return d.useEffect(()=>{if(m)return s.thumbs.add(m),()=>{s.thumbs.delete(m)}},[m,s.thumbs]),i.jsxs("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[c.startEdge]:`calc(${P}% + ${u}px)`},children:[i.jsx(F.ItemSlot,{scope:e.__scopeSlider,children:i.jsx(B.span,{role:"slider","aria-label":e["aria-label"]||v,"aria-valuemin":s.min,"aria-valuenow":S,"aria-valuemax":s.max,"aria-orientation":s.orientation,"data-orientation":s.orientation,"data-disabled":s.disabled?"":void 0,tabIndex:s.disabled?void 0:0,...l,ref:y,style:S===void 0?{display:"none"}:e.style,onFocus:V(e.onFocus,()=>{s.valueIndexToChangeRef.current=n})})}),o&&i.jsx(Be,{name:a??(s.name?s.name+(s.values.length>1?"[]":""):void 0),form:s.form,value:S},n)]})});be.displayName=U;var Be=e=>{const{value:t,...r}=e,n=d.useRef(null),a=_e(t);return d.useEffect(()=>{const l=n.current,s=window.HTMLInputElement.prototype,m=Object.getOwnPropertyDescriptor(s,"value").set;if(a!==t&&m){const h=new Event("input",{bubbles:!0});m.call(l,t),l.dispatchEvent(h)}},[a,t]),i.jsx("input",{style:{display:"none"},...r,ref:n,defaultValue:t})};function He(e=[],t,r){const n=[...e];return n[r]=t,n.sort((a,l)=>a-l)}function ye(e,t,r){const l=100/(r-t)*(e-t);return le(l,[0,100])}function ze(e,t){return t>2?`Value ${e+1} of ${t}`:t===2?["Minimum","Maximum"][e]:void 0}function Oe(e,t){if(e.length===1)return 0;const r=e.map(a=>Math.abs(a-t)),n=Math.min(...r);return r.indexOf(n)}function qe(e,t,r){const n=e/2,l=Y([0,50],[0,n]);return(n-l(t)*r)*r}function Le(e){return e.slice(0,-1).map((t,r)=>e[r+1]-t)}function Fe(e,t){if(t>0){const r=Le(e);return Math.min(...r)>=t}return!0}function Y(e,t){return r=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const n=(t[1]-t[0])/(e[1]-e[0]);return t[0]+n*(r-e[0])}}function $e(e){return(String(e).split(".")[1]||"").length}function Ue(e,t){const r=Math.pow(10,t);return Math.round(e*r)/r}var Ye=fe,Xe=Se,Ge=xe,L=be;const we=d.forwardRef(({variant:e,min:t,max:r,step:n,disabled:a,onValueChange:l,value:s,className:c,style:m,...h},y)=>{const[o,f]=d.useState(e==="range"?[t,r]:s);d.useEffect(()=>{f(e==="range"?[t,r]:s??t)},[e,t,r,s]);const S=u=>{const x=e==="range"?u:u[0];x!==void 0&&(f(Array.isArray(x)?x:[x]),l&&l(x))},P=d.useMemo(()=>{const u={min:t,max:r,...h};switch(e){case"continuous":return{...u,value:[o]};case"discrete":if(n===void 0)throw new Error("Step is required for discrete slider");return{...u,step:n,value:[o]};case"range":return{...u,value:o}}},[e,t,r,n,o]),v=d.useMemo(()=>{const u="slider-thumb-handle",x="slider-thumb-value";return e==="range"?i.jsxs(i.Fragment,{children:[i.jsx(L,{className:"slider-thumb",children:i.jsxs("div",{className:u,children:[i.jsx("div",{className:"slider-thumb-handle-inner",children:i.jsx("div",{className:"slider-thumb-handle-inner-dot"})}),!a&&i.jsx("div",{className:x,children:Array.isArray(o)?o[0]:o})]})}),i.jsx(L,{className:"slider-thumb",children:i.jsxs("div",{className:u,children:[i.jsx("div",{className:"slider-thumb-handle-inner",children:i.jsx("div",{className:"slider-thumb-handle-inner-dot"})}),!a&&i.jsx("div",{className:x,children:Array.isArray(o)?o[1]:o})]})})]}):i.jsx(L,{className:"slider-thumb",children:i.jsxs("div",{className:u,children:[i.jsx("div",{className:"slider-thumb-handle-inner",children:i.jsx("div",{className:"slider-thumb-handle-inner-dot"})}),!a&&i.jsx("div",{className:x,children:o})]})})},[e,o,a]),g=()=>{if(e==="discrete"&&n){const u=Math.floor((r-t)/n)-1;return Array.from({length:u},(x,b)=>{const p=t+n*(b+1),C=(p-t)/(r-t)*100;return i.jsx("div",{className:"slider-dots-dot",style:{left:`${C}%`}},p)})}return null};return d.createElement(Ye,{ref:y,className:Ae("slider-root",{"slider--disabled":a},c),...P,onValueChange:S,minStepsBetweenThumbs:1,disabled:a,key:e,value:Array.isArray(o)?o:[o],style:m},i.jsxs(Xe,{className:"slider-track",children:[i.jsx(Ge,{className:"slider-range"}),e==="discrete"&&g()]}),v)});we.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{variant:{required:!0,tsType:{name:"union",raw:'"continuous" | "discrete" | "range"',elements:[{name:"literal",value:'"continuous"'},{name:"literal",value:'"discrete"'},{name:"literal",value:'"range"'}]},description:""},min:{required:!0,tsType:{name:"number"},description:""},max:{required:!0,tsType:{name:"number"},description:""},step:{required:!1,tsType:{name:"number"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onValueChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number | number[]) => void",signature:{arguments:[{type:{name:"union",raw:"number | number[]",elements:[{name:"number"},{name:"Array",elements:[{name:"number"}],raw:"number[]"}]},name:"value"}],return:{name:"void"}}},description:""},value:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const at={title:"Components/Slider",component:we,parameters:{layout:"centered"},tags:["autodocs"]},M={args:{variant:"continuous",min:0,max:100,step:1,value:[50],onValueChange:e=>console.log(e)}},I={args:{variant:"discrete",min:0,max:100,step:10,value:[50],onValueChange:e=>console.log(e)}},K={args:{variant:"range",min:0,max:100,step:1,value:[25,75],defaultValue:[25,75],onValueChange:e=>console.log(e)}},k={args:{variant:"continuous",min:0,max:100,step:1,disabled:!0,value:[50],onValueChange:e=>console.log(e)}};var W,J,Q;M.parameters={...M.parameters,docs:{...(W=M.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: "continuous",
    min: 0,
    max: 100,
    step: 1,
    value: [50],
    onValueChange: value => console.log(value)
  }
}`,...(Q=(J=M.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,ee,te;I.parameters={...I.parameters,docs:{...(Z=I.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    variant: "discrete",
    min: 0,
    max: 100,
    step: 10,
    value: [50],
    onValueChange: value => console.log(value)
  }
}`,...(te=(ee=I.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,re,oe;K.parameters={...K.parameters,docs:{...(ne=K.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    variant: "range",
    min: 0,
    max: 100,
    step: 1,
    value: [25, 75],
    defaultValue: [25, 75],
    onValueChange: value => console.log(value)
  }
}`,...(oe=(re=K.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,ae,ie;k.parameters={...k.parameters,docs:{...(se=k.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    variant: "continuous",
    min: 0,
    max: 100,
    step: 1,
    disabled: true,
    value: [50],
    onValueChange: value => console.log(value)
  }
}`,...(ie=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};const it=["Continuous","Discrete","Range","Disabled"];export{M as Continuous,k as Disabled,I as Discrete,K as Range,it as __namedExportsOrder,at as default};
