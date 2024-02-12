export default {
  translations: {
    permission: 'translation.translations.manage',
    activated: true,
    authenticated: true,
    path: '/translations/index',
    name: 'qtranslation.admin.translations',
    crud: import('modules/qtranslation/_crud/translations'),
    page: () => import('modules/qcrud/_pages/admin/crudPage'),
    layout: () => import('layouts/master.vue'),
    title: 'translation.cms.sidebar.adminTranslations',
    icon: 'fa-light fa-language',
    subHeader: {
      refresh: true,
    }
  }
}
