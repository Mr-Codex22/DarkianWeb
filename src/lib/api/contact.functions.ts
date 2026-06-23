import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import process from "node:process";
import { Resend } from "resend";

// Envía el formulario de contacto por email vía Resend.
// Requiere en env: RESEND_API_KEY, CONTACT_FROM (remitente verificado en
// tu dominio, ej. "Darkian <web@darkian.co>"), CONTACT_TO (destino).
export const sendContact = createServerFn({ method: "POST" })
  .validator(
    z.object({
      nombre: z.string().min(1).max(100),
      correo: z.string().email(),
      mensaje: z.string().min(1).max(5000),
    }),
  )
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM;
    const to = process.env.CONTACT_TO ?? "marketing@darkian.co";
    if (!apiKey || !from) throw new Error("Falta RESEND_API_KEY o CONTACT_FROM");

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: data.correo,
      subject: `Contacto web — ${data.nombre}`,
      text: `${data.mensaje}\n\n— ${data.nombre} (${data.correo})`,
    });
    if (error) throw new Error(error.message);
    return { ok: true };
  });
