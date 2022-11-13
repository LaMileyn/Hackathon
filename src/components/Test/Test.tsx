import React, {FC, useState} from 'react';
import styles from './Test.module.scss';

interface IProps {
}

interface IAnswer {
    id: number,
    text: string
}
interface GivenAnswers {
    [key : number] : number
}
interface IQuestion {
    id: number,
    quest: string,
    answers: IAnswer[]
}
const questions: IQuestion[] = [
    {
        id : 1,
        quest: "Как насчет тебя по акциям?", answers: [
            { id : 1, text : "Я так не думаю"},
            { id : 2, text : "Я думаю"},
            { id : 3, text : "Я маю"},
            { id : 4, text : "Я Было Бы очень здоро!"},
        ]
    },
    {
        id : 2,
        quest: "Как  по акциям?", answers: [
            { id : 1, text : "Я так не думаю"},
            { id : 2, text : "Я думаю"},
            { id : 3, text : "Нет!"},
            { id : 4, text : "Я Было Бы очень здоро!"},
        ]
    },
    {
        id : 3,
        quest: "Тебя по акциям?", answers: [
            { id : 1, text : "Я так не думаю"},
            { id : 2, text : "Я думаю"},
            { id : 3, text : "Я маю"},
            { id : 4, text : "Я Было Бы очень здоро!"},
        ]
    },
    {
        id : 4,
        quest: "Как насчет?", answers: [
            { id : 1, text : "Я так не думаю"},
            { id : 2, text : "Я думаю"},
            { id : 3, text : "Я маю"},
            { id : 4, text : "Я Было Бы очень здоро!"},
        ]
    }
]

const Test: FC<IProps> = (props) => {

    const [currentQuestionIndex,setCurrentQuestionIndex] = useState<number>(0)
    const [givenAnswers,setGivenAnswers] = useState<GivenAnswers>({})


    const handleNextQuestion = (quest : number, ans : number) => {
        console.log("hello")
        if (currentQuestionIndex + 1 === questions.length){
            setGivenAnswers( prev => ( { ...prev, [quest] : ans}))
            console.log(givenAnswers)
        }else{
            setGivenAnswers( prev => ( { ...prev, [quest] : ans}))
            setCurrentQuestionIndex( prev => prev + 1);

        }
    }
    return (
        <div className={styles.test}>
            <div className={styles.header}>
                { currentQuestionIndex + 1 !== 1 && <button onClick={() => setCurrentQuestionIndex(prev => prev - 1)}>Назад</button>}
                <span>Вопрос {currentQuestionIndex + 1} из {questions.length}</span>
            </div>
            <div className={styles.question}>{questions[currentQuestionIndex].quest}</div>
            <div className={styles.answers}>
                {
                    questions[currentQuestionIndex].answers.map( (answer,aswIndex) => {
                        return <button key={answer.id} className={styles.answer} onClick={ () => handleNextQuestion(questions[currentQuestionIndex].id,answer.id)}>
                            {answer.text}
                        </button>
                    })
                }
            </div>


        </div>
    );
}

export default Test;