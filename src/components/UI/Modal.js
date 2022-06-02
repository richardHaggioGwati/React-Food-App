import { Fragment } from 'react'
import ReactDOM  from 'react-dom'
import classes from './Modal.module.css'

const Backdrop = props => {
    return <div onClick={props.onClick} className={classes.backdrop}></div>
}

const Overlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
}

const Modal = props => {
    return <Fragment>
        { ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, document.getElementById('overlay')) }
        {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, document.getElementById('overlay')) }
    </Fragment>
}

export default Modal