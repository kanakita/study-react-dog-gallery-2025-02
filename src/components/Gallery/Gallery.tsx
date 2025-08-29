import ImageCard from '@/components/ImageCard/ImageCard';

interface Props {
  items: string[];
}

export default function Gallery({ items }: Props) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {items.map((item) => (
        <ImageCard imgUrl={item} key={item} />
      ))}
    </div>
  );
}
