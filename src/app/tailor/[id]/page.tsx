import TailorProfileClient from "./TailorProfileClient";

export function generateStaticParams() {
  return [
    { id: 'antonios-bespoke' },
    { id: 'the-sartorialist' },
    { id: 'milano-cuts' },
    { id: 'savile-co' }
  ];
}

export default function Page({ params }: { params: { id: string } }) {
  return <TailorProfileClient params={params} />;
}
