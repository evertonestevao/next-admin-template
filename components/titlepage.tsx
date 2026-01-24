type TitleSectionProps = {
  title: string;
  description?: string;
};

export default function TitleSection({
  title,
  description,
}: TitleSectionProps) {
  return (
    <>
      <h1 className="text-2xl font-bold ">{title}</h1>
      <p className="mb-4 text-muted-foreground text-sm">{description}</p>
    </>
  );
}
