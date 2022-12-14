import React, {Component} from "react";
import DISHES from "../../data/dishes.js";
import MenuItem from "./MenuItem.js";
import DishDetail from "./DishDetail";

class Menu extends Component {
    state = {
        dishes: DISHES,
        selectedDish: null
    }

    onDishSelect = (dish) => {
        console.log(dish);
        this.setState({selectedDish: dish});
    }


    render() {

        let menu = this.state.dishes.map((item) => {
            return (
                <MenuItem dish={item} key={item.id} onDishSelect={() => this.onDishSelect(item)}/>
            );
        });

        let dishDetail = null;
        if (this.state.selectedDish != null) {
            dishDetail = <DishDetail dish={this.state.selectedDish}/>
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {menu}
                    </div>
                    <div className="col-6">
                        {dishDetail}
                    </div>

                </div>

            </div>
        );
    }
}

export default Menu; 