import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./iframe-BFGe_9ZE.js";import{P as i}from"./ProductTileHorizontal-FS-yIi1W.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cjbtwi59.js";import"./Price-DTajG-ic.js";const y="_wrapper_1vtgj_64",h={wrapper:y},v={title:"BLUETO/components/ProductTile/Horizontal",component:i,args:{brandName:"Nike",productName:"Zoom Janoski Canvas Premium Skateschuhe",price:89.95,imageUrl:"https://images.blue-tomato.com/is/image/bluetomato/305011128_front.jpg-fqby-dYy42g8wuknk5UgMAnj_4E/Franchise+Handschuhe.jpg?$tsl$&wid=105&hei=140&fit=crop%2C1",imageAlt:"A person wearing a colorful sweatshirt",color:"Watermelon/BLK/Watermelon",size:"EU Size - 39.0",quantity:1}},t={render:e=>{const[n,o]=g.useState(e.quantity),s=()=>{alert("Product removed!")};return r.jsx("div",{className:h.wrapper,children:r.jsx(i,{...e,quantity:n,onQuantityChange:o,onRemove:s})})}},a={args:{...v.args,productName:"Zoom Janoski Canvas Premium Skateschuhe",imageUrl:"https://images.blue-tomato.com/is/image/bluetomato/305011128_front.jpg-fqby-dYy42g8wuknk5UgMAnj_4E/Franchise+Handschuhe.jpg?$tsl$&wid=138&hei=184&fit=crop%2C1",price:59.95},render:e=>{const[n,o]=g.useState(e.quantity),s=()=>{alert("Product removed!")};return r.jsx("div",{className:h.wrapperLarge,children:r.jsx(i,{...e,quantity:n,onQuantityChange:o,onRemove:s})})}};var m,u,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    const [quantity, setQuantity] = useState(args.quantity);
    const handleRemove = () => {
      alert("Product removed!");
    };
    return <div className={styles.wrapper}>
        <ProductTileHorizontal {...args} quantity={quantity} onQuantityChange={setQuantity} onRemove={handleRemove} />
      </div>;
  }
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var p,d,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Docs.args,
    productName: "Zoom Janoski Canvas Premium Skateschuhe",
    imageUrl: "https://images.blue-tomato.com/is/image/bluetomato/305011128_front.jpg-fqby-dYy42g8wuknk5UgMAnj_4E/Franchise+Handschuhe.jpg?$tsl$&wid=138&hei=184&fit=crop%2C1",
    price: 59.95
  },
  render: args => {
    const [quantity, setQuantity] = useState(args.quantity);
    const handleRemove = () => {
      alert("Product removed!");
    };
    return <div className={styles.wrapperLarge}>
        <ProductTileHorizontal {...args} quantity={quantity} onQuantityChange={setQuantity} onRemove={handleRemove} />
      </div>;
  }
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const R=["Default","Large"];export{t as Default,a as Large,R as __namedExportsOrder,v as default};
