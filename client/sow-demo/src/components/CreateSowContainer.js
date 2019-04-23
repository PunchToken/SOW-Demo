import { connect } from "react-redux";
import { CreateSowPage } from "./CreateSowPage";



import { currentSowSelector } from "../redux/selectors";

const mapStateToProps = () => {

};

const mapDispatchToProps = dispatch => ({

});


export const CreateSowContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateSowPage);