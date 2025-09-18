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
  const container = "absolute right-8 -top-1 z-40 h-20 w-16";
  const effect =
    "relative transition-all duration-500 delay-100 shadow-none w-16 h-16 overflow-hidden rounded-md group-hover:shadow-xl group-hover:w-full group-hover:h-full";

  return (
    <div className="group relative h-fit w-full cursor-pointer overflow-visible py-8 border-b border-border/20">
      <h1 className="text-7xl font-black text-left text-foreground transition-all duration-500 group-hover:opacity-40">
        {text}
      </h1>
      <div className={container}>
        <div className={cn(effect, "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100")}>
          <img alt={images[1].alt} src={images[1].src} className="h-full w-full object-cover" />
        </div>
      </div>
      <div
        className={cn(
          container,
          "translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:rotate-12",
        )}
      >
        <div className={cn(effect, "duration-200", "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100")}>
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
