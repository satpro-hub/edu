import React from 'react'

function ArduinoItem({data}){
        return (
            <div className='arduino_item'>
                <span className='draftdate'>#{data.id}&nbsp;[{data.draftdate}]</span>
                <span className='Temp'>Temp: {data.temperature}</span>
                <span className='humidity'>Hum:{data.humidity}% </span>
            </div>
        )
}

export default ArduinoItem