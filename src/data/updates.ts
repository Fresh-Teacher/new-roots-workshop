import classPage from '@/data/catalog/pages/legacy/c14518ec4af53c3a.json';
import classStyles from '@/data/legacy/fragments/767736684ff63af8.json';
import type { LegacyPageData } from '@/lib/legacy-pages';

export const updateCategories = [
  { label: 'Exams', animation: 'flipInY' },
  { label: 'Holiday Packages', animation: 'bounceInDown' },
  { label: 'Lesson Notes', animation: 'flipInX' },
  { label: 'Schemes of Work', animation: 'lightSpeedIn' },
] as const;

export const updatesPage: LegacyPageData = {
  title: 'New Updates | Fresh Teacher',
  description: 'New additions to Fresh Teacher’s library: exams, holiday packages, lesson notes and schemes of work.',
  template: 'updates-menu', styles: 'updates-styles', items: [], mode: 'static', missingData: null,
  links: classPage.links,
};

export const updatesFragments = {
  'updates-styles': classStyles,
  'updates-menu': `<div id="wrapper"><div id="page-wrapper"><div class="container-fluid"><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><div class="panel"><div class="necta11"><h1 class="box-title">NEW UPDATES</h1><hr class="style1"/></div><div class="necta1">${updateCategories.map(category => `<div class="btn-group m-r-10"><button class="btn btn-info dropdown-toggle waves-effect waves-light" data-toggle="dropdown" type="button"><b>${category.label.toUpperCase()}</b> <span aria-hidden="true" class="fa fa-check"></span> | <span class="caret"></span></button><ul class="dropdown-menu animated ${category.animation}" role="menu"><li><span class="updates-empty" role="status">No newly added items yet.</span></li></ul></div>`).join('')}</div></div></div></div></div></div></div>`,
};