
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  background?: 'purple' | 'green' | 'peach' | 'blue' | 'pink' | 'yellow' | 'white' | 'none';
}

const Section = ({ id, title, children, className, titleClassName, background = 'none' }: SectionProps) => {
  const getBgColor = () => {
    switch (background) {
      case 'purple': return 'bg-pastel-purple/30';
      case 'green': return 'bg-pastel-green/30';
      case 'peach': return 'bg-pastel-peach/30';
      case 'blue': return 'bg-pastel-blue/30';
      case 'pink': return 'bg-pastel-pink/30';
      case 'yellow': return 'bg-pastel-yellow/30';
      case 'white': return 'bg-white/70';
      default: return '';
    }
  };

  return (
    <section 
      id={id} 
      className={cn(
        'py-16 scroll-mt-20', 
        getBgColor(),
        className
      )}
    >
      <div className="section-container">
        <h2 className={cn("section-title", titleClassName)}>{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
