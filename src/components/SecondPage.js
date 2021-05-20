import React from "react";


const SecondPage = (props) => {

    const [currentTime, setCurrentTime] = React.useState(new Intl.DateTimeFormat('en-GB', {
            hour: 'numeric', minute: 'numeric', second: 'numeric',
        }).format(Date.now()))

    React.useEffect(() => {

        const updateTime = () => {
            setCurrentTime(new Intl.DateTimeFormat('en-GB', {
                hour: 'numeric', minute: 'numeric', second: 'numeric',
            }).format(Date.now()))
        }

        if (!props.currentPage) {
            updateTime()
            setTimeout(() => {
                updateTime()
            }, 1000)
        }

    })

    return (
        <div className='second-page'>
            <div className='current-time'> {currentTime} </div>
        </div>
    )
}

export default SecondPage