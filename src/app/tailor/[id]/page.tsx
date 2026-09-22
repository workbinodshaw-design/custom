import TailorProfileClient from "./TailorProfileClient";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <TailorProfileClient params={resolvedParams} />;
}
