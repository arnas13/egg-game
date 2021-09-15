import {useState, useEffect} from 'react'

function Evolve({egg, index, evolve, sell}) {
    const [progress, setProgress] = useState(10)
    const style = {background: `linear-gradient(0deg, rgba(145,213,101,1) ${progress}%, rgba(177, 175, 175, 1) ${progress}%)`}



    useEffect(() => {
        const time = egg.stage < 4 ? 50 : 200
        if(progress === 100) {
            setProgress(0)
            evolve(index)
        }

        let intv = setTimeout(() => {
                setProgress(progress+1)
            }, time);

        return () => clearTimeout(intv)  
        
    }, [progress])

    let icon
    if(egg.stage === 1) {
        icon = <i className="fas fa-egg"></i>
    }
    if(egg.stage === 2) {
        icon = <i className="fas fa-feather"></i>
    }
    if(egg.stage === 3) {
        icon = <i className="fas fa-crow"></i>
    }
    if(egg.stage === 4) {
        icon = <i className="fas fa-dove"></i>
    }
    
    return (
        <div className="slotWrapper">
            <div className="slot" onClick={() => sell(index)} style={style} >
                {icon}
            </div>
            <div className="text-center">
                Stage: {egg.stage}
            </div>   
            <div className="text-center">
                Price: {egg.price} $
            </div>  
            <div className="text-center">
                Weight: {egg.weight} kg
            </div>           
        </div>
    )
}

export default Evolve