
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
  const container = "absolute right-8 top-0 z-40 h-24 w-20";
  const effect =
    "relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-16 h-20 overflow-hidden transition-all rounded-md";

  return (
    <div className="group relative h-fit w-full cursor-pointer overflow-hidden py-4 px-4 rounded-lg transition-colors hover:bg-muted/50">
      <h1 className="text-5xl font-black text-foreground transition-all duration-500 group-hover:text-accent">
        {text}
      </h1>
       <div className="absolute bottom-4 left-4 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-[calc(100%-2rem)]"></div>
      <div className={container}>
        <div className={effect}>
          <img alt={images[1].alt} src={images[1].src} className="h-full w-full object-cover" />
        </div>
      </div>
      <div
        className={cn(
          container,
          "translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:rotate-12",
        )}
      >
        <div className={cn(effect, "duration-200")}>
          <img alt={images[0].alt} src={images[0].src} className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
}

function RevealImageList({items}: {items: ShowImageListItemProps[]}) {
  return (
    <div className="flex flex-col gap-1 rounded-sm bg-background px-8 py-4">
      <h3 className="text-sm font-black uppercase text-muted-foreground">Our services</h3>
      {items.map((item, index) => (
        <RevealImageListItem key={index} text={item.text} images={item.images} />
      ))}
    </div>
  );
}

export { RevealImageList };
