import { useState } from "react";
import { Github, Linkedin, Loader2, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { FadeIn, SectionHeader } from "./Section";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "mayurmewada00@gmail.com",
    href: "mailto:mayur.mewada@example.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/mayurmewada",
    href: "https://linkedin.com/in/mayurmewada",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/mayurmewada",
    href: "https://github.com/mayurmewada",
  },
];

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z
    .string()
    .trim()
    .min(5, "Message must be at least 5 characters")
    .max(1000, "Message is too long"),
});

function ContactForm({ onClose }: { onClose: () => void }) {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange =
    (key: keyof typeof formValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormValues((v) => ({ ...v, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Run basic client-side validation with Zod.
    const parsed = contactSchema.safeParse(formValues);
    if (!parsed.success) {
      const nextErrors: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        if (i.path[0]) nextErrors[i.path[0] as string] = i.message;
      });
      setFieldErrors(nextErrors);
      return;
    }
    setFieldErrors({});
    setIsSubmitting(true);
    try {
      // Fake delay to show loading state.
      await new Promise((r) => setTimeout(r, 1600));
      toast.success("Message sent! I'll get back to you soon.");
      setFormValues({ name: "", email: "", message: "" });
      onClose();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={formValues.name}
          onChange={handleChange("name")}
          placeholder="Your full name"
          disabled={isSubmitting}
          className="bg-white/5 border-white/10"
        />
        {fieldErrors.name && (
          <p className="text-xs text-destructive">{fieldErrors.name}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={formValues.email}
          onChange={handleChange("email")}
          placeholder="you@example.com"
          disabled={isSubmitting}
          className="bg-white/5 border-white/10"
        />
        {fieldErrors.email && (
          <p className="text-xs text-destructive">{fieldErrors.email}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          value={formValues.message}
          onChange={handleChange("message")}
          placeholder="Tell me about your project or opportunity..."
          rows={5}
          disabled={isSubmitting}
          className="bg-white/5 border-white/10 resize-none"
        />
        {fieldErrors.message && (
          <p className="text-xs text-destructive">{fieldErrors.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-medium text-background transition-all hover:scale-[1.02] hover:shadow-[0_10px_40px_-10px_rgba(167,139,250,0.7)] disabled:opacity-70 disabled:hover:scale-100"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send message
          </>
        )}
      </button>
    </form>
  );
}

export function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <section id="contact" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          eyebrow="Contact"
          title={
            <>
              Let's <span className="gradient-text">build</span> something
            </>
          }
          subtitle="Open to Frontend / React / Next.js opportunities — full-time, contract, or freelance."
        />
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-12 shadow-sm">
            <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="relative grid gap-4 md:grid-cols-3">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-start rounded-2xl border border-border bg-secondary/50 p-5 transition-all hover:-translate-y-1 hover:border-primary/30 hover:bg-secondary"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 transition-transform group-hover:scale-110">
                    <c.icon className="h-5 w-5 text-background" />
                  </div>
                  <div className="mt-4 text-[11px] uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="mt-1 truncate w-full text-sm text-foreground">
                    {c.value}
                  </div>
                </a>
              ))}
            </div>
            <div className="relative mt-10 flex justify-center">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-medium text-background transition-all hover:scale-[1.03] hover:shadow-[0_10px_40px_-10px_rgba(167,139,250,0.7)]"
                  >
                    <Mail className="h-4 w-4" />
                    Say hello
                  </button>
                </DialogTrigger>
                <DialogContent className="border border-border sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-xl">
                      Get in <span className="gradient-text">touch</span>
                    </DialogTitle>
                    <DialogDescription>
                      Drop a message and I'll reply as soon as possible.
                    </DialogDescription>
                  </DialogHeader>
                  <ContactForm onClose={() => setOpen(false)} />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </FadeIn>
        <div className="mt-12 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Mayur Mewada
        </div>
      </div>
    </section>
  );
}
