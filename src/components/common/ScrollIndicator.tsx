import { ArrowDown } from 'lucide-react';

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
      <div className="animate-scroll-down">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </div>
  );
}
