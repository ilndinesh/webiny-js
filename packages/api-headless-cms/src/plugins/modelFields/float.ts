import { CmsModelFieldToCommodoFieldPlugin } from "@webiny/api-headless-cms/types";
import { withFields, float } from "@webiny/commodo";
import { i18nField } from "./i18nFields";

const plugin: CmsModelFieldToCommodoFieldPlugin = {
    name: "cms-model-field-to-commodo-field-float",
    type: "cms-model-field-to-commodo-field",
    fieldType: "float",
    isSortable: true,
    dataModel({ model, field, validation, context }) {
        return withFields({
            [field.fieldId]: i18nField({
                field: float({ validation }),
                context
            })
        })(model);
    },
    searchModel({ model, field, validation }) {
        return withFields({
            [field.fieldId]: float({ validation })
        })(model);
    }
};

export default plugin;