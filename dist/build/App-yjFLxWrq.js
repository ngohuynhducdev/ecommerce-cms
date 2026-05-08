import{r as c,j as t,db as M,h1 as ve,h2 as Pe,h3 as Le,h4 as dt,e$ as ut,h5 as ft,h6 as pt,h7 as gt,h8 as mt,h9 as ht,ha as Se,a as E,hb as J,hc as g,T as v,I as b,y as h,R as F,F as ee,u as Ne,hd as xt,he as U,bG as je,da as vt,hf as jt,hg as yt,hh as pe,H as L,aY as ke,N as bt,U as Z,g3 as oe,s as se,dQ as ae,dl as Ct,di as It,dj as wt,c as ye,eU as ge,eW as St,eY as Rt,eT as Mt,eV as Et,eX as _e,p as Dt,cq as $,A as te,bx as Tt,hi as Ft,hj as $t,hk as At,hl as Pt,L as le,gh as Lt,gi as Nt,dV as kt,hm as ce,ah as _t,hn as Ot,fH as Gt,ho as Ut,P as Re,O as Vt,Q as Bt}from"./strapi-D2-1b6ag.js";import{g as Ht}from"./users-DLc-PG84.js";function be(e,n=[]){let r=[];function s(a,l){const i=c.createContext(l),u=r.length;r=[...r,l];const p=f=>{const{scope:x,children:j,...C}=f,y=x?.[e]?.[u]||i,m=c.useMemo(()=>C,Object.values(C));return t.jsx(y.Provider,{value:m,children:j})};p.displayName=a+"Provider";function d(f,x){const j=x?.[e]?.[u]||i,C=c.useContext(j);if(C)return C;if(l!==void 0)return l;throw new Error(`\`${f}\` must be used within \`${a}\``)}return[p,d]}const o=()=>{const a=r.map(l=>c.createContext(l));return function(i){const u=i?.[e]||a;return c.useMemo(()=>({[`__scope${e}`]:{...i,[e]:u}}),[i,u])}};return o.scopeName=e,[s,Wt(o,...n)]}function Wt(...e){const n=e[0];if(e.length===1)return n;const r=()=>{const s=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(a){const l=s.reduce((i,{useScope:u,scopeName:p})=>{const f=u(a)[`__scope${p}`];return{...i,...f}},{});return c.useMemo(()=>({[`__scope${n.scopeName}`]:l}),[l])}};return r.scopeName=n.scopeName,r}function Me(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function Oe(...e){return n=>{let r=!1;const s=e.map(o=>{const a=Me(o,n);return!r&&typeof a=="function"&&(r=!0),a});if(r)return()=>{for(let o=0;o<s.length;o++){const a=s[o];typeof a=="function"?a():Me(e[o],null)}}}}function me(...e){return c.useCallback(Oe(...e),e)}function he(e){const n=zt(e),r=c.forwardRef((s,o)=>{const{children:a,...l}=s,i=c.Children.toArray(a),u=i.find(qt);if(u){const p=u.props.children,d=i.map(f=>f===u?c.Children.count(p)>1?c.Children.only(null):c.isValidElement(p)?p.props.children:null:f);return t.jsx(n,{...l,ref:o,children:c.isValidElement(p)?c.cloneElement(p,void 0,d):null})}return t.jsx(n,{...l,ref:o,children:a})});return r.displayName=`${e}.Slot`,r}function zt(e){const n=c.forwardRef((r,s)=>{const{children:o,...a}=r;if(c.isValidElement(o)){const l=Qt(o),i=Zt(a,o.props);return o.type!==c.Fragment&&(i.ref=s?Oe(s,l):l),c.cloneElement(o,i)}return c.Children.count(o)>1?c.Children.only(null):null});return n.displayName=`${e}.SlotClone`,n}var Kt=Symbol("radix.slottable");function qt(e){return c.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Kt}function Zt(e,n){const r={...n};for(const s in n){const o=e[s],a=n[s];/^on[A-Z]/.test(s)?o&&a?r[s]=(...i)=>{const u=a(...i);return o(...i),u}:o&&(r[s]=o):s==="style"?r[s]={...o,...a}:s==="className"&&(r[s]=[o,a].filter(Boolean).join(" "))}return{...e,...r}}function Qt(e){let n=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=n&&"isReactWarning"in n&&n.isReactWarning;return r?e.ref:(n=Object.getOwnPropertyDescriptor(e,"ref")?.get,r=n&&"isReactWarning"in n&&n.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var Yt=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],ne=Yt.reduce((e,n)=>{const r=he(`Primitive.${n}`),s=c.forwardRef((o,a)=>{const{asChild:l,...i}=o,u=l?r:n;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),t.jsx(u,{...i,ref:a})});return s.displayName=`Primitive.${n}`,{...e,[n]:s}},{});function B(e,n,{checkForDefaultPrevented:r=!0}={}){return function(o){if(e?.(o),r===!1||!o.defaultPrevented)return n?.(o)}}function Xt(e){const n=e+"CollectionProvider",[r,s]=be(n),[o,a]=r(n,{collectionRef:{current:null},itemMap:new Map}),l=y=>{const{scope:m,children:S}=y,T=M.useRef(null),I=M.useRef(new Map).current;return t.jsx(o,{scope:m,itemMap:I,collectionRef:T,children:S})};l.displayName=n;const i=e+"CollectionSlot",u=he(i),p=M.forwardRef((y,m)=>{const{scope:S,children:T}=y,I=a(i,S),R=me(m,I.collectionRef);return t.jsx(u,{ref:R,children:T})});p.displayName=i;const d=e+"CollectionItemSlot",f="data-radix-collection-item",x=he(d),j=M.forwardRef((y,m)=>{const{scope:S,children:T,...I}=y,R=M.useRef(null),N=me(m,R),w=a(d,S);return M.useEffect(()=>(w.itemMap.set(R,{ref:R,...I}),()=>void w.itemMap.delete(R))),t.jsx(x,{[f]:"",ref:N,children:T})});j.displayName=d;function C(y){const m=a(e+"CollectionConsumer",y);return M.useCallback(()=>{const T=m.collectionRef.current;if(!T)return[];const I=Array.from(T.querySelectorAll(`[${f}]`));return Array.from(m.itemMap.values()).sort((w,A)=>I.indexOf(w.ref.current)-I.indexOf(A.ref.current))},[m.collectionRef,m.itemMap])}return[{Provider:l,Slot:p,ItemSlot:j},C,s]}var Ge=globalThis?.document?c.useLayoutEffect:()=>{},Jt=ve[" useId ".trim().toString()]||(()=>{}),en=0;function tn(e){const[n,r]=c.useState(Jt());return Ge(()=>{r(s=>s??String(en++))},[e]),n?`radix-${n}`:""}function nn(e){const n=c.useRef(e);return c.useEffect(()=>{n.current=e}),c.useMemo(()=>(...r)=>n.current?.(...r),[])}var rn=ve[" useInsertionEffect ".trim().toString()]||Ge;function Ce({prop:e,defaultProp:n,onChange:r=()=>{},caller:s}){const[o,a,l]=on({defaultProp:n,onChange:r}),i=e!==void 0,u=i?e:o;{const d=c.useRef(e!==void 0);c.useEffect(()=>{const f=d.current;f!==i&&console.warn(`${s} is changing from ${f?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),d.current=i},[i,s])}const p=c.useCallback(d=>{if(i){const f=sn(d)?d(e):d;f!==e&&l.current?.(f)}else a(d)},[i,e,a,l]);return[u,p]}function on({defaultProp:e,onChange:n}){const[r,s]=c.useState(e),o=c.useRef(r),a=c.useRef(n);return rn(()=>{a.current=n},[n]),c.useEffect(()=>{o.current!==r&&(a.current?.(r),o.current=r)},[r,o]),[r,s,a]}function sn(e){return typeof e=="function"}var an=c.createContext(void 0);function Ue(e){const n=c.useContext(an);return e||n||"ltr"}var de="rovingFocusGroup.onEntryFocus",ln={bubbles:!1,cancelable:!0},z="RovingFocusGroup",[xe,Ve,cn]=Xt(z),[dn,Be]=be(z,[cn]),[un,fn]=dn(z),He=c.forwardRef((e,n)=>t.jsx(xe.Provider,{scope:e.__scopeRovingFocusGroup,children:t.jsx(xe.Slot,{scope:e.__scopeRovingFocusGroup,children:t.jsx(pn,{...e,ref:n})})}));He.displayName=z;var pn=c.forwardRef((e,n)=>{const{__scopeRovingFocusGroup:r,orientation:s,loop:o=!1,dir:a,currentTabStopId:l,defaultCurrentTabStopId:i,onCurrentTabStopIdChange:u,onEntryFocus:p,preventScrollOnEntryFocus:d=!1,...f}=e,x=c.useRef(null),j=me(n,x),C=Ue(a),[y,m]=Ce({prop:l,defaultProp:i??null,onChange:u,caller:z}),[S,T]=c.useState(!1),I=nn(p),R=Ve(r),N=c.useRef(!1),[w,A]=c.useState(0);return c.useEffect(()=>{const D=x.current;if(D)return D.addEventListener(de,I),()=>D.removeEventListener(de,I)},[I]),t.jsx(un,{scope:r,orientation:s,dir:C,loop:o,currentTabStopId:y,onItemFocus:c.useCallback(D=>m(D),[m]),onItemShiftTab:c.useCallback(()=>T(!0),[]),onFocusableItemAdd:c.useCallback(()=>A(D=>D+1),[]),onFocusableItemRemove:c.useCallback(()=>A(D=>D-1),[]),children:t.jsx(ne.div,{tabIndex:S||w===0?-1:0,"data-orientation":s,...f,ref:j,style:{outline:"none",...e.style},onMouseDown:B(e.onMouseDown,()=>{N.current=!0}),onFocus:B(e.onFocus,D=>{const q=!N.current;if(D.target===D.currentTarget&&q&&!S){const V=new CustomEvent(de,ln);if(D.currentTarget.dispatchEvent(V),!V.defaultPrevented){const ie=R().filter(O=>O.focusable),it=ie.find(O=>O.active),lt=ie.find(O=>O.id===y),ct=[it,lt,...ie].filter(Boolean).map(O=>O.ref.current);Ke(ct,d)}}N.current=!1}),onBlur:B(e.onBlur,()=>T(!1))})})}),We="RovingFocusGroupItem",ze=c.forwardRef((e,n)=>{const{__scopeRovingFocusGroup:r,focusable:s=!0,active:o=!1,tabStopId:a,children:l,...i}=e,u=tn(),p=a||u,d=fn(We,r),f=d.currentTabStopId===p,x=Ve(r),{onFocusableItemAdd:j,onFocusableItemRemove:C,currentTabStopId:y}=d;return c.useEffect(()=>{if(s)return j(),()=>C()},[s,j,C]),t.jsx(xe.ItemSlot,{scope:r,id:p,focusable:s,active:o,children:t.jsx(ne.span,{tabIndex:f?0:-1,"data-orientation":d.orientation,...i,ref:n,onMouseDown:B(e.onMouseDown,m=>{s?d.onItemFocus(p):m.preventDefault()}),onFocus:B(e.onFocus,()=>d.onItemFocus(p)),onKeyDown:B(e.onKeyDown,m=>{if(m.key==="Tab"&&m.shiftKey){d.onItemShiftTab();return}if(m.target!==m.currentTarget)return;const S=hn(m,d.orientation,d.dir);if(S!==void 0){if(m.metaKey||m.ctrlKey||m.altKey||m.shiftKey)return;m.preventDefault();let I=x().filter(R=>R.focusable).map(R=>R.ref.current);if(S==="last")I.reverse();else if(S==="prev"||S==="next"){S==="prev"&&I.reverse();const R=I.indexOf(m.currentTarget);I=d.loop?xn(I,R+1):I.slice(R+1)}setTimeout(()=>Ke(I))}}),children:typeof l=="function"?l({isCurrentTabStop:f,hasTabStop:y!=null}):l})})});ze.displayName=We;var gn={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function mn(e,n){return n!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function hn(e,n,r){const s=mn(e.key,r);if(!(n==="vertical"&&["ArrowLeft","ArrowRight"].includes(s))&&!(n==="horizontal"&&["ArrowUp","ArrowDown"].includes(s)))return gn[s]}function Ke(e,n=!1){const r=document.activeElement;for(const s of e)if(s===r||(s.focus({preventScroll:n}),document.activeElement!==r))return}function xn(e,n){return e.map((r,s)=>e[(n+s)%e.length])}var vn=He,jn=ze;function yn(e,n,{checkForDefaultPrevented:r=!0}={}){return function(o){if(e?.(o),r===!1||!o.defaultPrevented)return n?.(o)}}var bn=globalThis?.document?c.useLayoutEffect:()=>{},Cn=ve[" useInsertionEffect ".trim().toString()]||bn;function In({prop:e,defaultProp:n,onChange:r=()=>{},caller:s}){const[o,a,l]=wn({defaultProp:n,onChange:r}),i=e!==void 0,u=i?e:o;{const d=c.useRef(e!==void 0);c.useEffect(()=>{const f=d.current;f!==i&&console.warn(`${s} is changing from ${f?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),d.current=i},[i,s])}const p=c.useCallback(d=>{if(i){const f=Sn(d)?d(e):d;f!==e&&l.current?.(f)}else a(d)},[i,e,a,l]);return[u,p]}function wn({defaultProp:e,onChange:n}){const[r,s]=c.useState(e),o=c.useRef(r),a=c.useRef(n);return Cn(()=>{a.current=n},[n]),c.useEffect(()=>{o.current!==r&&(a.current?.(r),o.current=r)},[r,o]),[r,s,a]}function Sn(e){return typeof e=="function"}function Ee(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function Rn(...e){return n=>{let r=!1;const s=e.map(o=>{const a=Ee(o,n);return!r&&typeof a=="function"&&(r=!0),a});if(r)return()=>{for(let o=0;o<s.length;o++){const a=s[o];typeof a=="function"?a():Ee(e[o],null)}}}}function Mn(e){const n=En(e),r=c.forwardRef((s,o)=>{const{children:a,...l}=s,i=c.Children.toArray(a),u=i.find(Tn);if(u){const p=u.props.children,d=i.map(f=>f===u?c.Children.count(p)>1?c.Children.only(null):c.isValidElement(p)?p.props.children:null:f);return t.jsx(n,{...l,ref:o,children:c.isValidElement(p)?c.cloneElement(p,void 0,d):null})}return t.jsx(n,{...l,ref:o,children:a})});return r.displayName=`${e}.Slot`,r}function En(e){const n=c.forwardRef((r,s)=>{const{children:o,...a}=r;if(c.isValidElement(o)){const l=$n(o),i=Fn(a,o.props);return o.type!==c.Fragment&&(i.ref=s?Rn(s,l):l),c.cloneElement(o,i)}return c.Children.count(o)>1?c.Children.only(null):null});return n.displayName=`${e}.SlotClone`,n}var Dn=Symbol("radix.slottable");function Tn(e){return c.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Dn}function Fn(e,n){const r={...n};for(const s in n){const o=e[s],a=n[s];/^on[A-Z]/.test(s)?o&&a?r[s]=(...i)=>{const u=a(...i);return o(...i),u}:o&&(r[s]=o):s==="style"?r[s]={...o,...a}:s==="className"&&(r[s]=[o,a].filter(Boolean).join(" "))}return{...e,...r}}function $n(e){let n=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=n&&"isReactWarning"in n&&n.isReactWarning;return r?e.ref:(n=Object.getOwnPropertyDescriptor(e,"ref")?.get,r=n&&"isReactWarning"in n&&n.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var An=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Pn=An.reduce((e,n)=>{const r=Mn(`Primitive.${n}`),s=c.forwardRef((o,a)=>{const{asChild:l,...i}=o,u=l?r:n;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),t.jsx(u,{...i,ref:a})});return s.displayName=`Primitive.${n}`,{...e,[n]:s}},{}),qe="Toggle",Ze=c.forwardRef((e,n)=>{const{pressed:r,defaultPressed:s,onPressedChange:o,...a}=e,[l,i]=In({prop:r,onChange:o,defaultProp:s??!1,caller:qe});return t.jsx(Pn.button,{type:"button","aria-pressed":l,"data-state":l?"on":"off","data-disabled":e.disabled?"":void 0,...a,ref:n,onClick:yn(e.onClick,()=>{e.disabled||i(!l)})})});Ze.displayName=qe;var _="ToggleGroup",[Qe]=be(_,[Be]),Ye=Be(),Ie=M.forwardRef((e,n)=>{const{type:r,...s}=e;if(r==="single"){const o=s;return t.jsx(Ln,{...o,ref:n})}if(r==="multiple"){const o=s;return t.jsx(Nn,{...o,ref:n})}throw new Error(`Missing prop \`type\` expected on \`${_}\``)});Ie.displayName=_;var[Xe,Je]=Qe(_),Ln=M.forwardRef((e,n)=>{const{value:r,defaultValue:s,onValueChange:o=()=>{},...a}=e,[l,i]=Ce({prop:r,defaultProp:s??"",onChange:o,caller:_});return t.jsx(Xe,{scope:e.__scopeToggleGroup,type:"single",value:M.useMemo(()=>l?[l]:[],[l]),onItemActivate:i,onItemDeactivate:M.useCallback(()=>i(""),[i]),children:t.jsx(et,{...a,ref:n})})}),Nn=M.forwardRef((e,n)=>{const{value:r,defaultValue:s,onValueChange:o=()=>{},...a}=e,[l,i]=Ce({prop:r,defaultProp:s??[],onChange:o,caller:_}),u=M.useCallback(d=>i((f=[])=>[...f,d]),[i]),p=M.useCallback(d=>i((f=[])=>f.filter(x=>x!==d)),[i]);return t.jsx(Xe,{scope:e.__scopeToggleGroup,type:"multiple",value:l,onItemActivate:u,onItemDeactivate:p,children:t.jsx(et,{...a,ref:n})})});Ie.displayName=_;var[kn,_n]=Qe(_),et=M.forwardRef((e,n)=>{const{__scopeToggleGroup:r,disabled:s=!1,rovingFocus:o=!0,orientation:a,dir:l,loop:i=!0,...u}=e,p=Ye(r),d=Ue(l),f={role:"group",dir:d,...u};return t.jsx(kn,{scope:r,rovingFocus:o,disabled:s,children:o?t.jsx(vn,{asChild:!0,...p,orientation:a,dir:d,loop:i,children:t.jsx(ne.div,{...f,ref:n})}):t.jsx(ne.div,{...f,ref:n})})}),re="ToggleGroupItem",tt=M.forwardRef((e,n)=>{const r=Je(re,e.__scopeToggleGroup),s=_n(re,e.__scopeToggleGroup),o=Ye(e.__scopeToggleGroup),a=r.value.includes(e.value),l=s.disabled||e.disabled,i={...e,pressed:a,disabled:l},u=M.useRef(null);return s.rovingFocus?t.jsx(jn,{asChild:!0,...o,focusable:!l,active:a,ref:u,children:t.jsx(De,{...i,ref:n})}):t.jsx(De,{...i,ref:n})});tt.displayName=re;var De=M.forwardRef((e,n)=>{const{__scopeToggleGroup:r,value:s,...o}=e,a=Je(re,r),l={role:"radio","aria-checked":e.pressed,"aria-pressed":void 0},i=a.type==="single"?l:void 0;return t.jsx(Ze,{...i,...o,ref:n,onPressedChange:u=>{u?a.onItemActivate(s):a.onItemDeactivate(s)}})}),On=Ie,Gn=tt;const Un=Pe.injectEndpoints({endpoints:e=>({getFolders:e.query({query:(n={})=>{const{parentId:r}=n,s={};return r!=null?s.filters={$and:[{parent:{id:r}}]}:s.filters={$and:[{parent:{id:{$null:!0}}}]},{url:"/upload/folders",method:"GET",config:{params:s}}},transformResponse:n=>n.data,providesTags:n=>n?[...n.map(({id:r})=>({type:"Folder",id:r})),{type:"Folder",id:"LIST"}]:[{type:"Folder",id:"LIST"}]}),createFolder:e.mutation({query:n=>({url:"/upload/folders",method:"POST",data:n}),transformResponse:n=>n.data,invalidatesTags:[{type:"Folder",id:"LIST"}]}),getFolder:e.query({query:({id:n})=>({url:`/upload/folders/${n}`,method:"GET",config:{params:{populate:{parent:{populate:{parent:"*"}},children:{count:!0},files:{count:!0}}}}}),transformResponse:n=>n.data,providesTags:(n,r,{id:s})=>[{type:"Folder",id:s}]})})}),{useCreateFolderMutation:Vn,useGetFoldersQuery:Bn,useGetFolderQuery:Hn}=Un;var k=function(e){return e.Video="video",e.Image="image",e.Document="doc",e.Audio="audio",e}({});const Wn=Pe.injectEndpoints({endpoints:e=>({getAssets:e.query({query:(n={})=>{const{folder:r,...s}=n,o={...s};return r!=null?o.filters={$and:[{folder:{id:r}}]}:o.filters={$and:[{folder:{id:{$null:!0}}}]},{url:"/upload/files",method:"GET",config:{params:o}}},transformResponse:n=>n,providesTags:n=>n?[...n.results.map(({id:r})=>({type:"Asset",id:r})),{type:"Asset",id:"LIST"}]:[{type:"Asset",id:"LIST"}]}),getAsset:e.query({query:n=>({url:`/upload/files/${n}`,method:"GET"}),providesTags:(n,r,s)=>[{type:"Asset",id:s}]})})}),{useGetAssetsQuery:nt,useGetAssetQuery:zn}=Wn,Kn={pdf:ht,csv:mt,xls:gt,zip:pt},K=(e,n)=>{const r=Le(n);return e?.includes(k.Image)?dt:e?.includes(k.Video)?ut:e?.includes(k.Audio)?ft:r?Kn[r]||Se:Se},H=h(F)`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  max-height: 24rem;
  overflow: hidden;
  border-radius: ${({theme:e})=>e.borderRadius};
  padding: ${({theme:e})=>e.spaces[3]};
  background: repeating-conic-gradient(
      ${({theme:e})=>e.colors.neutral100} 0% 25%,
      transparent 0% 50%
    )
    50% / 20px 20px;
`,Q=h(v)`
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
`,qn=h.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,Zn=h.video`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,Qn=h.audio`
  width: 100%;
`,Yn=h.iframe`
  width: 100%;
  height: 100%;
  min-height: 200px;
  border: none;
`,Xn=h(v)`
  height: 100%;
  aspect-ratio: 1;
  width: auto;
  max-width: 100%;
  margin: 0 auto;
  color: ${({theme:e})=>e.colors.neutral500};
  background: ${({theme:e})=>e.colors.neutral150};
`,Jn=h(v)`
  position: absolute;
  inset: 0;
  z-index: 1;
`,Y=()=>{const{formatMessage:e}=E();return t.jsx(Jn,{justifyContent:"center",alignItems:"center",children:t.jsx(ee,{children:e({id:"app.loading",defaultMessage:"Loading..."})})})},er=({asset:e})=>{const{formatMessage:n}=E(),{alternativeText:r,ext:s,mime:o,url:a}=e,l=J(a),[i,u]=c.useState(!1);if(c.useEffect(()=>{u(!1)},[l]),o?.includes(k.Image)){const f=J(a);if(f)return t.jsxs(H,{children:[!i&&t.jsx(Y,{}),t.jsx(Q,{children:t.jsx(qn,{src:f,alt:r||e.name||"",onLoad:()=>u(!0),onError:()=>u(!0)})})]})}if(o?.includes(k.Video)&&l)return t.jsxs(H,{children:[!i&&t.jsx(Y,{}),t.jsx(Q,{children:t.jsx(Zn,{src:l,controls:!0,title:e.name,onLoadedData:()=>u(!0),onError:()=>u(!0),children:n({id:g("asset-details.videoNotSupported"),defaultMessage:"Your browser does not support the video tag."})})})]});if(o?.includes(k.Audio)&&l)return t.jsxs(H,{children:[!i&&t.jsx(Y,{}),t.jsx(Q,{children:t.jsx(v,{width:"100%",padding:4,justifyContent:"center",alignItems:"center",height:"100%",minHeight:"12rem",children:t.jsx(Qn,{src:l,controls:!0,onLoadedData:()=>u(!0),onError:()=>u(!0)})})})]});if((s?.toLowerCase()==="pdf"||s?.toLowerCase()===".pdf"||o==="application/pdf")&&l)return t.jsxs(H,{children:[!i&&t.jsx(Y,{}),t.jsx(Q,{children:t.jsx(Yn,{src:`${l}#toolbar=0`,title:e.name,onLoad:()=>u(!0)})})]});const d=K(o,s);return t.jsx(H,{children:t.jsxs(Xn,{justifyContent:"center",alignItems:"center",gap:1,direction:"column",hasRadius:!0,children:[t.jsx(d,{width:24,height:24}),t.jsx(b,{variant:"pi",children:n({id:g("asset-details.noPreview"),defaultMessage:"No preview available"})})]})})},ue="assetId",rt=()=>{const[{query:e},n]=Ne(),r=e?.[ue],s=r?parseInt(r,10):null,o=s!==null&&!Number.isNaN(s),[a,l]=c.useState(!1),i=c.useRef(null),u=o&&!a;c.useEffect(()=>{o&&(i.current=s)},[o,s]);const p=c.useCallback(j=>{l(!1),n({[ue]:String(j)})},[n]),d=c.useCallback(()=>{o&&l(!0)},[o]);c.useEffect(()=>{if(!a)return;const j=window.setTimeout(()=>{n({[ue]:void 0},"remove"),l(!1),i.current=null},xt);return()=>window.clearTimeout(j)},[a,n]);const f=o||a;return{assetId:a?i.current??s:s,isVisible:u,shouldRenderDrawer:f,openDetails:p,closeDetails:d}},tr=h(v)`
  flex: 0 0 calc(50% - ${({theme:e})=>e.spaces[2]});
`,G=({label:e,value:n})=>t.jsxs(tr,{direction:"column",justifyContent:"flex-start",alignItems:"flex-start",gap:1,children:[t.jsx(b,{variant:"sigma",textColor:"neutral600",fontWeight:"semiBold",textTransform:"uppercase",children:e}),t.jsx(b,{variant:"pi",textColor:"neutral700",children:n??"-"})]}),nr=h(bt)`
  width: 1.6rem;
  height: 1.6rem;

  path {
    fill: ${({theme:e})=>e.colors.warning500};
  }
`,fe=({name:e,label:n,value:r,required:s})=>t.jsxs(L.Root,{name:e,required:s,children:[t.jsx(L.Label,{children:n}),t.jsx(ke,{value:r??"",onChange:()=>{},endAction:r?void 0:t.jsx(nr,{}),type:"text"})]}),rr=({asset:e})=>{const{formatMessage:n,formatDate:r}=E(),s=e.mime?.includes(k.Image);return t.jsxs(v,{direction:"column",alignItems:"stretch",gap:4,paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,children:[t.jsx(b,{variant:"beta",fontWeight:"semiBold",tag:"h3",children:n({id:g("asset-details.fileInfo"),defaultMessage:"File info"})}),t.jsxs(v,{wrap:"wrap",gap:4,background:"neutral100",paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,alignItems:"flex-start",children:[t.jsx(G,{label:n({id:g("asset-details.creationDate"),defaultMessage:"Creation date"}),value:e.createdAt?r(new Date(e.createdAt),{dateStyle:"long",timeStyle:"short"}):null}),t.jsx(G,{label:n({id:g("asset-details.lastUpdated"),defaultMessage:"Last updated"}),value:e.updatedAt?r(new Date(e.updatedAt),{dateStyle:"long",timeStyle:"short"}):null}),t.jsx(G,{label:n({id:g("asset-details.createdBy"),defaultMessage:"Created by"}),value:e.createdBy?Ht({firstname:e.createdBy.firstname??void 0,lastname:e.createdBy.lastname??void 0,username:e.createdBy.username??void 0,email:e.createdBy.email??void 0})??"-":null}),t.jsx(G,{label:n({id:g("asset-details.size"),defaultMessage:"Size"}),value:e.size?pe(e.size,1):null}),s&&(e.width!=null||e.height!=null)&&t.jsx(G,{label:n({id:g("asset-details.dimensions"),defaultMessage:"Dimensions"}),value:e.width!=null&&e.height!=null?`${e.width} × ${e.height}`:null}),t.jsx(G,{label:n({id:g("asset-details.extension"),defaultMessage:"Extension"}),value:Le(e.ext)}),t.jsx(G,{label:n({id:g("asset-details.assetId"),defaultMessage:"Asset ID"}),value:String(e.id)})]}),t.jsx(fe,{name:"fileName",label:n({id:g("asset-details.fileName"),defaultMessage:"File name"}),value:e.name,required:!0}),s&&t.jsxs(t.Fragment,{children:[t.jsx(fe,{name:"caption",label:n({id:g("asset-details.caption"),defaultMessage:"Caption"}),value:e.caption}),t.jsx(fe,{name:"alternativeText",label:n({id:g("asset-details.alternativeText"),defaultMessage:"Alternative text"}),value:e.alternativeText})]})]})},or=({asset:e,closeDetails:n})=>{const r=e?K(e.mime,e.ext):jt;return t.jsxs(v,{gap:2,paddingLeft:5,paddingTop:3,paddingBottom:3,paddingRight:3,children:[t.jsx(r,{width:20,height:20}),t.jsx(U.Title,{asChild:!0,children:t.jsx(b,{variant:"omega",fontWeight:"semiBold",overflow:"hidden",ellipsis:!0,tag:"h2",children:e.name})}),t.jsx(F,{marginLeft:"auto",children:t.jsx(U.CloseButton,{onClose:n,children:t.jsx(yt,{})})})]})},sr=({assetId:e,closeDetails:n})=>{const{formatMessage:r}=E(),{data:s,isLoading:o,error:a}=zn(e,{refetchOnMountOrArgChange:!1,refetchOnReconnect:!1,refetchOnFocus:!1});return o?t.jsx(v,{justifyContent:"center",padding:8,children:t.jsx(ee,{children:r({id:"app.loading",defaultMessage:"Loading..."})})}):a||!s?t.jsx(v,{direction:"column",alignItems:"stretch",gap:4,padding:4,children:t.jsx(vt,{variant:"danger",closeLabel:r({id:"global.close",defaultMessage:"Close"}),onClose:n,children:r({id:g("asset-details.error"),defaultMessage:"Failed to load file details."})})}):t.jsxs(t.Fragment,{children:[t.jsx(or,{asset:s,closeDetails:n}),t.jsxs(U.ScrollableContent,{children:[t.jsx(er,{asset:s}),t.jsx(rr,{asset:s})]})]})},ar=()=>{const{formatMessage:e}=E(),{assetId:n,isVisible:r,shouldRenderDrawer:s,closeDetails:o}=rt();return!s||n===null?null:t.jsxs(U.Root,{isVisible:r,onClose:o,children:[t.jsx("div",{children:t.jsxs(je,{children:[t.jsx(U.Title,{children:e({id:g("asset-details.title"),defaultMessage:"File details"})}),t.jsx(U.Description,{children:e({id:g("asset-details.description"),defaultMessage:"Displays file information and metadata"})})]})}),t.jsx(U.Body,{animationDirection:"left",width:"41.6rem",height:"100vh",children:t.jsx(sr,{assetId:n,closeDetails:o})})]})},we=()=>{const[{query:e},n]=Ne();return{currentFolderId:e?.folder?Number(e.folder):null,navigateToFolder:o=>{n({folder:String(o.id)})}}},ir=h(It)`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: 2px;
  }
`,lr=h(F)`
  grid-column: 1 / -1;
`,cr=h(v)`
  width: 100%;
  padding: ${({theme:e})=>`${e.spaces[2]} ${e.spaces[3]}`}; // 8px 12px
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]}; // 8px
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: 2px;
  }
