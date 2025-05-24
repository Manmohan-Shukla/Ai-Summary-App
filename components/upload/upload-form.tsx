"use client";
import { z } from "zod";
import UploadFormInput from "./upload-form-input";
import { useUploadThing } from "@/utils/uploadthing";
import { toast } from "sonner";

const schema = z.object({
  file: z
    .instanceof(File, { message: "Invalid file type" })
    .refine(
      (file) => file.size <= 20 * 1024 * 1024,
      "File size must be less than 20MB"
    )
    .refine(
      (file) => file.type.startsWith("application/pdf"),
      "File must be a PDF"
    ),
});

export default function UploadForm() {
  // const { toast } = useToast();
  const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      console.log("upload sucessfully!");
    },
    onUploadError: (err) => {
      console.log(
        "error occurred while uploading",
        err,
        toast("Error occurred while uploading", {
          description: err.message,
        })
      );
    },
    onUploadBegin: ({ file }) => {
      console.log("upload has begun for", file);
    },
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //to not refresh the page
    console.log("Form submitted");
    const formData = new FormData(e.currentTarget); //to get the form data
    const file = formData.get("file") as File;
    const validatedFields = schema.safeParse({ file });
    console.log(validatedFields);
    if (!validatedFields.success) {
      toast.error("❌ Something went wrong", {
        description:
          validatedFields.error.flatten().fieldErrors.file?.[0] ??
          "Invalid file",
      });
      return;
    }

    toast.info("📄 Uploading PDF", {
      description: "We are uploading your PDF!  ",
    });

    const resp = await startUpload([file]);
    if (!resp) {
      toast.error("Something went wrong", {
        description: "Please yse a different file",
      });
      return;
    }
    toast.info("📄 Processing PDF", {
      description: "Hang tight! Our AI is reading through your document! ✨ ",
    });
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
      <UploadFormInput onSubmit={handleSubmit} />
    </div>
  );
}
