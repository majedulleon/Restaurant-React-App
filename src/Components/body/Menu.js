import React, { Component } from "react";
import DISHES from "../../data/dishes.js";
import MenuItem from "./MenuItem.js";
import DishDetail from "./DishDetail";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from "reactstrap";

class Menu extends Component {
    state = {
        dishes: DISHES,
        selectedDish: null,
        modalOpen: false
    }

    onDishSelect = (dish) => {
        console.log(dish);
        this.setState({ selectedDish: dish });
        this.toggleModal();
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }
    render() {

        let menu = this.state.dishes.map((item) => {
            return (
                <MenuItem dish={item} key={item.id} onDishSelect={() => this.onDishSelect(item)} />
            );
        });

        let dishDetail = null;
        if (this.state.selectedDish != null) {
            dishDetail = <DishDetail dish={this.state.selectedDish} />
        }
        return (
            <div className="container">
                <div className="row">
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
                        <ModalBody>
                            {dishDetail}
                        </ModalBody>
                    </Modal>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggleModal}>
                            Close
                        </Button>
                    </ModalFooter>
                </div>

            </div>
        );
    }
}

export default Menu; 