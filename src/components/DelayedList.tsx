type DelayedListProps = {
  items: any[];
  delay?: number;
};

export default function DelayedList({items, delay = 500} : DelayedListProps) {

  return (
    <>
      {items.map((item, index) => (
        <div 
          key={index}
          className="animate-zoom-back opacity-0"
          style={{ '--delay': `${index * delay}ms` } as React.CSSProperties}
        >
          {item}
        </div>
      ))}
    </>
  );
}