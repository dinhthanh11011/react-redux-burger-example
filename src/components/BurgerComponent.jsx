import React from "react";
import { connect } from "react-redux";

class BurgerComponent extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            burger : props.burgerReducer.burger
        }

        this.renderItem = (element,key)=>{
            let itemList = []
            for (let i = 0; i < this.props.burgerReducer.burger[key]; i++) {
                let tag = ""
                element === "burger-salad" ? tag = "burger-salad-item"
                : element === "burger-cheese" ? tag = "burger-cheese-item" : tag = "burger-beef-item"
                itemList.push(
                    <div key={key+i} className={tag}></div>
                )
            }
            return itemList
        }
    }

  
    
    
    render(){
        return(
            <div className="burger">
                <div className="burger-top"></div>
                <div className="burger-salad">
                    {
                        this.props.burgerReducer.burger.salad ? this.renderItem("burger-salad","salad") : "" 
                    }
                    {/* <div className="burger-salad-item"></div> */}
                </div>
                <div className="burger-cheese">
                    {
                        this.props.burgerReducer.burger.salad ? this.renderItem("burger-cheese","cheese") : "" 
                    }
                    {/* <div className="burger-cheese-item"></div> */}
                </div>
                <div className="burger-beef">
                    {
                        this.props.burgerReducer.burger.salad ? this.renderItem("burger-beef","beef") : "" 
                    }
                    {/* <div className="burger-beef-item"></div> */}
                </div>
                <div className="burger-bottom"></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {burgerReducer : state.burgerReducer}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}


export default connect(mapStateToProps,mapDispatchToProps)(BurgerComponent)