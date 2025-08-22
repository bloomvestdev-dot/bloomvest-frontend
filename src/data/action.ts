"use server";

export async function messageAction(formData: FormData) {
  const name = formData.get("name");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  if (!name || !phone || !email || !subject || !message) {
    throw new Error("All fields are required.");
  }

  console.log("Message Action:", {
    name,
    phone,
    email,
    subject,
    message,
  });
}
