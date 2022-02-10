import React from "react";
import { connect } from "react-redux";
import ReactDOM from 'react-dom';

class MenuComponent extends React.Component{

    renderMenu = (burgerReducer)=>{
        let menuListItem = []
        for (const key in burgerReducer.menu) {
            menuListItem.push((
                <tr key={key}>
                    <td>{key}</td>
                    <td><button onClick={()=>{this.props.submitDispatch("DECREASE",key)}} className="btn btn-left">-</button></td>
                    <td><button onClick={()=>{this.props.submitDispatch("INCREASE",key)}} className="btn btn-right">+</button></td>
                    <td>{burgerReducer.menu[key]}</td>
                </tr>
            ))
        }
        ReactDOM.render(
            menuListItem,
            document.getElementById('menu-body-content')
        );
    }

    componentDidMount(){
        this.renderMenu(this.props.burgerReducer)
    }

    render(){
        return(
            <div className="menu">
                <div className="menu-header">
                    Menu
                </div>
                <div className="menu-body">
                    <table>
                        <thead>
                           <tr>
                                <th>Thức ăn</th>
                                <th></th>
                                <th></th>
                                <th>Giá</th>
                           </tr>
                        </thead>
                        <tbody id="menu-body-content">
                           {/* <tr>
                                <td>Cheese</td>
                                <td><button className="btn btn-left">-</button></td>
                                <td><button className="btn btn-right">+</button></td>
                                <td>10</td>
                           </tr> */}
                        </tbody>
                    </table>
                </div>
                <div className="menu-footer">
                    <div>Tổng tiền: {this.props.burgerReducer.total}</div>
                    <div><button>Thanh Toán</button></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {burgerReducer : state.burgerReducer}
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitDispatch: (type,key)=>{
            dispatch({
                type:type,
                payload:key
            })
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(MenuComponent)
