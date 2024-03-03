type CardProps = {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}

export const Card = ({
  className,
  title,
  children,
  href,
}: CardProps) => {
  return (
    <a
      className={className}
      href={`${href}"`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{children}</p>
    </a>
  );
}
