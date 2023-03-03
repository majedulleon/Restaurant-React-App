import React, { Component } from "react";
import MenuItem from "./MenuItem.js";
import DishDetail from "./DishDetail";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from "reactstrap";
import { connect } from "react-redux";
import * as actionType from '../../redux/actionTypes';

let mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addComment: (dishId, rating, author, comment) => dispatch({
            type: actionType.ADD_COMMENT,
            payload: {
                dishId: dishId,
                author: author,
                rating: rating,
                comment: comment
            }
        })
    }
}

class Menu extends Component {
    state = {
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

        document.title = "MENU";

        let menu = this.props.dishes.map((item) => {
            return (
                <MenuItem dish={item} key={item.id} onDishSelect={() => this.onDishSelect(item)} />
            );
        });

        let dishDetail = null;
        if (this.state.selectedDish != null) {
            let comments = this.props.comments.filter(comment => {
                return comment.dishId === this.state.selectedDish.id;
            })
            dishDetail = <DishDetail
                dish={this.state.selectedDish}
                comments={comments}
                addComment={this.props.addComment} />
        }
        return (
            <div className="container">
                <div className="row">
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen}>
                        <ModalBody>
                            {dishDetail}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggleModal}>
                                Close
                            </Button>
                        </ModalFooter>
                    </Modal>

                </div>

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu); 