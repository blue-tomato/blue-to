import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-BFGe_9ZE.js";import{P as n}from"./ProductTileVertical-BbyOOl1I.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cjbtwi59.js";import"./Price-DTajG-ic.js";const O="_wrapper_1lf84_64",Q="_gridContainer_1lf84_76",b={wrapper:O,gridContainer:Q},se={title:"BLUETO/components/ProductTile/Vertical",component:n,render:e=>a.jsx("div",{className:b.wrapper,children:a.jsx(n,{...e})}),args:{brandName:"Patagonia",productName:"P-6 Logo Responsibili T-Shirt",price:80.95,imageUrl:"https://images.blue-tomato.com/is/image/bluetomato/305499878_front.jpg-D72T_m4XYvxrHJ86-ueTb6DnUss/305499878+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",imageAlt:"A man wearing a light green Patagonia t-shirt",href:"#"},parameters:{links:{confluence:"...",figma:"..."}}},j={},w={args:{salePrice:70.95,flags:[{label:"-12%",type:"sale"}]}},S={args:{flags:[{label:"Neu",type:"default"},{label:"-20%",type:"sale"},{label:"Flag with long text test",type:"special"},{label:"Special Edition",type:"special"}]}},v={args:{salePrice:70.95,flags:[{label:"-12%",type:"sale"}],colors:[{color:"#d82c2c",imageUrl:"https://images.blue-tomato.com/is/image/bluetomato/305499893_front.jpg-_qLzp3poLa1PJumH0qlPu758kpM/305499893+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1"},{color:"#333333",imageUrl:"https://images.blue-tomato.com/is/image/bluetomato/305499878_front.jpg-D72T_m4XYvxrHJ86-ueTb6DnUss/305499878+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1"},{color:"#ffffff",imageUrl:"https://images.blue-tomato.com/is/image/bluetomato/305499888_front.jpg-GbAxvgmiMiE3lxT-EuzKswZjQpg/305499888+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1"},{color:"#b9e2c7",active:!0,imageUrl:"https://images.blue-tomato.com/is/image/bluetomato/305499883_front.jpg-1AnoaRYeyR_DN2YL2w8iDGPNCA4/305499883+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1"},{color:"#000",imageUrl:"https://images.blue-tomato.com/is/image/bluetomato/305499878_front.jpg"},{color:"#555",imageUrl:"https://images.blue-tomato.com/is/image/bluetomato/305499878_front.jpg"},{color:"#aaa",imageUrl:"https://images.blue-tomato.com/is/image/bluetomato/305499878_front.jpg"}]},render:e=>{var g;const[i,c]=r.useState(e.colors||[]),l=((g=i.find(o=>o.active))==null?void 0:g.imageUrl)??e.imageUrl,[m,f]=r.useState(l),p=o=>{const d=i.map((h,C)=>({...h,active:C===o}));c(d),f(d[o].imageUrl)},u=i.map((o,d)=>({...o,onClick:()=>p(d)}));return a.jsx("div",{className:b.wrapper,children:a.jsx(n,{...e,imageUrl:m,colors:u})})}},z={args:{brandName:"Santa Cruz",productName:"Jordan Small Pro 2023 Snowboard",price:569.95,imageUrl:"https://images.blue-tomato.com/is/image/bluetomato/305499878_front.jpg-D72T_m4XYvxrHJ86-ueTb6DnUss/305499878+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",imageAlt:"A Santa Cruz snowboard with custom graphics",sizes:[{label:"145"},{label:"148"},{label:"149"},{label:"152"},{label:"153W"},{label:"154"},{label:"155W"},{label:"156"},{label:"158W"},{label:"159"}]},render:e=>{const i=e.sizes??[],[c,l]=r.useState(i);r.useEffect(()=>{l(e.sizes??[])},[e.sizes]);const m=p=>{const u=c.map((g,o)=>({...g,active:o===p&&!g.disabled}));l(u)},f=c.map((p,u)=>({...p,onClick:()=>m(u)}));return a.jsx("div",{className:b.wrapper,children:a.jsx(n,{...e,sizes:f})})}},U={args:{wishlistActive:!1},render:e=>{const[i,c]=r.useState(!!e.wishlistActive);return r.useEffect(()=>{c(!!e.wishlistActive)},[e.wishlistActive]),a.jsx("div",{className:b.wrapper,children:a.jsx(n,{...e,wishlistActive:i,onWishlistClick:()=>c(l=>!l)})})}},x={render:e=>{var C;const[i,c]=r.useState([!1,!0,!1,!1]),l=t=>{const s=[...i];s[t]=!s[t],c(s)},[m,f]=r.useState([{color:"#333333",imageUrl:"https://images.blue-tomato.com/is/image/bluetomato/305499878_front.jpg-D72T_m4XYvxrHJ86-ueTb6DnUss/305499878+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",active:!0},{color:"#d82c2c",imageUrl:"https://images.blue-tomato.com/is/image/bluetomato/305499893_front.jpg-_qLzp3poLa1PJumH0qlPu758kpM/305499893+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1"},{color:"#ffffff",imageUrl:"https://images.blue-tomato.com/is/image/bluetomato/305499888_front.jpg-GbAxvgmiMiE3lxT-EuzKswZjQpg/305499888+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1"},{color:"#b9e2c7",imageUrl:"https://images.blue-tomato.com/is/image/bluetomato/305499883_front.jpg-1AnoaRYeyR_DN2YL2w8iDGPNCA4/305499883+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1"},{color:"#555",imageUrl:"https://images.blue-tomato.com/is/image/bluetomato/305499878_front.jpg"},{color:"#ffffff",imageUrl:"https://images.blue-tomato.com/is/image/bluetomato/305499888_front.jpg-GbAxvgmiMiE3lxT-EuzKswZjQpg/305499888+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1"},{color:"#b9e2c7",imageUrl:"https://images.blue-tomato.com/is/image/bluetomato/305499883_front.jpg-1AnoaRYeyR_DN2YL2w8iDGPNCA4/305499883+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1"},{color:"#d82c2c",imageUrl:"https://images.blue-tomato.com/is/image/bluetomato/305499893_front.jpg-_qLzp3poLa1PJumH0qlPu758kpM/305499893+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1"}]),[p,u]=r.useState(((C=m.find(t=>t.active))==null?void 0:C.imageUrl)??e.imageUrl),g=t=>{const s=m.map((N,K)=>({...N,active:K===t}));f(s),u(s[t].imageUrl)},[o,d]=r.useState([{label:"S"},{label:"M",active:!0},{label:"L"},{label:"XL"},{label:"XXL"},{label:"3XL"}]),h=t=>{d(o.map((s,N)=>({...s,active:N===t})))};return a.jsxs("div",{className:b.gridContainer,children:[a.jsx(n,{...e,brandName:"Carhartt WIP",productName:"Chase T-Shirt",flags:[{label:"New",type:"default"},{label:"-10%",type:"sale"},{label:"Special Edition",type:"special"}],wishlistActive:i[0],onWishlistClick:()=>l(0)}),a.jsx(n,{...e,imageUrl:p,brandName:"Patagonia",productName:"Responsibili-Tee",flags:[{label:"New",type:"default"},{label:"Special Edition",type:"special"}],colors:m.map((t,s)=>({...t,onClick:()=>g(s)})),wishlistActive:i[1],onWishlistClick:()=>l(1)}),a.jsx(n,{...e,brandName:"Santa Cruz",productName:"Classic Dot Tee",sizes:o.map((t,s)=>({...t,onClick:()=>h(s)})),wishlistActive:i[2],onWishlistClick:()=>l(2)}),a.jsx(n,{...e,brandName:"Vans",productName:"Off The Wall Tee",wishlistActive:i[3],onWishlistClick:()=>l(3)}),a.jsx(n,{...e,imageUrl:p,brandName:"Patagonia",productName:"Responsibili-Tee",flags:[{label:"New",type:"default"},{label:"Special Edition",type:"special"}],colors:m.map((t,s)=>({...t,onClick:()=>g(s)})),wishlistActive:i[1],onWishlistClick:()=>l(1)}),a.jsx(n,{...e,brandName:"Santa Cruz",productName:"Classic Dot Tee",sizes:o.map((t,s)=>({...t,onClick:()=>h(s)})),wishlistActive:i[2],onWishlistClick:()=>l(2),salePrice:70.95}),a.jsx(n,{...e,brandName:"Santa Cruz",productName:"Classic Dot Tee",wishlistActive:i[3],onWishlistClick:()=>l(3),salePrice:70.95})]})}};var _,T,k;j.parameters={...j.parameters,docs:{...(_=j.parameters)==null?void 0:_.docs,source:{originalSource:"{}",...(k=(T=j.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var A,W,P;w.parameters={...w.parameters,docs:{...(A=w.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    salePrice: 70.95,
    flags: [{
      label: "-12%",
      type: "sale"
    }]
  }
}`,...(P=(W=w.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var $,y,D;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    flags: [{
      label: "Neu",
      type: "default"
    }, {
      label: "-20%",
      type: "sale"
    }, {
      label: "Flag with long text test",
      type: "special"
    }, {
      label: "Special Edition",
      type: "special"
    }]
  }
}`,...(D=(y=S.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var E,I,L;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    salePrice: 70.95,
    flags: [{
      label: "-12%",
      type: "sale"
    }],
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
    }, {
      color: "#000",
      imageUrl: "https://images.blue-tomato.com/is/image/bluetomato/305499878_front.jpg"
    }, {
      color: "#555",
      imageUrl: "https://images.blue-tomato.com/is/image/bluetomato/305499878_front.jpg"
    }, {
      color: "#aaa",
      imageUrl: "https://images.blue-tomato.com/is/image/bluetomato/305499878_front.jpg"
    }]
  },
  render: args => {
    const [colors, setColors] = useState<ColorOption[]>(args.colors || []);
    const initialImage = colors.find(c => c.active)?.imageUrl ?? args.imageUrl;
    const [currentImageUrl, setCurrentImageUrl] = useState<string>(initialImage);
    const handleColorClick = (clickedIndex: number) => {
      const newColors = colors.map((color, index) => ({
        ...color,
        active: index === clickedIndex
      }));
      setColors(newColors);
      setCurrentImageUrl(newColors[clickedIndex].imageUrl);
    };
    const colorsWithHandlers = colors.map((c, i) => ({
      ...c,
      onClick: () => handleColorClick(i)
    }));
    return <div className={styles.wrapper}>
        <ProductTileVertical {...args} imageUrl={currentImageUrl} colors={colorsWithHandlers} />
      </div>;
  }
}`,...(L=(I=v.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var H,Y,R;z.parameters={...z.parameters,docs:{...(H=z.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
    const safeSizes = args.sizes ?? [];
    const [sizes, setSizes] = useState(safeSizes);
    useEffect(() => {
      setSizes(args.sizes ?? []);
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
}`,...(R=(Y=z.parameters)==null?void 0:Y.docs)==null?void 0:R.source}}};var M,J,X;U.parameters={...U.parameters,docs:{...(M=U.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(X=(J=U.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var G,V,q;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => {
    const [wishlist, setWishlist] = useState([false, true, false, false]);
    const toggleWishlist = (idx: number) => {
      const next = [...wishlist];
      next[idx] = !next[idx];
      setWishlist(next);
    };
    const [tile2Colors, setTile2Colors] = useState<ColorOption[]>([{
      color: "#333333",
      imageUrl: "https://images.blue-tomato.com/is/image/bluetomato/305499878_front.jpg-D72T_m4XYvxrHJ86-ueTb6DnUss/305499878+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1",
      active: true
    }, {
      color: "#d82c2c",
      imageUrl: "https://images.blue-tomato.com/is/image/bluetomato/305499893_front.jpg-_qLzp3poLa1PJumH0qlPu758kpM/305499893+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1"
    }, {
      color: "#ffffff",
      imageUrl: "https://images.blue-tomato.com/is/image/bluetomato/305499888_front.jpg-GbAxvgmiMiE3lxT-EuzKswZjQpg/305499888+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1"
    }, {
      color: "#b9e2c7",
      imageUrl: "https://images.blue-tomato.com/is/image/bluetomato/305499883_front.jpg-1AnoaRYeyR_DN2YL2w8iDGPNCA4/305499883+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1"
    }, {
      color: "#555",
      imageUrl: "https://images.blue-tomato.com/is/image/bluetomato/305499878_front.jpg"
    }, {
      color: "#ffffff",
      imageUrl: "https://images.blue-tomato.com/is/image/bluetomato/305499888_front.jpg-GbAxvgmiMiE3lxT-EuzKswZjQpg/305499888+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1"
    }, {
      color: "#b9e2c7",
      imageUrl: "https://images.blue-tomato.com/is/image/bluetomato/305499883_front.jpg-1AnoaRYeyR_DN2YL2w8iDGPNCA4/305499883+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1"
    }, {
      color: "#d82c2c",
      imageUrl: "https://images.blue-tomato.com/is/image/bluetomato/305499893_front.jpg-_qLzp3poLa1PJumH0qlPu758kpM/305499893+front+jpg.jpg?$tsl$&wid=662&hei=882&fit=crop%2C1"
    }]);
    const [tile2Image, setTile2Image] = useState(tile2Colors.find(c => c.active)?.imageUrl ?? args.imageUrl);
    const handleColorClick = (clickedIndex: number) => {
      const updatedColors = tile2Colors.map((color, index) => ({
        ...color,
        active: index === clickedIndex
      }));
      setTile2Colors(updatedColors);
      setTile2Image(updatedColors[clickedIndex].imageUrl);
    };
    const [tile3Sizes, setTile3Sizes] = useState([{
      label: "S"
    }, {
      label: "M",
      active: true
    }, {
      label: "L"
    }, {
      label: "XL"
    }, {
      label: "XXL"
    }, {
      label: "3XL"
    }]);
    const handleSizeClick = (idx: number) => {
      setTile3Sizes(tile3Sizes.map((s, i) => ({
        ...s,
        active: i === idx
      })));
    };
    return <div className={styles.gridContainer}>
        <ProductTileVertical {...args} brandName="Carhartt WIP" productName="Chase T-Shirt" flags={[{
        label: "New",
        type: "default"
      }, {
        label: "-10%",
        type: "sale"
      }, {
        label: "Special Edition",
        type: "special"
      }]} wishlistActive={wishlist[0]} onWishlistClick={() => toggleWishlist(0)} />

        <ProductTileVertical {...args} imageUrl={tile2Image} brandName="Patagonia" productName="Responsibili-Tee" flags={[{
        label: "New",
        type: "default"
      }, {
        label: "Special Edition",
        type: "special"
      }]} colors={tile2Colors.map((c, i) => ({
        ...c,
        onClick: () => handleColorClick(i)
      }))} wishlistActive={wishlist[1]} onWishlistClick={() => toggleWishlist(1)} />

        <ProductTileVertical {...args} brandName="Santa Cruz" productName="Classic Dot Tee" sizes={tile3Sizes.map((s, i) => ({
        ...s,
        onClick: () => handleSizeClick(i)
      }))} wishlistActive={wishlist[2]} onWishlistClick={() => toggleWishlist(2)} />

        <ProductTileVertical {...args} brandName="Vans" productName="Off The Wall Tee" wishlistActive={wishlist[3]} onWishlistClick={() => toggleWishlist(3)} />
          <ProductTileVertical {...args} imageUrl={tile2Image} brandName="Patagonia" productName="Responsibili-Tee" flags={[{
        label: "New",
        type: "default"
      }, {
        label: "Special Edition",
        type: "special"
      }]} colors={tile2Colors.map((c, i) => ({
        ...c,
        onClick: () => handleColorClick(i)
      }))} wishlistActive={wishlist[1]} onWishlistClick={() => toggleWishlist(1)} />

        <ProductTileVertical {...args} brandName="Santa Cruz" productName="Classic Dot Tee" sizes={tile3Sizes.map((s, i) => ({
        ...s,
        onClick: () => handleSizeClick(i)
      }))} wishlistActive={wishlist[2]} onWishlistClick={() => toggleWishlist(2)} salePrice={70.95} />
           <ProductTileVertical {...args} brandName="Santa Cruz" productName="Classic Dot Tee" wishlistActive={wishlist[3]} onWishlistClick={() => toggleWishlist(3)} salePrice={70.95} />
      </div>;
  }
}`,...(q=(V=x.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};const ae=["Default","WithSale","WithFlags","WithColors","WithSizes","Wishlist","MultipleProductsGrid"];export{j as Default,x as MultipleProductsGrid,U as Wishlist,v as WithColors,S as WithFlags,w as WithSale,z as WithSizes,ae as __namedExportsOrder,se as default};
