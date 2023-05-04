import { redirect } from "next/navigation";
import { ZactTestComponent } from "./client-example";

async function create(formData: FormData) {
  "use server";
  const post = {
    title: formData.get("title"),
    content: formData.get("content"),
  };

  console.log("Post!", post);
  redirect(`/blog`);
}

export default function Page() {
  return <ZactTestComponent />;
}
