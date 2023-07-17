import { useState } from "react"
import Form from "./Form"
import Step from "./Step";

function List() {

    const [steps, setSteps] = useState([]);

    const addStep = step => {
        let newSteps = [step, ...steps];

        if (steps.length === 0) {
            setSteps(newSteps);
        }

        if (steps.length >= 1) {

            for (let i = 0; i < steps.length; i++) {

                if (steps[i].date === step.date) {

                    step.number = String(Number(steps[i].number) + Number(step.number));

                    const remove = [...steps].filter(item => item.date !== step.date);

                    let newStepsSum = [step, ...remove]
                    newSteps = newStepsSum;
                }


                let dateArray = newSteps.map(item => {
                    item.date = item.date.split('.');
                    return item
                });

                dateArray = dateArray.sort((a, b) => {
                    return b.date[2] - a.date[2] || b.date[1] - a.date[1] || b.date[0] - a.date[0];
                });

                dateArray.map(item => {
                    item.date = item.date.join('.');
                    return item
                });

                setSteps(dateArray);

            }

        }
    };


    const removeStep = id => {
        const removeArr = [...steps].filter(step => step.id !== id);

        setSteps(removeArr);
    };

    return (
        <>
            <Form onSubmit={addStep} />
            <div className="table">
                <div className="titles">
                    <div className="title"><span>Дата (ДД.ММ.ГГ)</span></div>
                    <div className="title"><span>Пройдено км</span></div>
                    <div className="title"><span>Действия</span></div>
                </div>
                <div className="list">
                    <Step
                        steps={steps}
                        removeStep={removeStep}
                    />
                </div>
            </div>
        </>
    )
}

export default List