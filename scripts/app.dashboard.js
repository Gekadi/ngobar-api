// == TEMPLATE QUIZ ITEM ==




import { getQuestions, createQuestion } from './api.js';

import { generateQuizItem } from './utils/index.js';

const quizContent = document.getElementById("quiz-content");


document.addEventListener("DOMContentLoaded", () =>  {
    async function handLeAllQuestion() {
        try {
            const questions = await getQuestions();

            // kalo tidak ada data jangan kirim apapun
            if (!questions) return;

            quizContent.innerHTML = questions.map(
                (question) => {
                    return generateQuizItem({
                        id: question.id,
                        question: question.jokes,
                        answer: question.answer,
                        category: question.category,
                    });
                }
            ).join("")

            quizContent.innerHTML = questions.map( (question) => {
                return generateQuizItem({
                    id: question.id,
                    question: question.jokes,
                    answer: question.answer,
                    category: question.category,
                });
            })

            // jika ada datanya maka lanjt
            console.log({questions});

        } catch (error) {
            console.error("eror cuy : ", {
                error,
            });
        }
    }

    handLeAllQuestion()
})