import { Field as veeField, Form as veeForm, defineRule, ErrorMessage, configure } from 'vee-validate';
import { required, min, max, email } from '@vee-validate/rules';

export default {
    install(app) {
        app.component('veeForm', veeForm);
        app.component('veeField', veeField);
        app.component('ErrorMessage', ErrorMessage);

        defineRule('required', required);
        defineRule('min', min);
        defineRule('max', max);
        defineRule('email', email);

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