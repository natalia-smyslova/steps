import { RiCloseCircleLine } from 'react-icons/ri'

function Step({ steps, removeStep}) {

    return steps.map((step, index) =>
        <div className="steps-row" key={index}>
            <div className="step_date">{step.date} </div>
            <div className="step_number">
                <span>{step.number}</span>
            </div>
            <div className="icons">
                <RiCloseCircleLine onClick={() => removeStep(step.id)} className="delete-icon" />
            </div>
        </div>
    )

}

export default Step