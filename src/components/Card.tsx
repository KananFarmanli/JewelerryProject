
type CardType = {
  brand: string| null;
  price: string | number;
  product: string;
  svg: unknown;
};

export default function Card({svg, brand, price, product} : CardType) {
  return (
    <div className="select-none w-[176px] h-[300px] text-sm flex flex-col  item-center justify-center hover:scale-110 transition-all">
      <div className="h-full w-fit">
        <img className="w-full h-[200px]" src={svg as string} alt="" />
      </div>
      <div className="flex flex-col gap-1">
        <div>
          <h2 className="text-primarty ">{product}</h2>
          <p className="text-tertiary font-thin text-xs">{brand}</p>
        </div>
        <span className="text-secondary pt-2">${price}</span>
      </div>
    </div>
  );
}
