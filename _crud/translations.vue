<template></template>
<script>
export default {
  data() {
    return {
      crudId: this.$uid()
    }
  },
  computed: {
    crudData() {
      return {
        crudId: this.crudId,
        entityName: config("main.qtranslation.entityNames.translation"),
        apiRoute: 'apiRoutes.qtranslation.translations',
        permission: 'translation.translations',
        extraFormFields: 'translation.crud-fields.translations',
        create: {
          title: this.$tr('translation.cms.newTranslation'),
        },
        read: {
          columns: [
            {name: 'id', label: 'ID', field: 'id', align: 'left'},
            {name: 'value', label: this.$tr('isite.cms.form.description'), field: 'value', align: 'left'},
            {name: 'actions', label: this.$tr('isite.cms.form.actions'), align: 'left'},
          ],
          requestParams: {include: 'parent'}
        },
        update: {
          title: this.$tr('translation.cms.updateTranslation'),
        },
        delete: true,
        formLeft: {
          id: {value: ''},
          userId: {value: this.$store.state.quserAuth.userId},
          key: {
            value: null,
            type: 'input',
            props: {
              label: `ID`,
              rules: [
                val => !!val || this.$tr('isite.cms.message.fieldRequired')
              ],
            },
          },
          value: {
            value: null,
            type: 'input',
            isTranslatable: true,
            props: {
              label: `${this.$tr('isite.cms.form.description')}*`,
              type: 'textarea',
              rows: "3",
              rules: [
                val => !!val || this.$tr('isite.cms.message.fieldRequired')
              ],
            }
          }
        }
      }
    },
    //Crud info
    crudInfo() {
      return this.$store.state.qcrudComponent.component[this.crudId] || {}
    }
  },
}
</script>
