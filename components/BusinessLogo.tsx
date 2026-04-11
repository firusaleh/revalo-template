type BusinessLogoProps = {
  logoUrl: string | null;
  businessName: string;
  className?: string;
  size?: number;
};

export function BusinessLogo({
  logoUrl,
  businessName,
  className,
  size = 64,
}: BusinessLogoProps) {
  if (!logoUrl) return null;

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={logoUrl}
      alt={businessName}
      width={size}
      height={size}
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
}