`,dr=h(v)`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.neutral600};
`,ur=h(b)`
  flex: 1;
  min-width: 0;
`,fr=({folder:e})=>{const{formatMessage:n}=E(),{navigateToFolder:r}=we(),s=o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),r(e))};return t.jsxs(cr,{onClick:()=>r(e),onKeyDown:s,role:"listitem",tabIndex:0,children:[t.jsx(dr,{children:t.jsx(oe,{width:20,height:20})}),t.jsx(ur,{textColor:"neutral800",ellipsis:!0,children:e.name}),t.jsx(se,{label:n({id:g("control-card.more-actions"),defaultMessage:"More actions"}),variant:"ghost",onClick:o=>o.stopPropagation(),children:t.jsx(ae,{})})]})},Te=h(F)`
  position: relative;
  width: 100%;
  padding-bottom: 62.5%;
  height: 0;
  overflow: hidden;
  background: repeating-conic-gradient(
      ${({theme:e})=>e.colors.neutral100} 0% 25%,
      transparent 0% 50%
    )
    50% / 20px 20px;
`,pr=h.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,gr=h(v)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${({theme:e})=>e.colors.neutral500};
  background: ${({theme:e})=>e.colors.neutral100};
`,mr=({asset:e})=>{const{alternativeText:n,ext:r,formats:s,mime:o,url:a}=e;if(o?.includes(k.Image)){const i=J(s?.thumbnail?.url)??J(a);if(i)return t.jsx(Te,{children:t.jsx(pr,{src:i,alt:n||""})})}const l=K(o,r);return t.jsx(Te,{children:t.jsx(gr,{justifyContent:"center",alignItems:"center",children:t.jsx(l,{width:48,height:48})})})},hr=h(wt)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
`,xr=h(v)`
  min-width: 0;
  width: 100%;
