export const questions = [
    {
        q: 'This hook runs at the very initialization of your component:',
        answers: [
            {
                text: 'beforeCreate',
                is_correct: true
            },
            {
                text: 'beforeMount',
                is_correct: false
            },
            {
                text: 'beforeUpdate',
                is_correct: false
            },
            {
                text: 'beforeDestroy',
                is_correct: false
            }
        ]
    },
    {
        q: 'Why should not use if and for directives together on the same element?',
        answers: [
            {
                text: 'I can use them together',
                is_correct: false
            },
            {
                text: 'v-if directive has a higher priority than v-for',
                is_correct: false
            },
            {
                text: 'v-for directive has a higher priority than v-if',
                is_correct: true
            },
            {
                text: 'v-if is incompatible with the div element',
                is_correct: false
            }
        ]
    },
    {
        q: 'Vue cannot detect changes for the array in ___',
        answers: [
            {
                text: 'vm.todos.push({ message: "Baz" }) // When you push an item',
                is_correct: false
            },
            {
                text: 'vm.todos[indexOfTodo] = newTodo // When you directly set an item with the index',
                is_correct: true
            },
            {
                text: 'both variants',
                is_correct: false
            }
        ]
    },
];
export const results = [
    {
        min: 0,
        max: 2,
        title: { en: "Try again!", fr: "Versuchen Sie es nochmal!", de: "Réessayer!" },
        desc: { en: "Do a little more studying and you may succeed!", fr: "Fais un peu plus d'études et tu réussiras peut-être !", de: "Studieren Sie noch ein wenig und Sie können erfolgreich sein!" }
    },
    {
        min: 3,
        max: 3,
        title: { en: "Wow, you are a Vue expert!", fr: "Wow, vous êtes un expert de Vue !", de: "Wow, Sie sind ein Vue-Experte!" },
        desc: { en: "Studying has definitely paid off for you!", fr: "Étudier a définitivement payé pour vous!", de: "Das Studium hat sich für dich definitiv gelohnt!" }
    }
]