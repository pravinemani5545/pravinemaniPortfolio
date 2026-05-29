import type { APIRoute } from 'astro';
import { Resend } from 'resend';

// Server-rendered. Runs as a Vercel serverless function.
export const prerender = false;

const TO = import.meta.env.FORM_TO_EMAIL ?? 'pravinemaniva@gmail.com';
const FROM = import.meta.env.FORM_FROM_EMAIL ?? 'onboarding@resend.dev';

// Control fields that are not part of the submission body.
const CONTROL = new Set(['_honey', '_next', '_subject', '_form']);

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const POST: APIRoute = async ({ request, redirect, url }) => {
  const form = await request.formData();

  const next = String(form.get('_next') ?? '/contact/?sent=1');
  const honey = String(form.get('_honey') ?? '');

  // Honeypot: real users never fill this hidden field. Bots fill everything.
  // Silently redirect to success so the bot thinks it worked, send nothing.
  if (honey.trim() !== '') {
    return redirect(next, 303);
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set');
    return redirect(next.replace('sent=1', 'error=1'), 303);
  }

  // Collect the real submission fields (everything not prefixed with "_").
  const fields: Record<string, string> = {};
  for (const [key, value] of form.entries()) {
    if (CONTROL.has(key)) continue;
    fields[key] = String(value);
  }

  const subject = String(form.get('_subject') ?? 'New submission · pravinemani.com');
  const replyTo = fields.email || undefined;

  const rows = Object.entries(fields)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;vertical-align:top;text-transform:capitalize;border-bottom:1px solid #eee;">${esc(
          k
        )}</td><td style="padding:6px 12px;border-bottom:1px solid #eee;white-space:pre-wrap;">${esc(
          v
        )}</td></tr>`
    )
    .join('');

  const html = `
    <div style="font-family:system-ui,sans-serif;font-size:14px;color:#141413;">
      <h2 style="font-size:16px;margin:0 0 12px;">${esc(subject)}</h2>
      <table style="border-collapse:collapse;width:100%;max-width:640px;">${rows}</table>
      <p style="margin-top:16px;font-size:12px;color:#888;">
        Submitted via ${esc(url.origin)} · ${new Date().toISOString()}
      </p>
    </div>`;

  const text = Object.entries(fields)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n');

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `pravinemani.com forms <${FROM}>`,
      to: [TO],
      subject,
      html,
      text,
      ...(replyTo ? { replyTo } : {}),
    });

    if (error) {
      console.error('Resend error:', error);
      return redirect(next.replace('sent=1', 'error=1'), 303);
    }
  } catch (err) {
    console.error('Form send failed:', err);
    return redirect(next.replace('sent=1', 'error=1'), 303);
  }

  return redirect(next, 303);
};

// Anything other than POST gets bounced to the contact page.
export const GET: APIRoute = ({ redirect }) => redirect('/contact/', 302);