`,vr=h(v)`
  color: ${({theme:e})=>e.colors.neutral600};
  flex-shrink: 0;
`,jr=h(b)`
  flex: 1;
  min-width: 0;
`,yr=({asset:e,onAssetItemClick:n})=>{const{formatMessage:r}=E(),s=K(e.mime,e.ext),o=a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),n(e.id))};return t.jsxs(ir,{tabIndex:0,role:"listitem",onClick:()=>n(e.id),onKeyDown:o,children:[t.jsx(hr,{children:t.jsx(mr,{asset:e})}),t.jsx(Ct,{children:t.jsxs(xr,{alignItems:"center",gap:2,children:[t.jsx(vr,{children:t.jsx(s,{width:20,height:20})}),t.jsx(jr,{textColor:"primary800",ellipsis:!0,children:e.name}),t.jsx(se,{label:r({id:g("control-card.more-actions"),defaultMessage:"More actions"}),variant:"ghost",children:t.jsx(ae,{})})]})})]})},br=({assets:e,folders:n=[],onAssetItemClick:r})=>{const{formatMessage:s}=E();return n.length+e.length===0?t.jsx(F,{padding:8,children:t.jsx(b,{textColor:"neutral600",children:s({id:"app.components.EmptyStateLayout.content-document",defaultMessage:"No content found"})})}):t.jsxs(Z.Root,{gap:4,role:"list",children:[n.length>0&&t.jsx(lr,{children:t.jsx(Z.Root,{gap:4,children:n.map(a=>t.jsx(Z.Item,{col:3,m:4,s:6,xs:12,children:t.jsx(fr,{folder:a})},`folder-${a.id}`))})}),e.map(a=>t.jsx(Z.Item,{col:3,m:4,s:6,xs:12,direction:"column",alignItems:"stretch",children:t.jsx(yr,{asset:a,onAssetItemClick:r})},a.id))]})},Cr={view:"STRAPI_UPLOAD_LIBRARY_VIEW"},W={GRID:0,TABLE:1},Fe=[{name:"name",label:{id:g("list.table.header.name"),defaultMessage:"name"}},{name:"createdAt",label:{id:g("list.table.header.creationDate"),defaultMessage:"creation date"}},{name:"updatedAt",label:{id:g("list.table.header.lastModified"),defaultMessage:"last modified"}},{name:"size",label:{id:g("list.table.header.size"),defaultMessage:"size"}},{name:"actions",label:{id:g("list.table.header.actions"),defaultMessage:"actions"},isVisuallyHidden:!0}],Ir=h(Rt)`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: 4px;
  overflow: hidden;
