import { render } from "@react-pdf/renderer";
import fs from "fs-extra";
import path from "node:path";
import { ResumeTemplate } from "../src/templates/ResumeTemplate";
import { data } from "./data";

const OUTDIR = path.resolve(process.cwd(), "./out");
const OUTFILE = path.resolve(OUTDIR, "./resume.pdf");

const resume = await ResumeTemplate({ data });

fs.ensureDirSync(OUTDIR);
await render(resume, OUTFILE);
