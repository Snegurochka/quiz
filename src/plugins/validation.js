import { Field as veeField, Form as veeForm, defineRule, ErrorMessage, configure } from 'vee-validate';
import {
    required, min, max, alpha_spaces as alphaSpaces,
    email, min_value as minVal, max_value as maxVal,
    confirmed, not_one_of as excluded
} from '@vee-validate/rules';

export default {
    install(app) {
        app.component('veeForm', veeForm);
        app.component('veeField', veeField);
        app.component('ErrorMessage', ErrorMessage);

        defineRule('required', required);
        defineRule('tos', required);
        defineRule('min', min);
        defineRule('max', max);
        defineRule('alpha_spaces', alphaSpaces);
        defineRule('email', email);
        defineRule('min_value', minVal);
        defineRule('max_value', maxVal);
        defineRule('passwords_mismatch', confirmed);
        defineRule('excluded', excluded);
        defineRule('country_excluded', excluded);

        configure({
            generateMessage: (ctx) => {
                const messages = {
                    required: `The field ${ctx.field} is required.`,
                    min: `The field ${ctx.field} is too short.`,
                    max: `The field ${ctx.field} is too long.`,
                    email: `The field ${ctx.field} must be a valid email.`,
                }

                return messages[ctx.rule.name] ? messages[ctx.rule.name] : `The field ${ctx.field} is invalid.`;
            }
        })
    }
}