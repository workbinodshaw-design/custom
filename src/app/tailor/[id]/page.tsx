import TailorProfileClient from "./TailorProfileClient";

export function generateStaticParams() {
  return [
    { id: 'antonios-bespoke' },
    { id: 'the-sartorialist' },
    { id: 'milano-cuts' },
    { id: 'savile-co' }
  ];
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <TailorProfileClient params={resolvedParams} />;
}
