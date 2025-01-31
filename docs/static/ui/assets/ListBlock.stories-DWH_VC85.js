import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{L as t,M as a}from"./listItem-CBP7OGnl.js";import{c as g}from"./clsx-B-dksMZM.js";import{R as S}from"./index-DRjF_FHU.js";import{U as x}from"./user-m77xcT7m.js";import{C as n}from"./chevron-right-Ce623L-n.js";import"./createLucideIcon-CVKaca6J.js";const s=S.forwardRef((c,j)=>e.jsx("div",{ref:j,className:g("crayon-list-block",c.className),style:c.style,children:c.children}));s.displayName="ListBlock";s.__docgenInfo={description:"",methods:[],displayName:"ListBlock",props:{children:{required:!0,tsType:{name:"union",raw:"React.ReactElement<ListItemProps> | React.ReactElement<ListItemProps>[]",elements:[{name:"ReactReactElement",raw:"React.ReactElement<ListItemProps>",elements:[{name:"ListItemProps"}]},{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement<ListItemProps>",elements:[{name:"ListItemProps"}]}],raw:"React.ReactElement<ListItemProps>[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const y={title:"Components/ListBlock",component:s,tags:["autodocs"]},i={render:()=>e.jsxs(s,{children:[e.jsx(t,{decorativeIcon:e.jsx(x,{size:16}),title:"John Doe",subtitle:"Software Engineer",actionIcon:e.jsx(n,{size:16})}),e.jsx(t,{decorativeIcon:e.jsx(a,{size:16}),title:"Jane Smith",subtitle:"Product Designer",actionIcon:e.jsx(n,{size:16})}),e.jsx(t,{decorativeIcon:e.jsx(a,{size:16}),title:"Simple Item",subtitle:"Without icons",actionIcon:e.jsx(n,{size:16})})]})},o={render:()=>e.jsx(s,{children:e.jsx(t,{decorativeIcon:e.jsx(x,{size:16}),title:"Single Item",subtitle:"With icons",actionIcon:e.jsx(n,{size:16})})})},r={render:()=>e.jsxs(s,{children:[e.jsx(t,{title:"First Item",subtitle:"Description here"}),e.jsx(t,{title:"Second Item",subtitle:"Another description"})]})};var m,l,d;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <ListBlock>
      <ListItem decorativeIcon={<User size={16} />} title="John Doe" subtitle="Software Engineer" actionIcon={<ChevronRight size={16} />} />
      <ListItem decorativeIcon={<Mail size={16} />} title="Jane Smith" subtitle="Product Designer" actionIcon={<ChevronRight size={16} />} />
      <ListItem decorativeIcon={<Mail size={16} />} title="Simple Item" subtitle="Without icons" actionIcon={<ChevronRight size={16} />} />
    </ListBlock>
}`,...(d=(l=i.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,I,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <ListBlock>
      <ListItem decorativeIcon={<User size={16} />} title="Single Item" subtitle="With icons" actionIcon={<ChevronRight size={16} />} />
    </ListBlock>
}`,...(u=(I=o.parameters)==null?void 0:I.docs)==null?void 0:u.source}}};var h,L,R;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <ListBlock>
      <ListItem title="First Item" subtitle="Description here" />
      <ListItem title="Second Item" subtitle="Another description" />
    </ListBlock>
}`,...(R=(L=r.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};const B=["Default","SingleItem","NoIcons"];export{i as Default,r as NoIcons,o as SingleItem,B as __namedExportsOrder,y as default};