`,wr=h(Mt)`
  background: ${({theme:e})=>e.colors.neutral100};

  tr {
    border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
  }
`,$e=h(Et)`
  height: 40px;
  padding: 0 ${({theme:e})=>e.spaces[4]};
  text-align: left;
`,P=h(_e)`
  padding: 0 ${({theme:e})=>e.spaces[4]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,ot=h(ge)`
  height: 48px;
  background: ${({theme:e})=>e.colors.neutral0};
  cursor: pointer;

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: -2px;
  }

  &:last-child {
    ${P} {
      border-bottom: 0;
    }
  }
`,Sr=h(_e)`
  padding: ${({theme:e})=>e.spaces[4]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Rr=({asset:e})=>{const{ext:n,mime:r}=e,s=K(r,n);return t.jsx(v,{justifyContent:"center",alignItems:"center",borderRadius:"4px",color:"neutral500",width:"3.2rem",height:"3.2rem",shrink:0,children:t.jsx(s,{width:20,height:20})})},Mr=({asset:e,onAssetItemClick:n})=>{const r=ye(),{formatDate:s,formatMessage:o}=E(),a=l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),n(e.id))};return t.jsxs(ot,{tabIndex:0,role:"row",onClick:()=>n(e.id),onKeyDown:a,children:[t.jsx(P,{children:t.jsxs(v,{gap:3,alignItems:"center",children:[t.jsx(Rr,{asset:e}),t.jsxs(v,{direction:"column",alignItems:"flex-start",children:[t.jsx(b,{textColor:"neutral800",fontWeight:"semiBold",ellipsis:!0,children:e.name}),r&&t.jsx(b,{textColor:"neutral600",variant:"pi",children:e.size?pe(e.size,1):"-"})]})]})}),!r&&t.jsxs(t.Fragment,{children:[t.jsx(P,{children:t.jsx(b,{textColor:"neutral600",children:e.createdAt?s(new Date(e.createdAt),{dateStyle:"long"}):"-"})}),t.jsx(P,{children:t.jsx(b,{textColor:"neutral600",children:e.updatedAt?s(new Date(e.updatedAt),{dateStyle:"long"}):"-"})}),t.jsx(P,{children:t.jsx(b,{textColor:"neutral600",children:e.size?pe(e.size,1):"-"})})]}),t.jsx(P,{children:t.jsx(v,{justifyContent:"flex-end",children:t.jsx(se,{label:o({id:g("control-card.more-actions"),defaultMessage:"More actions"}),variant:"ghost",children:t.jsx(ae,{})})})})]})},Er=h(ot)`
  cursor: pointer;

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }
`,Dr=({folder:e})=>{const n=ye(),{formatDate:r,formatMessage:s}=E(),{navigateToFolder:o}=we(),a=l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),o(e))};return t.jsxs(Er,{tabIndex:0,role:"row",onClick:()=>o(e),onKeyDown:a,children:[t.jsx(P,{children:t.jsxs(v,{gap:3,alignItems:"center",children:[t.jsx(v,{justifyContent:"center",alignItems:"center",borderRadius:"4px",color:"neutral600",width:"3.2rem",height:"3.2rem",shrink:0,children:t.jsx(oe,{width:20,height:20})}),t.jsx(b,{textColor:"neutral800",fontWeight:"semiBold",ellipsis:!0,children:e.name})]})}),!n&&t.jsxs(t.Fragment,{children:[t.jsx(P,{children:t.jsx(b,{textColor:"neutral600",children:e.createdAt?r(new Date(e.createdAt),{dateStyle:"long"}):"-"})}),t.jsx(P,{children:t.jsx(b,{textColor:"neutral600",children:e.updatedAt?r(new Date(e.updatedAt),{dateStyle:"long"}):"-"})}),t.jsx(P,{children:t.jsx(b,{textColor:"neutral600",children:"-"})})]}),t.jsx(P,{children:t.jsx(v,{justifyContent:"flex-end",children:t.jsx(se,{label:s({id:g("control-card.more-actions"),defaultMessage:"More actions"}),variant:"ghost",onClick:l=>l.stopPropagation(),children:t.jsx(ae,{})})})})]})},Tr=({assets:e,folders:n=[],onAssetItemClick:r})=>{const s=ye(),{formatMessage:o}=E(),a=s?Fe.filter(i=>i.name==="name"||i.name==="actions"):Fe,l=n.length+e.length;return t.jsxs(Ir,{colCount:a.length,rowCount:l+1,children:[t.jsx(wr,{children:t.jsx(ge,{children:a.map(i=>{const u=o(i.label);return"isVisuallyHidden"in i&&i.isVisuallyHidden?t.jsx($e,{children:t.jsx(je,{children:o({id:g("table.header.actions"),defaultMessage:"actions"})})},i.name):t.jsx($e,{children:t.jsx(b,{textColor:"neutral600",variant:"sigma",children:u})},i.name)})})}),t.jsx(St,{children:l===0?t.jsx(ge,{children:t.jsx(Sr,{colSpan:a.length,children:t.jsx(b,{textColor:"neutral600",children:o({id:"app.components.EmptyStateLayout.content-document",defaultMessage:"No content found"})})})}):t.jsxs(t.Fragment,{children:[n.map(i=>t.jsx(Dr,{folder:i},`folder-${i.id}`)),e.map(i=>t.jsx(Mr,{asset:i,onAssetItemClick:r},i.id))]})})]})},Fr=h($.Content)`
  max-width: 51.6rem;
