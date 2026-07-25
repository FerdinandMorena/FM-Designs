// One-off script to generate the remaining FM Designs editorial photos via
// fal.ai FLUX.1 [dev], convert to webp, and save into public/images/*.
// Usage: node scripts/generate-images.mjs [--only=path/to/file.webp,...]
import { readFileSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

function loadEnvKey() {
  const envPath = path.join(root, ".env");
  const content = readFileSync(envPath, "utf8");
  const match = content.match(/^FAL_KEY=(.+)$/m);
  if (!match) throw new Error("FAL_KEY not found in .env");
  return match[1].trim();
}

const FAL_KEY = process.env.FAL_KEY || loadEnvKey();
const STYLE =
  "Ultra-realistic editorial photograph, cinematic natural light, warm neutral palette (walnut, linen, concrete, brushed steel) with a single burnt-copper accent, shallow depth of field, premium materials, no text, no logos, no screens showing UI, photorealistic, highly detailed, no AI artifacts, calm and precise mood.";

const jobs = [
  {
    out: "public/images/services/brand-strategy.webp",
    width: 1472,
    height: 1104,
    prompt: `A large sheet of cream paper with a hand-drawn compass and ruler resting on it, a small stack of color swatch cards in warm neutral and burnt-copper tones fanned beside it, walnut table, soft raking window light casting long shadows, no people, no legible text, shot on 50mm lens f/2.2. ${STYLE}`,
  },
  {
    out: "public/images/projects/coastal-beach-resort-cover.webp",
    width: 1536,
    height: 864,
    prompt: `A minimalist luxury coastal resort terrace at golden hour, natural linen daybeds, warm timber decking, soft ocean haze in the background, no people, shot on 35mm lens f/2.8, warm neutral palette with soft blue-grey ocean tones, cinematic mood. ${STYLE}`,
  },
  {
    out: "public/images/projects/cvlens-cover.webp",
    width: 1536,
    height: 864,
    prompt: `A neat stack of printed resume papers on a walnut desk with a single red pen making a precise annotation mark, soft focused desk lamp light, no faces, no legible text, shot on 50mm lens f/2. ${STYLE}`,
  },
  {
    out: "public/images/projects/silulo-lms-cover.webp",
    width: 1536,
    height: 864,
    prompt: `An empty modern classroom study space with warm wood furniture, soft daylight through large windows, an open notebook and a pen on a light desk, no people, shot on 35mm lens f/2.8, calm optimistic mood. ${STYLE}`,
  },
  {
    out: "public/images/process/01-discover.webp",
    width: 1472,
    height: 1104,
    prompt: `An open blank cream notebook and a cup of coffee on a walnut table beside a large window with soft morning light, no people, shot on 50mm lens f/2.2, contemplative mood. ${STYLE}`,
  },
  {
    out: "public/images/process/02-research.webp",
    width: 1472,
    height: 1104,
    prompt: `Several printed reference documents and photographs spread and precisely aligned on a large walnut table, a magnifying loupe resting on top, soft directional light, no legible text, no people, shot on 50mm lens f/2.5. ${STYLE}`,
  },
  {
    out: "public/images/process/03-strategy.webp",
    width: 1472,
    height: 1104,
    prompt: `A large glass panel with a few precise hand-drawn geometric diagrams and arrows in dark marker, abstract, no legible words, soft studio light, a walnut table edge in foreground with a burnt-copper marker, no people, shot on 35mm lens f/2.8. ${STYLE}`,
  },
  {
    out: "public/images/process/04-design.webp",
    width: 1472,
    height: 1104,
    prompt: `A designer's hand sketching a precise geometric interface layout on tracing paper with a fine pen, walnut table, soft window light, shallow depth of field focused on the pen tip and paper, no legible text, shot on 85mm lens f/2, burnt-copper pen barrel. ${STYLE}`,
  },
  {
    out: "public/images/process/05-prototype.webp",
    width: 1472,
    height: 1104,
    prompt: `A small precise white 3D-printed physical prototype model of a device on a walnut table, soft studio light casting clean shadows, calipers resting beside it, no people, no legible text, shot on 50mm lens f/2.2. ${STYLE}`,
  },
  {
    out: "public/images/process/06-develop.webp",
    width: 1472,
    height: 1104,
    prompt: `A clean minimalist workspace with an open aluminum laptop showing only a soft blurred abstract dark screen with no legible UI, a mechanical keyboard, and a warm desk lamp, soft evening light, no people, shot on 50mm lens f/2. ${STYLE}`,
  },
  {
    out: "public/images/process/07-launch.webp",
    width: 1472,
    height: 1104,
    prompt: `Looking up at a modern minimalist building facade against a clear warm-toned sky at sunrise, clean architectural lines, no people, no text, shot on 24mm lens f/5.6, optimistic cinematic mood. ${STYLE}`,
  },
  {
    out: "public/images/process/08-optimize.webp",
    width: 1472,
    height: 1104,
    prompt: `A precise mechanical gauge or dial instrument with a fine needle, brushed steel and walnut housing, soft studio light, shallow depth of field, no people, no legible text, shot on 90mm macro lens f/4, burnt-copper needle accent. ${STYLE}`,
  },
  {
    out: "public/images/about/studio-01.webp",
    width: 1536,
    height: 1024,
    prompt: `A bright minimalist design studio interior, walnut work tables, concrete floor, large windows with soft daylight, a few plants, no people, no legible text, shot on 24mm lens f/4, calm premium mood. ${STYLE}`,
  },
  {
    out: "public/images/about/studio-02.webp",
    width: 2016,
    height: 864,
    prompt: `Two people's hands, no faces visible, collaboratively reviewing a printed layout spread on a walnut table, one pointing with a pen, soft window light, shallow depth of field, no legible text, shot on 50mm lens f/2.2. ${STYLE}`,
  },
  {
    out: "public/images/about/studio-03.webp",
    width: 1536,
    height: 864,
    prompt: `A stack of premium material swatches: walnut veneer, brushed steel, raw linen, and a small burnt-copper metal sample, arranged precisely on a light concrete surface, soft raking light, shallow depth of field, shot on 90mm macro lens f/3.2. ${STYLE}`,
  },
];

const onlyArg = process.argv.find((a) => a.startsWith("--only="));
const only = onlyArg ? onlyArg.slice("--only=".length).split(",") : null;
const toRun = only ? jobs.filter((j) => only.some((o) => j.out.endsWith(o))) : jobs;

async function generateOne(job) {
  const res = await fetch("https://fal.run/fal-ai/flux/dev", {
    method: "POST",
    headers: {
      Authorization: `Key ${FAL_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: job.prompt,
      image_size: { width: job.width, height: job.height },
      num_inference_steps: 28,
      guidance_scale: 3.5,
      num_images: 1,
      enable_safety_checker: true,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`fal.ai request failed (${res.status}): ${text}`);
  }

  const data = await res.json();
  const imageUrl = data.images?.[0]?.url;
  if (!imageUrl) throw new Error(`No image returned for ${job.out}: ${JSON.stringify(data)}`);

  const imgRes = await fetch(imageUrl);
  const buffer = Buffer.from(await imgRes.arrayBuffer());

  const outPath = path.join(root, job.out);
  await mkdir(path.dirname(outPath), { recursive: true });
  const webp = await sharp(buffer).webp({ quality: 88 }).toBuffer();
  await writeFile(outPath, webp);
  console.log(`Saved ${job.out} (${webp.length} bytes)`);
}

for (const job of toRun) {
  try {
    await generateOne(job);
  } catch (err) {
    console.error(`FAILED ${job.out}:`, err.message);
  }
}
