import React,{useEffect} from 'react'
import ArduinoItem from './ArduinoItem'
import Loader from '../Loader'

function ArduinoList({onLoadingDone}){

    const [arduinoData,setTh]=React.useState([
        {'draftdate':'29.09.2020 11:33:45','temperature':17.4,'humidity':65.5},
        {'draftdate':'29.09.2020 11:33:45','temperature':17.5,'humidity':65.6},
        {'draftdate':'29.09.2020 11:33:45','temperature':17.4,'humidity':65.8},
        {'draftdate':'29.09.2020 11:33:45','temperature':17.4,'humidity':66.7},
        {'draftdate':'29.09.2020 11:33:45','temperature':17.4,'humidity':75.6},
        {'draftdate':'29.09.2020 11:33:45','temperature':17.4,'humidity':85.5},
        {'draftdate':'29.09.2020 11:33:45','temperature':17.4,'humidity':55.1},
    ])

    //const[arduino_loading,setArduinoLoading]=React.useState(true)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then((response) => response.json())
            .then(arduinoData =>{
                setTimeout(()=>{
                    setTh(arduinoData)
                    //setArduinoLoading(false)
                    onLoadingDone(false);
                }, 3000)
                
            })
      },[])



    
    return (
          <div className='arduino_list'>
              {arduinoData.map((data,index) => {
                  return <ArduinoItem  data={data} key={index}/>
              })}

          </div>  
    )
}

export default ArduinoList