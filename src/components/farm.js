
import Evolve from "./evolve"

function Farm({eggs, space, buySpace, evolve, sell}) {
    
    return (
        <div className="container">

            {eggs.map((egg, index) => <Evolve evolve={evolve} 
                                              sell={sell}
                                              key={index} 
                                              egg={egg} 
                                              index={index}/>)}
            
            {eggs.length < space ? 
                <div className="slotWrapper">
                    <div className="slot">
                    </div>    
                    <div className="text-center">
                        Empty
                    </div>        
                </div>
            : null }

            
            
            <div className="slotWrapper">
                <div className="slot" onClick={buySpace}>
                    <i className="fas fa-plus"></i>
                </div>
                <div className="text-center">
                    Buy space
                </div> 
                <div className="text-center">
                Price: 10 $
            </div>            
            </div>
            
            
        </div>
    )
}

export default Farm