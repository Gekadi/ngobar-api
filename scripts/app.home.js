import { getQuestionById} from './api.js'
import {generateRandomNumber, generateElement } from "./utils/index.js";

const question = document.getElementById("question");
const questionCategory = document.getElementById("question_category");
const buttonSubmit = document.getElementById("button_submit");

document.addEventListener("DOMContentLoaded" , () => {

    question.innerText = "...."
    questionCategory.innerText = ("tidak ada kategori");

    // generate angka random dari funsi generateRandomNumber

    buttonSubmit.addEventListener('click', async () => {
    
        const generateNumber = generateRandomNumber(1, 20);

        console.log("hehe", generateNumber);

        try {
            const response = await getQuestionById({ id: generateNumber });

            if (!response) return;
            
            question.innerText = response.jokes || "tunggu dulu...";
            const span = generateElement({
                tag : 'span',
                className : 'question_category',
                value: response.answer
            });

            question.appendChild(span);
            questionCategory.innerText = response.category || "tidak ada kata"


        console.log("{response}");
        } catch (eror){
            console.eror("eror nih :" , {eror});
        }
    });
});

// console.log ("HASILNYA NIH : ", getQuestionById({ id : 16 }));

