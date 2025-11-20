import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{P as i}from"./ProductTileHorizontal-_1P-2cM8.js";import{r as g}from"./iframe--_FWB0VN.js";import"./index-DIZS9PPy.js";import"./Icon-B5VSGtbM.js";import"./preload-helper-Dp1pzeXC.js";const y="_wrapper_1vtgj_64",v={wrapper:y},h={title:"BLUETO/components/ProductTile/Horizontal",component:i,args:{brandName:"Nike",productName:"Zoom Janoski Canvas Premium Skateschuhe",price:89.95,imageUrl:"https://images.blue-tomato.com/is/image/bluetomato/305499878_front.jpg-D72T_m4XYvxrHJ86-ueTb6DnUss/Helvetia+II+Printed+Cropped+Half+Snap+Half+Zip+Fleece+Pullover.jpg?$tsl$&wid=138&hei=184&fit=crop%2C1",imageAlt:"A person wearing a colorful sweatshirt",color:"Watermelon/BLK/Watermelon",size:"EU Size - 39.0",quantity:1}},t={render:e=>{const[n,o]=g.useState(e.quantity),s=()=>{alert("Product removed!")};return r.jsx("div",{className:v.wrapper,children:r.jsx(i,{...e,quantity:n,onQuantityChange:o,onRemove:s})})}},a={args:{...h.args,productName:"Zoom Janoski Canvas Premium Skateschuhe",price:59.95},render:e=>{const[n,o]=g.useState(e.quantity),s=()=>{alert("Product removed!")};return r.jsx("div",{className:v.wrapperLarge,children:r.jsx(i,{...e,quantity:n,onQuantityChange:o,onRemove:s})})}};var u,m,c;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    const [quantity, setQuantity] = useState(args.quantity);
    const handleRemove = () => {
      alert("Product removed!");
    };
    return <div className={styles.wrapper}>
            <ProductTileHorizontal {...args} quantity={quantity} onQuantityChange={setQuantity} onRemove={handleRemove} />
            </div>;
  }
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var l,p,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Docs.args,
    productName: "Zoom Janoski Canvas Premium Skateschuhe",
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
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const x=["Default","Large"];export{t as Default,a as Large,x as __namedExportsOrder,h as default};