`,$r=({open:e,folderName:n,parentFolderId:r,onClose:s})=>{const{formatMessage:o}=E(),{toggleNotification:a}=Dt(),[l,i]=c.useState(""),[u,p]=c.useState(),[d,{isLoading:f}]=Vn();c.useEffect(()=>{e&&(i(""),p(void 0))},[e]);const x=async j=>{j.preventDefault();const C=l.trim();if(!C){p(o({id:g("folder.create.form.error.name-required"),defaultMessage:"Name is required"}));return}try{await d({name:C,parent:r}).unwrap(),a({type:"success",message:o({id:g("folder.create.success"),defaultMessage:"Folder has been created"})}),s()}catch(y){const m=y;m?.message?p(m.message):a({type:"danger",message:o({id:g("folder.create.form.error.unknown"),defaultMessage:"An error occurred while creating the folder"})})}};return t.jsx($.Root,{open:e,onOpenChange:s,children:t.jsxs(Fr,{children:[t.jsx($.Header,{children:t.jsx($.Title,{children:o({id:g("folder.create.title-in"),defaultMessage:"New folder in {folderName}"},{folderName:n})})}),t.jsxs("form",{onSubmit:x,children:[t.jsx($.Body,{children:t.jsxs(L.Root,{error:u,name:"name",required:!0,children:[t.jsx(L.Label,{children:o({id:g("folder.form.name.label"),defaultMessage:"Folder name"})}),t.jsx(ke,{value:l,onChange:j=>{i(j.target.value),p(void 0)},autoFocus:!0}),t.jsx(L.Error,{})]})}),t.jsx($.Footer,{children:t.jsxs(v,{gap:2,justifyContent:"space-between",width:"100%",children:[t.jsx(te,{variant:"tertiary",onClick:s,type:"button",children:o({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(te,{type:"submit",loading:f,children:o({id:g("folder.create.submit"),defaultMessage:"Create folder"})})]})})]})]})})},st=c.createContext(null),Ar=h(F)`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`,Pr=({children:e,onDrop:n})=>{const[r,s]=c.useState(!1),o=c.useRef(0),a={isDragging:r};c.useEffect(()=>{const d=()=>{s(!1),o.current=0},f=x=>{x.relatedTarget||(s(!1),o.current=0)};return document.addEventListener("dragend",d),document.addEventListener("dragleave",f),()=>{document.removeEventListener("dragend",d),document.removeEventListener("dragleave",f)}},[]);const l=c.useCallback(d=>{d.preventDefault(),d.stopPropagation(),o.current+=1,d.dataTransfer.types.includes("Files")&&s(!0)},[]),i=c.useCallback(d=>{d.preventDefault(),d.stopPropagation(),o.current-=1,o.current<=0&&(s(!1),o.current=0)},[]),u=c.useCallback(d=>{d.preventDefault(),d.stopPropagation(),d.dataTransfer.dropEffect="copy"},[]),p=c.useCallback(d=>{d.preventDefault(),d.stopPropagation(),s(!1),o.current=0;const{files:f}=d.dataTransfer;f?.length&&n&&n(Array.from(f))},[n]);return t.jsx(st.Provider,{value:a,children:t.jsx(Ar,{"data-testid":"assets-dropzone",onDragEnter:l,onDragLeave:i,onDragOver:u,onDrop:p,children:e})})},at=()=>{const e=c.useContext(st);if(!e)throw new Error("useUploadDropZone must be used within UploadDropZone");return{isDragging:e.isDragging}},Lr=(e,n)=>`${e}${Math.floor(n*255).toString(16).padStart(2,"0")}`,Nr=h(F)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({theme:e})=>Lr(e.colors.primary200,.3)};
  border: 1px solid ${({theme:e})=>e.colors.primary700};
  border-radius: ${({theme:e})=>e.borderRadius};
  z-index: 1;
  pointer-events: none;
`,kr=({children:e})=>{const{isDragging:n}=at();return t.jsxs(F,{position:"relative",children:[n&&t.jsx(Nr,{}),e]})},_r=h(F)`
  position: fixed;
  bottom: ${({theme:e})=>e.spaces[8]};
  left: 50%;
  transform: translateX(calc(-50% + ${({$leftContentWidth:e})=>e/2}px));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spaces[2]};
  background: ${({theme:e})=>e.colors.primary600};
  padding: ${({theme:e})=>e.spaces[4]} ${({theme:e})=>e.spaces[6]};
  border-radius: ${({theme:e})=>e.borderRadius};
  z-index: 2;
`,Or=({uploadDropZoneRef:e,folderName:n})=>{const{formatMessage:r}=E(),{isDragging:s}=at(),[o,a]=c.useState(0);return c.useEffect(()=>{if(!e?.current)return;const l=()=>{const u=e.current?.getBoundingClientRect();u&&a(p=>p!==u.left?u.left:p)};l();const i=new ResizeObserver(l);return i.observe(e.current),()=>i.disconnect()},[e]),s?t.jsxs(_r,{$leftContentWidth:o,children:[t.jsx(b,{textColor:"neutral0",children:r({id:g("dropzone.upload.message"),defaultMessage:"Drop here to upload to"})}),t.jsxs(v,{gap:2,alignItems:"center",children:[t.jsx(oe,{width:20,height:20,fill:"neutral0"}),t.jsx(b,{textColor:"neutral0",fontWeight:"semiBold",children:n})]})]}):null},Gr=({open:e,onClose:n,onUpload:r})=>{const{formatMessage:s}=E(),[o,a]=c.useState(""),[l,i]=c.useState(null),u=()=>{a(""),i(null),n()},p=async d=>{d.preventDefault();const{urls:f,error:x}=Ft(o);if(x){i(x);return}i(null),u(),await r(f)};return t.jsx($.Root,{open:e,onOpenChange:d=>!d&&u(),children:t.jsx($.Content,{children:t.jsxs("form",{onSubmit:p,children:[t.jsx($.Header,{children:t.jsx($.Title,{children:s({id:g("modal.url.title"),defaultMessage:"Import from URL"})})}),t.jsx($.Body,{children:t.jsxs(L.Root,{error:l||void 0,hint:s({id:g("input.url.description"),defaultMessage:"Separate your URL links by a carriage return."}),children:[t.jsx(L.Label,{children:s({id:g("input.url.label"),defaultMessage:"URL(s)"})}),t.jsx(Tt,{name:"urls",minHeight:"unset",rows:Math.min(o.split(`
`).length,7),maxHeight:"10.5rem",placeholder:s({id:g("input.url.placeholder"),defaultMessage:"Empty"}),value:o,onChange:d=>{a(d.target.value),i(null)}}),t.jsx(L.Hint,{}),t.jsx(L.Error,{})]})}),t.jsxs($.Footer,{children:[t.jsx(te,{variant:"tertiary",onClick:u,children:s({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(te,{type:"submit",children:s({id:g("modal.url.upload"),defaultMessage:"Upload"})})]})]})})})},Ur=e=>{const{formatMessage:n}=E(),{data:r,isLoading:s}=Hn({id:e},{skip:e===null}),{data:o,isLoading:a}=nt({folder:null,pageSize:1},{skip:e!==null}),l=n({id:g("plugin.home"),defaultMessage:"Home"});return e===null?a?{title:l,itemCount:0}:{title:l,itemCount:o?.pagination?.total??0}:s?{title:l,itemCount:0}:{title:r?.name??l,itemCount:r?.files?.count??0}},X=20,Vr=({folder:e=null,sort:n}={})=>{const[r,s]=c.useState(1),o=c.useRef([]),a=c.useRef(!0),{currentData:l,isLoading:i,isFetching:u,error:p}=nt({folder:e,page:r,pageSize:X,sort:n}),d=l?.pagination,f=c.useMemo(()=>{if(!l)return o.current;const y=l.results;if(r===1)o.current=y;else{const m=(r-1)*X;if(o.current.length<m-X)return o.current;o.current.length<r*X&&(o.current=[...o.current,...y])}return o.current},[l,r]);c.useEffect(()=>{if(a.current){a.current=!1;return}s(1),o.current=[]},[e,n]);const x=d?r<d.pageCount:!1,j=u&&r>1,C=c.useCallback(()=>{s(y=>y+1)},[]);return{assets:f,pagination:d,isLoading:i,isFetchingMore:j,hasNextPage:x,fetchNextPage:C,error:p}},Br={threshold:.1},Hr=({view:e,folderId:n,onAssetItemClick:r})=>{const{formatMessage:s}=E(),{assets:o,isLoading:a,isFetchingMore:l,hasNextPage:i,fetchNextPage:u,error:p}=Vr({folder:n}),{data:d=[],isLoading:f}=Bn({parentId:n}),x=e===W.GRID,j=a||f,C=Ut(c.useCallback(y=>{y&&i&&!l&&u()},[i,l,u]),Br);return j?t.jsx(v,{justifyContent:"center",padding:8,children:t.jsx(ee,{children:s({id:"app.loading",defaultMessage:"Loading..."})})}):p?t.jsx(F,{padding:8,children:t.jsx(b,{textColor:"danger600",children:s({id:g("list.assets.error"),defaultMessage:"An error occurred while fetching assets."})})}):d.length===0&&o.length===0?t.jsx(F,{padding:8,children:t.jsx(b,{textColor:"neutral600",children:s({id:"app.components.EmptyStateLayout.content-document",defaultMessage:"No content found"})})}):t.jsxs(t.Fragment,{children:[x?t.jsx(br,{folders:d,assets:o,onAssetItemClick:r}):t.jsx(Tr,{assets:o,folders:d,onAssetItemClick:r}),t.jsx("div",{ref:C,style:{height:1}}),l&&t.jsx(v,{justifyContent:"center",padding:4,children:t.jsx(ee,{children:s({id:g("list.assets.loading-more"),defaultMessage:"Loading more assets..."})})})]})},Wr=h(On)`
  display: flex;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  overflow: hidden;
`,Ae=h(Gn)`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
  padding: ${({theme:e})=>`${e.spaces[2]} ${e.spaces[4]}`};
  border: none;
  background: ${({theme:e})=>e.colors.neutral0};
  color: ${({theme:e})=>e.colors.neutral800};
  cursor: pointer;
  font-size: ${({theme:e})=>e.fontSizes[1]};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }

  &[data-state='on'] {
    background: ${({theme:e})=>e.colors.neutral150};
  }

  svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`,zr=h(F)`
  [data-strapi-header] {
    background: ${({theme:e})=>e.colors.neutral0};

    h1 {
      font-size: 1.8rem;
    }
  }
`,Kr=()=>{const{formatMessage:e}=E(),{openDetails:n}=rt(),{currentFolderId:r}=we(),{title:s,itemCount:o}=Ur(r),a=e({id:g("header.content.item-count"),defaultMessage:"{count, plural, =1 {# item} other {# items}}"},{count:o}),[l,i]=c.useState(!1),[u,p]=$t(Cr.view,W.GRID),d=u===W.GRID,[f,x]=c.useState(!1),j=c.useRef(null),C=c.useRef(null),[y]=At(),[m]=Pt(),S=async(w,A)=>{if(w.length===0)return;const D=new FormData,q=[];w.forEach(V=>{D.append("files",V),q.push({name:V.name,caption:null,alternativeText:null,folder:A})}),D.append("fileInfo",JSON.stringify(q));try{await y({formData:D,totalFiles:w.length}).unwrap()}catch{}},T=()=>{j.current?.click()},I=async w=>{const A=w.target.files;A&&A.length>0&&await S(Array.from(A),r),w.target.value=""},R=async w=>{await S(w,r)},N=async w=>{try{await m({urls:w,folderId:r}).unwrap()}catch{}};return t.jsxs(t.Fragment,{children:[t.jsx(Pr,{onDrop:R,children:t.jsx(F,{ref:C,children:t.jsxs(le.Root,{minHeight:"100vh",background:"neutral0",children:[t.jsx(je,{children:t.jsx("input",{type:"file",ref:j,onChange:I,multiple:!0})}),t.jsx(zr,{children:t.jsx(le.Header,{title:`${s} (${a})`,primaryAction:t.jsxs(kt,{popoverPlacement:"bottom-end",variant:"default",endIcon:t.jsx(Gt,{}),label:e({id:g("new"),defaultMessage:"New"}),children:[t.jsx(ce,{onSelect:()=>i(!0),startIcon:t.jsx(oe,{}),children:e({id:g("folder.create.title"),defaultMessage:"New folder"})}),t.jsx(ce,{onSelect:T,startIcon:t.jsx(_t,{}),children:e({id:g("import-files"),defaultMessage:"Import files"})}),t.jsx(ce,{onSelect:()=>x(!0),startIcon:t.jsx(Ot,{}),children:e({id:g("import-from-url"),defaultMessage:"Import from URL"})})]}),subtitle:t.jsxs(v,{justifyContent:"space-between",alignItems:"center",gap:4,width:"100%",children:[t.jsx(v,{gap:4,alignItems:"center",children:"TODO: Filters and search"}),t.jsxs(v,{gap:4,alignItems:"center",children:[t.jsx(F,{children:"TODO: Sort"}),t.jsxs(Wr,{type:"single",value:d?"grid":"table",onValueChange:w=>w&&p(w==="grid"?W.GRID:W.TABLE),"aria-label":e({id:g("view.switch.label"),defaultMessage:"View options"}),children:[t.jsxs(Ae,{value:"table","aria-label":e({id:g("view.table"),defaultMessage:"Table view"}),children:[t.jsx(Lt,{}),e({id:g("view.table"),defaultMessage:"Table view"})]}),t.jsxs(Ae,{value:"grid","aria-label":e({id:g("view.grid"),defaultMessage:"Grid view"}),children:[t.jsx(Nt,{}),e({id:g("view.grid"),defaultMessage:"Grid view"})]})]})]})]})})}),t.jsx(le.Content,{children:t.jsxs(kr,{children:[t.jsx(Or,{uploadDropZoneRef:C,folderName:s}),t.jsx(Hr,{view:u,folderId:r,onAssetItemClick:n})]})})]})})}),t.jsx($r,{open:l,folderName:s,parentFolderId:r,onClose:()=>i(!1)}),t.jsx(Gr,{open:f,onClose:()=>x(!1),onUpload:N}),t.jsx(ar,{})]})},Yr=()=>{const{formatMessage:e}=E(),n=e({id:g("plugin.name"),defaultMessage:"Media Library"});return t.jsxs(Re.Main,{children:[t.jsx(Re.Title,{children:n}),t.jsx(Vt,{children:t.jsx(Bt,{index:!0,element:t.jsx(Kr,{})})})]})};export{Yr as UnstableMediaLibrary};
