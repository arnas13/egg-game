

function Shop({eggs, buy}) {
    
    return (
        <div className="container">
            <div className="slotWrapper">
                <div className="slot" onClick={buy}>
                    <i className="fas fa-egg"></i>
                </div>
                <div className="text-center">
                    Amount: {eggs}
                </div>   
                <div className="text-center">
                    Price: 5 $
                </div>            
            </div>

        </div>
    )
}

export default Shop