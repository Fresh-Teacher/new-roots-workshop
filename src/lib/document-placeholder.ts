import { archiveExtensions, documentExtension } from '@/lib/document-formats';
const pdf = { url: '/site-assets/e3f2c139-pdf.png' };
const word = { url: '/site-assets/cd164d7b-word.webp' };
const excel = { url: '/site-assets/76c3c917-excel.png' };
const powerpoint = { url: '/site-assets/995dbb07-powerpoint.png' };
const archive = { url: '/site-assets/e3e38388-archive.jpeg' };
const rtf = { url: '/site-assets/03dc7ab4-rtf.png' };
const txt = { url: '/site-assets/cd7794b8-txt.png' };

const placeholders = { pdf, word, excel, powerpoint, archive, rtf, txt };

export function documentPlaceholder(url: string) {
  const extension = documentExtension(url);
  if (extension === 'pdf') return placeholders.pdf;
  if (['doc', 'docx'].includes(extension)) return placeholders.word;
  if (['xls', 'xlsx'].includes(extension)) return placeholders.excel;
  if (['ppt', 'pptx', 'pps', 'ppsx'].includes(extension)) return placeholders.powerpoint;
  if (extension === 'rtf') return placeholders.rtf;
  if (extension === 'txt') return placeholders.txt;
  if (archiveExtensions.includes(extension)) return placeholders.archive;
  return null;
}
