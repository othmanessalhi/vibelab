import { cn } from "@/lib/utils";

interface ImageSource {
  src: string;
  alt: string;
}

interface ShowImageListItemProps {
  text: string;
  images: [ImageSource, ImageSource];
}

function RevealImageListItem({ text, images }: ShowImageListItemProps) {
  const imageContainerBase = "absolute top-1/2 -translate-y-1/2 z-10 h-40 w-40 overflow-hidden rounded-md shadow-xl transition-all duration-500";

  return (
    <div className="relative w-full cursor-pointer border-b border-border/20 py-8">
      <div className="group relative w-fit">
        <h1 className="text-7xl font-black text-left text-foreground transition-all duration-500 group-hover:opacity-40">
          {text}
        </h1>
        <div 
          className={cn(
            imageContainerBase,
            "right-0 translate-x-[110%]",
            "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
          )}
        >
          <img alt={images[1].alt} src={images[1].src} className="h-full w-full object-cover" />
        </div>
        <div
          className={cn(
            imageContainerBase,
            "right-0 translate-x-[120%]",
            "scale-0 opacity-0 transition-all delay-150 duration-500 group-hover:scale-100 group-hover:opacity-100 group-hover:translate-x-[150%] group-hover:rotate-6"
          )}
        >
          <img alt={images[0].alt} src={images[0].src} className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
}

function RevealImageList({items}: {items: ShowImageListItemProps[]}) {
  return (
    <div className="flex w-full max-w-2xl flex-col gap-1 rounded-sm bg-background px-8 py-4">
      <h3 className="text-sm font-black uppercase text-muted-foreground">Our services</h3>
      {items.map((item, index) => (
        <RevealImageListItem key={index} text={item.text} images={item.images} />
      ))}
    </div>
  );
}

export { RevealImageList };
