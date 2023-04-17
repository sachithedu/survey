export const json = {
    questions: [
      {
        name: "numQuestions",
        type: "text",
        title: "How many questions do you want?",
        inputType: "number",
        isRequired: true,
        validators: [
          {
            type: "numeric",
            minValue: 1,
            maxValue: 5,
          },
        ],
      },
      {
        name: "email",
        type: "text",
        title: "What is your email address?",
        isRequired: true,
        validators: [{ type: "email" }],
      },
    ],
  };
  