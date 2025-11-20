import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe--_FWB0VN.js";import{P as m}from"./ProductTileVertical-DM4WoMvN.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DIZS9PPy.js";import"./Icon-B5VSGtbM.js";const I="_wrapper_zaeu3_64",h={wrapper:I},R={title:"BLUETO/components/ProductTile/Vertical",component:m,render:e=>a.jsx("div",{className:h.wrapper,children:a.jsx(m,{...e})}),args:{brandName:"Patagonia",productName:"P-6 Logo Responsibili T-Shirt",price:80.95,imageUrl:"https://images.blue-tomato.com/is/image/bluetomato/305499878_front.jpg-D72T_m4XYvxrHJ86-ueTb6DnUss/305499878+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",imageAlt:"A man wearing a light green Patagonia t-shirt",href:"#"},parameters:{links:{confluence:"...",figma:"..."}}},g={},d={args:{salePrice:70.95,flag:{label:"-12%",type:"sale"}}},u={args:{salePrice:70.95,flag:{label:"-12%",type:"sale"},colors:[{color:"#d82c2c",imageUrl:"https://images.blue-tomato.com/is/image/bluetomato/305499893_front.jpg-_qLzp3poLa1PJumH0qlPu758kpM/305499893+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1"},{color:"#333333",imageUrl:"https://images.blue-tomato.com/is/image/bluetomato/305499878_front.jpg-D72T_m4XYvxrHJ86-ueTb6DnUss/305499878+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1"},{color:"#ffffff",imageUrl:"https://images.blue-tomato.com/is/image/bluetomato/305499888_front.jpg-GbAxvgmiMiE3lxT-EuzKswZjQpg/305499888+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1"},{color:"#b9e2c7",active:!0,imageUrl:"https://images.blue-tomato.com/is/image/bluetomato/305499883_front.jpg-1AnoaRYeyR_DN2YL2w8iDGPNCA4/305499883+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1"}]},render:e=>{const[t,r]=i.useState(e.colors||[]),[n,p]=i.useState(e.imageUrl);i.useEffect(()=>{var o;r(e.colors||[]);const s=(o=e.colors)==null?void 0:o.find(C=>C.active);s&&p(s.imageUrl)},[e.colors]);const l=s=>{const o=t.map((C,N)=>({...C,active:N===s}));r(o),p(t[s].imageUrl)},c=t.map((s,o)=>({...s,onClick:()=>l(o)}));return a.jsx("div",{className:h.wrapper,children:a.jsx(m,{...e,imageUrl:n,colors:c})})}},f={args:{brandName:"Santa Cruz",productName:"Jordan Small Pro 2023 Snowboard",price:569.95,imageUrl:"https://images.blue-tomato.com/is/image/bluetomato/305499878_front.jpg-D72T_m4XYvxrHJ86-ueTb6DnUss/305499878+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",imageAlt:"A Santa Cruz snowboard with custom graphics",sizes:[{label:"145"},{label:"148"},{label:"149"},{label:"152"},{label:"153W"},{label:"154"},{label:"155W"},{label:"156"},{label:"158W"},{label:"159"}]},render:e=>{const[t,r]=i.useState(e.sizes||[]);i.useEffect(()=>{r(e.sizes||[])},[e.sizes]);const n=l=>{const c=t.map((s,o)=>({...s,active:o===l&&!s.disabled}));r(c)},p=t.map((l,c)=>({...l,onClick:()=>n(c)}));return a.jsx("div",{className:h.wrapper,children:a.jsx(m,{...e,sizes:p})})}},b={args:{wishlistActive:!1},render:e=>{const[t,r]=i.useState(!!e.wishlistActive);return i.useEffect(()=>{r(!!e.wishlistActive)},[e.wishlistActive]),a.jsx("div",{className:h.wrapper,children:a.jsx(m,{...e,wishlistActive:t,onWishlistClick:()=>r(n=>!n)})})}};var v,w,j;g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(j=(w=g.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var z,S,U;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    salePrice: 70.95,
    flag: {
      label: "-12%",
      type: "sale"
    }
  }
}`,...(U=(S=d.parameters)==null?void 0:S.docs)==null?void 0:U.source}}};var x,A,_;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    salePrice: 70.95,
    flag: {
      label: "-12%",
      type: "sale"
    },
    colors: [{
      color: "#d82c2c",
      imageUrl: "https://images.blue-tomato.com/is/image/bluetomato/305499893_front.jpg-_qLzp3poLa1PJumH0qlPu758kpM/305499893+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1"
    }, {
      color: "#333333",
      imageUrl: "https://images.blue-tomato.com/is/image/bluetomato/305499878_front.jpg-D72T_m4XYvxrHJ86-ueTb6DnUss/305499878+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1"
    }, {
      color: "#ffffff",
      imageUrl: "https://images.blue-tomato.com/is/image/bluetomato/305499888_front.jpg-GbAxvgmiMiE3lxT-EuzKswZjQpg/305499888+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1"
    }, {
      color: "#b9e2c7",
      active: true,
      imageUrl: "https://images.blue-tomato.com/is/image/bluetomato/305499883_front.jpg-1AnoaRYeyR_DN2YL2w8iDGPNCA4/305499883+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1"
    }]
  },
  render: args => {
    const [colors, setColors] = useState(args.colors || []);
    const [currentImageUrl, setCurrentImageUrl] = useState(args.imageUrl);
    useEffect(() => {
      setColors(args.colors || []);
      const activeColor = args.colors?.find(c => c.active);
      if (activeColor) {
        setCurrentImageUrl(activeColor.imageUrl);
      }
    }, [args.colors]);
    const handleColorClick = (clickedIndex: number) => {
      const newColors = colors.map((color, index) => ({
        ...color,
        active: index === clickedIndex
      }));
      setColors(newColors);
      setCurrentImageUrl(colors[clickedIndex].imageUrl);
    };
    const colorsWithHandlers = colors.map((c, i) => ({
      ...c,
      onClick: () => handleColorClick(i)
    }));
    return <div className={styles.wrapper}>
                <ProductTileVertical {...args} imageUrl={currentImageUrl} colors={colorsWithHandlers} />
            </div>;
  }
}`,...(_=(A=u.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var W,$,P;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    brandName: "Santa Cruz",
    productName: "Jordan Small Pro 2023 Snowboard",
    price: 569.95,
    imageUrl: "https://images.blue-tomato.com/is/image/bluetomato/305499878_front.jpg-D72T_m4XYvxrHJ86-ueTb6DnUss/305499878+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",
    imageAlt: "A Santa Cruz snowboard with custom graphics",
    sizes: [{
      label: "145"
    }, {
      label: "148"
    }, {
      label: "149"
    }, {
      label: "152"
    }, {
      label: "153W"
    }, {
      label: "154"
    }, {
      label: "155W"
    }, {
      label: "156"
    }, {
      label: "158W"
    }, {
      label: "159"
    }]
  },
  render: args => {
    const [sizes, setSizes] = useState(args.sizes || []);
    useEffect(() => {
      setSizes(args.sizes || []);
    }, [args.sizes]);
    const handleSizeClick = (clickedIndex: number) => {
      const newSizes = sizes.map((size, index) => ({
        ...size,
        active: index === clickedIndex && !size.disabled
      }));
      setSizes(newSizes);
    };
    const sizesWithHandlers = sizes.map((s, i) => ({
      ...s,
      onClick: () => handleSizeClick(i)
    }));
    return <div className={styles.wrapper}>
                <ProductTileVertical {...args} sizes={sizesWithHandlers} />
            </div>;
  }
}`,...(P=($=f.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var k,T,D;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    wishlistActive: false
  },
  render: args => {
    const [isActive, setIsActive] = useState(!!args.wishlistActive);
    useEffect(() => {
      setIsActive(!!args.wishlistActive);
    }, [args.wishlistActive]);
    return <div className={styles.wrapper}>
                <ProductTileVertical {...args} wishlistActive={isActive} onWishlistClick={() => setIsActive(prev => !prev)} />
            </div>;
  }
}`,...(D=(T=b.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const V=["Default","WithSale","WithColors","WithSizes","Wishlist"];export{g as Default,b as Wishlist,u as WithColors,d as WithSale,f as WithSizes,V as __namedExportsOrder,R as default};
