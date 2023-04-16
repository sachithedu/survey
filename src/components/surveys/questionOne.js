export const json = {
    questions: [{
        name: "name",
        type: "text",
        title: "How many questions do you want?",
        inputType: "number",
        isRequired: true,
        validators: [{
            type: "numeric",
            minValue: 1,
            maxValue: 5,
        },
        ], 
        value: numQuestions,
    }, {
        name: "name",
        type: "text",
        title: "What is your email address?",
        isRequired: true,
        validators: [{type: "email"}]
    }]
};

