import BaseApplicationGenerator from 'generator-jhipster/generators/base-application';

export default class extends BaseApplicationGenerator {
  constructor(args, opts, features) {
    super(args, opts, {
      ...features,

      sbsBlueprint: true,
    });
  }

  get [BaseApplicationGenerator.INITIALIZING]() {
    return this.asInitializingTaskGroup({
      async initializingTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.PROMPTING]() {
    return this.asPromptingTaskGroup({
      async promptingTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.CONFIGURING]() {
    return this.asConfiguringTaskGroup({
      async configuringTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.COMPOSING]() {
    return this.asComposingTaskGroup({
      async composingTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.COMPOSING_COMPONENT]() {
    return this.asComposingComponentTaskGroup({
      async composingComponentTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.LOADING]() {
    return this.asLoadingTaskGroup({
      async loadingTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.PREPARING]() {
    return this.asPreparingTaskGroup({
      async preparingTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.POST_PREPARING]() {
    return this.asPostPreparingTaskGroup({
      async postPreparingTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.DEFAULT]() {
    return this.asDefaultTaskGroup({
      async defaultTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.WRITING]() {
    return this.asWritingTaskGroup({
      async writingTemplateTask({ application }) {
        await this.writeFiles({
          sections: {
            files: [{ templates: ['template-file-client'] }],
          },
          context: application,
        });
      },
    });
  }

  get [BaseApplicationGenerator.MULTISTEP_TRANSFORM]() {
    return this.asMultistepTransformTaskGroup({
      async multistepTransformTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.POST_WRITING]() {
    return this.asPostWritingTaskGroup({
      async makeLogoPathRelative() {
        this.editFile('src/main/webapp/content/css/loading.css', { ignoreNonExisting: true }, content => {
          if (!content.includes("url('/content/images/logo-jhipster.png')")) {
            if (content.includes("url('../images/logo-jhipster.png')")) {
              this.log.info('[yellowbricks-client-relativepathresource] loading.css: logo path already relative, skipping');
            } else {
              this.log.warn(
                '[yellowbricks-client-relativepathresource] loading.css: expected logo URL not found — manual intervention needed',
              );
            }
            return content;
          }

          const updated = content.replace("url('/content/images/logo-jhipster.png')", "url('../images/logo-jhipster.png')");
          this.log.info('[yellowbricks-client-relativepathresource] loading.css: logo path made relative successfully');
          return updated;
        });
      },
    });
  }

  get [BaseApplicationGenerator.TRANSFORM]() {
    return this.asTransformTaskGroup({
      async transformTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.INSTALL]() {
    return this.asInstallTaskGroup({
      async installTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.POST_INSTALL]() {
    return this.asPostInstallTaskGroup({
      async postInstallTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.END]() {
    return this.asEndTaskGroup({
      async endTemplateTask() {},
    });
  }
}
