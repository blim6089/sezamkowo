import Document from "@/components/features/zone/Document";
import Organization from "@/components/features/zone/Organization";
import Questions from "@/components/features/zone/Questions";
import Schedule from "@/components/features/zone/Schedule";
import Summary from "@/components/features/zone/Summary";

export default function Contact() {
  return (
    <div>
      <Summary />
      <Organization />
      <Schedule />
      <Questions />
      <Document />
    </div>
  );
}
