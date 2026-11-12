/** Reuse audited class links without changing the imported catalog fragments. */
export function addClassResourceMenus(source: string): string {
  const groups = source.match(/<div class="btn-group[^>]*>.*?<\/ul>\s*<\/div>/gs) ?? [];
  const papers = groups.find(group => /<b>PAST PAPERS<\/b>/i.test(group));
  const originalHoliday = groups.find(group => /<b>HOLIDAY PACKAGES<\/b>/i.test(group));
  if (!papers || !originalHoliday) return source;
  const links = Array.from(papers.matchAll(/<a href="([^"]+)">([^<]+)<\/a>/g), match => ({ href: match[1] ?? '', label: match[2] ?? '' }));
  const holidays = links.filter(link => /packages/i.test(link.label));
  const exams = links.filter(link => !/packages/i.test(link.label));
  const menu = (label: string, animation: string, items: typeof links) => `<div class="btn-group m-r-10"><button class="btn btn-info dropdown-toggle waves-effect waves-light" data-toggle="dropdown" type="button"><b>${label}</b> <span aria-hidden="true" class="fa fa-check"></span> | <span class="caret"></span></button><ul class="dropdown-menu animated ${animation}" role="menu">${items.length ? items.map(item => `<li><a href="${item.href}">${item.label}</a></li>`).join('') : '<li><span class="class-resource-empty" role="status">No holiday packages listed yet.</span></li>'}</ul></div>`;
  const holidayAnimation = originalHoliday.match(/dropdown-menu animated ([\w]+)/)?.[1] ?? 'slideInUp';
  // More Documents keeps the former holiday control and its original animation.
  return source.replace(originalHoliday, `${originalHoliday.replace(/HOLIDAY PACKAGES/g, 'MORE DOCUMENTS')}${menu('EXAMINATIONS', 'bounceInDown', exams)}${menu('HOLIDAY PACKAGES', holidayAnimation, holidays)}`);
}