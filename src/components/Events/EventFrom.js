import React, { useState }from 'react'
import { InputField } from '../../ui/InputField'

export const EventFrom = () => {
    const [eventDatas, setEventDatas] = useState({});
    const [value, setInputValue] = useState({})

    const handleChange = e => {
        e.persist()
        setInputValue({
            ...value,
            [e.target.name]: e.target.value
        });
        setEventDatas({
            ...eventDatas,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form>
            <div className="form-group">
                <InputField
                    label="Event Name"
                    name="name"
                    value={value.name}
                    onChange={handleChange}
                    placeholder="your event name"
                    className="form-control"
                />
            </div>
        </form>
    )
}
